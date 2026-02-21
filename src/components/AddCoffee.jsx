import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // send newCoffee to db server
    fetch("https://coffee-store-server-ashy-alpha.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add coffee.");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl p-6 md:p-10">
        {/* Back Button */}
        <Link
          to="/"
          className="text-primary font-medium hover:underline inline-block mb-6">
          ← Back to home
        </Link>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Add New Coffee
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Chef */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter coffee quantity"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Supplier */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>

            {/* Taste */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="price of the coffee"
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Photo URL - Full Width */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-base font-semibold">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
