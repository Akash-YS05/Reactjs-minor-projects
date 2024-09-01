import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const isValidated = (firstname) => {
    if (firstname.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;

    if (evt.target.name === "firstname") {
      isValidated(evt.target.value);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDeafult();
    if (isValidated) {
      setFormData({ firstname: "", lastname: "", password: "" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid white",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1>Sign-up Form</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="firstname" style={{ textAlign: "left" }}>
          Enter First Name
        </label>
        <input
          style={{ padding: "10px", margin: "15px 0 0 0" }}
          type="text"
          placeholder="First name"
          value={formData.firstname}
          onChange={handleChange}
          id="firstname"
          name="firstname"
        />
        {!isValid && (
          <p style={{ color: "red", textAlign: "left" }}>
            First name is required!
          </p>
        )}

        <label htmlFor="lastname" style={{ textAlign: "left" }}>
          Enter Last Name
        </label>
        <input
          style={{ padding: "10px", margin: "15px 0" }}
          type="text"
          placeholder="Last name"
          value={formData.lastname}
          onChange={handleChange}
          id="lastname"
          name="lastname"
        />

        <label htmlFor="password" style={{ textAlign: "left" }}>
          Enter Password
        </label>
        <input
          style={{ padding: "10px", margin: "15px 0" }}
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          name="password"
        />
      </form>

      <div>
        <button style={{ marginTop: "30px", border: "1px solid white" }}>
          Submit Info
        </button>
      </div>
    </div>
  );
}
