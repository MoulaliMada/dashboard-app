import "./index.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { useState } from "react";
import { SiElement } from "react-icons/si";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { GiWoodFrame } from "react-icons/gi";
import { CiViewTable } from "react-icons/ci";
import { FaIcons } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowDropupCircle } from "react-icons/io";

function SideBar() {
  const [isDropdownClickd, setDropdown] = useState(true);
  return (
    <div className="side_bar">
      <h1 className="blue_box">Blue Box</h1>
      <div className="profile_con">
        <img
          src="https://res.cloudinary.com/dssaftaaa/image/upload/v1738939904/new_pic_v8b2bj.jpg"
          className="profile_img"
          alt=""
        />
        <div>
          <h2 className="pofile_name">Moulali Mada</h2>
          <p className="designation">React Developer</p>
        </div>
        {!isDropdownClickd && (
          <IoIosArrowDropdownCircle
            className="icon"
            onClick={() => setDropdown(true)}
          />
        )}
        {isDropdownClickd && (
          <IoIosArrowDropupCircle
            className="icon"
            onClick={() => setDropdown(false)}
          />
        )}
      </div>
      {isDropdownClickd && (
        <>
          <ul className="dropdown_ul">
            <li className="dropdown_li active_option">
              <p>Dashboard</p>
              <></>
              <IoMdHome className="icon active_option" />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">UI Elements</p>
              <SiElement className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Components</p>
              <SiWebcomponentsdotorg className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Forms Stuff</p>
              <GiWoodFrame className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Data Table</p>
              <CiViewTable className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Icons</p>
              <FaIcons className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Sample Page</p>
              <RiPagesLine className="icon " />
            </li>
            <li className="dropdown_li ">
              <p className="option-p">Extra</p>
              <CiBookmarkPlus className="icon " />
            </li>
          </ul>
          <button>Add Project</button>
        </>
      )}
    </div>
  );
}
export default SideBar;
