import { useState } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  //state declaration
  const [getSearchForm, setSearchForm] = useState({
    bookTitle: "",
  });

  const onChangeHandler = (event) => {
    setSearchForm({
      ...getSearchForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setSearchForm({
    //   bookTitle: "",
    // });
  };
  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <button className="btn">
            <Link to="/addbook" className="text-decoration-none cursor-pointer">
              Addbook
            </Link>
          </button>
        </div>
        <div className="col-md-6">
          <div className="search-book d-flex flex-column align-items-center justify-content-center py-5 ">
            <h3>Admin Search Book</h3>
            <form onSubmit={onSubmitHandler}>
              <table>
                <tr>
                  <td>
                    <label htmlFor="book" className="form-label">
                      Book Title
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="book"
                      required
                      pattern="[A-Za-z]{3,20}"
                      name="bookTitle"
                      onChange={onChangeHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" className="btn btn-warning">
                      Search
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Filter;
