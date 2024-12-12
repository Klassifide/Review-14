import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import BTC from './BTC.png';

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        setBitcoinPrice(response.data.bpi.USD.rate);
        setLoading(false);
      } catch (err) {
        setError('Approximately 100k');
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  if (loading) return <div>HACKED SCAMMED LOL420GF...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="Box">
      <div>
        <img src={BTC}/>
        <h1 className="Golden">Current Bitcoin Price</h1>
        </div>
      <p>${bitcoinPrice}</p>
    </div>
  );
};

export default App;
