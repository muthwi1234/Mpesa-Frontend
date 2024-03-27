import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/stkpush', {
        phone: phone,
        accountNumber: 'UMESKIA PAY',
        amount: amount,
      });

      setMessage(response.data.msg);
    } catch (error) {
      console.error(error);
      setMessage('Request failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Mpesa Daraja API</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Amount</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Pay with M-Pesa
        </button>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

export default App;
