import "./Table.css";
import { useState, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";

const Table = () => {
  const [getBookList, setBookList] = useState([]);

  //to handle modals
  const [getEditModal, setEditModal] = useState(false);
  const [getEditModalIndex, setEditModalIndex] = useState(-1);
  const [getEditModalObject, setEditModalObject] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("bookDetailsList")) {
      let bookList = JSON.parse(sessionStorage.getItem("bookDetailsList"));
      console.log(bookList);
      setBookList(bookList);
    }
  }, []);

  // on delete handler
  const onDeleteHandler = (index) => {
    let bookList = JSON.parse(sessionStorage.getItem("bookDetailsList"));
    bookList.splice(index, 1);
    setBookList([...bookList]);
    sessionStorage.setItem("bookDetailsList", JSON.stringify(bookList));
  };

  // on Edit Handler
  const onEditHandler = (index) => {
    setEditModal(true);
    let obj = getBookList[index];
    setEditModalObject({ ...obj });
    setEditModalIndex(index);
  };

  // on close modal
  const onCloseModal = (props) => {
    setEditModal(false);
    let list = getBookList;
    list[getEditModalIndex] = props;
    setBookList([...list]);
    sessionStorage.setItem("list", JSON.stringify("list"));
  };
  return (
    <div>
      {/* props send to edit modal */}
      {getEditModal && (
        <Modal editModalList={getEditModalObject} onClose={onCloseModal} />
      )}
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
                    <i
                      className="fa fa-edit text-primary fw-bold cursor-pointer"
                      data-toggle="modal"
                      data-target="#editBookModal"
                      area-hidden="true"
                      onClick={() => onEditHandler(index)}
                    ></i>
                  </td>
                  <td
                    className="text-center"
                    onClick={() => onDeleteHandler(index)}
                    // data-bs-toggle="modal"
                    // data-bs-target="#deleteModal"
                  >
                    <i className="fa fa-trash text-danger fw-bold cursor-pointer"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
