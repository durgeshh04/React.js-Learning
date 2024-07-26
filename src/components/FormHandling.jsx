import React, { useState } from "react";

const FormHandling = () => {
  const primary = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const inputGroup = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  };

  const label = {
    minWidth: "80px",
  };

  const input = {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const button = {
    margin: "10px",
  };

  const btn = {
    backgroundColor: "blue",
    width: "100%",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    birthdate: "",
    skill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${formData.username}`);
    console.log(`Password: ${formData.password}`);
    console.log(`Birthdate: ${formData.birthdate}`);
    console.log(`Skill: ${formData.skill}`);
  };

  return (
    <div>
      <form
        style={{ maxWidth: "300px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <div style={primary}>
          <div style={inputGroup}>
            <label htmlFor="username" style={label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              style={input}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="password" style={label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              style={input}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="birthdate" style={label}>
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              style={input}
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="skill" style={label}>
              Skills
            </label>
            <select
              name="skill"
              id="skill"
              value={formData.skill}
              style={input}
              onChange={handleChange}
              required
            >
              <option value="">None</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div style={button}>
            <button style={btn}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormHandling;