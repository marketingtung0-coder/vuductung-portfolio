
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Marketing Strategist & Growth Expert
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient leading-tight mb-8">
          Kiến tạo tăng trưởng qua tư duy chiến lược và dữ liệu.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          Tôi giúp các thương hiệu tối ưu hóa sự hiện diện kỹ thuật số và chuyển đổi khách hàng tiềm năng thành giá trị bền vững.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all shadow-lg">
            Xem Portfolio
          </a>
          <a href="#contact" className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
            Liên hệ ngay
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
