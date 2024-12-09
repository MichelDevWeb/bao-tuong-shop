'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigation = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#overview' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Liên hệ', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Bảo Tường Honey"
              width={48}
              height={48}
              className="w-auto h-12 rounded-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-600 
                ${isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-400'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300
              ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`${isOpen ? 'max-h-96' : 'max-h-0'} md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}