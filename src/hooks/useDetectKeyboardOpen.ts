import { useState, useEffect } from 'react';
/**
 * Hook to detect when the virtual keyboard is open on mobile devices
 * @returns {boolean} isKeyboardOpen - Whether the virtual keyboard is currently visible
 */

type UseDetectKeyboardOpen = {
  onOpen?: () => void;
  onClose?: () => void;
};

export const useDetectKeyboardOpen = ({ onOpen, onClose }: UseDetectKeyboardOpen): boolean => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  useEffect(() => {
    // Store initial window height for comparison
    const initialHeight = window.innerHeight;

    const handleResize = () => {
      // If window height becomes significantly smaller, keyboard is likely visible
      // Common threshold is around 150px difference
      const heightDifference = initialHeight - window.innerHeight;
      setIsKeyboardOpen(heightDifference > 150);
      if (heightDifference > 150) {
        onOpen?.();
      } else {
        onClose?.();
      }
    };

    // Method 2: Detect through input focus events
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsKeyboardOpen(true);
        onOpen?.();
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        // Slight delay to ensure resize event has fired
        setTimeout(() => {
          handleResize();
        }, 100);
      }
    };

    // Register all event listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [onOpen, onClose]);

  return isKeyboardOpen;
};
