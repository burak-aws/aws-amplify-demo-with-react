import React, { useState } from "react";
import axios from "axios";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    question: "",
  });
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("BUTTON CLICKED");
    const value = event.target.value;
    const name = event.target.name;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    axios
      .post(
        `https://cbpt0rrntj.execute-api.eu-west-1.amazonaws.com/post`,
        {
          fName: contact.fName,
          lName: contact.lName,
          email: contact.email,
          question: contact.question,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    setContact((prevValue) => {
      return {
        fName: "",
        lName: "",
        email: "",
        question: "",
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Welcome to AWS Immersion Day {contact.fName} {contact.lName}
      </h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email Address"
          value={contact.email}
        />
        <input
          onChange={handleChange}
          name="question"
          placeholder="any questions?"
          value={contact.question}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
