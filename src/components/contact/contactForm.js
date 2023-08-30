'use client';
import { useState } from "react";


export default function ContactForm() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setValues(prevValues => {
      return {
      ...prevValues,
      [e.target.id]: e.target.value
      }
    });
  } 

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: values.name,
      email: values.email,
      message: values.message
    };
    console.log(JSON.stringify(data));
    
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    response.ok ? alert("Mensaje enviado exitosamente") : alert("Intento fallido");
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 items-end text-orange-200">
          <div className="flex flex-row gap-4">
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                autoComplete="off"
                id="name" 
                required
                minLength={2}
                maxLength={50}
                value={values.name}
                onChange={handleChange}
                className="text-black"
                />
          </div>
          <div className="flex flex-row gap-4">
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                autoComplete="off"
                id="email"
                required
                maxLength={50}
                minLength={4}
                value={values.email}
                onChange={handleChange}
                className="text-black"
                />
          </div>
          <div className="flex flex-row gap-4 w-full text-black">
            <textarea 
                name="message"
                id="message"
                rows={6}
                minLength={5}
                maxLength={400}
                placeholder="Write your message here"
                value={values.message}
                onChange={handleChange}
                className="w-full p-2"
                />
          </div>
          <button type="submit" className="bg-perla-primary text-white px-4 py-2">send</button>
        </div>
      </form>
    </div>
  );
}