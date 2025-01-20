import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  target: number;
  label: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = (target / duration) * 16;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={countRef} className="group text-center p-6 bg-gray-800 rounded-xl transition-all duration-300 hover:-translate-y-2 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      <div className="relative z-10">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
          {count}
        </div>
        <div className="text-gray-400 font-medium">{label}</div>
      </div>
    </div>
  );
}

export default StatCounter;