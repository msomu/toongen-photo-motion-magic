// Pricing component
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import PlatformModal from './PlatformModal';

const Pricing = () => {
  const [isPlatformModalOpen, setIsPlatformModalOpen] = React.useState(false);
  
  const plans = [
    {
      name: "Free Tier",
      price: "₹0",
      period: "/day",
      description: "Perfect for trying out ToonGen",
      features: [
        "3 images per day",
        "Basic cartoon styles",
        "Standard quality"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Weekly Premium",
      price: "₹690",
      period: "/week",
      description: "Great for regular creators",
      features: [
        "Unlimited images",
        "All premium styles",
        "HD quality exports",
        "No ads",
        "No watermarks",
        "Priority support"
      ],
      cta: "Upgrade Now",
      popular: false
    },
    {
      name: "Annual Premium",
      price: "₹2550",
      period: "/year",
      description: "Best value for power users",
      features: [
        "Unlimited images",
        "All premium styles",
        "HD quality exports",
        "No ads",
        "No watermarks",
        "Priority support",
        "Early access to new features"
      ],
      cta: "Upgrade Now",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-2 border-purple-500 shadow-2xl scale-105' : 'border shadow-lg'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => setIsPlatformModalOpen(true)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <PlatformModal 
        isOpen={isPlatformModalOpen} 
        onClose={() => setIsPlatformModalOpen(false)} 
      />
    </section>
  );
};

export default Pricing;