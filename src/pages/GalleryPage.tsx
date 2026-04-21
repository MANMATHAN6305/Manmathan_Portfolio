import React, { useState } from 'react';
import { Award, Image as ImageIcon } from 'lucide-react';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  const [category, setCategory] = useState<'certificates' | 'gallery'>('certificates');

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            Gallery & Certificates
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my professional achievements, certifications, and creative projects
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setCategory('certificates')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              category === 'certificates'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Award className="w-5 h-5" />
            Certificates
          </button>

          <button
            onClick={() => setCategory('gallery')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              category === 'gallery'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            Gallery
          </button>
        </div>

        {/* Gallery Content */}
        <div className="animate-fade-in-up">
          <Gallery category={category} />
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificates Info */}
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All my professional certificates and credentials from recognized training platforms and institutions. Download certificates in PDF format.
            </p>
          </div>

          {/* Gallery Info */}
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                <ImageIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Gallery
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visual showcase of my projects, events, and professional moments. High-quality images documenting my journey and achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
