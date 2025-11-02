import React, { useState } from "react";

const FormWithError = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ });
//handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (e) => {
   let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) 
      tempErrors.email = "enter a valid email";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
}
//handle from submission
const handleSubmit=(e)=>{
    e.preventDefault();
    if(validate()){
        console.log("Form Submitted Successfully:", formData);
        alert("form submitted successfully");
        setFormData({name:"",email:""});//reset after submission
    }
}

  

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:300,margin:"20px auto"}}>
      <div style={{marginBottom:10}}>
        <label>Name:</label> <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter your name"
          style={{width:"100%",padding:5}}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label> <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      

      <button type="submit" style={{padding:"6px 12px"}}>Submit</button>
    </form>
  );
};

export default FormWithError;
