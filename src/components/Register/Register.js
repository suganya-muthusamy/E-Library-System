import "./Register.css";
import { useState } from "react";

const Register = () => {
  // state declaration  for onChangeHandler
  const [getForm, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setForm({
      ...getForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-md-6">
            {/* <!-- signup form --> */}
            <form
              className="p-4 signup-form rounded"
              onSubmit={onSubmitHandler}
            >
              <h3 className="text-center mb-3">Signup Now!</h3>
              {getForm.firstName}
              <div className=" form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  required
                  name="firstName"
                  // pattern="^[A-Za-z]+{1,20}$"
                  onChange={onChangeHandler}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              {getForm.lastName}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  // pattern="^[A-Za-z]+{1,20}$"
                  name="lastName"
                  onChange={onChangeHandler}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              {getForm.email}
              <div className=" form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  required
                  name="email"
                  onChange={onChangeHandler}
                />
                <label htmlFor="email">Email address</label>

                <div id="emailHelp" className="form-text">
                  Your email will be a username
                </div>
              </div>
              <div className="form-floating mb-3">
                {getForm.password}
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  // pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-]).{6,15})"
                  name="password"
                  onChange={onChangeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
