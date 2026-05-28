
import React from 'react';
import Hero from '../../../components/services/app-development/Hero';
import AppDevelopmentServices from '../../../components/services/app-development/AppDevelopmentServices';
import TechStack from '../../../components/services/app-development/TechStack';
import ProcessTimeline from '../../../components/services/app-development/ProcessTimeline';
import FAQ from '../../../components/services/app-development/FAQ';
import ServiceCTASection from '@/components/services/ServiceCTASection';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppDevelopmentServices />
      <TechStack />
      <ProcessTimeline />
      <FAQ />
      <ServiceCTASection
        title="Ready to Build Your Dream App?"
        description="Partner with our expert team to create powerful, intuitive mobile applications that drive results for your business."
        buttonText="Start Your App Project"
      />
    </div>
  );
};

export default AppDevelopment;
