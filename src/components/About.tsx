import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0); // First question expanded by default

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const techStack = [
    {
      name: 'Figma',
      description: 'Go-to tool for designing intuitive and beautiful user interfaces.',
      icon: '/icons/icons8-figma.svg',
      color: 'text-purple-600',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'Photoshop',
      description: 'Where I shape bold visuals and edit photos.',
      icon: '/icons/icons8-photoshop.svg',
      color: 'text-blue-600',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'Jitter',
      description: 'A smooth solution for all the UI animations.',
      icon: 'icons/jitter.png',
      color: 'text-gray-900',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'Premiere Pro',
      description: 'Where I do all my video editing.',
      icon: '/icons/icons8-adobe-premiere-pro.svg',
      color: 'text-purple-700',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'Canva',
      description: 'Quick designs and social media content.',
      icon: '/icons/icons8-canva-app.svg',
      color: 'text-teal-600',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'DaVinci Resolve',
      description: 'Video editing and color grading.',
      icon: '/icons/icons8-davinci-resolve.svg',
      color: 'text-red-600',
      bgColor: 'bg-gray-100'
    }
  ];

  const faqItems = [
    {
      question: "So, how did i get into design?",
      answer: "I've always been fascinated by how design can tell stories and solve problems. I started with videography and post-production, where I learned to craft emotion through motion. This naturally evolved into UI/UX design, where I could blend that same creative energy with real problem-solving, creating digital experiences that feel intuitive and human."
    },
    {
      question: "How do i usually work on a project?",
      answer: "I start by understanding the problem deeply through research and user interviews. Then I move into ideation and sketching, followed by wireframing and prototyping in Figma. I believe in iterative design - testing early and often, gathering feedback, and refining until we achieve the best user experience. Collaboration is key throughout the entire process."
    },
    {
      question: "What's my favorite project so far?",
      answer: "The MrCocoBee website holds a special place in my heart. It was challenging to build brand presence for a startup without a physical outlet, but we created something that truly captured their freshness-first identity. Seeing how it helped them establish their digital presence and connect with customers was incredibly rewarding."
    },
    {
      question: "How do i deal with feedback?",
      answer: "I see feedback as a gift that makes the design better. I always ask clarifying questions to understand the 'why' behind feedback, not just the 'what.' I've learned that the best solutions often come from collaborative discussions where different perspectives merge into something stronger than any individual idea."
    },
    {
      question: "What tools do i use the most?",
      answer: "Here's my go-to gear: Figma (for designing stuff), Photoshop (for photo editing and visual work), Jitter (for UI animations), Premiere Pro (for video editing), and DaVinci Resolve (for color grading). I also use Canva for quick social media content. Each tool serves a specific purpose in my creative workflow."
    },
    {
      question: "What's my design philosophy?",
      answer: "Keep it simple. Make it for real people. If it doesn't feel good to use, it's not done yet. I always try to build with empathy, understanding that behind every click is a human being with goals, frustrations, and emotions. Good design should feel invisible - it just works."
    }
  ];

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
            My stacks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group p-4 sm:p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 ${tech.bgColor} backdrop-blur-sm hover:bg-white/80 transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:scale-105`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  background: 'rgba(249, 250, 251, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(229, 231, 235, 0.5)'
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-xl bg-white shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow duration-300`}>
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Me FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content - Title and CTA */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-3 py-2 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm font-medium text-blue-700">Let's Talk Design</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
                Stuff You Might<br />
                <span className="font-semibold">Wanna Know About Me.</span>
              </h2>
            </div>
          </div>

          {/* Right Content - FAQ */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                    expandedQuestion === index ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-3 sm:pr-4 leading-tight">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {expandedQuestion === index ? (
                        <X size={18} className="sm:w-5 sm:h-5 text-gray-600" />
                      ) : (
                        <ChevronDown size={18} className="sm:w-5 sm:h-5 text-gray-600" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;