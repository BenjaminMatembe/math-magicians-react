import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      const category = 'money';
      const key = 'dByEAwV9LJFlCKUgjAX60A==fvZH8LP91QrzRc6I';
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': key,
            },
          },
        );
        const fetchedData = await response.json();
        setQuote(fetchedData[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (isloading) {
    return <p>PageLoading...</p>;
  }

  if (error) {
    return <p>no data fetched</p>;
  }

  return (
    <h3>{quote.quote}</h3>
  );
}
