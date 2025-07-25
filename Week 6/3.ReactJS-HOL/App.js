import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Jackson"
        school="Oxford University"
        total={420}
        goal={7}
      />
    </div>
  );
}

export default App;
