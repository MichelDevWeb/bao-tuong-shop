import React from 'react'

const contactInfo = [
  {
    title: 'Địa chỉ',
    content: '123 Đường ABC, Quận XYZ, TP.HCM',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Điện thoại',
    content: '0123 456 789',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: 'Email',
    content: 'contact@baotuonghoney.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-amber-100 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi nếu bạn có bất kỳ thắc mắc nào. 
            Đội ngũ tư vấn của Bảo Tường Honey luôn sẵn sàng hỗ trợ bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-amber-100">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Nội dung</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                placeholder="Nhập nội dung tin nhắn"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Gửi tin nhắn
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 