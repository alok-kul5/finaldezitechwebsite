// src/animations/typewriter.js
import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string} text - Text to type out
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Typing speed in ms per character
 * @param {boolean} options.enabled - Whether to enable the effect
 * @returns {string} - Currently displayed text
 */
const useTypewriter = (text = '', options = {}) => {
  const { speed = 30, enabled = true } = options;
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, enabled]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return displayedText;
};

export default useTypewriter;

