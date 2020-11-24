import React, { useState } from "react";
import axios from "axios";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    comment: "",
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
    // console.log(contact.fName);
    // console.log(contact.lName);
    // console.log(contact.email);
    // console.log(contact.comment);
    axios
      .post(
        `https://ddjnbv88ng.execute-api.us-east-1.amazonaws.com/post/`,
        // `https://eqbtfy9xj2.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction`,
        {
          fName: contact.fName,
          lName: contact.lName,
          email: contact.email,
          comment: contact.comment,
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
        comment: "",
      };
    });
  }

  return (
    <div className="container">
      <h1>Welcome to Serverless Workshop !</h1>
      <h2>
        {contact.fName} {contact.lName}
      </h2>
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
          name="comment"
          placeholder="Comment"
          value={contact.comment}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;