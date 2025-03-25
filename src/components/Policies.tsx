import React, { useState } from "react";
import { Building2, GraduationCap, Heart, ChevronDown } from "lucide-react";

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <section id="policies" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Policies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Economic Growth Section */}
          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Building2 className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
              Economic Growth
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Empowering businesses, creating jobs, and implementing sustainable
              economic policies for a prosperous future.
            </p>
            <button
              onClick={() => togglePolicy("eco")}
              className="mt-4 text-accent-dark hover:text-accent flex items-center justify-center mx-auto"
            >
              Learn More{" "}
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  expandedPolicy === "eco" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedPolicy === "eco" && (
              <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-4">
                  MFUMO Political Party – Economic Growth Policy
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary">Background</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      The MFUMO Political Party is dedicated to fostering a
                      thriving economy by empowering businesses, creating jobs,
                      and implementing sustainable policies that ensure
                      long-term prosperity for all citizens. Our economic vision
                      is built on innovation, inclusivity, and resilience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Key Focus Areas
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Business Empowerment</li>
                      <li>Job Creation & Workforce Development</li>
                      <li>Sustainable Economic Policies</li>
                      <li>Trade & Investment Expansion</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Implementation Strategy
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Provide access to affordable financing for SMEs</li>
                      <li>
                        Reduce bureaucratic obstacles to encourage
                        entrepreneurship
                      </li>
                      <li>
                        Invest in vocational training and industries with high
                        job potential
                      </li>
                      <li>
                        Promote green energy investments and sustainable
                        practices
                      </li>
                      <li>
                        Expand local and international trade opportunities
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Economic Growth Goals
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>
                        Promote innovation through business-friendly policies
                      </li>
                      <li>
                        Reduce unemployment with new job creation in key sectors
                      </li>
                      <li>
                        Boost economic diversification and self-sufficiency
                      </li>
                      <li>
                        Attract foreign investment in strategic industries
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">Conclusion</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      The MFUMO Political Party believes that economic growth
                      should benefit everyone. Through strategic investments,
                      innovation, and business-friendly policies, we will build
                      a strong, sustainable, and prosperous economy that creates
                      opportunities for all.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Education Reform Section */}
          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <GraduationCap className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
              Education Reform
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Ensuring equal access to quality education for all citizens,
              fostering innovation and growth.
            </p>
            <button
              onClick={() => togglePolicy("ecd")}
              className="mt-4 text-accent-dark hover:text-accent flex items-center justify-center mx-auto"
            >
              Learn More{" "}
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  expandedPolicy === "ecd" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedPolicy === "ecd" && (
              <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-4">
                  MFUMO Political Party – Education Reform Policy
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary">Background</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Education is the foundation of a prosperous future. The
                      MFUMO Political Party aims to reform the education system
                      by ensuring equal access to high-quality education,
                      fostering innovation, and empowering citizens with the
                      skills needed to succeed in the modern world.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Key Focus Areas
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>Universal Access to Quality Education</li>
                      <li>Curriculum Innovation and Teacher Training</li>
                      <li>School Infrastructure Development</li>
                      <li>Vocational Training and Skills Development</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Implementation Strategy
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>
                        Expand access to primary and secondary education across
                        rural and urban areas
                      </li>
                      <li>
                        Integrate technology into classrooms and curriculum
                      </li>
                      <li>
                        Introduce scholarships and funding for higher education
                      </li>
                      <li>Build more vocational training centers</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Education Reform Goals
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>
                        Ensure no child is left behind in the education system
                      </li>
                      <li>
                        Develop future leaders by investing in STEM education
                      </li>
                      <li>
                        Provide opportunities for adult education and lifelong
                        learning
                      </li>
                      <li>
                        Increase collaboration between educational institutions
                        and industries to meet market demands
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">Conclusion</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      By reforming education, the MFUMO Political Party will
                      create a brighter future for all South Africans, ensuring
                      that every citizen has access to the knowledge and skills
                      necessary to thrive in a global economy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Healthcare Access Section */}
          <div className="text-center group">
            <div className="bg-primary-light/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Heart className="text-primary group-hover:text-accent-dark w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
              Healthcare Access
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Expanding healthcare services and improving public hospitals for
              better community health.
            </p>
            <button
              onClick={() => togglePolicy("health")}
              className="mt-4 text-accent-dark hover:text-accent flex items-center justify-center mx-auto"
            >
              Learn More{" "}
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  expandedPolicy === "health" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedPolicy === "health" && (
              <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-4">
                  MFUMO Political Party – Healthcare Access Policy
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary">Background</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      The MFUMO Political Party is committed to ensuring quality
                      healthcare for all by expanding services, improving public
                      hospitals, and strengthening community health programs.
                      Our goal is to build an accessible, affordable, and
                      efficient healthcare system that meets the needs of every
                      citizen.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">
                      Key Focus Areas
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      <li>
                        <strong>Expanding Healthcare Services:</strong> Increase
                        the number of healthcare facilities, especially in
                        underserved areas. Invest in telemedicine and mobile
                        clinics to bridge the healthcare gap in rural
                        communities.
                      </li>
                      <li>
                        <strong>Improving Public Hospitals:</strong> Upgrade
                        hospitals with modern equipment, increase the number of
                        trained healthcare professionals, and ensure a steady
                        supply of essential medicines. Strengthen hospital
                        management to improve service delivery and reduce
                        overcrowding.
                      </li>
                      <li>
                        <strong>Affordable & Inclusive Healthcare:</strong>{" "}
                        Lower healthcare costs through fair pricing regulations,
                        expand insurance coverage, and increase government
                        funding for public healthcare. Special programs will
                        target vulnerable populations including children, the
                        elderly, and people with disabilities.
                      </li>
                      <li>
                        <strong>Preventive & Community Health Programs:</strong>{" "}
                        Invest in disease prevention, vaccination campaigns,
                        health education, and regular screenings. Strengthen
                        maternal and child healthcare services and promote
                        mental health awareness and support services.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-primary">Conclusion</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Healthcare is a fundamental right. The MFUMO Political
                      Party is dedicated to expanding healthcare access,
                      modernizing public hospitals, and ensuring that all
                      citizens receive the medical care they deserve for a
                      healthier and stronger nation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;
