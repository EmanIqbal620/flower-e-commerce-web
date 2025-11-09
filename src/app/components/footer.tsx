export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-pink-600 text-xl font-bold mb-4">Flower Shop</h3>
          <p className="text-gray-400">
            Your one-stop online flower shop. Fresh, beautiful flowers delivered to your doorstep with love and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/" className="hover:text-pink-600 transition">Home</a></li>
            <li><a href="/products" className="hover:text-pink-600 transition">Products</a></li>
            <li><a href="/reviews" className="hover:text-pink-600 transition">Reviews</a></li>
            <li><a href="/contact" className="hover:text-pink-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2">
            <i className="bi bi-geo-alt-fill text-pink-600"></i>
            123 Flower Street, Lahore, Pakistan
          </p>
          <p className="flex items-center gap-2 mt-2">
            <i className="bi bi-envelope-fill text-pink-600"></i>
            info@yourflowerstore.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <i className="bi bi-telephone-fill text-pink-600"></i>
            +92 300 1234567
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-pink-600 transition text-2xl">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition text-2xl">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition text-2xl">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition text-2xl">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Flower Shop. All Rights Reserved.
      </div>
    </footer>
  );
}
