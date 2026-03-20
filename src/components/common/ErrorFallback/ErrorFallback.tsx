import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button } from '../index';
import classes from './ErrorFallback.module.css';

interface ErrorFallbackProps extends FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetErrorBoundary 
}) => {
  const copyErrorToClipboard = () => {
    const errorInfo = `
Error: ${error.message}
Stack: ${error.stack}
Time: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
    `.trim();
    
    navigator.clipboard.writeText(errorInfo).then(() => {
      alert('Error details copied to clipboard');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorInfo;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Error details copied to clipboard');
    });
  };

  return (
    <div className={classes.errorFallback}>
      <div className={classes.errorContainer}>
        <h2 className={classes.errorTitle}>Something went wrong</h2>
        
        <div className={classes.errorMessage}>
          <h3>Error Details:</h3>
          <p className={classes.errorText}>{error.message}</p>
        </div>

        <details className={classes.errorDetails}>
          <summary className={classes.errorSummary}>Show Stack Trace</summary>
          <pre className={classes.errorStack}>{error.stack}</pre>
        </details>

        <div className={classes.errorActions}>
          <Button 
            onClick={resetErrorBoundary}
            className={classes.retryButton}
          >
            Try Again
          </Button>
          
          <Button 
            onClick={copyErrorToClipboard}
            transparent
            className={classes.copyButton}
          >
            Copy Error Details
          </Button>
          
          <Button 
            onClick={() => window.location.reload()}
            transparent
            className={classes.reloadButton}
          >
            Reload Page
          </Button>
        </div>

        <div className={classes.errorHelp}>
          <p>If this problem persists, please contact support with the error details above.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
