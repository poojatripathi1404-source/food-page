import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
          <Utensils className="w-6 h-6 text-stone-400" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-stone-900 text-stone-200 p-6 flex flex-col justify-end">
          <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center mb-3">
            <Utensils className="w-5 h-5 text-amber-500" />
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-mono">Culinary Archive</span>
          <p className="font-serif text-lg font-medium text-stone-100 mt-1 line-clamp-2">
            {fallbackTitle || alt}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
