import Card from "./Card";
import "./main.css";
import "./card.css";
import OffCanvasOptions from "../sidebar/OffCanvasOptions";
import { BsTruck, BsCart2 } from "react-icons/bs";
import { FiDollarSign, FiUsers } from "react-icons/fi";
import CalendarCard from "./CalendarCard";
import WorldMapCard from "./WorldMapCard";
import PieChartCard from "./PieChartCard";

function Main() {
  return (
    <div className="content">
      <OffCanvasOptions />
      {/* <h1>Analytics Dashboard</h1> */}
      <div className="sales-visitors-container">
        <div className="sales-container">
          <Card
            title="Sales"
            icon={<BsTruck />}
            amount="2.382"
            percentage="-3.65"
          />
        </div>
        <div className="visitors-container">
          <Card
            title="Visitors"
            icon={<FiUsers />}
            amount="14.212"
            percentage="5.25"
          />
        </div>
      </div>
      <div className="earnings-orders-container">
        <div className="earnings-container">
          <Card
            title="Earnings"
            icon={<FiDollarSign />}
            amount="$21.300"
            percentage="6.65"
          />
        </div>
        <div className="orders-container">
          <Card
            title="Orders"
            icon={<BsCart2 />}
            amount={"64"}
            percentage="-2.25"
          />
        </div>
      </div>
      <div className="chart-card">
        <h5 className="card-title">Recent Movement</h5>
        <img src="Chart.png" alt="" />
      </div>

      <div className="calendar-card">
        <h5 className="card-title">Calendar</h5>
        <CalendarCard />
      </div>

      <div className="chart-card">
        <h5 className="card-title">Real-Time</h5>
        <WorldMapCard />
      </div>

      <div className="calendar-card">
        <h5 className="card-title">Browser Usage</h5>
        <div className="pie-chart-container">
          <PieChartCard />
          <table>
            <tbody>
              <tr>
                <td>Chrome</td> <td>4306</td>
              </tr>
              <tr>
                <td>Firefox</td> <td>3801</td>
              </tr>
              <tr>
                <td>IE</td> <td>1689</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
