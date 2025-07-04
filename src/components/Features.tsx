
import React from 'react';
import { Sparkles, Zap, Palette, Share2, Camera, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Magic",
      description: "Advanced AI technology transforms your photos into stunning animations with just one tap."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your animated results in seconds, not minutes. Our optimized engine works at incredible speed."
    },
    {
      icon: Palette,
      title: "Multiple Styles",
      description: "Choose from cartoon, anime, watercolor, and many other artistic styles to match your vision."
    },
    {
      icon: Camera,
      title: "Smart Detection",
      description: "Automatically detects faces, objects, and scenes to create the most accurate animations."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your creations instantly on social media or save them to your gallery in high quality."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Crafted by artists and engineers who are passionate about bringing your memories to life."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create amazing animations from your photos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
