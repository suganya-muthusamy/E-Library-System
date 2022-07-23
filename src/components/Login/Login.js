import { useState } from "react";
import "./Login.css";
import Book from "../../assets/image/book.jpg";
import { email, password } from "../../helpers/Validator";
import { formValidationError } from "../../helpers/Constant";
import { useNavigate } from "react-router";

const Login = () => {
  // state declaration for get input from user
  const [getLoginFormInput, setLoginFormInput] = useState({
    userName: "",
    password: "",
  });

  // state declaration for form check
  const [getLoginFormCheck, setLoginFormCheck] = useState(false);

  // state for form validation
  const [getLoginFormValidation, setLoginFormValidation] = useState({
    userName: false,
    password: false,
    sessionDetail: false,
  });

  const onChangeHandler = (event) => {
    setLoginFormInput({
      ...getLoginFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoginFormCheck(true);
    setLoginFormValidation({
      sessionDetail: false,
      userName: email(getLoginFormInput.userName) ? false : true,
      password: password(getLoginFormInput.password) ? false : true,
    });

    if (getLoginFormInput.userName && getLoginFormInput.password) {
      let userName = sessionStorage.getItem("email");
      let password = sessionStorage.getItem("password");
      if (
        userName !== getLoginFormInput.userName ||
        password !== getLoginFormInput.password
      ) {
        setLoginFormValidation({
          ...getLoginFormValidation,
          sessionDetail: true,
        });
      } else {
        sessionStorage.setItem("login", true);
        navigate("/dashboard");
      }
    }
  };
  return (
    <div>
      <div className="container-fluid login-container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-md-4 login-col mt-5 rounded p-5">
            <div className="login-head d-flex justify-content-between">
              <img src={Book} alt="book" width="80" height="80" />
              <h3 className="text-uppercase">
                <span>Library</span>
                <br />
                Management System
              </h3>
            </div>
            {getLoginFormCheck && getLoginFormValidation.sessionDetail && (
              <p className="text-danger text-center mt-3">
                {formValidationError.sessionDetails}
              </p>
            )}
            <form
              className="login-form my-4 d-flex justify-content-center"
              onSubmit={onSubmitHandler}
            >
              <table>
                <tr>
                  <td className="p-2">
                    <label htmlFor="username" className="form-label">
                      User Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="User Name"
                      // required
                      name="userName"
                      onChange={onChangeHandler}
                    />
                    {getLoginFormCheck && getLoginFormValidation.userName && (
                      <p className="text-danger error mt-2">
                        {formValidationError.email}
                      </p>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      // required
                      name="password"
                      onChange={onChangeHandler}
                    />
                    {getLoginFormCheck && getLoginFormValidation.password && (
                      <p className="text-danger error mt-2">
                        {formValidationError.password}
                      </p>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" className="btn btn-warning mt-2">
                      Login
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
