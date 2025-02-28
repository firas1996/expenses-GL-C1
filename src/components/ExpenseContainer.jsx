import Chart from "./Chart";
import "./ExpenseContainer.css";
import ExpenseInfo from "./ExpenseInfo";
import Filter from "./Filter";

const ExpenseContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  return (
    <div className="expenses">
      <Filter years={years} />
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
