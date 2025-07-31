import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book'); // 'book', 'blog', 'course'

  // 1. Element Variable Approach
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📘 Blogger App</h1>

      {/* Buttons */}
      <button onClick={() => setView('book')}>Book</button>{' '}
      <button onClick={() => setView('blog')}>Blog</button>{' '}
      <button onClick={() => setView('course')}>Course</button>

      <hr />

      {/* 2. Element Variable */}
      {content}

      {/* 3. Ternary Operator */}
      <div style={{ marginTop: '30px' }}>
        <h3>Conditional Render (Ternary):</h3>
        {view === 'book' ? <p>You are viewing books.</p> : <p>Not viewing books.</p>}
      </div>

      {/* 4. Logical AND */}
      {view === 'blog' && <p>✨ Exclusive Blog Content Available!</p>}
    </div>
  );
}

export default App;
