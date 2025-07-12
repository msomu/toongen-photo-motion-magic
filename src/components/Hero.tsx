
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Star } from 'lucide-react';
import PlatformModal from './PlatformModal';

const Hero = () => {
  const [isPlatformModalOpen, setIsPlatformModalOpen] = React.useState(false);

  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Now Available on App Store & Google Play</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn your selfies into
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  anime in seconds
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                AI-powered cartoon image generator. Fast, fun, and free to try.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => setIsPlatformModalOpen(true)}
              >
                Generate Your Toon
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">AI-Powered</div>
                <div className="text-sm text-gray-600">Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">14+ Styles</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Instant</div>
                <div className="text-sm text-gray-600">Results</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-scale-in">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-900">Toongen</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-32 bg-gray-100 rounded-xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/portrait-original.png"
                        alt="Before photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-2 border-r-2 border-t-3 border-transparent border-t-white ml-0.5"></div>
                      </div>
                    </div>
                    
                    <div className="h-32 bg-gray-100 rounded-xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/portrait-anime.png"
                        alt="After anime transformation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      <PlatformModal 
        isOpen={isPlatformModalOpen} 
        onClose={() => setIsPlatformModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
