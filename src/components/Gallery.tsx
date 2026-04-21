import React, { useState, useEffect } from 'react';
import { FileText, Image as ImageIcon, Download, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'pdf';
  thumbnail?: string;
}

interface GalleryProps {
  category: 'certificates' | 'gallery';
}

// INSTRUCTIONS FOR ADDING YOUR CERTIFICATES:
// 1. Place your PDF files in: public/certificates/
// 2. Update the CERTIFICATES_DATA array below with your certificate details
// 3. Format: { id: 'unique-id', title: 'Certificate Name', url: '/certificates/filename.pdf', type: 'pdf' }
// Example: { id: 'cert-aws', title: 'AWS Solutions Architect', url: '/certificates/aws-certificate.pdf', type: 'pdf' }

const CERTIFICATES_DATA: GalleryItem[] = [
  {
    id: 'cert-frontend-react',
    title: 'HackerRank Frontend Developer (React)',
    url: '/certificates/Frontend_developer_react_Hackkerank.pdf',
    type: 'pdf',
  },
  {
    id: 'cert-intro-cybersecurity',
    title: 'Introduction to Cyber Security',
    url: '/certificates/Intro_CyberSecurity.pdf',
    type: 'pdf',
  },
  {
    id: 'cert-java-basic',
    title: 'HackerRank Java (Basic)',
    url: '/certificates/Java_Basic_Hakkerrank.pdf',
    type: 'pdf',
  },
  {
    id: 'cert-java-oracle',
    title: 'Java Oracle Certificate',
    url: '/certificates/Java_Oracle _Certificate.pdf',
    type: 'pdf',
  },
  {
    id: 'cert-web-fundamentals',
    title: 'Web Development Fundamentals',
    url: '/certificates/WebDevelopmentFundamentals.pdf',
    type: 'pdf',
  },
];

// INSTRUCTIONS FOR ADDING GALLERY IMAGES:
// 1. Place your images in: public/gallery/
// 2. Update the GALLERY_DATA array below with your image details
// 3. Format: { id: 'unique-id', title: 'Image Title', url: '/gallery/filename.jpg', type: 'image' }
// Supported formats: JPG, PNG, GIF, WebP

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Project Showcase 1',
    url: '/gallery/project-1.jpg',
    type: 'image',
  },
  {
    id: 'gallery-2',
    title: 'Project Showcase 2',
    url: '/gallery/project-2.jpg',
    type: 'image',
  },
  {
    id: 'gallery-3',
    title: 'Event Participation',
    url: '/gallery/event-1.jpg',
    type: 'image',
  },
];

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Load certificates or gallery data
    const timer = setTimeout(() => {
      setItems(category === 'certificates' ? CERTIFICATES_DATA : GALLERY_DATA);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          (() => {
            const fileUrl = encodeURI(item.url);
            return (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
            onClick={() => setSelectedItem(item)}
          >
            {/* Thumbnail */}
            <div className="relative h-64 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
              {item.type === 'image' ? (
                <img
                  src={fileUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <>
                  <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={`${item.title} preview`}
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/25" />
                </>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                {item.type === 'pdf' && (
                  <a
                    href={fileUrl}
                    download
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="w-5 h-5" />
                  </a>
                )}
                {item.type === 'image' && (
                  <ImageIcon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 text-white" />
                )}
              </div>
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="inline-flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  {item.type === 'pdf' ? (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>PDF</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4" />
                      <span>Image</span>
                    </>
                  )}
                </span>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">
                  View
                </span>
              </div>
            </div>
          </div>
            );
          })()
        ))}
      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center h-80 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 space-y-2 text-center">
            {category === 'certificates' ? (
              <>
                <FileText className="w-12 h-12 mx-auto opacity-50" />
                <p className="text-lg font-medium">No certificates yet</p>
                <p className="text-sm">Coming soon...</p>
              </>
            ) : (
              <>
                <ImageIcon className="w-12 h-12 mx-auto opacity-50" />
                <p className="text-lg font-medium">No gallery items yet</p>
                <p className="text-sm">Coming soon...</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedItem.title}
              </h2>

              {selectedItem.type === 'image' ? (
                <div className="flex justify-center">
                  <img
                    src={encodeURI(selectedItem.url)}
                    alt={selectedItem.title}
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  {/* PDF Preview Container */}
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-80 p-4">
                    <embed
                      src={encodeURI(selectedItem.url)}
                      type="application/pdf"
                      className="w-full h-80 rounded-lg"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 justify-center w-full">
                    <a
                      href={encodeURI(selectedItem.url)}
                      download={selectedItem.title}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </a>

                    <a
                      href={encodeURI(selectedItem.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Open in New Tab</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
