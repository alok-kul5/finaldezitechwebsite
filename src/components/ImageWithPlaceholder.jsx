// src/components/ImageWithPlaceholder.jsx
import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { imageReveal } from '../lib/framerVariants';

/**
 * Lazy-loaded image component with blur-up placeholder
 * Supports Unsplash/Pexels images with source attribution in comments
 */
const ImageWithPlaceholder = ({
  src,
  alt,
  placeholderSrc,
  sources = [],
  loading = 'lazy',
  decoding = 'async',
  className = '',
  imgClassName = '',
  tone = 'warm',
  vignette = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Default placeholder: subtle gradient matching Dezitech palette
  const defaultPlaceholder =
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22480%22%20height%3D%22320%22%20viewBox%3D%220%200%20480%20320%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233E0E0B%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23150808%22/%3E%3C/linearGradient%3E%3Cfilter%20id%3D%22f%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3CfeGaussianBlur%20stdDeviation%3D%2245%22/%3E%3C/filter%3E%3C/defs%3E%3Crect%20width%3D%22480%22%20height%3D%20320%22%20rx%3D%2232%22%20fill%3D%22url(%23g)%22%20filter%3D%22url(%23f)%22/%3E%3C/svg%3E';

  const resolvedPlaceholder = placeholderSrc || defaultPlaceholder;
  const resolvedSrc = useMemo(() => (hasError ? resolvedPlaceholder : src), [hasError, resolvedPlaceholder, src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  const imgElement = (
    <motion.img
      {...props}
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
      variants={imageReveal}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      className={`image-with-placeholder__img ${imgClassName}`.trim()}
    />
  );

  return (
    <figure className={`image-with-placeholder ${className}`.trim()} data-loaded={isLoaded} data-tone={tone}>
      {sources.length ? (
        <picture>
          {sources.map((source, idx) => (
            <source
              key={`${source.srcSet || source.src}-${source.type || 'default'}-${source.media || 'all'}-${idx}`}
              {...source}
            />
          ))}
          {imgElement}
        </picture>
      ) : (
        imgElement
      )}
      <div
        className="image-with-placeholder__placeholder"
        aria-hidden="true"
        style={{ opacity: isLoaded ? 0 : 1, backgroundImage: `url(${resolvedPlaceholder})` }}
      />
      {vignette && <span className="image-with-placeholder__vignette" aria-hidden="true" />}
      {vignette && <span className="image-with-placeholder__grade" aria-hidden="true" />}
    </figure>
  );
};

export default ImageWithPlaceholder;
