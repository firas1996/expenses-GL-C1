import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const maxDate = `${thisYear + 2}-12-31`;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  const handelChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    addExpense({
      id: Math.random(),
      title: formData.title,
      price: +formData.price,
      date: new Date(formData.date),
    });
    setFormData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="expense-form">
      {showForm ? (
        <form onSubmit={submitHandler}>
          <div className="expense-form__controls">
            <div className="expense-form__control">
              <label>Title</label>
              <input
                required
                placeholder="Title"
                name="title"
                onChange={handelChange}
                value={formData.title}
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
                value={formData.price}
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
                value={formData.date}
              />
            </div>
          </div>
          <div className="expense-form__actions">
            <button type="button" onClick={showFormHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default ExpenseForm;
