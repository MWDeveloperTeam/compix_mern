import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Store } from '../StateStore';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  const api = useContext(Store);

  const handleCatch = () => {
    // You can also log the error to an error reporting service
    if (!api) {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    }
  };
  useEffect(() => {
    handleCatch();
  }, []);

  if (api === {}) {
    // You can render any custom fallback UI
    return (
      <div>
        <h1>Something went wrong.</h1>
        {/* <p>{error.toString()}</p> */}
      </div>
    );
  }
  console.log(api.api);

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default ErrorBoundary;
