
import React from 'react';
import { cn } from '@/lib/utils';

interface ThreeDElementProps {
  children: React.ReactNode;
  className?: string;
}

// Simplified version without 3D effects
const ThreeDElement = ({
  children,
  className,
}: ThreeDElementProps) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};

export default ThreeDElement;
