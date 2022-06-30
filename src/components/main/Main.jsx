import Card from "./Card";
import "./main.css";
import OffCanvasOptions from "../sidebar/OffCanvasOptions";

function Main() {
  return (
    <div className="content">
      <OffCanvasOptions />
      <h1>Analytics Dashboard</h1>
      <div className="sales-visitors-container">
        <div className="sales-container">
          <Card title="Sales" icon="" amount="2.382" percentage="-3.65" />
        </div>
        <div className="visitors-container">
          <Card title="Visitors" icon="" amount="2.382" percentage="-3.65" />
        </div>
      </div>
      <div className="earnings-orders-container">
        <div className="earnings-container">
          <Card title="Earnings" icon="" amount="2.382" percentage="-3.65" />
        </div>
        <div className="orders-container">
          <Card title="Orders" icon={""} amount={"2.382"} percentage="-3.65" />
        </div>
      </div>
    </div>
  );
}

export default Main;
