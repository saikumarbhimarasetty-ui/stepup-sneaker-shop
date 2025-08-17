import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-poppins font-bold text-3xl mb-4">StepUp</h3>
            <p className="font-inter text-primary-foreground/80 mb-6 max-w-md">
              Your premium destination for stylish sneakers, leather shoes, and quality footwear. Step into style with confidence.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-poppins font-semibold text-lg">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="bg-accent hover:bg-brand-red-dark">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="font-inter text-sm text-primary-foreground/80 space-y-1">
              <p>Email: info@stepupsneakers.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Support: 24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-inter text-primary-foreground/60">
            © 2024 StepUp Sneakers. All rights reserved. | Made with ❤️ for sneaker enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;