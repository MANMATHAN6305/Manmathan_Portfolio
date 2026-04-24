import React from "react";
import { Code, Database, Globe, Wrench, Users } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C++"],
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "HTML/CSS", "JavaScript ES6+"],
    },
    {
      title: "Backend Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "REST APIs", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git/GitHub", "VS Code", "Postman", "Vercel/Netlify"],
    },
    {
      title: "Softskills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Leadership", "Team Collaboration", "Problem Solving", "Critical Thinking"],
    },
  ];

  const leftCategories = skillCategories.slice(0, 3);
  const rightCategories = skillCategories.slice(3);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill grid: first 3 left, remaining right */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="space-y-8">
            {leftCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
          <div className="space-y-8">
            {rightCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-md">
    <div className="flex items-center space-x-3 mb-5">
      <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {category.title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 text-sm font-medium rounded-full shadow-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
