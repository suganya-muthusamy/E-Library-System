import { useState } from "react";
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
  };
  return (
    <div>
      <div className="container search-book mt-5">
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
                  pattern="[A-Za-z]{1,20}"
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
  );
};

export default Filter;
