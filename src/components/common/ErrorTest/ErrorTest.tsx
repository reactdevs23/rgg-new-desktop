import React, { useState } from 'react';
import { Button } from '../index';

// Simple component to test error boundary
const ErrorTest: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('This is a test error to demonstrate the error boundary!');
  }

  return (
    <div style={{ padding: '20px', border: '2px dashed #ff6b6b', borderRadius: '8px', margin: '20px' }}>
      <h3>Error Boundary Test Component</h3>
      <p>Click the button below to trigger an error and see the error boundary in action:</p>
      <Button 
        onClick={() => setShouldThrow(true)}
        style={{ backgroundColor: '#ff6b6b', border: 'none', padding: '10px 20px', borderRadius: '5px', color: 'white' }}
      >
        Trigger Error
      </Button>
    </div>
  );
};

export default ErrorTest;
