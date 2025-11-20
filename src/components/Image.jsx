import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { imageReveal } from '../lib/framerVariants';

const defaultPlaceholder =
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22480%22%20height%3D%22320%22%20viewBox%3D%220%200%20480%20320%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23101010%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23171717%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%22480%22%20height%3D%22320%22%20rx%3D%2232%22%20fill%3D%22url(%23g)%22/%3E%3C/svg%3E';

const Image = ({
  src,
  alt,
  placeholderSrc = defaultPlaceholder,
  sources = [],
  loading = 'lazy',
  className = '',
  imgClassName = '',
  decoding = 'async',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = useMemo(() => (hasError ? placeholderSrc : src), [hasError, placeholderSrc, src]);

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
      className={`image-shell__img ${imgClassName}`.trim()}
    />
  );

  return (
    <figure className={`image-shell ${className}`.trim()} data-loaded={isLoaded}>
      {sources.length ? (
        <picture>
          {sources.map((source) => (
            <source
              key={`${source.srcSet || source.src}-${source.type || 'default'}-${source.media || 'all'}`}
              {...source}
            />
          ))}
          {imgElement}
        </picture>
      ) : (
        imgElement
      )}
      <div
        className="image-shell__placeholder"
        aria-hidden="true"
        style={{ opacity: isLoaded ? 0 : 1, backgroundImage: `url(${placeholderSrc})` }}
      />
    </figure>
  );
};

export default Image;
