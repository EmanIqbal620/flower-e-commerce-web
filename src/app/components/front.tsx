export default function Home() {
  return (
    <div
      className="relative flex items-center justify-start h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(flower.png)" }}
    >
      

      {/* Text Content */}
      <div className="relative z-10 pl-16 text-left max-w-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Fresh Flowers
        </h1>
        <h2 className="text-2xl text-pink-500 font-semibold mb-4">
          Natural & Beautiful Flowers
        </h2>
        <p className="text-gray-700 mb-6">
      At Fresh Flower, we deliver more than flowers  we deliver emotions wrapped in beauty.
Our tulips are freshly grown and arranged with love to make every moment special.
Celebrate your feelings with blooms that never fail to make hearts smile.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
