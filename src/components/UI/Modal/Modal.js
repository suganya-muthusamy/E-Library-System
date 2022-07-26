import { useEffect, useState } from "react";
import { addbookFormValidationError } from "../../../helpers/Constant";
import { alphanumeric, numeric } from "../../../helpers/Validator";
import "./Modal.css";

function Modal(props) {
  const [getEditBookForm, setEditBookForm] = useState({
    bookID: "",
    bookTitle: "",
    bookDescription: "",
    authorName: "",
    noOfBooksAvailable: "",
  });

  //   state declaration for form validation
  const [getEditBookFormValidation, setEditBookFormValidation] = useState({
    bookID: false,
    bookTitle: false,
    bookDescription: false,
    authorName: false,
    noOfBooksAvailable: false,
  });

  // state declaration for form check
  const [getEditBookFormCheck, setEditBookFormCheck] = useState(false);

  //   const navigate = useNavigate();

  useEffect(() => {
    setEditBookForm({
      bookID: props.editModalList.bookID,
      bookTitle: props.editModalList.bookTitle,
      bookDescription: props.editModalList.bookDescription,
      authorName: props.editModalList.authorName,
      noOfBooksAvailable: props.editModalList.noOfBooksAvailable,
    });
  }, []);

  useEffect(() => {
    if (
      getEditBookForm.bookID &&
      getEditBookForm.bookTitle &&
      getEditBookForm.bookDescription &&
      getEditBookForm.authorName &&
      getEditBookForm.noOfBooksAvailable &&
      !getEditBookFormValidation.bookID &&
      !getEditBookFormValidation.bookTitle &&
      !getEditBookFormValidation.bookDescription &&
      !getEditBookFormValidation.authorName &&
      !getEditBookFormValidation.noOfBooksAvailable
    ) {
      props.onClose(getEditBookForm);
    }
  }, [getEditBookFormCheck]);

  const onChangeHandler = (event) => {
    setEditBookForm({
      ...getEditBookForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEditBookFormCheck(!getEditBookFormCheck);
    setEditBookFormValidation({
      bookID:
        getEditBookForm.bookID && numeric(getEditBookForm.bookID)
          ? false
          : true,
      bookTitle:
        getEditBookForm.bookTitle && alphanumeric(getEditBookForm.bookTitle)
          ? false
          : true,
      bookDescription:
        getEditBookForm.bookDescription &&
        alphanumeric(getEditBookForm.bookDescription)
          ? false
          : true,
      authorName:
        getEditBookForm.authorName && alphanumeric(getEditBookForm.authorName)
          ? false
          : true,
      noOfBooksAvailable:
        getEditBookForm.noOfBooksAvailable &&
        numeric(getEditBookForm.noOfBooksAvailable)
          ? false
          : true,
    });
  };
  return (
    <div id="editBookModal">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={onSubmitHandler} className="px-5 py-4 rounded">
            <h3 className="text-center mb-3 text-warning ">Edit Book</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookID"
                    name="bookID"
                    placeholder="Book ID"
                    value={getEditBookForm.bookID || ""}
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                  <label htmlFor="bookID">Book ID</label>
                </div>

                {getEditBookFormCheck && getEditBookFormValidation.bookID && (
                  <p className="text-danger error mt-2">
                    {addbookFormValidationError.bookID}
                  </p>
                )}

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookTitle"
                    name="bookTitle"
                    placeholder="Book Title"
                    value={getEditBookForm.bookTitle || ""}
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                  <label htmlFor="bookTitle">Book Title</label>
                </div>

                {getEditBookFormCheck &&
                  getEditBookFormValidation.bookTitle && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.bookTitle}
                    </p>
                  )}

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bookDescription"
                    name="bookDescription"
                    placeholder="Book Description"
                    value={getEditBookForm.bookDescription || ""}
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,150}"
                  />
                  <label htmlFor="bookDescription">Book Description</label>
                </div>
                {getEditBookFormCheck &&
                  getEditBookFormValidation.bookDescription && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.bookDescription}
                    </p>
                  )}
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="authorName"
                    placeholder="Author Name"
                    value={getEditBookForm.authorName || ""}
                    onChange={onChangeHandler}
                    // pattern="[A-Za-z0-9]+{1,50}"
                  />
                  <label htmlFor="author">Author Name</label>
                </div>

                {getEditBookFormCheck &&
                  getEditBookFormValidation.authorName && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.authorName}
                    </p>
                  )}

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="noOfBooksAvailable"
                    name="noOfBooksAvailable"
                    placeholder="No of Books Available"
                    value={getEditBookForm.noOfBooksAvailable || ""}
                    onChange={onChangeHandler}
                    // pattern="^[0-9]+{1,5}$"
                  />
                  <label htmlFor="noOfBooks">No.of Books Available</label>
                </div>
                {getEditBookFormCheck &&
                  getEditBookFormValidation.noOfBooksAvailable && (
                    <p className="text-danger error mt-2">
                      {addbookFormValidationError.noOfBooksAvailable}
                    </p>
                  )}

                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-warning d-block w-100 h-100 pt-2 pb-2"
                  >
                    Save Changes
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

export default Modal;
