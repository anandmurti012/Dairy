import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <h1 style={{color:'lightgreen'}}>Welcome to Dairy App</h1>
      <form>
        <input type="text" placeholder="userName" name="username" />
        <input type="email" placeholder="userEmail" name="useremail" />
        <input type="password" placeholder="Enter your password" name="password" />
        <button>Submit</button>
        <button>Submit2</button>
      </form>
    </div>
  );
}

export default App;