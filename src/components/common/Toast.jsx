import { useEffect } from 'react';
import { X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const baseStyles = "fixed flex items-center w-full max-w-sm rounded-lg shadow-lg p-4 z-50";
  const positionStyles = "top-4 right-4";
  
  const typeStyles = {
    success: "bg-green-50 border border-green-200 text-green-800",
    error: "bg-red-50 border border-red-200 text-red-800",
    warning: "bg-yellow-50 border border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border border-blue-200 text-blue-800"
  };

  return (
    <div className={`${baseStyles} ${positionStyles} ${typeStyles[type]}`}>
      <div className="flex-1 mr-2">{message}</div>
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-auto focus:outline-none"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast; 