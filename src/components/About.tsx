/* eslint-disable no-irregular-whitespace */
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="mt-8 md:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
            Building a Stronger South Africa Together Mfumo, meaning
            "Government" is committed to creating a just, prosperous, and
            inclusive nation through transparent governance and community-driven
            policies. We believe in empowering citizens, fostering economic
            growth, and ensuring equal opportunities for all. As a platform
            dedicated to leadership, governance, recruitment, electoral
            participation, and citizen empowerment, we operate in full adherence
            to the Constitution of the Republic of South Africa. Our goal is to
            drive meaningful change by advocating for policies that prioritize
            the needs of the people, promote economic development, and uphold
            democracy. Join us in shaping a better future for South Africa—one
            built on integrity, accountability, and progress for all.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                Transparency
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Open and accountable governance at all levels
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                Community
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Policies driven by the needs of our people
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                Progress
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Sustainable development for future generations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
