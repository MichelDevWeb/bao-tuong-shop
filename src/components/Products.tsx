import React from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Mật Ong Dú',
    description: 'Mật ong dú nguyên chất từ rừng U Minh',
    price: '250.000đ',
    image: '/images/product1.jpg',
    benefits: ['Tăng cường miễn dịch', 'Giảm ho, đau họng', 'Chống oxi hóa'],
    volume: '500ml',
    origin: 'U Minh, Cà Mau'
  },
  {
    id: 2,
    name: 'Sữa Ong Chúa',
    description: 'Sữa ong chúa tươi nguyên chất',
    price: '450.000đ',
    image: '/images/product2.jpg',
    benefits: ['Tăng cường sinh lực', 'Làm đẹp da', 'Chống lão hóa'],
    volume: '250ml',
    origin: 'U Minh, Cà Mau'
  },
  {
    id: 3,
    name: 'Phấn Hoa',
    description: 'Phấn hoa tự nhiên bổ dưỡng',
    price: '350.000đ',
    image: '/images/product1.jpg',
    benefits: ['Bổ sung dinh dưỡng', 'Tăng sức đề kháng', 'Cải thiện tiêu hóa'],
    volume: '300g',
    origin: 'U Minh, Cà Mau'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-900">Sản phẩm của chúng tôi</h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Các sản phẩm từ ong được khai thác và chế biến theo quy trình nghiêm ngặt, 
          đảm bảo chất lượng cao nhất
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
                  {product.price}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-amber-900">{product.name}</h3>
                  <p className="text-gray-700 mt-1">{product.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-amber-900 mb-2">Công dụng:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <span className="text-amber-600 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <span>Dung tích: {product.volume}</span>
                    <span>Xuất xứ: {product.origin}</span>
                  </div>
                  
                  <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold shadow-sm hover:shadow-md">
                    Đặt hàng ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 