import React from 'react';
import { Mail, Linkedin, Globe, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white rounded-t-[60px] md:rounded-t-[100px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Sẵn sàng để đưa thương hiệu của bạn vươn xa?</h2>
            <p className="text-gray-400 text-xl mb-12">Hãy để lại lời nhắn, tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.</p>
            
            <div className="space-y-6">
              <a href="mailto:hello@vuductung.vn" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="text-lg">hello@vuductung.vn</span>
              </a>
              <a href="https://linkedin.com/in/vuductung" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg">linkedin.com/in/vuductung</span>
              </a>
              <a href="https://github.com/vuductung" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Github size={20} />
                </div>
                <span className="text-lg">github.com/vuductung</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <span className="text-lg">TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Họ tên</label>
                  <input type="text" className="w-full bg-white/10 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-white/20 transition-all outline-none text-white" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/10 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-white/20 transition-all outline-none text-white" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Nội dung</label>
                <textarea rows={4} className="w-full bg-white/10 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-white/20 transition-all outline-none resize-none text-white" placeholder="Tôi muốn trao đổi về dự án..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all text-lg">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>© 2024 Vũ Đức Tùng. All rights reserved. Built with precision.</div>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;