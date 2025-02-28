import Chart from "./Chart";
import "./ExpenseContainer.css";
import ExpenseInfo from "./ExpenseInfo";
import Filter from "./Filter";

const ExpenseContainer = ({ data }) => {
  return (
    <div className="expenses">
      <Filter />
      <Chart data={data} />
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
