import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-black/5 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          'transition-all duration-700',
          loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm scale-105',
          className
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};
