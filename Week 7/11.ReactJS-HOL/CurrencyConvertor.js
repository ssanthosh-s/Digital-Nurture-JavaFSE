import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(rupees) / 90; // example: 1 Euro = 90 INR
    setEuro(result.toFixed(2));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Currency Converter (INR → Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in ₹"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
