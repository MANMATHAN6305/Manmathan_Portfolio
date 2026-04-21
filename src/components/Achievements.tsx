import { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Star, Target, Zap } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const value = progress * end;
      setCount(Number.isInteger(end) ? Math.floor(value) : Number(value.toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return <span>{count}{suffix}</span>;
};

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing after visible
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Smart India Hackathon 2024',
      subtitle: 'Participant 🏆',
      description: 'Ran the prestigious national-level hackathon representing innovation in technology solutions',
      highlight: true
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Inter-College Ideathon',
      subtitle: 'Winner 🏅',
      description: 'First place in inter-collegiate innovation competition for creative problem-solving',
      highlight: true
    },
  ];

  const stats = [
    { number: 3, suffix: '', label: 'Hackathons Won', icon: <Trophy className="w-6 h-6" /> },
    { number: 3, suffix: '+', label: 'Months Experience', icon: <Target className="w-6 h-6" /> },
    { number: 7.5, suffix: '', label: 'CGPA', icon: <Star className="w-6 h-6" /> },
    { number: 3, suffix: '+', label: 'Projects Completed', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Awards and milestones that mark my journey
          </p>
        </div>

        {/* Stats */}
        <div ref={achievementsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                <Counter end={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative w-full max-w-sm rounded-xl shadow-lg transition-all ${
                achievement.highlight
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <div className="p-8">
                {achievement.icon}
                <h3 className="text-xl font-bold mt-4">{achievement.title}</h3>
                <p className="font-semibold">{achievement.subtitle}</p>
                <p className="text-sm mt-2">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
