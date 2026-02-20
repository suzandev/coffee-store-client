// src/components/CoffeeGallery.jsx
import { FaInstagram } from "react-icons/fa";

const coffeeImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Espresso",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cappuccino",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Latte",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506372023823-741c83b836fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Macchiato",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Coffee Beans",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Smiley Coffee",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1615486780246-76e6bb33e8b5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Latte Art",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1672933647933-42628e319667?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Latte Art 2",
  },
];

export default function CoffeeGallery() {
  return (
    <section className="py-10 px-4 bg-base-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Follow Us Now</h2>
        <p className="flex items-center justify-center gap-2 text-primary mt-2">
          <FaInstagram className="text-pink-500" /> Follow on Instagram
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000">
        {coffeeImages.map((coffee) => (
          <div
            key={coffee.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src={coffee.src}
                alt={coffee.alt}
                className="w-full h-40 md:h-56 object-cover rounded-md"
              />
            </figure>
            <div className="card-body p-2 text-center">
              <p className="text-sm font-medium">{coffee.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
