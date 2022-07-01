import { PieChart } from "react-minimal-pie-chart";
function PieChartCard() {
  return (
    <PieChart
      data={[
        { title: "Firefox", value: 3801, color: "#fcb92c" },
        { title: "IE", value: 1689, color: "#dc3545" },
        { title: "Chrome", value: 4306, color: "#3b7ddd" },
      ]}
      lineWidth={18}
      paddingAngle={3}
    />
  );
}

export default PieChartCard;
