// import { Link } from "react-router-dom";

// import Logo from "../assets/coffeeLogo.webp";

// export default function Navbar() {
//   return (
//     <div className="navbar bg-[#331A15] text-white shadow-lg px-4 md:px-8 flex items-center justify-center">
//       <Link to="/" className="flex items-center gap-2">
//         <img src={Logo} alt="Espresso Logo" className="w-10 h-10" />
//         <span className="font-bold text-lg md:text-2xl tracking-wide">
//           Coffee With Suzan
//         </span>
//       </Link>
//     </div>
//   );
// }

// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import Logo from "../assets/coffeeLogo.webp";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [user, loading] = useAuthState(auth);
  console.log("Navbar User from Firebase Auth:", user); // Debugging line

  const handleSignOut = () => {
    signOut(auth).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="navbar bg-[#331A15] text-white shadow-lg px-4 md:px-8 flex items-center justify-between">
      {/* Left side: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Espresso Logo" className="w-10 h-10" />
        <span className="font-bold text-lg md:text-2xl tracking-wide">
          Coffee With Suzan
        </span>
      </Link>

      {/* Right side: Auth buttons */}
      <div className="flex items-center gap-4">
        {loading ? (
          <span className="text-sm">Loading...</span>
        ) : user ? (
          <>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            )}
            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-white text-[#331A15] font-semibold hover:bg-gray-200">
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/signin"
            className="btn btn-sm bg-white text-[#331A15] font-semibold hover:bg-gray-200">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
