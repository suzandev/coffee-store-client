import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../assets/coffeeLogin.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // firebase sign in send
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //update last sign in time in backend
        const singInfo = {
          email,
          lastSignInTime: userCredential.user.metadata.lastSignInTime,
        };
        console.log("User signed in successfully:", user);
        fetch("https://coffee-store-server-lv1l.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(singInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User sign in time updated:", data);
          })
          .catch((error) => {
            console.error("Error updating sign in time:", error);
          });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  // login with google
  const handleGoogleSignIn = () => {
    // Implement Google sign-in functionality here
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google sign-in successful:", user);
        // You can also save the user info to your backend if needed
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div
      className=" flex items-center justify-center bg-[#F3EFEA] py-10 px-4"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ">
        {/* LEFT SIDE - FORM */}

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] mb-2">
              Welcome Back ☕
            </h2>
            <p className="text-gray-500">
              Sign in to continue to your coffee dashboard
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-semibold text-[#4B2E2B]">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-3 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-semibold text-[#4B2E2B]">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-3 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  required
                />
              </div>

              {/* Forget Password */}
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#6F4E37] hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn w-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-white border-none text-lg shadow-md transition duration-300">
              Sign In
            </button>

            {/* Google Login */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
              <FcGoogle size={22} />
              Continue with Google
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#6F4E37] font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE - COFFEE THEME */}
        <div
          className="hidden lg:flex items-center justify-center relative p-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${loginImg})` }}>
          {/* Decorative Circle */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          {/* Center Content */}
          <div className="text-center text-white">
            {/* <FaCoffee className="text-6xl mb-6 mx-auto" /> */}

            <h3 className="text-2xl font-bold mb-2 text-amber-950">
              Coffee Store
            </h3>
            <p className="opacity-80 max-w-xs ">
              Manage your coffee collection and enjoy the aroma of success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
