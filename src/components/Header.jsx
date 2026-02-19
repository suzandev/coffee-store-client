const Header = () => {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 transition-all duration-700 group-hover:bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex items-center min-h-[80vh]">
        <div className="max-w-xl ml-auto text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight transition-all duration-500 group-hover:-translate-y-1.25">
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="text-sm md:text-base text-gray-200">
            It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button className="btn bg-[#D2B48C] hover:bg-[#c09a6b] border-none text-black font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
