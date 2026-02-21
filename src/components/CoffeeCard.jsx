import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, photo } = coffee;

  const handleDelete = (_id) => {
    // Implement delete functionality here

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-lv1l.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // remove the coffee from the UI
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id,
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div
      className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
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
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-3">
        <Link to={`/coffee/${_id}`}>
          <button className="btn btn-sm bg-[#D2B48C] hover:bg-[#c09a6b] text-white border-none">
            <FaEye />
          </button>
        </Link>

        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-sm btn-neutral text-white">
            <FaEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error text-white">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
