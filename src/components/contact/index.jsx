// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";



function App() {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(emailForm),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setStatus(data.status);
        setResult(data.result);
        if (result.length > 0) {
          setResult('');
        }
      })
      .catch(error => console.error("Error:", error));
  };

  const handleEmailFormChange = e => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app">
      <h1>Contact Me</h1>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <input
          placeholder="name*"
          type="text"
          name="name"
          required={true}
          value={emailForm.name}
          onChange={handleEmailFormChange}
        />
        <input
          placeholder="email address*"
          type="email"
          name="email"
          required={true}
          value={emailForm.email}
          onChange={handleEmailFormChange}
        />
        <textarea
          maxLength={300}
          placeholder="message (max 300 characters)*"
          name="message"
          required={true}
          value={emailForm.message}
          onChange={handleEmailFormChange}
        />
        <button type="submit">Send</button>
      </form>
      {status === "success" && <h3>{result}</h3>}
      {status === "fail" && <h3>{result.error}</h3>}
    </div>
  );
}

export default App;