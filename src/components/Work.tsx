import { useState } from 'react';
import { motion } from 'framer-motion';
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

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

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
      tools: ['Figma'],
      details: 'This project was completed as part of a UI/UX design assignment for a UI/UX Designer position. The goal was to design a full-featured event management dashboard from scratch based on a given brief. I focused on creating a scalable, user-friendly interface for event organizers to create events, track sales, and monitor attendee activity.',
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
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
            Featured Work
          </h2>
          
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            A collection of design projects that blend creativity with functionality
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {project.liveUrl && (
                        <motion.button
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                      )}
                      {project.githubUrl && (
                        <motion.button
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github size={16} />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
