import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [formData, setFormData] = useState({
    firstName:"John", 
    lastName: "Henry",
    admin: false
  });
  


  function handleNameChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    // if (event.target.type === "checkbox") {
    //   value = event.target.checked;
    // }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="firstName"
      onChange={handleNameChange} 
      value={formData.firstName} 
      />
      <input 
      type="text" 
      onChange={handleNameChange} 
      value={formData.lastName} 
      />
      {/* <input 
      type="checkbox" 
      name="admin"
      onChange={handleNameChange}
      checked={formData.admin}
      /> */}
      <button type="submit">Submit</button>
    </form>
  
    </div>
  
  );
}

export default Form;
