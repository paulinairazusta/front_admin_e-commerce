import { PieChart } from "react-minimal-pie-chart";
function PieChartCard() {
  return (
    <PieChart
      data={[
        { title: "Firefox", value: 3801, color: "#FFB10A" },
        { title: "IE", value: 1689, color: "#FA0019" },
        { title: "Chrome", value: 4306, color: "#0066FF" },
      ]}
      lineWidth={18}
      paddingAngle={3}
    />
  );
}

export default PieChartCard;
