import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Smartphone, Apple } from 'lucide-react';

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlatformModal = ({ isOpen, onClose }: PlatformModalProps) => {
  const handlePlatformSelect = (platform: 'ios' | 'android') => {
    const url = platform === 'ios' 
      ? 'https://apps.apple.com/in/app/toongen/id6745421916'
      : 'https://play.google.com/store/apps/details?id=com.msomu.toongen';
    
    window.open(url, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Choose Your Platform
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-4">
          <Button
            onClick={() => handlePlatformSelect('ios')}
            className="flex items-center justify-center gap-3 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg"
          >
            <Apple className="w-6 h-6" />
            Download for iOS
          </Button>
          <Button
            onClick={() => handlePlatformSelect('android')}
            className="flex items-center justify-center gap-3 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg"
          >
            <Smartphone className="w-6 h-6" />
            Download for Android
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformModal;