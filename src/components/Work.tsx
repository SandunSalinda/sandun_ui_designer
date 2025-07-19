import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  tools: string[];
  details: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  duration?: string;
  team?: string;
  role?: string;
  images?: string[];
}

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

    const workSection = document.getElementById('work');
    if (workSection) {
      observer.observe(workSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'RUSH – University-Based Ride-Sharing App (UI UX/ Case Study)',
      description: 'A student-to-student and student-to-villager ride-sharing mobile app designed to solve the transportation challenges faced by university students in Kamburupitiya, Sri Lanka',
      image: '/projects/frame1.png',
      category: 'Mobile App',
      year: '2023',
      tools: ['Figma'],
      details: 'A student-to-student and student-to-villager ride-sharing mobile app designed to solve the transportation challenges faced by university students in Kamburupitiya, Sri Lanka. Built with a minimal, modern interface using lime green, black, and white — RUSH connects communities with safe, accessible transport where options are limited.',
      //liveUrl: 'https://example.com',
      challenge: 'The Faculty of Technology at the University of Ruhuna is located in a rural area with poor public and private transport options. With only a few buses and tuks, students often struggle to travel to Matara or Kamburupitiya for daily needs, especially on weekends or after lectures.',
      solution: 'We created an integrated platform that connects all aspects of patient care, from scheduling to treatment tracking, with a focus on data security and regulatory complianceWe designed RUSH—a ride-sharing app that lets students connect with fellow students or trusted village tuk drivers. Users can either request a ride or offer a ride, with simple steps and verified profiles. The UI is minimal, mobile-first, and optimized for quick action and low learning curve.',
      outcome: 'Gave students a safe, reliable alternative to limited transport | Created stronger campus-community connectivity | Designed with expandability in mind: can scale to other rural universities.',
      duration: 'ongoing',
      team: '5 members',
      role: 'UI UX Designer',
      images: [
        '/projects/Frame 2.png',
        '/projects/Frame 3.png',
        '/projects/Frame 6.png',
        '/projects/Frame 7.png',
        '/projects/Frame 8.png',
      ]
    },

    {
      id: 2,
      title: 'ASTROLINK',
      description: 'Sinhala Horoscope & Palm-Reading Mobile App',
      image: '/projects/ui1.png',
      category: 'Mobile App UI',
      year: '2024',
      tools: ['Figma'],
      details: 'culturally tailored mobile app designed for Sinhala-speaking users, combining traditional palm reading and astrological horoscope generation into a seamless digital experience.',
      //liveUrl: 'https://example.com',
      challenge: 'Most horoscope and palm-reading apps are cluttered, complex, and not available in Sinhala. Users—especially locals unfamiliar with English tech interfaces—struggled to navigate these platforms.',
      solution: 'We designed a fully localized mobile app with step-by-step guidance: from palm scanning to personalized horoscope results. Using spiritual colors like deep purple and pink, along with Sinhala UI elements.',
      outcome: 'The app delivered a smooth and personalized horoscope experience in Sinhala—bridging the gap between tradition and technology. It was well-received for its visual clarity, cultural authenticity, and simplified multi-step flow.',
      duration: '1 month',
      team: '2 members',
      role: 'UI UX Designer',
      images: [
        '/projects/ui2.png',
        '/projects/ui3.png',
      ]
    },

    {
      id: 3,
      title: 'MrCocoBee – Website UI',
      description: 'Website and site UI for Coconut Beverage Startup',
      image: '/projects/cocobee.png',
      category: 'Web App',
      year: '2025',
      tools: ['Figma', 'React', 'Tailwind'],
      details: 'Website design to build early brand presence and highlight product freshness, even without a retail outlet',
      liveUrl: 'https://mrcocobee.com/',
      //githubUrl: 'https://github.com/example',
      challenge: 'MrCocoBee, a startup producing fresh coconut milk drinks in Dehiwala, faced a major visibility gap due to having no physical outlet in Colombo. With limited public awareness and no online presence, the brand struggled to connect with its target audience and communicate its freshness-first identity',
      solution: 'We designed a clean, tropical-inspired website that highlights the freshness, variety, and natural quality of MrCocoBee products. Using a palette of lime green, white, and sky blue, the site showcases the brand story, product offerings, and outlet details—building trust and curiosity even before store expansion',
      outcome: 'The website provided MrCocoBee with a professional digital identity that helped build early brand awareness, supported product visibility, and created a platform they could share with partners and customers. It laid a strong foundation for future marketing and retail expansion efforts.',
      duration: '1 month',
      team: '3 members',
      role: 'UI UX Designer',
      images: [
        '/projects/Artboard 3.png',
        '/projects/Artboard 2.png',
      ]
    },
    
    
    {
      id: 4,
      title: 'Event Management Dashboard UI (Design Assignment)',
      description: 'This project was completed as part of a UI/UX design assignment for a UI/UX Designer position.',
      image: '/projects/event management cover.jpg',
      category: 'Web site',
      year: '2025',
      tools: ['Figma',],
      details: 'This project was completed as part of a UI/UX design assignment for a UI/UX Designer position. The goal was to design a full-featured event management dashboard from scratch based on a given brief. I focused on creating a scalable, user-friendly interface for event organizers to create events, track sales, and monitor attendee activity.',
      //liveUrl: 'https://example.com',
      //githubUrl: 'https://github.com/example',
      challenge: 'The assignment challenged me to design a clean and modern dashboard UI that allows - Easy event creation and editing, Sales and booking analytics, Attendee tracking, Navigation between core modules like events, bookings, and reports.',
      solution: 'Color Palette- Blue: A bold, energetic color to signify trust and tech, Light Gray & White: For clean, distraction-free UI, Accent Colors: Used in charts and badges for categorization. Typography - Manrope for its clean readability and geometric structure Varying font weights for strong visual hierarchy',
      outcome: 'Card-based UI for browsing events, Tabular & graphical analytics for net sales and customer data, Seat map design to visualize ticket categories.',
      duration: '24 Hours',
      team: 'Solo',
      role: 'UI Designer',
      images: [
        '/projects/Overview Page.png',
        '/projects/Browse Events Page.png',
        '/projects/Attendee Insights Page.png',
      ]
    },
    /*
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Educational platform for online courses',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'EdTech',
      year: '2023',
      tools: ['Adobe XD', 'React', 'GraphQL'],
      details: 'Designed an intuitive learning management system that facilitates online education. Features include course creation, student progress tracking, and interactive assessments.',
      liveUrl: 'https://example.com',
      challenge: 'Online learning platforms were often overwhelming and lacked engagement, leading to high dropout rates and poor learning outcomes.',
      solution: 'We created a gamified learning experience with clear progress indicators, interactive elements, and personalized learning paths that adapt to individual student needs.',
      outcome: 'Course completion rates increased by 65% and student engagement metrics improved across all age groups. The platform was adopted by 50+ educational institutions.',
      duration: '7 months',
      team: '10 members',
      role: 'Lead Product Designer',
      images: [
        'https://images.pexels.com/photos/159712/pexels-photo-159712.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 6,
      title: 'Travel Booking App',
      description: 'Seamless travel planning and booking experience',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      year: '2022',
      tools: ['Figma', 'Flutter', 'Firebase'],
      details: 'Created a travel booking application that simplifies the process of finding and booking flights, hotels, and activities. Focus on user journey optimization and visual appeal.',
      liveUrl: 'https://example.com',
      challenge: 'Travel booking was fragmented across multiple apps and websites, creating a frustrating experience for users trying to plan comprehensive trips.',
      solution: 'We designed a unified platform that handles all aspects of travel planning, from flights to accommodations to activities, with smart recommendations and seamless booking flows.',
      outcome: 'The app achieved 100k+ downloads in the first quarter and maintained a 4.7-star rating. Booking conversion rates were 25% higher than industry average.',
      duration: '6 months',
      team: '7 members',
      role: 'UX Designer',
      images: [
        'https://images.pexels.com/photos/1008156/pexels-photo-1008156.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    } */
  ];

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                    <span className="text-xs font-medium text-gray-700">{project.category}</span>
                  </div>
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors duration-300">
                          <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700" />
                        </div>
                      )}
                      {project.githubUrl && (
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors duration-300">
                          <Github size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0 ml-2">{project.year}</span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 sm:px-3 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 sm:px-3 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;