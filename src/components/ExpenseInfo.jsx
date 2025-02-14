import "./ExpenseInfo.css";

const ExpenseInfo = ({ title, price, date }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
