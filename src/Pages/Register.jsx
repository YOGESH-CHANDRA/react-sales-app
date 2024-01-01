import { useState } from "react";


// registration form 
const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegisterUser({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <div className="register ">
      <h1 className="text-center my-2">Registration Form</h1>
      <form className="bg-light p-2">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            name="firstName"
            value={registerUser.firstName}
            onChange={inputHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName"></label>Last Name
          <input
            type="text"
            id="lastName"
            className="form-control"
            name="lastName"
            value={registerUser.lastName}
            onChange={inputHandler}
          />
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          value={registerUser.email}
          onChange={inputHandler}
        />

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={registerUser.password}
            onChange={inputHandler}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
