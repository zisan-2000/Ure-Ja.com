import React, { useState } from 'react';

function HotelBookingForm() {
  const [origin, setOrigin] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      Origin: origin,
      Checkindate: checkinDate,
      Checkoutdate: checkoutDate
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data posted successfully');
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="container">
      <h3 className="login-heading mb-4">Amadeus Hotel booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            placeholder="Where do you go?"
            required
            autoFocus
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <label>Where do you go?</label>
        </div>

        <div className="form-label-group">
          <input
            type="date"
            className="form-control"
            placeholder="Checkin Date"
            required
            value={checkinDate}
            onChange={(e) => setCheckinDate(e.target.value)}
          />
          <label>Checkin Date</label>
        </div>

        <div className="form-label-group">
          <input
            type="date"
            className="form-control"
            placeholder="Checkout Date"
            required
            value={checkoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
          />
          <label>Checkout Date</label>
        </div>

        <button
          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
          type="submit"
        >
          Search Hotel
        </button>
      </form>
    </div>
  );
}

export default HotelBookingForm;
