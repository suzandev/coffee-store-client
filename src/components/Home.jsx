// import CoffeeCard from "./CoffeeCard";
import Header from "./Header";
import Features from "./Features";
import CoffeeGallery from "./CoffeeGallery";
import Navbar from "./Navbar";

import CoffeeProducts from "./CoffeeProducts";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <CoffeeProducts />
      <CoffeeGallery />
    </div>
  );
};

export default Home;
