import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-75 scale-105 transform transition-transform duration-3000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content with animation */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg animate-fade-in">
            Bảo Tường <span className="text-amber-400">Honey Bee</span>
          </h1>
          <p className="text-xl md:text-3xl mb-12 max-w-3xl drop-shadow-lg animate-fade-in-up">
            Chuyên cung cấp các sản phẩm từ ong chất lượng cao
          </p>
          <a
            href="#products"
            className="group bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-semibold 
            transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-200"
          >
            <span className="inline-flex items-center">
              Xem sản phẩm
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
} 