import React from 'react';
function Home_Task({ active }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h1>Welcome to My Website</h1>
      <h2>I am {active.name}</h2>
      <p>Role: {active.job}</p>
    </div>
  );
}
export default Home_Task;
