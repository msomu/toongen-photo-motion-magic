
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlatformModal from './PlatformModal';
import { getAppStoreUrl } from '@/utils/deviceDetection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = React.useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const appStoreUrl = getAppStoreUrl();
    
    if (appStoreUrl) {
      // If on mobile, redirect directly to the appropriate app store
      window.location.href = appStoreUrl;
    } else {
      // If on desktop, show the platform selection modal
      setIsPlatformModalOpen(true);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Toongen
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Features
            </a>
            <a href="#demo" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Demo
            </a>
            <a href="#" onClick={handleDownloadClick} className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Download
            </a>
          </nav>

          <div className="hidden md:flex">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6"
              onClick={() => setIsPlatformModalOpen(true)}
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Features
              </a>
              <a href="#demo" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Demo
              </a>
              <a href="#" onClick={handleDownloadClick} className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Download
              </a>
              <div className="pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  onClick={() => setIsPlatformModalOpen(true)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <PlatformModal 
        isOpen={isPlatformModalOpen} 
        onClose={() => setIsPlatformModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
