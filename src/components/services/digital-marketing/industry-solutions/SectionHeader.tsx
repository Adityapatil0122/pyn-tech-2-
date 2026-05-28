
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
