

import { useState, useEffect } from 'react'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Residential', icon: '🏠' },
  { name: 'Commercial', icon: '🏢' },
  { name: 'Renovation', icon: '🔨' },
  { name: 'Landscaping', icon: '🌳' },
  { name: 'Interior Design', icon: '🎨' },
  { name: 'Roofing', icon: '🏡' },
  { name: 'Plumbing', icon: '🚽' },
  { name: 'Electrical', icon: '⚡' },
]

const carouselItems = [
  { image: 'https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Construction site', title: 'Building Dreams', description: 'Quality construction for every project' },
  { image: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Modern building', title: 'Modern Solutions', description: 'Innovative designs for the future' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Home renovation', title: 'Renovate & Refresh', description: 'Breathe new life into your space' },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="md:font-extrabold font-bold md:text-4xl text-2xl">Constro Sathi</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <ChevronLeft className="h-6 w-6 text-blue-900" />
        </button>
        <button
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <ChevronRight className="h-6 w-6 text-blue-900" />
        </button>
      </section>

      {/* Category Icons */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border  border-slate-300 flex items-center justify-center text-2xl mb-2">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-blue-900">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Services Near You */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Services Near You</h2>
          <p className="mb-8">Enter your location to discover our services in your area</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your zip code"
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r-md font-medium transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Constro Sathi</h3>
              <p className="text-sm">Find construction services near you.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Home</a></li>
                <li><a href="#" className="hover:text-orange-500">Services</a></li>
                <li><a href="#" className="hover:text-orange-500">Projects</a></li>
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">Shegaon - Buldhana</p>
              <p className="text-sm mb-2">Phone: (123) 456-7890</p>
              <p className="text-sm">Email: info@constructco.in</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            © {new Date().getFullYear()} Constro Sathi All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}