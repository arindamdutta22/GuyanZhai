import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ArtifactCardProps {
  id?: string;
  image: string;
  name: string;
  origin: string;
  period: string;
  price?: string;
  description: string;
  className?: string;
}

const ArtifactCard = ({
  id = "1", // Default ID if not provided
  image,
  name,
  origin,
  period,
  price,
  description,
  className,
}: ArtifactCardProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={cn("group cursor-pointer", className)}>
      <Link to={`/artifact/${id}`} className="block h-full">
      <div className="flex flex-col h-full overflow-hidden rounded-lg bg-tibet-navy/50 border border-tibet-gold/20 artifact-shadow">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            ref={imageRef}
            src="/placeholder.svg"
            data-src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-700 image-lazy-load group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-display text-xl font-medium text-white text-center px-4">{name}</h3>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow text-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="inline-block px-2 py-1 mb-2 bg-tibet-amber/20 text-tibet-amber text-xs uppercase tracking-wide rounded-sm">
                {origin}
              </span>
              <h3 className="font-display text-lg font-medium leading-tight">{name}</h3>
            </div>
          </div>
          
          <p className="text-sm text-white/70 mb-3">{period}</p>
          <p className="text-sm text-white/80 flex-grow">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtifactCard;
