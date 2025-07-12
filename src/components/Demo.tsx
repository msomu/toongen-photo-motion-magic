
// Demo component
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import PlatformModal from './PlatformModal';

const Demo = () => {
  const [activeDemo, setActiveDemo] = React.useState(0);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = React.useState(false);
  
  const demos = [
    {
      title: "Portrait Animation",
      description: "Transform portraits into lively cartoon characters",
      beforeImage: "photo-1649972904349-6e44c42644a7",
      style: "Cartoon Style"
    },
    {
      title: "Landscape Magic",
      description: "Turn scenic photos into animated masterpieces",
      beforeImage: "photo-1488590528505-98d2b5aba04b",
      style: "Watercolor Style"
    },
    {
      title: "Pet Animation",
      description: "Bring your furry friends to life with adorable animations",
      beforeImage: "photo-1581091226825-a6a2a5aee158",
      style: "Anime Style"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See the Magic in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how Toongen transforms ordinary photos into extraordinary animations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    {demos[activeDemo].style}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    {demos[activeDemo].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg">
                    {demos[activeDemo].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    onClick={() => setIsPlatformModalOpen(true)}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Try It Now
                  </Button>
                  
                  <Button variant="outline" size="lg">
                    View More Examples
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="flex space-x-2 pt-4">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeDemo 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 text-center">Before</div>
                    <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/f209f383-9be9-48c9-9344-7e20febe208f.png"
                        alt="Before animation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 text-center">After</div>
                    <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/169fcbd7-fd85-437d-bac1-17d2f9bdce7f.png"
                        alt="After animation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
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

export default Demo;
