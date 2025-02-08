import { IoMdSpeedometer } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import "./index.css";

function DashboardPage() {
  return (
    <div>
      <>
        <IoMdSpeedometer />
        <h1>Dashboard</h1>
      </>
      <div>
        <ul className="card_ul">
          <li className="card stock_card">
            <BsGraphUpArrow />
            <p className="card_p">Stock Total</p>
            <h1 className="card_h1">$150000</h1>
            <p className="card_p">Increased by 60%</p>
          </li>
          <li className="card profit_card">
            <BsGraphUpArrow />
            <p className="card_p">Total Profit</p>
            <h1 className="card_h1">$25000</h1>
            <p className="card_p">Increased by 30%</p>
          </li>
          <li className="card inique_card">
            <BsGraphUpArrow />
            <p className="card_p">Unique Visitors</p>
            <h1 className="card_h1">$250000</h1>
            <p className="card_p">Increased by 80%</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DashboardPage;
