import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg mb-4">Sarah Mitchell</h3>
            <p className="text-gray-400 text-sm">
              Business Analyst passionate about transforming data into actionable 
              insights and driving strategic business decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h3 className="text-lg mb-4">Professional</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Available for consulting projects</li>
              <li>Open to full-time opportunities</li>
              <li>Remote & hybrid work options</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            &copy; {currentYear} Sarah Mitchell. Built with <Heart size={16} className="text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
