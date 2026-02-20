// Features.jsx
import React from "react";
import { FaMugHot, FaAward, FaSeedling, FaCoffee } from "react-icons/fa";

const Features = () => {
  return (
    <section className="relative py-16 bg-linear-to-r from-amber-100 to-orange-50">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/coffee-beans.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-4xl text-brown-800">
              <FaMugHot />
            </div>
            <h3 className="text-xl font-bold text-brown-900 mb-2">
              Awesome Aroma
            </h3>
            <p className="text-gray-600 text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-4xl text-brown-800">
              <FaAward />
            </div>
            <h3 className="text-xl font-bold text-brown-900 mb-2">
              High Quality
            </h3>
            <p className="text-gray-600 text-sm">
              We serve the coffee to you maintaining the best quality
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-4xl text-brown-800">
              <FaSeedling />
            </div>
            <h3 className="text-xl font-bold text-brown-900 mb-2">
              Pure Grades
            </h3>
            <p className="text-gray-600 text-sm">
              The coffee is made of green coffee beans which you will love
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-4xl text-brown-800">
              <FaCoffee />
            </div>
            <h3 className="text-xl font-bold text-brown-900 mb-2">
              Proper Roasting
            </h3>
            <p className="text-gray-600 text-sm">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
