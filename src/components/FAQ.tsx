import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How is it different from other cartoon apps?",
      answer: "ToonGen uses advanced AI technology specifically trained on anime and cartoon styles. We offer faster processing (3-5 seconds), higher quality outputs, and more diverse style options than competitors."
    },
    {
      question: "Do I need to pay to use it?",
      answer: "ToonGen offers 3 free images per month. For unlimited access to all premium styles and features, upgrade to our Premium plan for just ₹99/month."
    },
    {
      question: "What about privacy?",
      answer: "Your privacy is our priority. We don't store your original photos after processing, and all data is encrypted. Your generated images are only saved if you choose to download them."
    },
    {
      question: "What styles are available?",
      answer: "We offer multiple styles including anime, comic book, sketch, watercolor, and more. Premium users get access to all styles and new ones as they're released."
    },
    {
      question: "How long does it take to generate an image?",
      answer: "Most images are processed in 3-5 seconds. Processing time may vary slightly based on image complexity and current server load."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;