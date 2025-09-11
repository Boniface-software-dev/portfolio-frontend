import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const ErrorBoundary = ({ error, onRetry }) => {
  return (
    <div className="error-boundary">
      <div className="error-content">
        <AlertTriangle size={48} className="error-icon" />
        <h2>Something went wrong</h2>
        <p className="error-message">{error?.message || 'An unexpected error occurred'}</p>
        {onRetry && (
          <button className="btn-primary retry-button" onClick={onRetry}>
            <RefreshCw size={16} />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorBoundary;