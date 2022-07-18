import "./Register.css";
import { useState } from "react";
import { alphanumeric, email, password } from "../../helpers/Validator";
import { formValidationError } from "../../helpers/Constant";
import { useNavigate } from "react-router";

const Register = () => {
  // state declaration  for get input from user
  const [getFormInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // state declaration for form check (flag)
  const [getFormCheck, setFormCheck] = useState(false);

  // state declaration for validate the input from user
  const [getFormValidation, setFormValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const onChangeHandler = (event) => {
    setFormInput({
      ...getFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFormCheck(true);
    setFormValidation({
      firstName: alphanumeric(getFormInput.firstName) ? false : true,
      lastName: alphanumeric(getFormInput.lastName) ? false : true,
      email: email(getFormInput.email) ? false : true,
      password: password(getFormInput.password) ? false : true,
    });

    if (
      alphanumeric(getFormInput.firstName) &&
      alphanumeric(getFormInput.lastName) &&
      email(getFormInput.email) &&
      password(getFormInput.password)
    ) {
      sessionStorage.setItem("email", getFormInput.email);
      sessionStorage.setItem("password", getFormInput.password);
      navigate("login");
    }
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
              <div className=" form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  // required
                  // pattern="^[A-Za-z]+{1,20}$"
                  name="firstName"
                  onChange={onChangeHandler}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              {getFormCheck && getFormValidation.firstName && (
                <div className="alert alert-danger">
                  {formValidationError.firstName}
                </div>
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  // required
                  // pattern="^[A-Za-z]+{1,20}$"
                  name="lastName"
                  onChange={onChangeHandler}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              {getFormCheck && getFormValidation.lastName && (
                <div className="alert alert-danger">
                  {formValidationError.lastName}
                </div>
              )}

              <div className=" form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  // required
                  name="email"
                  onChange={onChangeHandler}
                />
                <label htmlFor="email">Email address</label>

                <div id="emailHelp" className="form-text">
                  Your email will be a username
                </div>
              </div>
              {getFormCheck && getFormValidation.email && (
                <div className="alert alert-danger">
                  {formValidationError.email}
                </div>
              )}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  // required
                  // pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-]).{6,15})"
                  name="password"
                  onChange={onChangeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
              {getFormCheck && getFormValidation.password && (
                <div className="alert alert-danger">
                  {formValidationError.password}
                </div>
              )}
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
