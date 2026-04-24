import React from 'react';
import { Code, Brain, Trophy, Users, Linkedin, Github } from 'lucide-react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Skilled in modern frontend and backend frameworks for scalable web solutions.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Developing intelligent systems that bring data-driven insights to life.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Hackathon Winner',
      description: 'Proven creativity and technical expertise in fast-paced problem solving.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership & Teamwork',
      description: 'Collaborative approach with experience leading multidisciplinary teams.',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/manmathan6305',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MANMATHAN6305',
      icon: Github,
      color: 'text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/MANMATHAN6305/',
      icon: SiLeetcode,
      color: 'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/manmathan6305',
      icon: SiCodechef,
      color: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Learn more about my background and expertise
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold">MANMATHAN S</span>, a 3rd-year Computer Science and
              Business Systems student at Bannari Amman Institute of Technology,
              maintaining a CGPA of{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                7.5/10
              </span>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I completed a 6-month internship at Crayon D Company, contributing to
              full-stack development projects.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am passionate about leveraging technology to solve real-world problems
              and continuously improving my technical skills.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
              <div className="flex-1 min-w-[140px] text-center border border-blue-300 dark:border-blue-600 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="flex-1 min-w-[140px] text-center border border-blue-300 dark:border-blue-600 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Months Experience
                </div>
              </div>
            </div>

            {/* Social Icons */}
 <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Connect with Me
              </h4>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 group"
                      aria-label={social.name}
                    >
                      <div
                        className={`${social.color} p-3 rounded-lg border border-gray-700 group-hover:scale-110 transition`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-white">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
