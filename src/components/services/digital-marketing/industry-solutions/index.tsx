
import React, { useState } from "react";
import { industries } from './data';
import SectionHeader from './SectionHeader';
import IndustryNavigation from './IndustryNavigation';
import SolutionsGrid from './SolutionsGrid';

const IndustrySolutionsSection = () => {
  const [activeIndustry, setActiveIndustry] = useState("e-commerce");
  
  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Industry-Specific Solutions"
          description="Our tailored digital marketing approaches for different industries deliver measurable results."
        />

        <IndustryNavigation 
          industries={industries}
          activeIndustry={activeIndustry}
          setActiveIndustry={setActiveIndustry}
        />

        <SolutionsGrid 
          solutions={currentIndustry.solutions}
          activeIndustry={activeIndustry}
        />
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
