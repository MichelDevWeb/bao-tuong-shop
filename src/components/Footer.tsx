import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bảo Tường Honey Bee</h3>
            <p className="text-gray-400">
              Chuyên cung cấp các sản phẩm từ ong chất lượng cao, 
              được khai thác và chế biến theo quy trình nghiêm ngặt.
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Kết nối với chúng tôi</h3>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Zalo</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Bảo Tường Honey Bee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 