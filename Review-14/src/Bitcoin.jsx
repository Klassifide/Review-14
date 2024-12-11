import React, {useState, useEffect} from 'react'

  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
        );
        const data = await response.json();
        setBitcoinPrice(response.data.bpi.USD.rate);
        setLoading(false);
      } catch (error) {
        setError("Error getting yo baggy banks");
        setLoading(false);
      }
    };
    fetchBitcoinPrice();
  }, []);

  if (loading) return
  
  <div>Wait...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
    <div className='Money'>
      <h3>Bitcoin Price</h3>
      <p>${bitcoinPrice}</p>
    </div>
    </>
  );



export default Bitcoin
