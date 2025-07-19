import React from 'react';
import { X, ExternalLink, Github, ArrowLeft, Calendar, Users, Target, Lightbulb } from 'lucide-react';

interface ProjectDetailProps {
  project: {
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
  };
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-4 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Back Button */}
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-sm font-medium">Back to Work</span>
            </button>

            {/* Project Title Overlay */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-white/90 text-base sm:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8 lg:p-12">
            {/* Project Meta */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Duration</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{project.duration || '3 months'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Team</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{project.team || '4 members'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Role</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{project.role || 'Lead Designer'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-2 lg:col-span-1">
                <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>Live</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Github size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {project.details}
                  </p>
                </div>

                {/* Challenge */}
                <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {project.challenge || 'The main challenge was creating an intuitive user experience while maintaining complex functionality. Users needed a solution that was both powerful and easy to use, requiring careful balance between features and simplicity.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">The Solution</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {project.solution || 'We implemented a user-centered design approach, conducting extensive user research and iterative testing. The solution focused on progressive disclosure, clear information hierarchy, and intuitive navigation patterns.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">The Outcome</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {project.outcome || 'The project resulted in a 40% increase in user engagement and 25% improvement in task completion rates. User feedback was overwhelmingly positive, with particular praise for the intuitive interface and smooth user experience.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Images */}
                {project.images && project.images.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-4 sm:mb-6">Project Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {project.images.map((image, index) => (
                        <div key={index} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6 sm:space-y-8">
                {/* Tools & Technologies */}
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Tools & Technologies</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {project.tools.map((tool) => (
                      <div
                        key={tool}
                        className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 rounded-xl text-gray-700 font-medium text-sm sm:text-base"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Project Type</h3>
                  <div className="px-3 py-2 sm:px-4 sm:py-3 bg-blue-50 text-blue-700 rounded-xl font-medium text-sm sm:text-base">
                    {project.category}
                  </div>
                </div>

                {/* Year */}
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Year</h3>
                  <div className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-700 rounded-xl font-medium text-sm sm:text-base">
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;