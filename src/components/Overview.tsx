import React from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'Chất lượng cao',
    description: 'Sản phẩm được khai thác và chế biến theo quy trình nghiêm ngặt',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Nguồn gốc rõ ràng',
    description: 'Sản phẩm được khai thác trực tiếp từ U Minh, Cà Mau',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Dịch vụ tận tâm',
    description: 'Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Về Bảo Tường Honey
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Chúng tôi tự hào là đơn vị cung cấp các sản phẩm từ ong chất lượng cao, 
            được khai thác và chế biến theo quy trình nghiêm ngặt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-amber-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Cam kết chất lượng
              </h3>
              <p className="text-amber-100 mb-6">
                Mỗi sản phẩm của Bảo Tường Honey đều trải qua quy trình kiểm định nghiêm ngặt, 
                đảm bảo chất lượng tốt nhất đến tay người tiêu dùng.
              </p>
              <a 
                href="#products"
                className="inline-flex items-center text-white bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-lg transition-colors w-fit"
              >
                Xem sản phẩm
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/honey-process.jpg"
                alt="Quy trình sản xuất"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 