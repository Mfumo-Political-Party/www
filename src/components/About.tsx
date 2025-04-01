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
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Building a Stronger South Africa Together
          </h3>
        </div>

        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              As a political party, we aim to actively participate in elections
              across South Africa, with the ambition of securing the support and
              trust of the majority of South African citizens.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Mfumo, meaning "Rulership," is committed to creating a prosperous,
              and inclusive nation through transparent governance and
              community-driven policies. While believing in advocating for
              citizens, fostering economic growth, and securing equal
              opportunities for all. Our platform is dedicated to leadership,
              governance, recruitment, electoral participation, and citizen
              empowerment, and we operate in full compliance with the
              Constitution of the Republic of South Africa.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              To achieve our goals, we rely on the active participation and
              contributions of our members. Your involvement, whether through
              voting, volunteering, or financial backing, is crucial to our
              success. We seek the support of individuals who are committed to
              shaping a better future and driving the change South Africa needs.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Join us in building a better South Africa—one grounded in
              integrity, accountability, and progress for all. Together, we can
              create a nation that reflects the hopes and aspirations of all its
              people.
            </p>

            <div className="mt-8 flex justify-center">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center gap-2">
                Join Our Movement
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Our Vision
              </h4>
              <p className="text-gray-600">
                A united, prosperous South Africa where every citizen has the
                opportunity to thrive and contribute to our collective success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Our Approach
              </h4>
              <p className="text-gray-600">
                Transparent governance, community engagement, and sustainable
                development for lasting positive change.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Our Promise
              </h4>
              <p className="text-gray-600">
                Dedicated service to all South Africans through ethical
                leadership and inclusive policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
