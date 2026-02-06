
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight uppercase">VŨ ĐỨC TÙNG</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">Giới thiệu</a>
          <a href="#projects" className="hover:text-black transition-colors">Dự án</a>
          <a href="#skills" className="hover:text-black transition-colors">Kỹ năng</a>
          <a href="#experience" className="hover:text-black transition-colors">Kinh nghiệm</a>
        </div>
        <div>
          <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
            Liên hệ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
