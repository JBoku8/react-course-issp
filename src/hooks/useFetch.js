import { useState, useEffect } from 'react';

export const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (mounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((exception) => {
        if (mounted) {
          setError(exception);
          setData(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [url, options]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
