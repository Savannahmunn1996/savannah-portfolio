import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "firstName") {
      return setFirstName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    //   return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank You ${firstName}, I will get back with you! `);
    setFirstName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h2 className="font-myFont text-3xl text-pink-400 text-center text-bold pt-4 mt-16 mb-16 pb-4">
        Hey Fabulous {firstName}
      </h2>
      <form className="flex flex-col justify-center items-center">
        <input
          className="bg-blue-100 m-8 rounded-md w-80 "
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />{" "}
        <br></br>
        <input
          className="bg-blue-100 m-8 rounded-md w-80"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <br></br>
        <input
          className="bg-blue-100 m-8 rounded-md w-80 h-28"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <br></br>
        <button
          className="rounded-md bg-pink-300 hover:bg-cyan-500 border-solid border-4 border-indigo-300 text-white w-40 h-18"
          type="button"
          onClick={handleFormSubmit}
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
}
