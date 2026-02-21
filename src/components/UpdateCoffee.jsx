import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedCoffee = new FormData(form);
    const updatedCoffeeData = Object.fromEntries(updatedCoffee.entries());

    //send updated data to the db server

    fetch(`https://coffee-store-server-ashy-alpha.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully ☕",
            icon: "success",
            confirmButtonColor: "#6F4E37",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: "No Changes Detected",
            text: "No fields were updated. Please make changes before submitting.",
            icon: "info",
            confirmButtonColor: "#6F4E37",
          });
        }
      });
  };

  return (
    <div
      className="bg-base-200 py-10 px-4 md:px-8"
      data-aos="zoom-in-up"
      // data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      {/* Back Button */}
      <div className=" text-primary font-medium hover:underline max-w-5xl mx-auto mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-brown-700 hover:text-brown-900 font-semibold transition duration-300">
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-2xl rounded-2xl p-6 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-3">
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="form-control">
              <label className="label font-semibold">Name</label> <br />
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>

            {/* Quantity */}
            <div className="form-control">
              <label className="label font-semibold">Quantity</label> <br />
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>

            {/* Supplier */}
            <div className="form-control">
              <label className="label font-semibold">Supplier</label>
              <br />
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>

            {/* Taste */}
            <div className="form-control">
              <label className="label font-semibold">Taste</label> <br />
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <br />
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label font-semibold">Details</label> <br />
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-control mt-6">
            <label className="label font-semibold">Photo URL</label> <br />
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-brown-600"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="btn w-full bg-blue-800 hover:bg-blue-600 text-white border-none md:text-lg">
              <FaSave className="mr-2" />
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
