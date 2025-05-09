import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  expanded: boolean;
}

const Experience: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "job1",
      title: "IT Support & Analyst",
      company: "San Francisco Bay University",
      location: "USA",
      period: "Oct 2024 - Present",
      description: [
        "Provided technical support and resolved IT queries for 500+ students, faculty, and staff within 24 hours, ensuring compliance with FERPA regulations and U.S. academic IT standards.",
        "Automated recurring troubleshooting tasks using Python and PowerShell, reducing support ticket volume by 30% and saving over 10 hours/week through proactive issue resolution.",
      ],
      expanded: true
    },
    {
      id: "job2",
      title: "Sale Analyst",
      company: "HKL Scaffolding & Formwork Ltd.",
      location: "Singapore",
      period: "Jun 2023 - Dec 2023",
      description: [
        "Built interactive dashboards in Power BI to analyze sales performance, product trends, and customer segments across Southeast Asian markets.",
        "Conducted in-depth analysis to uncover YoY growth trends, margin inefficiencies, and performance gaps—driving more informed pricing and marketing strategies.",
        "Delivered executive reports highlighting high- and low-margin segments, enabling leadership to refocus efforts on profitable regions and products."
      ],
      expanded: false
    },
    {
      id: "job3",
      title: "Business Intelligence Analyst",
      company: "Sky One Construction Co., Ltd.",
      location: "Myanmar",
      period: "June 2018 - Oct 2022",
      description: [
        "Built Power BI dashboards to monitor 60+ construction projects, enabling leadership to track budget overruns, delays, and vendor performance across regions.",
        "Conducted descriptive and prescriptive analysis using SQL, DAX, and Excel to calculate KPIs, identify cost variance, and flag risk factors—leading to 17% overrun reduction and improved vendor insight.",
        "Delivered executive-ready reports with vendor segmentation and region-level insights, contributing to a 12% profit margin increase.",
        "Implemented scheduled refresh and alerting systems in Power BI Service to automate project risk updates for stakeholders."
      ],
      expanded: false
    }
  ]);

  const toggleExpand = (id: string) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, expanded: !job.expanded } : job
    ));
  };

  return (
    <section id="experience" className="py-20 bg-purple-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div className="max-w-4xl mx-auto mt-12">
          {jobs.map((job, index) => (
            <div 
              key={job.id}
              className={`relative p-6 mb-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                job.expanded ? 'scale-[1.02]' : ''
              }`}
            >
              {/* Timeline connector */}
              {index < jobs.length - 1 && (
                <div className="absolute h-8 w-0.5 bg-purple-300 dark:bg-purple-700 left-8 -bottom-8 z-0"></div>
              )}
              
              {/* Time period indicator */}
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <div className="ml-7">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {job.title}
                    </h3>
                    <h4 className="text-lg text-purple-600 dark:text-purple-400">
                      {job.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center mr-4 mb-2 sm:mb-0">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                  job.expanded ? 'max-h-96' : 'max-h-24'
                }`}>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => toggleExpand(job.id)}
                  className="mt-4 flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  {job.expanded ? (
                    <>
                      <span className="mr-1">Show less</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span className="mr-1">Show more</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;