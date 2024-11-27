const HeroSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Discover Your Next Favorite Product
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Shop from a wide range of categories, with exciting deals and
            discounts made just for you.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500">
              Shop Now
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-400">
              Explore Categories
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="/hero.png"
            alt="Ecommerce Hero"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
