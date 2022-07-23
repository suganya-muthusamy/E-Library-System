import "./Addbook.css";
import { addbookFormValidationError } from "../../helpers/Constant";
import { alphanumeric, numeric } from "../../helpers/Validator";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Addbook() {
  // state declaration to get the book details
  const [getAddbookForm, setAddbookForm] = useState({
    bookID: "",
    bookTitle: "",
    bookDescription: "",
    authorName: "",
    noOfBooksAvailable: "",
  });

  //   state declaration for form validation
  const [getAddbookFormValidation, setAddbookFormValidation] = useState({
    bookID: false,
    bookTitle: false,
    bookDescription: false,
    authorName: false,
    noOfBooksAvailable: false,
  });

  // state declaration for form check
  const [getAddbookFormCheck, setAddbookFormCheck] = useState(false);

  // to store data in the session storage
  useEffect(() => {
    if (
      !getAddbookFormValidation.bookID &&
      !getAddbookFormValidation.bookTitle &&
      !getAddbookFormValidation.bookDescription &&
      !getAddbookFormValidation.authorName &&
      !getAddbookFormValidation.noOfBooksAvailable
    ) {
      let bookDetailsList = [];
      bookDetailsList.push(getAddbookForm);
      sessionStorage.setItem(
        "bookDetailsList",
        JSON.stringify(bookDetailsList)
      );
    }
  }, [getAddbookFormCheck]);

  const onChangeHandler = (event) => {
    setAddbookForm({
      ...getAddbookForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAddbookFormCheck(true);
    setAddbookFormValidation({
      bookID: numeric(getAddbookForm.bookID) ? false : true,
      bookTitle: alphanumeric(getAddbookForm.bookTitle) ? false : true,
      bookDescription: alphanumeric(getAddbookForm.bookDescription)
        ? false
        : true,
      authorName: alphanumeric(getAddbookForm.authorName) ? false : true,
      noOfBooksAvailable: numeric(getAddbookForm.noOfBooksAvailable)
        ? false
        : true,
    });
  };
  return (
    <div>
      <div className="container add-book mt-5">
        <div>
          <h3>Add Book</h3>
          <form onSubmit={onSubmitHandler}>
            <table>
              <tr>
                <td>
                  {getAddbookForm.bookID}
                  <label for="bookID" className="form-label">
                    Book ID
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="bookID"
                    name="bookID"
                    // required
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                </td>
                {getAddbookFormCheck && getAddbookFormValidation.bookID && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.bookID}
                  </p>
                )}
              </tr>
              <tr>
                <td>
                  {getAddbookForm.bookTitle}
                  <label for="bookTitle" className="form-label">
                    Book Title{" "}
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="bookTitle"
                    name="bookTitle"
                    // required
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                </td>
                {getAddbookFormCheck && getAddbookFormValidation.bookTitle && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.bookTitle}
                  </p>
                )}
              </tr>
              <tr>
                <td>
                  {getAddbookForm.bookDescription}
                  <label for="bookDescription" className="form-label">
                    Book Description
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="bookDescription"
                    name="bookDescription"
                    // required
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,150}"
                  />
                </td>
                {getAddbookFormCheck &&
                  getAddbookFormValidation.bookDescription && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.bookDescription}
                    </p>
                  )}
              </tr>
              <tr>
                <td>
                  {getAddbookForm.authorName}
                  <label for="author" className="form-label">
                    Author Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="authorName"
                    // required
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                </td>
                {getAddbookFormCheck && getAddbookFormValidation.authorName && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.authorName}
                  </p>
                )}
              </tr>
              <tr>
                <td>
                  {getAddbookForm.noOfBooksAvailable}
                  <label for="noOfBooks" className="form-label">
                    No.of Books Available
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="noOfBooksAvailable"
                    name="noOfBooksAvailable"
                    // required
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                </td>
                {getAddbookFormCheck &&
                  getAddbookFormValidation.noOfBooksAvailable && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.noOfBooksAvailable}
                    </p>
                  )}
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="submit" className="btn btn-warning">
                    <Link to="/dashboard" className="text-decoration-none">
                      Add Book
                    </Link>
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addbook;
