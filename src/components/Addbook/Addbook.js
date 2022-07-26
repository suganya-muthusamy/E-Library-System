import "./Addbook.css";
import { addbookFormValidationError } from "../../helpers/Constant";
import { alphanumeric, numeric } from "../../helpers/Validator";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const navigate = useNavigate();

  // to store data in the session storage
  useEffect(() => {
    if (
      getAddbookForm.bookID &&
      getAddbookForm.bookTitle &&
      getAddbookForm.bookDescription &&
      getAddbookForm.authorName &&
      getAddbookForm.noOfBooksAvailable &&
      !getAddbookFormValidation.bookID &&
      !getAddbookFormValidation.bookTitle &&
      !getAddbookFormValidation.bookDescription &&
      !getAddbookFormValidation.authorName &&
      !getAddbookFormValidation.noOfBooksAvailable
    ) {
      if (sessionStorage.getItem("bookDetailsList")) {
        let bookDetailsList = JSON.parse(
          sessionStorage.getItem("bookDetailsList")
        );
        bookDetailsList.push(getAddbookForm);
        sessionStorage.setItem(
          "bookDetailsList",
          JSON.stringify(bookDetailsList)
        );
      } else {
        let bookDetailsList = [];
        bookDetailsList.push(getAddbookForm);
        sessionStorage.setItem(
          "bookDetailsList",
          JSON.stringify(bookDetailsList)
        );
      }
      navigate("/dashboard");
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
    <div className="container add-book mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={onSubmitHandler} className="px-5 py-4 rounded">
            <h3 className="text-center mb-3 ">Add Book</h3>
            <div className="row">
              <div className="col-md-6">
                {getAddbookForm.bookID}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookID"
                    name="bookID"
                    placeholder="Book ID"
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                  <label htmlFor="bookID">Book ID</label>
                </div>

                {getAddbookFormCheck && getAddbookFormValidation.bookID && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.bookID}
                  </p>
                )}

                {getAddbookForm.bookTitle}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookTitle"
                    name="bookTitle"
                    placeholder="Book Title"
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                  <label htmlFor="bookTitle">Book Title</label>
                </div>

                {getAddbookFormCheck && getAddbookFormValidation.bookTitle && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.bookTitle}
                  </p>
                )}

                {getAddbookForm.bookDescription}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookDescription"
                    name="bookDescription"
                    placeholder="Book Description"
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,150}"
                  />
                  <label htmlFor="bookDescription">Book Description</label>
                </div>
                {getAddbookFormCheck &&
                  getAddbookFormValidation.bookDescription && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.bookDescription}
                    </p>
                  )}
              </div>
              <div className="col-md-6">
                {getAddbookForm.authorName}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="authorName"
                    placeholder="Author Name"
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                  <label htmlFor="author">Author Name</label>
                </div>

                {getAddbookFormCheck && getAddbookFormValidation.authorName && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.authorName}
                  </p>
                )}

                {getAddbookForm.noOfBooksAvailable}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="noOfBooksAvailable"
                    name="noOfBooksAvailable"
                    placeholder="No of Books Available"
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                  <label htmlFor="noOfBooks">No.of Books Available</label>
                </div>
                {getAddbookFormCheck &&
                  getAddbookFormValidation.noOfBooksAvailable && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.noOfBooksAvailable}
                    </p>
                  )}

                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-warning d-block w-100 h-100 pt-2 pb-2"
                  >
                    Add Book
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Addbook;
