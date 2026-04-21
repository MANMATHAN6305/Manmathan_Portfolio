import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';
import DirectEyeContact from '../assests/images/EyeContactOnLap.png';

const ROLES = ['Software Engineer', 'Full Stack Developer', 'Problem Solver'];

const Hero: React.FC = () => {
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const updateRoleText = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayRole(currentRole.slice(0, charIndex + 1));
        charIndex += 1;
        timeout = setTimeout(updateRoleText, 90);
      } else if (!isDeleting && charIndex === currentRole.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          updateRoleText();
        }, 1600);
      } else if (isDeleting && charIndex > 0) {
        setDisplayRole(currentRole.slice(0, charIndex - 1));
        charIndex -= 1;
        timeout = setTimeout(updateRoleText, 45);
      } else {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    timeout = setTimeout(updateRoleText, 250);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  const handleViewResume = () => {
    if (typeof window !== 'undefined') {
      window.open(
        'https://drive.google.com/file/d/1sD89LhULPxHyB2FoTNJWk7Dbnk6Itbb7/view?usp=drive_link'
      );
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(to_right,rgba(71,85,105,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.14)_1px,transparent_1px)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Portfolio
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              MANMATHAN S
            </h1>
            <p className="text-lg font-semibold text-sky-700 dark:text-sky-400 sm:text-xl">
              {displayRole}
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-sky-700 align-middle dark:bg-sky-400" />
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              I design and build dependable digital products with a strong focus on clean architecture,
              performance, and user experience. My work combines practical engineering with business-aware
              problem solving to deliver measurable results.
            </p>
          </div>

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Email
                </span>
              </div>
              <div>
                <span className="mt-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                  manmadhansiva2005@gmail.com
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Mobile
                </span>
              </div>
              <div>
                <span className="mt-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                  +91 9363212045
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleViewResume}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-sky-700"
            >
              <FileText className="h-4 w-4" />
              <span>View Resume</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="https://github.com/SMANMATHAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/manmathan-s-2282ab2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute left-0 top-0 z-10 m-3 rounded-md bg-slate-900/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white dark:bg-slate-100 dark:text-slate-900">
                Open to Work
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-4">
                <p className="text-sm font-medium text-white">Building scalable and user-focused software solutions</p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-950">
                <img
                  src={DirectEyeContact}
                  alt="Portrait of Manmathan"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-slate-100 px-3 py-2 text-center dark:bg-slate-800">
                <p className="text-xl font-bold">3+</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Projects</p>
              </div>
              <div className="rounded-lg bg-slate-100 px-3 py-2 text-center dark:bg-slate-800">
                <p className="text-xl font-bold">6M</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Internship</p>
              </div>
              <div className="rounded-lg bg-slate-100 px-3 py-2 text-center dark:bg-slate-800">
                <p className="text-xl font-bold">7.5</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;