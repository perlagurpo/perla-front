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

  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);


  return(
    <div className="flex flex-col items-center text-perla-white gap-4">
      <h1 className="text-7xl font-[made-tommy-black] py-2">CONTACT</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 items-center text-perla-white font-[made-tommy-thin]">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col relative">
            <label for="email" className={`${nameActive ? "opacity-100" : "opacity-0"} transition duration-500`}>Name</label>
              <input 
                  type="text"
                  autoComplete="off"
                  id="name" 
                  required
                  minLength={2}
                  maxLength={50}
                  value={values.name}
                  onChange={handleChange}
                  className="text-xl text-perla-white bg-transparent border-b-2 border-perla-white focus:outline-none"
                  placeholder={`${nameActive ? "" : "Name"}`}
                  onFocus={() => setNameActive(true)}
                  onBlur={() => setNameActive(false)}
                  />
            </div>
            <div className="flex flex-col relative">
              <label for="email" className={`${emailActive ? "opacity-100" : "opacity-0"} transition duration-500`}>Email</label>
              <input 
                  type="email"
                  autoComplete="off"
                  id="email"
                  required
                  maxLength={50}
                  minLength={4}
                  value={values.email}
                  onChange={handleChange}
                  className="text-xl text-perla-white bg-transparent border-b-2 border-perla-white focus:outline-none"
                  placeholder={`${emailActive ? "" : "Email"}`}
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => setEmailActive(false)}
                  />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-xl text-perla-white">Message</p>
            <textarea 
                name="message"
                id="message"
                rows={4}
                minLength={5}
                maxLength={400}
                value={values.message}
                onChange={handleChange}
                className="w-full py-2 px-4 bg-transparent border-2 border-perla-white rounded-lg focus:outline-none"
                />
          </div>
          <button type="submit" className="bg-perla-primary text-white px-4 py-2 rounded-lg opacity-80 hover:opacity-100">send</button>
        </div>
      </form>
    </div>
  );
}