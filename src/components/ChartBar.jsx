import "./ChartBar.css";

const ChartBar = ({ name, value, max, total }) => {
  const height = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${height}%` }}></div>
      </div>
      <div className="chart-bar__label">{name}</div>
    </div>
  );
};

export default ChartBar;
