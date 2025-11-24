/**
 * Linear interpolation utility
 * @param start - Start value
 * @param end - End value
 * @param factor - Interpolation factor (0-1)
 * @returns Interpolated value
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Clamped linear interpolation
 * @param start - Start value
 * @param end - End value
 * @param factor - Interpolation factor (will be clamped to 0-1)
 * @returns Interpolated value
 */
export function lerpClamped(start: number, end: number, factor: number): number {
  const clampedFactor = Math.max(0, Math.min(1, factor));
  return lerp(start, end, clampedFactor);
}

