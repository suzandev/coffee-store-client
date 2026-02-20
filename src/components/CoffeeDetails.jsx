import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaCoffee } from "react-icons/fa";
import coffeeLogo from "../assets/coffeeLogo.webp";
import Navbar from "./Navbar";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <>
      <Navbar />
      <div
        className="bg-base-200 py-10 px-4 md:px-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto mb-6">
          <Link
            to="/"
            className="text-primary font-medium hover:underline mb-6 flex items-center gap-2">
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto">
          <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            {/* Image Section */}
            <figure className="lg:w-1/2 p-8 bg-[#F4F3F0] flex items-center justify-center">
              <img
                src={photo}
                alt={name}
                className="w-64 md:w-80 object-contain hover:scale-105 transition-transform duration-500"
              />
            </figure>

            {/* Details Section */}
            <div className="card-body lg:w-1/2 p-8 md:p-12">
              <h2 className="card-title text-3xl font-bold text-brown-800 mb-4 flex items-center gap-2">
                <img
                  src={coffeeLogo}
                  alt="Coffee Logo"
                  className="w-16 h-16 "
                />
                Niceties
              </h2>

              <div className="space-y-3 text-gray-700 text-lg">
                <p>
                  <span className="font-semibold text-black">Name:</span> {name}
                </p>
                <p>
                  <span className="font-semibold text-black">Quantity:</span>{" "}
                  {quantity}
                </p>
                <p>
                  <span className="font-semibold text-black">Supplier:</span>{" "}
                  {supplier}
                </p>
                <p>
                  <span className="font-semibold text-black">Taste:</span>{" "}
                  {taste}
                </p>
                <p>
                  <span className="font-semibold text-black">Category:</span>{" "}
                  {category}
                </p>
                <p>
                  <span className="font-semibold text-black">Details:</span>{" "}
                  {details}
                </p>
              </div>

              {/* Action Button */}
              <div className="card-actions justify-start md:justify-center lg:justify-start mt-6">
                <Link
                  to="/"
                  className="btn w-full md:w-48 bg-blue-800 hover:bg-blue-600 text-white border-none px-6">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
