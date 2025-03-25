import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">MFUMO</h3>
            <p className="text-sm md:text-base text-gray-300">
              Building a better South Africa through transparent governance and
              community-driven policies.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm md:text-base text-gray-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#policies"
                  className="text-sm md:text-base text-gray-300 hover:text-white"
                >
                  Our Policies
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="text-sm md:text-base text-gray-300 hover:text-white"
                >
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm md:text-base">
                  info@mfumopoliticalparty.org.za
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm md:text-base">+27 78 174 4701</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-gray-300">
              © {new Date().getFullYear()} Mfumo Political Party. All rights
              reserved.
            </p>
            <p className="text-sm text-gray-300">
              Website by{" "}
              <a
                href="https://www.skunkworksdigital.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light"
              >
                Skunkworks Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
