import React, { useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState({
    name: "",
    message: "",
  });
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("BUTTON CLICKED");
    let name = post.name;
    let message = post.message;
    console.log(name);
    console.log(message);
    axios
      .post(
        `https://eqbtfy9xj2.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction`,
        {
          key1: `${name}, ${message}`,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div className="container">
      <div className="welcome">
        <h3>Welcome to AWS Immersion Day  {post.name} ! </h3>
        <br></br>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          placeholder="Your Name"
          value={post.name}
        />
        <input
          onChange={handleChange}
          name="question"
          placeholder="any questions?"
          value={post.message}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
