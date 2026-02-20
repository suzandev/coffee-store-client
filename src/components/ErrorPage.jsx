import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-[#4B2E2E] to-[#A67B5B] items-center justify-center px-5">
      <h1 className="text-9xl font-bold text-brown-700">404</h1>
      <h2 className="mt-4 text-lg md:text-2xl font-semibold text-brown-600">
        Oops! Coffee not found ☕
      </h2>
      <p className="mt-2 text-brown-500 max-w-md">
        Looks like the page you’re searching for spilled somewhere. Don’t worry,
        grab another cup and head back home.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg bg-linear-to-r from-[#4B2E2E] to-[#A67B5B] text-white font-semibold shadow-lg hover:from-[#3C2F2F] hover:to-[#8B5E3C] transition duration-300 ease-in-out">
        Back to Home
      </Link>
    </div>
  );
}
