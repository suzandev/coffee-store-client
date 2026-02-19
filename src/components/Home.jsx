import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h3>Welcome to the Coffee Store Home Page</h3>

      {/* Popular Products Section */}
      <div className="relative bg-[#F4F3F0] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 tracking-widest mb-2">
            --- Sip & Savor ---
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3C2A21]">
            Our Popular Products
          </h2>

          <Link to="/addCoffee">
            <button className="btn bg-[#D2B48C] hover:bg-[#c09a6b] text-white border-none mb-12">
              Add Coffee ☕
            </button>
          </Link>

          {/* Coffee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
