import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Certification {
  name: string;
  issuer: string;
  color: string;
  url?: string;
}

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications: Certification[] = [
    {
      name: "Microsoft Data Analysis & Visualization with Power BI",
      issuer: "Microsoft",
      color: "from-blue-500 to-blue-600",
      url: "#"
    },
    {
      name: "Microsoft Azure SQL",
      issuer: "Microsoft",
      color: "from-blue-500 to-blue-600",
      url: "#"
    },
    {
      name: "IBM Databases & SQL for Data Science with Python",
      issuer: "IBM",
      color: "from-indigo-500 to-indigo-600",
      url: "#"
    },
    {
      name: "Python for Data Science & Machine Learning",
      issuer: "Udemy",
      color: "from-purple-500 to-purple-600",
      url: "#"
    },
    {
      name: "Data Structures and Algorithms in Python",
      issuer: "Udemy",
      color: "from-purple-500 to-purple-600",
      url: "#"
    },
    {
      name: "LeetCode SQL – 50+ Advanced Queries",
      issuer: "LeetCode",
      color: "from-yellow-500 to-yellow-600",
      url: "https://leetcode.com/u/theint_thinzar_aung/"
    },
    {
      name: "HackerRank – 5-Star in SQL & 3-Star in Python",
      issuer: "HackerRank",
      color: "from-green-500 to-green-600",
      url: "https://www.hackerrank.com/profile/theintthinzarau1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications" subtitle="Professional qualifications" />
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group bg-purple-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white`}>
                  <Award size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                <span>View Certificate</span>
                <ExternalLink size={14} className="ml-2" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;