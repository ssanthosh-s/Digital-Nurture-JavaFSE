import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can browse available flights, but you must log in to book tickets.</p>
      <ul>
        <li>Flight A → 10:00 AM</li>
        <li>Flight B → 3:00 PM</li>
        <li>Flight C → 9:00 PM</li>
      </ul>
    </div>
  );
}

export default GuestPage;
