import { useEffect, useState } from 'react';

/**
 * Custom hook that returns a boolean indicating if the current viewport
 * matches the provided media query string
 * 
 * @param query Media query string to match against
 * @returns Boolean indicating if the media query matches
 * 
 * @example
 * const isLargeScreen = useMediaQuery('(min-width: 1024px)');
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial state
    setMatches(mediaQuery.matches);
    
    // Define listener function
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);
  
  return matches;
};

export default useMediaQuery; 