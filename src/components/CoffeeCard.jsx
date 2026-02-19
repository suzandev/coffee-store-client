import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photo } = coffee;

  return (
    <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Coffee Image */}
      <div className="w-32 h-40 flex justify-center items-center">
        <img src={photo} alt={name} className="h-full object-contain" />
      </div>

      {/* Coffee Info */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <p className="text-sm">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-3">
        <button className="btn btn-sm bg-[#D2B48C] hover:bg-[#c09a6b] text-white border-none">
          <FaEye />
        </button>

        <button className="btn btn-sm btn-neutral text-white">
          <FaEdit />
        </button>

        <button className="btn btn-sm btn-error text-white">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
