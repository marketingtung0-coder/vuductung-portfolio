
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Dự án tiêu biểu</h2>
            <p className="text-gray-500 text-lg">Từ chiến lược đến thực thi - Những kết quả định hình thương hiệu.</p>
          </div>
          <button className="text-black font-semibold flex items-center group">
            Xem tất cả dự án 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
        <div className="grid gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="lg:w-1/2 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{project.category}</span>
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-black uppercase mb-2">Thử thách</h4>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black uppercase mb-2">Chiến lược</h4>
                    <p className="text-gray-600">{project.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 uppercase mb-2">Kết quả</h4>
                    <p className="text-gray-900 font-medium">{project.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
