import React, { useEffect } from 'react';

const Install = () => {
  useEffect(() => {
    // Function to detect device type
    const detectDevice = () => {
      // Using unknown instead of any to satisfy ESLint
      const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as {opera: string}).opera;
      
      // Check if mobile
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
      
      // Check if Android
      const isAndroid = /android/i.test(userAgent.toLowerCase());
      
      // Check if iOS
      const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
      
      // Redirect based on device type
      if (isAndroid) {
        // Redirect to Google Play Store
        window.location.href = 'https://play.google.com/store/apps/details?id=com.msomu.toongen';
      } else if (isIOS) {
        // Redirect to App Store
        window.location.href = 'https://apps.apple.com/in/app/toongen/id6745421916';
      } else if (!isMobile) {
        // Redirect to home page if not on mobile
        window.location.href = '/';
      }
    };

    // Execute the detection and redirection
    detectDevice();
  }, []);

  // Return a loading message (will only be briefly visible before redirect)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting you to the appropriate store...</h1>
        <p className="text-gray-500">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Install;