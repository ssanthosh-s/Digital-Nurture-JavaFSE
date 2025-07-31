import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Rohit", "Rahul", "Surya", "Hardik", "Bumrah"];
  const evenTeam = ["Kohli", "Gill", "Jadeja", "Ashwin", "Shami", "Kuldeep"];

  // Destructuring example
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merge two arrays using spread
  const T20Players = ["Rohit", "Kohli", "Gill"];
  const RanjiTrophyPlayers = ["Jadeja", "Ashwin"];
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 & Ranji Players:</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
