import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const ReactFormHookWithDynamicFields = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: [
        { address_line: "" },
      ],
    },
  });

  // Using useFieldArray to manage dynamic fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Data Submitted Successfully", data);
  };

  // Styles
  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
    marginBottom: "1rem",
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate style={formStyle}>
        <h3 style={headingStyle}>Dynamic Fields In useForm Hook</h3>

        {fields.map((field, index) => (
          <div key={field.id} style={formGroupStyle}>
            <label style={labelStyle} htmlFor={`address.${index}.address_line`}>
              Address Line {index + 1}
            </label>
            <input
              style={inputStyle}
              type="text"
              id={`address.${index}.address_line`}
              placeholder={`Enter Address Line ${index + 1}`}
              {...register(`address.${index}.address_line`, {
                required: "This field is required",
              })}
            />
            {errors?.address?.[index]?.address_line && (
              <p style={{ color: "red" }}>
                {errors.address[index].address_line.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => remove(index)}
              style={{ marginTop: "0.5rem", color: "red" }}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ address_line: "" })}
          style={buttonStyle}
        >
          Add Address Line
        </button>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReactFormHookWithDynamicFields;