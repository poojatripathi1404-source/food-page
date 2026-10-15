import React, { useState, useEffect, useRef } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
  showAltOverlay?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  containerClassName = '',
  showAltOverlay = true,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the browser already has the image cached in memory, immediately display it
  useEffect(() => {
    setHasError(false);
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setIsLoaded(true);
      }
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-stone-200 group/img image-alt-overlay-container ${containerClassName}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center pointer-events-none">
          <Utensils className="w-6 h-6 text-stone-300" />
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
        <>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover/img:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            {...props}
          />

          {/* Styled Alt Text Hover Overlay & Tooltip */}
          {showAltOverlay && alt && (
            <div
              className="image-alt-tooltip absolute inset-x-0 bottom-0 p-2.5 sm:p-3.5 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-transparent pointer-events-none transition-all duration-300 ease-out opacity-0 translate-y-2 group-hover/img:opacity-100 group-hover/img:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 z-30 flex items-end"
              aria-hidden="true"
            >
              <div className="w-full bg-stone-950/90 backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/20 shadow-2xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.9)]"></span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-300 font-semibold">
                    Alt Text
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white leading-snug line-clamp-3 drop-shadow-sm font-sans">
                  {alt}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
