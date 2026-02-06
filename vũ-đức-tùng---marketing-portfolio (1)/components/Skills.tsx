
import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kỹ năng & Chuyên môn</h2>
          <p className="text-gray-500 text-lg">Những công cụ và tư duy giúp tôi giải quyết các bài toán Marketing phức tạp.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => {
            const IconComponent = (Icons as any)[skill.icon];
            return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-gray-100 card-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-gray-500 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
