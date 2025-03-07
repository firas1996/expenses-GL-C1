import React from "react";
import MyFrag from "./components/MyFrag";
import ExpenseInfo from "./components/ExpenseInfo";
import ExpenseContainer from "./components/ExpenseContainer";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const data = [
    {
      id: 1,
      title: "Voyage",
      price: 350,
      date: new Date("2025-02-14"),
    },
    {
      id: 2,
      title: "Shopping",
      price: 150,
      date: new Date("2024-10-18"),
    },
    {
      id: 3,
      title: "Car",
      price: 100,
      date: new Date("2025-05-14"),
    },
    {
      id: 4,
      title: "Education",
      price: 300,
      date: new Date("2023-10-14"),
    },
  ];
  return (
    <>
      <ExpenseForm />
      <ExpenseContainer data={data} />
    </>
  );
}

export default App;
