import React from 'react';
import { Mail, Linkedin, Github, GraduationCap, Award, UserCircle} from 'lucide-react';
import SectionTitle from './SectionTitle';
import Tooltip from "./shared/Tooltip";

const About: React.FC = () => {
  const focusAreas = [
    "Data-Driven Decision Making",
    "Business Process Optimization",
    "Dashboard Development & Reporting",
    "Predictive Analytics",
    "Stakeholder Collaboration"
  ];  

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Profile Card */}
          <div className="bg-purple-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
            <div className="flex items-center mb-6">
                <UserCircle size={24} className="text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Profile</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <strong>Data & Business Analyst with 5+ years of experience in transforming data into actionable insights.</strong> Skilled in SQL, Python (pandas, seaborn, scikit-learn), Power BI, Tableau, Excel and AWS, with a proven track record in building BI dashboards, automating reports, optimizing business processes, and delivering predictive analytics. Passionate about solving real-world challenges through cross-functional collaboration and data storytelling.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-purple-500 w-5 h-5 mr-3" />
                <Tooltip content="Send me an email">
                  <a href="mailto:theintthinzaraung1995@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                    theintthinzaraung1995@gmail.com
                  </a>
                </Tooltip>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="text-purple-500 w-5 h-5 mr-3" />
                <Tooltip content="Connect with me on LinkedIn">
                  <a 
                    href="https://linkedin.com/in/theint-thinzar-aung" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/theint-thinzar-aung
                  </a>
                </Tooltip>
              </div>
              
              <div className="flex items-center">
                <Github className="text-purple-500 w-5 h-5 mr-3" />
                <Tooltip content="Check out my GitHub repositories">
                  <a 
                    href="https://github.com/TheintThinzarAung" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                </Tooltip>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/50 dark:bg-slate-700/50 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 shadow-sm hover:shadow-md transition-shadow animate-pulse-soft"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Leadership Card */}
          <div className="bg-purple-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    San Francisco Bay University
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400">
                    Master of Science in Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Fremont, CA, USA | GPA: 3.7/4.0
                  </p>
                  <div className="mt-2 inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm px-3 py-1 rounded-full">
                    100% Presidential Scholarship
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Hmawbi Technological University
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400">
                    Bachelor of Engineering in Civil Engineering
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Myanmar | GPA: 3.8/4.0
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Leadership</h3>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Peer Mentor
                </h4>
                <p className="text-purple-600 dark:text-purple-400">
                  SFBU Under MyWing Mentorship Program
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Supported students in onboarding, tech tools, and academic success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;