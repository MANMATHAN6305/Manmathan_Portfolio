import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Smartphone, Image, Filter, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  impact: string;
  tech: string[];
  category: 'ai' | 'web' | 'mobile';
  image: string;
  github: string;
  demo: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Resume Generator',
      description: 'AI-powered resume platform with structured prompts and polished export-ready layouts',
      longDescription: 'A comprehensive AI-powered platform that helps users create professional resumes using machine learning algorithms. Features intelligent content suggestions, multiple templates, and real-time formatting.',
      impact: 'Improved resume drafting speed by automating content generation and formatting workflows.',
      tech: ['Python', 'React', 'Node.js', 'OpenAI API', 'MongoDB'],
      category: 'ai',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SMANMATHAN/AI_RESUME_BUILDER',
      demo: 'https://ai-resume-builder-rho-ochre.vercel.app/',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'College Attendance App',
      description: 'Attendance tracking solution with analytics dashboards for faculty and students',
      longDescription: 'A full-featured attendance management system with both mobile and web interfaces. Includes student tracking, automated reporting, and real-time analytics for educational institutions.',
      impact: 'Reduced manual attendance overhead with centralized records and faster monthly reports.',
      tech: ['React Native', 'Express.js', 'MySQL', 'JWT', 'React'],
      category: 'mobile',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Train Traffic Flow with AI',
      description: 'AI-assisted railway flow control dashboard for throughput simulation and monitoring',
      longDescription: 'An AI-assisted decision support dashboard for railway operations focused on maximizing throughput. It models traffic scenarios, visualizes congestion risk, and helps evaluate safer and faster routing strategies.',
      impact: 'Enabled clearer decision-making using live simulation visuals for route planning scenarios.',
      tech: ['ReactJS', 'Typescript', 'FastAPI', 'React', 'AWS'],
      category: 'ai',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-HITNYwo1PK09RfF2xo07s570GOSY5kVlzcLR6FQrZcJJoocxMgsoCoR5uFrKY43YcjrJl0V7T4qV5ZkLmJvySoEHy4UDEWDC3HnsQ0pWp3rbNrb3yEtYOBzA9Cfy2_iOpvIT3kuTods8JA0sYQ?key=Fs1z_K8FIehwPsc3nthqEl4q',
      github: 'https://github.com/SMANMATHAN/rail-dashboard/tree/main/frontend%20simulation',
      demo: 'https://rail-dashboard.vercel.app/',
      icon: <Image className="w-6 h-6" />
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const hasValidLink = (url: string) => url !== '#';

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-4 py-20 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(to_right,rgba(71,85,105,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.14)_1px,transparent_1px)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio Work
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            A curated selection of products focused on practical impact, clean architecture,
            and strong user experience across AI, web, and mobile development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as 'all' | 'ai' | 'web' | 'mobile')}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span
                className={`rounded-md px-2 py-0.5 text-xs ${
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-white/15 px-2 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-lg p-2 text-white backdrop-blur-sm transition-colors ${
                        hasValidLink(project.github)
                          ? 'bg-white/20 hover:bg-white/30'
                          : 'cursor-not-allowed bg-white/10 opacity-50'
                      }`}
                      onClick={(e) => {
                        if (!hasValidLink(project.github)) {
                          e.preventDefault();
                        }
                      }}
                      aria-disabled={!hasValidLink(project.github)}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-lg p-2 text-white backdrop-blur-sm transition-colors ${
                        hasValidLink(project.demo)
                          ? 'bg-white/20 hover:bg-white/30'
                          : 'cursor-not-allowed bg-white/10 opacity-50'
                      }`}
                      onClick={(e) => {
                        if (!hasValidLink(project.demo)) {
                          e.preventDefault();
                        }
                      }}
                      aria-disabled={!hasValidLink(project.demo)}
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-sky-600 dark:text-sky-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-400">
                  Impact: {project.impact}
                </p>

                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.longDescription}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-md bg-slate-200 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!hasValidLink(project.github)) {
                        e.preventDefault();
                      }
                    }}
                    aria-disabled={!hasValidLink(project.github)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${
                      hasValidLink(project.github)
                        ? 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
                        : 'cursor-not-allowed border border-slate-300 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!hasValidLink(project.demo)) {
                        e.preventDefault();
                      }
                    }}
                    aria-disabled={!hasValidLink(project.demo)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${
                      hasValidLink(project.demo)
                        ? 'bg-sky-600 text-white hover:bg-sky-700'
                        : 'cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;