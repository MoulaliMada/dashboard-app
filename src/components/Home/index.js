import { Component } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import DashboardPage from "../DashboardPage";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="bg_container">
        <div className="content_container">
          <SideBar />
          <div className="header_card_table_container">
            <Header className="header_dashboard"/>
            <DashboardPage/>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
