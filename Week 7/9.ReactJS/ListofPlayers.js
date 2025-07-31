import React from 'react';

const players = [
  { name: "Rohit", score: 85 },
  { name: "Kohli", score: 92 },
  { name: "Rahul", score: 65 },
  { name: "Gill", score: 77 },
  { name: "Surya", score: 68 },
  { name: "Hardik", score: 95 },
  { name: "Jadeja", score: 40 },
  { name: "Ashwin", score: 74 },
  { name: "Bumrah", score: 81 },
  { name: "Shami", score: 35 },
  { name: "Kuldeep", score: 50 }
];

const ListofPlayers = () => {
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
