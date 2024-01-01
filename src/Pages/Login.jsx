import { useState } from "react";


// login form component
const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserLogin((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setUserLogin({ email: "", password: "" });
  };
  return (
    <div className="login p-2">
      <h1 className="text-center my-2">LOGIN FORM</h1>
      <form className="bg-light p-2">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={userLogin.email}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={userLogin.password}
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

export default Login;
