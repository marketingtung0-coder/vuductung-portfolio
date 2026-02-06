
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/portrait/800/1000" 
              alt="Portrait" 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Tôi tin rằng Marketing không chỉ là quảng cáo.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Với hơn 6 năm kinh nghiệm trong ngành tiếp thị, tôi đã chứng kiến sự thay đổi không ngừng của các thuật toán. Nhưng điều cốt lõi vẫn là: <strong>Thấu hiểu con người.</strong>
              </p>
              <p>
                Triết lý làm việc của tôi dựa trên sự cân bằng giữa <strong>Sáng tạo cảm xúc</strong> và <strong>Dữ liệu lý tính</strong>. Tôi không chỉ chạy các chiến dịch, tôi xây dựng những hệ thống mang lại giá trị thực cho cả doanh nghiệp và người tiêu dùng.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-black">100+</div>
                  <div className="text-sm text-gray-400">Dự án hoàn thành</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">10M+</div>
                  <div className="text-sm text-gray-400">Ngân sách quản lý ($)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
