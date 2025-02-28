import Chart from "./Chart";
import "./ExpenseContainer.css";
import ExpenseInfo from "./ExpenseInfo";

const ExpenseContainer = ({ data }) => {
  return (
    <div className="expenses">
      <Chart />
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
