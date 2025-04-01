import React from "react";
import { Target, Shield, Users } from "lucide-react";

const MissionStatement = () => {
  const coreValues = [
    {
      title: "Democracy & Electoral Participation",
      description:
        "Upholding democratic principles and encouraging active citizen participation in governance",
    },
    {
      title: "Transparency & Accountability",
      description:
        "Committed to honest leadership and responsible management of public resources",
    },
    {
      title: "Inclusivity & Equality",
      description:
        "Creating equal opportunities for all citizens regardless of background",
    },
    {
      title: "Economic Empowerment",
      description:
        "Supporting job creation, entrepreneurship, and sustainable development",
    },
    {
      title: "Community Engagement",
      description:
        "Ensuring citizen voices shape national policies through grassroots participation",
    },
    {
      title: "Integrity & Ethics",
      description:
        "Maintaining the highest standards of integrity in leadership",
    },
    {
      title: "Social Justice",
      description:
        "Protecting fundamental human rights and fair treatment for all South Africans",
    },
    {
      title: "National Unity",
      description: "Fostering unity and social cohesion for a better future",
    },
  ];

  return (
    <section
      id="mission"
      className="py-16 bg-gradient-to-b from-primary/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            To build an inclusive, prosperous, and just South Africa through
            ethical leadership, community empowerment, and sustainable
            development.
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
              Creating a South Africa where every citizen has equal
              opportunities for success and prosperity, supported by transparent
              and accountable governance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Core Values
            </h3>
            <div className="h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {coreValues.map((value, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <h4 className="font-medium text-primary">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
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
