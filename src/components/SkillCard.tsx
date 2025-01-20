import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 p-3 bg-gray-700 rounded-lg group-hover:scale-110 transition-transform">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;