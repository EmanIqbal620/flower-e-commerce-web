export default function Contact() {
  return (
    <div className="bg-pink-50 min-h-screen py-16 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
        <span className="text-pink-600">Contact</span> Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-700 transition-all shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all">
            <i className="bi bi-geo-alt-fill text-pink-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
              <p className="text-gray-600">123 Flower Street, Lahore, Pakistan</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all">
            <i className="bi bi-envelope-fill text-pink-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@yourflowerstore.com</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all">
            <i className="bi bi-telephone-fill text-pink-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

