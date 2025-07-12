import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const features = [
    {
      title: "AI-Powered Technology",
      description: "Advanced machine learning creates stunning anime transformations",
      icon: "🤖"
    },
    {
      title: "14+ Art Styles",
      description: "From anime to cartoon, choose your perfect style",
      icon: "🎨"
    },
    {
      title: "Instant Results",
      description: "Get your animated avatar in just seconds",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Toongen?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of photo transformation with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;