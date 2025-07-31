import React from 'react';
// You can use any image from public folder or web link

function App() {
  const heading = <h1>Office Space Rental Portal</h1>;

  const office = {
    name: "SkyTech Workspace",
    rent: 55000,
    address: "5th Avenue, New York"
  };

  const offices = [
    { name: "SkyTech Workspace", rent: 55000, address: "5th Avenue, New York" },
    { name: "CloudOffice", rent: 62000, address: "MG Road, Bengaluru" },
    { name: "BizHub", rent: 48000, address: "Marina Bay, Singapore" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      {/* Static image */}
      <img
        src="https://images.unsplash.com/photo-1560448075-bb0bffbf001d"
        alt="Office Space"
        width="400"
        style={{ marginBottom: "20px", borderRadius: "10px" }}
      />

      {/* Single office details */}
      <div style={{ marginBottom: "20px" }}>
        <h2>{office.name}</h2>
        <p>Address: {office.address}</p>
        <p style={{ color: office.rent > 60000 ? "green" : "red" }}>
          Rent: ₹{office.rent}
        </p>
      </div>

      {/* Multiple office listings */}
      <h2>Available Office Listings:</h2>
      {offices.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{item.name}</h3>
          <p>Address: {item.address}</p>
          <p style={{ color: item.rent > 60000 ? "green" : "red" }}>
            Rent: ₹{item.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
