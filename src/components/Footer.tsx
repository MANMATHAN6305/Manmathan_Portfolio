import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowUp, Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import MsLogo from '../assests/images/MSLogo-artguru.png';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/manmathan6305',
      icon: Linkedin,
      color: 'text-blue-400 hover:text-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MANMATHAN6305',
      icon: Github,
      color: 'text-gray-300 hover:text-white'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/MANMATHAN6305/',
      icon: SiLeetcode,
      color: 'text-orange-400 hover:text-orange-500'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/manmathan6305',
      icon: SiCodechef,
      color: 'text-yellow-400 hover:text-yellow-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/manmathan_6305/',
      icon: Instagram,
      color: 'text-pink-400 hover:text-pink-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-14 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3 mb-12">

          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="h-[70px] w-[70px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center shadow-md border border-gray-700">
              <img
                src={MsLogo}
                alt="MS Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MANMATHAN S
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Full Stack Developer & ML Enthusiast passionate about creating innovative
              solutions that make a difference.
            </p>

            {/* Social Icons with Subtitles */}
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

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" /> manmadhansiva2005@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" /> +91 9363212045
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" /> Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Manmathan S
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 transition z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;
