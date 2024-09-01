import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
const ReactFormHook = () => {
  const form = useForm({
    // defaultValues:{
    //   username: 'Batman',
    //   email: '',
    //   channel: '',
    // }

    defaultValues: async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return{
        username: data.username,
        email: data.email
      }
    }
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "87vh",
    backgroundColor: "#f0f0f0",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  };

  const formGroupStyle = {
    marginBottom: "1rem",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  };

  renderCount++;

  const onSubmit = (data) => {
    console.log("Data Submitted Successfully", data);
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate style={formStyle}>
        <h1 style={headingStyle}>renderCount({renderCount / 2})</h1>
        <h2 style={headingStyle}>Registration Form</h2>
        <div style={formGroupStyle}>
          <label htmlFor="username" style={labelStyle}>
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
            style={inputStyle}
          />
          <span style={{ color: "red" }}>{errors.username?.message}</span>
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid Gmail address",
              },
              validate: {
                notField: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "This email is not allowed..."
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("pom.com") ||
                    "This email is Illigle to enter"
                  );
                },
              },
            })}
            style={inputStyle}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="channel" style={labelStyle}>
            Channel Name:
          </label>
          <input
            type="text"
            placeholder="Enter YouTube channel name"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required",
              },
            })}
            style={inputStyle}
          />
          <span style={{ color: "red" }}>{errors.channel?.message}</span>
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};


export default ReactFormHook;