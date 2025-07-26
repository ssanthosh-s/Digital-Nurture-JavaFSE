import React from 'react';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <Task
        title="Submit Assignment"
        description="Upload the project files to the portal"
        status="completed"
      />
      <Task
        title="Prepare for Meeting"
        description="Read the client requirements"
        status="pending"
      />
      <Task
        title="Update Resume"
        description="Add recent project and upload to portal"
        status="overdue"
      />
    </div>
  );
}

export default App;
