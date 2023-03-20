import { useState } from "react";
import validation from "./validation";

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <form>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />

      <button>LOGIN</button>
    </form>
  );
};

export default Form;
