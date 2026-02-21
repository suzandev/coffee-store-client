import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initializeUsers = useLoaderData();
  const [users, setUsers] = useState(initializeUsers);

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log("Delete user with ID:", id);

    // Example delete request to backend and update UI
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
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "The user has been deleted.",
                icon: "success",
              });
              // remove the user from the UI
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      } else {
        Swal.fire("Cancelled", "The user is safe :)", "info");
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th> NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>Purple</td>
              <th className="flex gap-2 justify-end">
                <button className="btn btn-sm bg-[#D2B48C] hover:bg-[#c09a6b] text-white border-none">
                  <FaEye />
                </button>
                <button className="btn btn-sm btn-neutral text-white">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-sm btn-error text-white">
                  <FaTrash />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
