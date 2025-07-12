// Features component showcasing animation styles
import React from 'react';
import { Sparkles, Zap, Heart, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const styles = [
    {
      name: "Anime",
      image: "https://cdn.pixabay.com/photo/2024/04/16/21/11/ai-generated-8700789_1280.jpg",
      description: "Classic anime style with vibrant colors"
    },
    {
      name: "Shonen",
      image: "https://images.stockcake.com/public/c/f/8/cf857bd2-217a-4ba9-bb90-c95726713637/naruto-playing-volleyball-stockcake.jpg",
      description: "Dynamic action-packed manga style"
    },
    {
      name: "Game",
      image: "https://images.stockcake.com/public/6/5/9/6592ad52-34c8-4e87-8a8b-7d836a3fa907/dynamic-hero-charges-stockcake.jpg",
      description: "Video game character aesthetics"
    },
    {
      name: "Comic",
      image: "https://images.stockcake.com/public/1/1/4/114ebc43-3ea6-4b5f-b335-e3c640da6d48_large/little-hero-shines-stockcake.jpg",
      description: "Western comic book style"
    },
    {
      name: "90s",
      image: "https://images.stockcake.com/public/2/f/1/2f1e1064-c503-48f1-a917-58f99cbe7a8e/vintage-anime-portrait-stockcake.jpg",
      description: "Nostalgic 90s animation vibes"
    },
    {
      name: "CG Trainer",
      image: "https://images.stockcake.com/public/f/e/7/fe7a1a6c-dad8-49a6-8c9b-9096f24b285e/powerful-anime-trainer-stockcake.jpg",
      description: "Modern digital character training"
    },
    {
      name: "Crafts",
      image: "https://images.stockcake.com/public/b/b/c/bbc77b9a-544f-4a24-8331-6828817d0936_large/peaceful-knitting-moment-stockcake.jpg",
      description: "Handcrafted artistic style"
    },
    {
      name: "Seinen",
      image: "https://images.stockcake.com/public/7/7/1/7713a670-addc-4109-9a90-e27410bcdace/wistful-anime-portrait-stockcake.jpg",
      description: "Mature anime aesthetic"
    },
    {
      name: "Stock",
      image: "https://images.stockcake.com/public/0/b/f/0bf37e05-4ee2-4267-a142-1af43afedfe6/stressed-salary-man-stockcake.jpg",
      description: "Professional stock photo style"
    },
    {
      name: "Pony",
      image: "https://images.stockcake.com/public/3/c/f/3cf08c26-af53-4f96-a405-11516de23ae2/magical-meadow-pony-stockcake.jpg",
      description: "Colorful cartoon pony style"
    },
    {
      name: "Ben",
      image: "https://images.stockcake.com/public/f/c/9/fc9de74b-9395-4aef-8883-08d389779c23/haunted-big-ben-stockcake.jpg",
      description: "Unique Ben-inspired art style"
    },
    {
      name: "RPG",
      image: "https://images.stockcake.com/public/5/b/7/5b795140-cf67-4241-99d1-f9375326525b/digital-trading-master-stockcake.jpg",
      description: "Role-playing game character style"
    }
  ];

  const coreFeatures = [
    {
      icon: Zap,
      title: "Fast Generation",
      description: "Transform your photos in just 3-5 seconds with our advanced AI"
    },
    {
      icon: Heart,
      title: "Private & Secure",
      description: "Your photos are processed securely and privately"
    },
    {
      icon: Sparkles,
      title: "Unlimited Premium",
      description: "Create unlimited animations with premium subscription"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Styles Showcase */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Animation Style
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your photos with our diverse collection of animation styles. From classic anime to modern digital art.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {styles.map((style, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={style.image} 
                  alt={`${style.name} style example`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {style.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {style.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create amazing animations from your photos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  
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