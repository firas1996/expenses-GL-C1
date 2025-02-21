import { useState } from "react";
import "./ExpenseInfo.css";

const ExpenseInfo = ({ title, price, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("ar-EG", { day: "2-digit" });
  // const [x, setX] = useState(title);
  // const updateTitle = () => {
  //   console.log(x);
  //   setX("test !!!");
  //   console.log(x);
  // };
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={updateTitle}>Update Title !!!</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
