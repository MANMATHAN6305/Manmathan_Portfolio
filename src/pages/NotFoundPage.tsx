import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <main className="min-h-[70vh] grid place-items-center px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <section className="max-w-xl text-center rounded-3xl border border-slate-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          The page you are trying to reach does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-semibold hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
