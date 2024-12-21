// src/utils/timeUtils.js

/**
 * Formats seconds into different time string formats
 * @param {number} seconds - Total seconds to format
 * @param {Object} options - Formatting options
 * @param {boolean} options.showHours - Whether to show hours even if 0
 * @param {boolean} options.compact - Whether to use compact format (1h 30m)
 * @param {boolean} options.showSeconds - Whether to include seconds
 * @returns {string} Formatted time string
 */
export const formatTime = (seconds, options = {}) => {
  const {
    showHours = true,
    compact = false,
    showSeconds = true,
  } = options;

  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '00:00';
  }

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Compact format (1h 30m 45s)
  if (compact) {
    const parts = [];
    
    if (hrs > 0 || showHours) {
      parts.push(`${hrs}h`);
    }
    
    parts.push(`${mins}m`);
    
    if (showSeconds) {
      parts.push(`${secs}s`);
    }
    
    return parts.join(' ');
  }

  // Standard format (HH:MM:SS or MM:SS)
  const padNumber = (num) => num.toString().padStart(2, '0');
  
  if (hrs > 0 || showHours) {
    return showSeconds 
      ? `${padNumber(hrs)}:${padNumber(mins)}:${padNumber(secs)}`
      : `${padNumber(hrs)}:${padNumber(mins)}`;
  }

  return showSeconds 
    ? `${padNumber(mins)}:${padNumber(secs)}`
    : padNumber(mins);
};

/**
 * Formats duration into human-readable string
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration string
 */
export const formatDuration = (minutes) => {
  if (typeof minutes !== 'number' || isNaN(minutes) || minutes < 0) {
    return '0 min';
  }

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs === 0) {
    return `${mins} min`;
  }

  if (mins === 0) {
    return `${hrs} hr`;
  }

  return `${hrs} hr ${mins} min`;
};

/**
 * Get elapsed time string from a start time
 * @param {Date} startTime - Start time
 * @returns {string} Elapsed time string
 */
export const getElapsedTime = (startTime) => {
  if (!(startTime instanceof Date)) {
    return '0:00';
  }

  const elapsed = Math.floor((new Date() - startTime) / 1000);
  return formatTime(elapsed, { showHours: false });
};

// Usage examples:
/*
// Basic time formatting
formatTime(3665) // "01:01:05"
formatTime(65) // "01:05"
formatTime(3665, { compact: true }) // "1h 1m 5s"

// Duration formatting
formatDuration(90) // "1 hr 30 min"
formatDuration(45) // "45 min"

// Elapsed time
const startTime = new Date();
// ... after some time
getElapsedTime(startTime) // "05:30"
*/