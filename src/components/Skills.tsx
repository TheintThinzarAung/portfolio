import React from 'react';
import { Code2, BarChart2, Brain, Cloud, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Array<{
    name: string;
    logo: string;
  }>;
  color: string;
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories: SkillCategory[] = [
    {
      icon: <Code2 size={24} />,
      title: "Programming & Databases",
      skills: [
        { name: "Python", logo: "https://www.svgrepo.com/show/452091/python.svg" },
        { name: "MSSQL", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
        { name: "DAX", logo: "https://www.svgrepo.com/show/373589/excel.svg" },
        { name: "MySQL", logo: "https://www.svgrepo.com/show/373848/mysql.svg" },
        { name: "Oracle", logo: "https://www.svgrepo.com/show/354152/oracle.svg" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart2 size={24} />,
      title: "BI Tools",
      skills: [
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Tableau", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrNyQtWTi2SN7I0mc-ZG4qlldkPcTSyK13oFAKPcfUuWmSU885OimuZroAQ26CtkGx7Y&usqp=CAU" },
        { name: "Excel", logo: "https://www.svgrepo.com/show/373589/excel.svg" }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain size={24} />,
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png" },
        { name: "Pandas", logo: "https://www.svgrepo.com/show/354127/numpy.svg" },
        { name: "NumPy", logo: "https://www.svgrepo.com/show/354127/numpy.svg" },
        { name: "TensorFlow", logo: "https://www.svgrepo.com/show/354440/tensorflow.svg" }
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", logo: "https://www.svgrepo.com/show/373458/aws.svg" },
        { name: "GCP", logo: "https://www.svgrepo.com/show/353805/google-cloud.svg" },
        { name: "Azure", logo: "https://www.svgrepo.com/show/373455/azure.svg" },
        { name: "Git", logo: "https://www.svgrepo.com/show/373623/git.svg" },
        { name: "Jira", logo: "https://images.seeklogo.com/logo-png/46/1/jira-logo-png_seeklogo-468163.png" }
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 bg-purple-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills" subtitle="My technical expertise" />
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-pink-50/50 dark:hover:from-slate-800/50 dark:hover:to-purple-900/50"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-soft`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white ml-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 bg-purple-50/50 dark:bg-slate-800/50 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 group/skill"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 mr-3 object-contain group-hover/skill:animate-bounce-soft"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;