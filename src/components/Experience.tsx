import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Freelance UI/UX Designer',
      company: 'Self-Employed',
      period: '2024 - Present',
      type: 'Freelance',
      isActive: true
    },
    {
      title: 'Video Editor',
      company: 'Fiverr',
      period: '2021 - Present',
      type: 'Freelance',
      isActive: true
    },
    {
      title: 'Director of Media and Marketing',
      company: 'ICTSC',
      period: '2023 - 2024',
      type: 'Volunteer',
      isActive: false
    },
    {
      title: 'Digital Marketing and UX Team',
      company: 'AIESEC',
      period: '2022 - 2024',
      type: 'Volunteer',
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
            Experiences
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${experience.isActive ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'} 
              border rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-start sm:items-center space-x-3 flex-1">
                  <div className={`p-2 rounded-lg flex-shrink-0 ${
                    experience.isActive ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Briefcase size={16} className={
                      experience.isActive ? 'text-blue-600' : 'text-gray-600'
                    } />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 leading-tight">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {experience.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 ml-11 sm:ml-0">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      {experience.period}
                    </span>
                  </div>
                  
                  <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium w-fit ${
                    experience.type === 'Freelance' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {experience.type}
                  </span>
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