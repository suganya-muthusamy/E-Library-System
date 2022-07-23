import "./Addbook.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Addbook() {
  // state declaration to get the book details
  const [getAddbookForm, setAddbookForm] = useState({
    bookID: "",
    bookTitle: "",
    bookDescription: "",
    authorName: "",
    noOfBooks: "",
  });

  //   state declaration for form validation
  const [getAddbookFormValidation, setAddbookFormValidation] = useState({
    bookID: false,
    bookTitle: false,
    bookDescription: false,
    authorName: false,
    noOfBooks: false,
  });

  const onChangeHandler = (event) => {
    setAddbookForm({
      ...getAddbookForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAddbookFormValidation({});
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
                    required
                    onChange={onChangeHandler}
                    pattern="^[0-9]+{1,5}$"
                  />
                </td>
              </tr>
              <tr>
                <td>
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
                    required
                    onChange={onChangeHandler}
                    pattern="[A-Za-z0-9]+{1,50}"
                  />
                </td>
              </tr>
              <tr>
                <td>
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
                    required
                    onChange={onChangeHandler}
                    pattern="[A-Za-z0-9]+{1,150}"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="author" className="form-label">
                    Author Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    required
                    onChange={onChangeHandler}
                    pattern="[A-Za-z0-9]+{1,50}"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="noOfBooks" className="form-label">
                    No.of Books Available
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="noOfBooks"
                    name="noOfBooks"
                    required
                    onChange={onChangeHandler}
                    pattern="^[0-9]+{1,5}$"
                  />
                </td>
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
