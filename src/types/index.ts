/**
 * Common type definitions for the library
 */

// Re-export component props
export * from '../components/Button/Button';

// Common types
export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface BaseComponentProps {
  className?: string;
  id?: string;
}

// Add more type definitions as needed 