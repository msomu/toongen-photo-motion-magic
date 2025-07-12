
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Toongen
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your photos into magical animations with the power of AI. Available on iOS and Android.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Animation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multiple Styles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fast Processing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HD Quality</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div id="download">
              <h4 className="font-semibold mb-4">Download Now</h4>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => window.open('https://apps.apple.com/in/app/toongen/id6745421916', '_blank')}
                >
                  App Store
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.msomu.toongen', '_blank')}
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Toongen. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <a href="https://msomu.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">by msomu</a>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
