export default function Reviews() {
  const reviews = [
    {
      name: "Sara Khan",
      comment: "Absolutely loved the Purple Tulip Bouquet! The flowers were fresh and beautifully arranged.",
      rating: 5
    },
    {
      name: "Ali Raza",
      comment: "The White Tulips were perfect for my office desk. Great quality and delivery was on time.",
      rating: 4
    },
    {
      name: "Ayesha Malik",
      comment: "Light Pink Tulips were stunning. Will definitely order again for special occasions.",
      rating: 5
    },
    {
      name: "Omar Shah",
      comment: "Red Tulip Bouquet was fresh but slightly smaller than expected. Still happy with it.",
      rating: 4
    },
    {
      name: "Fatima Noor",
      comment: "Double Tulips were gorgeous! The arrangement looked very professional and elegant.",
      rating: 5
    },
    {
      name: "Hassan Javed",
      comment: "Loved the Darwin Hybrid Tulips. Bright colors and long-lasting flowers. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        <span className="text-pink-600">Customer</span> Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="
              bg-pink-50 p-6 rounded-2xl shadow-lg flex flex-col justify-between 
              transform transition-transform duration-500 ease-out 
              hover:scale-105 hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {/* Customer Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h3>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.454a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118l-3.378-2.454a1 1 0 00-1.176 0l-3.378 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>

            {/* Review Comment */}
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
