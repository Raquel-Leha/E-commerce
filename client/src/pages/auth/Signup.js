import React, { useState } from "react";
import { useAuth } from "../../context/providers/AuthContext";
import Spinner from "../../components/ui/Spinner";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const { signup, isLoading , errorMessage} = useAuth();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await signup(user);
  };

  return (
    <div className="row h-100">
      <div className="col-md-4 offset-md-4 p-2 my-auto">
      {errorMessage &&  <h1>{errorMessage}</h1>}
        <div className="card card-body">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                id="email"
                className="form-control rounded-0"
                placeholder="youremail@company.com"
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                className="form-control rounded-0"
                placeholder="Write your password"
              ></input>
            </div>
            <button
              className="btn btn-primary rounded-0"
              disabled={!user.email || !user.password || isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Cargando...</span>
                </>
              ) : (
                "Registrarse"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
