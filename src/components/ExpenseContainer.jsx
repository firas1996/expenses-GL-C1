import "./ExpenseContainer.css";
import ExpenseInfo from "./ExpenseInfo";

const ExpenseContainer = ({ data }) => {
  return (
    <div className="expenses">
      {data.map((item) => {
        return (
          <ExpenseInfo
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default ExpenseContainer;
