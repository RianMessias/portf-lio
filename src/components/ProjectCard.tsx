import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors group"
          >
            <Github className="mr-2 group-hover:animate-bounce" size={20} />
            Código
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors group"
            >
              <ExternalLink className="mr-2 group-hover:animate-bounce" size={20} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;