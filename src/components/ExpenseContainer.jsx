import { useState } from "react";
import Chart from "./Chart";
import "./ExpenseContainer.css";
import ExpenseInfo from "./ExpenseInfo";
import Filter from "./Filter";

const ExpenseContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtredData = data.filter((el) => {
    return selectedYear == "All" ? true : el.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <Filter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <Chart data={filtredData} />
      {filtredData.map((item) => {
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
