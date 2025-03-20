import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/eTQ4rUuhMiJ0LATKqHEmNvbBpyxe-WKCs7Rn_BDn549eCzFfiF9ypbksiQDxXlXhSYfvp_Ge7gA4RcYDBOAdXApPeBCKOvIC8_RVvzekc_CVHQ=s750")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Building a Better South Africa Together
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8">
            Join us in our mission to create a fair and prosperous nation
            through transparent governance and community-driven policies.
          </p>
          <button className="bg-accent hover:bg-accent-dark text-primary px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg font-medium transition duration-300">
            Join Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-accent w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>
  );
};

export default Hero;
