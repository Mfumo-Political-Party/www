import React, { useState } from 'react';
import { Building2, GraduationCap, Heart, ChevronDown } from 'lucide-react';

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <section id="policies" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Policies</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Building2 className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Economic Growth</h3>
            <p className="text-sm md:text-base text-gray-600">
              Empowering businesses, creating jobs, and implementing sustainable economic policies for a prosperous future.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <GraduationCap className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Education Reform</h3>
            <p className="text-sm md:text-base text-gray-600">
              Ensuring equal access to quality education for all citizens, fostering innovation and growth.
            </p>
            <button 
              onClick={() => togglePolicy('ecd')}
              className="mt-4 text-accent-dark hover:text-accent flex items-center justify-center mx-auto"
            >
              Learn More <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedPolicy === 'ecd' ? 'rotate-180' : ''}`} />
            </button>
            {expandedPolicy === 'ecd' && (
              <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-4">Early Childhood Development (ECD) Policy</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary">Background</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Transitioning from private sector to government implementation to ensure equitable and standardized ECD services across South Africa.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary">Key Focus Areas</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Standardized Quality Assurance</li>
                      <li>Affordability and Accessibility</li>
                      <li>Integration with Public Education</li>
                      <li>Workforce Development</li>
                      <li>Public-Private Partnerships</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary">Implementation Strategy</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Legislative framework development</li>
                      <li>Dedicated funding allocation</li>
                      <li>Quality monitoring systems</li>
                      <li>Stakeholder engagement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary">Compensation Framework</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Financial support for private providers</li>
                      <li>Competitive educator salaries</li>
                      <li>Parental support programs</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-500 italic">
                    Proposed by PR Councillor: Goodenough Kheswa - Ward 05 JHB
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Heart className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Healthcare Access</h3>
            <p className="text-sm md:text-base text-gray-600">
              Expanding healthcare services and improving public hospitals for better community health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;