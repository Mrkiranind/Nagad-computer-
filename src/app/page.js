"use client";

import { useState } from "react";

export default function WholesalerDemo() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Dell Latitude 7420 (Refurbished)", category: "Laptops", price: "₹24,500", stock: "50+ In Stock", image: "💻" },
    { id: 2, name: "HP EliteDesk 800 G5 Desktop", category: "Desktops", price: "₹18,999", stock: "30+ In Stock", image: "🖥️" },
    { id: 3, name: "Lenovo ThinkVision 24\" Monitor", category: "Monitors", price: "₹7,500", stock: "100+ In Stock", image: "🖥️" },
    { id: 4, name: "HP LaserJet Pro Printer", category: "Printers", price: "₹12,000", stock: "15+ In Stock", image: "🖨️" },
    { id: 5, name: "Logitech Keyboard & Mouse Combo", category: "Accessories", price: "₹1,200", stock: "200+ In Stock", image: "⌨️" },
    { id: 6, name: "Dell Optiplex 3080 SFF", category: "Desktops", price: "₹15,500", stock: "20+ In Stock", image: "🖥️" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-center py-1 text-sm font-semibold">
        📦 Wholesale Rates Only | Minimum Order: 5 Pieces | Free Shipping in India
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">💻</span>
            <h1 className="text-2xl font-bold text-blue-900">Nagad Computer Wholesaler</h1>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition">
            <span>💬</span> WhatsApp Us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Best Wholesale Rates for <br /> <span className="text-yellow-400">Computers & IT Hardware</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100">
          Directly from the importer. We supply Laptops, Desktops, Monitors, and Printers to retailers and corporate offices across India.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#products" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold transition">View All Products</a>
          <a href="#contact" className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-bold transition">Bulk Inquiry</a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Laptops", "Desktops", "Monitors", "Accessories"].map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center cursor-pointer border border-gray-100 hover:border-blue-300">
              <div className="text-5xl mb-4">{["💻", "🖥️", "📺", "⌨️"][i]}</div>
              <h4 className="text-xl font-semibold text-gray-800">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 px-6 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Wholesale Products</h3>
        <p className="text-center text-gray-500 mb-10">High quality refurbished & new items</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
              <div className="bg-gray-100 h-48 flex items-center justify-center text-7xl">
                {product.image}
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-bold mb-1">{product.category}</p>
                <h4 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.name}</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">{product.stock}</span>
                </div>
                <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Ask for Bulk Rate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Buy From Nagad Computer?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🚚</div>
            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-600">We ship to all major cities within 3-4 working days.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">✅</div>
            <h4 className="text-xl font-bold mb-2">Quality Checked</h4>
            <p className="text-gray-600">Every refurbished item goes through a strict 20-point quality check.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold mb-2">Best Wholesale Rates</h4>
            <p className="text-gray-600">Direct import prices. High profit margins for retailers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-blue-400 mb-4">Nagad Computer</h4>
            <p className="text-gray-400">Your trusted partner for wholesale IT hardware.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>
            <p className="text-gray-400 mb-2">📧 sales@nagadcomputer.com</p>
            <p className="text-gray-400">📍 Mumbai, Maharashtra</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Bulk Inquiry Form</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-10 pt-6 border-t border-gray-800">
          © 2026 Nagad Computer Wholesaler. All rights reserved. <br />
          <span className="text-blue-500 font-semibold text-xs mt-2 block">Demo Website built by Web Developer Kiran</span>
        </div>
      </footer>
    </div>
  );
}
