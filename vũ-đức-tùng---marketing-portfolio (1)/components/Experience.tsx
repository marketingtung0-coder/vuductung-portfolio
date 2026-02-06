
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Hành trình nghề nghiệp</h2>
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12 items-start">
                <div className="mb-4 md:mb-0">
                  <span className="text-sm font-bold text-gray-400">{exp.period}</span>
                </div>
                <div className="relative">
                  {/* Timeline dot & line for mobile-ish feel or sidebar */}
                  <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-black hidden md:block"></div>
                  {idx !== EXPERIENCES.length - 1 && (
                    <div className="absolute -left-[33px] top-6 w-[2px] h-[calc(100%+64px)] bg-gray-100 hidden md:block"></div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-lg font-medium text-gray-500 mb-4">{exp.company}</div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="mr-3 text-black font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
