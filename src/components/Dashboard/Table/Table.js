import "./Table.css";
import { useState, useEffect } from "react";

const Table = () => {
  const [getBookList, setBookList] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("bookDetailsList")) {
      let bookList = JSON.parse(sessionStorage.getItem("bookDetailsList"));
      console.log(bookList);
      setBookList(bookList);
    }
  }, []);
  return (
    <div>
      <div className="container book-table mt-5">
        <table className="text-left w-100">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Description</th>
              <th>Author</th>
              <th>No.of Books Available</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getBookList.map((object, index) => {
              return (
                <tr key={index}>
                  <td>{object.bookID}</td>
                  <td>{object.bookTitle}</td>
                  <td>{object.bookDescription}</td>
                  <td>{object.authorName}</td>
                  <td>{object.noOfBooksAvailable}</td>
                  <td className="text-center">
                    <i className="fa fa-edit text-primary fw-bold"></i>
                  </td>
                  <td
                    className="text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <i className="fa fa-trash text-danger fw-bold"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="deleteModal"
          tabindex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirmation
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure to delete this item?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
