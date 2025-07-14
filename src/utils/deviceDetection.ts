/**
 * Utility functions for device detection
 */

/**
 * Checks if the current device is a mobile device (iOS or Android)
 * @returns An object with isMobile, isIOS, and isAndroid flags
 */
export const detectDevice = (): { isMobile: boolean; isIOS: boolean; isAndroid: boolean } => {
  // Default to desktop if window is not available (SSR)
  if (typeof window === 'undefined') {
    return { isMobile: false, isIOS: false, isAndroid: false };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  
  // Check for iOS devices
  const isIOS = /iphone|ipad|ipod|macintosh/.test(userAgent) && 'ontouchend' in document;
  
  // Check for Android devices
  const isAndroid = /android/.test(userAgent);
  
  // A device is mobile if it's either iOS or Android
  const isMobile = isIOS || isAndroid;
  
  return { isMobile, isIOS, isAndroid };
};

/**
 * Gets the appropriate app store URL based on the device
 * @returns The URL to the appropriate app store, or null if not on a mobile device
 */
export const getAppStoreUrl = (): string | null => {
  const { isIOS, isAndroid, isMobile } = detectDevice();
  
  if (!isMobile) return null;
  
  if (isIOS) {
    return 'https://apps.apple.com/in/app/toongen/id6745421916';
  }
  
  if (isAndroid) {
    return 'https://play.google.com/store/apps/details?id=com.msomu.toongen';
  }
  
  return null;
};