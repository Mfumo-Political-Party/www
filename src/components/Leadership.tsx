import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const leaders = [
  {
    name: "Mr. Ngiphiwe Goodenough Kheswa",
    position: "Party Chairperson",
    image: "/images/mr-kheswa.jpg",
    bio: `Mr. Ngiphiwe Goodenough Kheswa is a dedicated leader, entrepreneur, and community development advocate with a passion for empowering people and driving positive change. As the Chairperson of the Mfumo Political Party, he brings a wealth of experience from both the public and private sectors.`,
    background: `Having served as a Community Development Worker (CDW), Mr. Kheswa worked closely with citizens to address social challenges, improve public services, and create opportunities for economic growth. He is also a successful entrepreneur, contributing to job creation and economic empowerment through his business ventures.`,
    vision: [
      "Economic empowerment through business-friendly policies",
      "Improved public services in healthcare and education",
      "Community-driven governance",
      "Transparency and accountability in leadership",
    ],
    qualities: [
      "Strong leadership and integrity",
      "Problem-solving expertise",
      "Community unification",
      "Vision for inclusive prosperity",
    ],
  },
];

const Leadership = () => {
  const [expandedLeader, setExpandedLeader] = useState<number | null>(null);

  const toggleLeader = (index: number) => {
    setExpandedLeader(expandedLeader === index ? null : index);
  };

  return (
    <section id="leadership" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {leader.name}
                      </h3>
                      <p className="text-accent-dark font-medium mt-1">
                        {leader.position}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleLeader(index)}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {expandedLeader === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-gray-600">{leader.bio}</p>

                  {expandedLeader === index && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Background
                        </h4>
                        <p className="text-gray-600">{leader.background}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Vision & Focus Areas
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {leader.vision.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Key Qualities
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {leader.qualities.map((quality, i) => (
                            <li key={i}>{quality}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
