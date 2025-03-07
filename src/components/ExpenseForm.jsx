import "./ExpenseForm.css";

const ExpenseForm = () => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const maxDate = `${thisYear + 2}-12-31`;
  return (
    <div className="expense-form">
      <form>
        <div className="expense-form__controls">
          <div className="expense-form__control">
            <label>Title</label>
            <input required placeholder="Title" />
          </div>
          <div className="expense-form__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
            />
          </div>
          <div className="expense-form__control">
            <label>Date</label>
            <input required type="date" min={minDate} max={maxDate} />
          </div>
        </div>
        <div className="expense-form__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
