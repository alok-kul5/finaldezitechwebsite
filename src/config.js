// src/config.js
/* Loader duration: default 3000ms (3 seconds) - cinematic and noticeably long
 * Override via REACT_APP_LOADER_MS environment variable
 * Example: REACT_APP_LOADER_MS=5000 npm start
 */
export const LOADER_DURATION_MS = parseInt(process.env.REACT_APP_LOADER_MS || '3000', 10);

/* Stagger delay for animations */
export const STAGGER_DELAY = 0.08;

