const Footer = () => {
  const footerSections = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'How It Works', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'For Universities', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety Guidelines', href: '#' },
      { name: 'Student Handbook', href: '#' },
      { name: 'Community Rules', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">PeerLearn</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              A peer-to-peer learning platform for students to exchange skills,
              collaborate, and grow together.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                {section}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} PeerLearn. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;