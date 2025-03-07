import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const maxDate = `${thisYear + 2}-12-31`;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const handelChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="expense-form">
      <form onSubmit={submitHandler}>
        <div className="expense-form__controls">
          <div className="expense-form__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              name="title"
              onChange={handelChange}
            />
          </div>
          <div className="expense-form__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
              name="price"
              onChange={handelChange}
            />
          </div>
          <div className="expense-form__control">
            <label>Date</label>
            <input
              required
              type="date"
              min={minDate}
              max={maxDate}
              name="date"
              onChange={handelChange}
            />
          </div>
        </div>
        <div className="expense-form__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
