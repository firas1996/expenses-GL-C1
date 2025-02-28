import "./ChartBar.css";

const ChartBar = ({ name, value }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{name}</div>
    </div>
  );
};

export default ChartBar;
