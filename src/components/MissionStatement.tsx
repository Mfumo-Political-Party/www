/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Target, Shield, Users } from "lucide-react";

const MissionStatement = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Our mission is to champion democracy, represent citizens' interests,
            and drive meaningful progress for a better future. We are committed
            to fostering positive change, empowering communities, and shaping a
            fair and inclusive political landscape. Join us in building a
            transparent, accountable, and prosperous nation for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Vision
            </h3>
            <p className="text-gray-600 text-center">
              To establish a dynamic platform for governance, leadership
              development, and electoral participation, empowering citizens in
              alignment with the Constitution of the Republic of South Africa.
              Our vision is to lead a nation where every individual has equal
              opportunities to succeed and prosper, under a transparent,
              accountable, and people-centered government.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Values
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Integrity and Transparency
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Community Empowerment
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Sustainable Development
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Social Justice
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Commitment
            </h3>
            <p className="text-gray-600 text-center">
              We are dedicated to serving all South Africans through inclusive
              policies, ethical leadership, and community-driven initiatives
              that promote unity and progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
