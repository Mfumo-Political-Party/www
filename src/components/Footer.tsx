import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "+27781744701"; // Format: country code + number
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to make a change with MFUMO!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* WhatsApp Button - Fixed Position */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 z-50"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden md:inline">
            Want to make a change? Chat with us!
          </span>
        </a>

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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-0">
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
