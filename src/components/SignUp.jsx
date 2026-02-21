import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log("User Info from Context:", createUser); // Debugging line
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries(),
    );

    // your signup logic here

    createUser(email, password)
      .then((userCredential) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: userCredential.user.metadata.creationTime,
          lastSignInTime: userCredential.user.metadata.lastSignInTime,
        };

        console.log(userProfile, email, password);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Success!",
              text: "Your account has been created.",
              icon: "success",
              confirmButtonText: "OK",
            });

            console.log("User profile saved:", data);
          })
          .catch((error) => {
            console.error("Error saving user profile:", error);
          });
        const user = userCredential.user;
        console.log("User created successfully:", user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-200 to-gray-300 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-all duration-500">
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center text-white bg-linear-to-br from-indigo-600 to-purple-700 p-12 rounded-r-[120px] transition-all duration-500">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center mb-8 text-sm opacity-90">
            Start your coffee adventure
          </p>

          <Link to="/signin">
            <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300 font-semibold tracking-wide cursor-pointer">
              SIGN IN
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create Account
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition cursor-pointer">
              <FaGoogle />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition cursor-pointer">
              <FaGithub />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition cursor-pointer">
              <FaLinkedinIn />
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            or use your email for registration
          </p>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg cursor-pointer">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
