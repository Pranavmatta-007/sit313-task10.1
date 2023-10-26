import React, { useState } from 'react';
import './sign-up.css';

function Sign() {
  const [mail, sendmail] = useState('');

  const subscription = async () => {
    try {
      const response = await fetch('http://localhost:2070/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(mail)}`, // Fix here
      });

      if (!response.ok) {
        alert('Email not sent');
      } else {
        alert('Email sent successfully');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="container">
      <div className="container-inner">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and offers!</p>
        <form id="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={mail}
            onChange={(e) => sendmail(e.target.value)}
          />
          <button type="button" onClick={subscription}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
