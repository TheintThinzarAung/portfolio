import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string;
  achievements: string[];
  liveDemo?: string;
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: "project1",
      title: "Construction Cost Optimization Dashboard",
      description: "Interactive dashboard for monitoring construction project costs, budget overruns, and vendor performance analytics.",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
      tech: "SQL . Excel . DAX . Power BI",
      achievements: [
        "Uncovered 17% average cost overruns and implemented alert-based tracking",
        "Helped prevent $1.5M+ in estimated delay-related losses",
        "Contributed to a 12% profit margin improvement through data-driven vendor segmentation",
        "Enabled real-time monitoring of 60+ construction projects across regions"
      ],
      liveDemo: "https://github.com/TheintThinzarAung/Portfolio-Projects/blob/main/Project%20Cost%2C%20Delay%26%20Vendor%20Analysis/README.md"
    },
    {
      id: "project2",
      title: "Sales Performance Analysis",
      description: "Comprehensive sales analytics platform for product performance, customer segmentation, and revenue growth tracking.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      tech: "SQL . DAX . Power Query . Power BI",
      achievements: [
        "Analyzed 1.1M+ units sold across product lines and customer segments",
        "Uncovered 284% YoY revenue growth and flagged key margin risks",
        "Delivered KPI-driven insights that informed pricing strategy",
        "Supported an expected 7% revenue lift in the next quarter"
      ],
      liveDemo: "https://github.com/TheintThinzarAung/Portfolio-Projects/blob/main/Sale%20Performance%20Analysis/README.md"
    },
    {
      id: "project3",
      title: "Techgram AI-Powered Social Media App",
      description: "Backend database architecture for an AI-powered content generation platform with real-time data processing.",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg",
      tech: "MySQL · Python . AWS RDS",
      achievements: [
        "Built backend schema with 20+ normalized tables",
        "Implemented automation logic (views, stored procedures, triggers)",
        "Developed Python-based web scraping to feed real-time data",
        "Created infrastructure for AI blog and news generation"
      ],
      liveDemo: "https://github.com/karan3486/techgram_app/blob/main/README.md"
    },
    {
      id: "project4",
      title: "Telcom Churn Analysis and Prediction",
      description: "Machine learning model and analytics dashboard to predict customer churn risk and provide retention insights.",
      image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
      tech: "Power BI · Python · MSSQL · Scikit-learn",
      achievements: [
        "Built a churn prediction model using Random Forest with 83% accuracy",
        "Analyzed 6.4K+ customer records to identify key churn factors",
        "Developed Power BI dashboards to identify churn risks by contract type",
        "Created visualizations for tenure and service usage patterns"
      ],
      liveDemo: "https://github.com/TheintThinzarAung/Data-Analysis-Projects/blob/main/Churn_Analysis%20%26%20Prediction/README.md"
    }
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" subtitle="Showcasing my analytical work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-purple-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              {/* Project Image with Overlay */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-80"></div>
                
                {/* Tech Stack Badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 text-purple-700 dark:text-purple-400 text-xs font-bold px-3 py-1 rounded-full">
                  {project.tech}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <button
                  onClick={() => openProject(project)}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  View Details
                  <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeProject}></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="aspect-video relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="inline-block bg-white/90 dark:bg-slate-900/90 text-purple-700 dark:text-purple-400 text-xs font-bold px-3 py-1 rounded-full">
                  {selectedProject.tech}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Project Overview
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Key Achievements
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                {selectedProject.achievements.map((achievement, index) => (
                  <li key={index} className="leading-relaxed">{achievement}</li>
                ))}
              </ul>
              
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-transform hover:scale-105"
                >
                  View Live Demo
                  <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;