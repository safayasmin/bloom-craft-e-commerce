import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 border-t border-secondary/10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <div className="text-2xl text-secondary font-serif">
            BloomCraft
          </div>
          <p className="text-on-surface-variant max-w-[200px] text-sm">
            Artisanal florals for the discerning collector.
          </p>
        </div>

        {/* Collections */}
        <div className="flex flex-col space-y-3">
          <span className="text-sm text-secondary uppercase mb-2">
            Collections
          </span>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Boutique
          </a>
          <a href="#" className="text-secondary font-bold">
            Artisan Series
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Gifting
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-3">
          <span className="text-sm text-secondary uppercase mb-2">
            Company
          </span>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Our Story
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Contact Us
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Shipping & Returns
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-3">
          <span className="text-sm text-secondary uppercase mb-2">
            Legal
          </span>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Privacy Policy
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary">
            Terms of Service
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-xs text-on-surface-variant/60">
          © 2026 BloomCraft Artisan Florals. All rights reserved.
        </p>

        <div className="flex space-x-6 text-on-surface-variant/60 mt-4 md:mt-0">
          <span className="material-symbols-outlined text-lg">face</span>
          <span className="material-symbols-outlined text-lg">camera</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;