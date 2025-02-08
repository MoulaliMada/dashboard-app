import "./index.css";
import { IoMdMail } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className="header">
      <FaSearch className="icon " />
      <input placeholder="Search Project" className="search_input" />
      <img
        src="https://res.cloudinary.com/dssaftaaa/image/upload/v1738939904/new_pic_v8b2bj.jpg"
        className="profile_img"
        alt=""
      />
      <h1 className="profil_name">Moulali Mada</h1>
      <IoMdMail className="icon " />
      <IoIosContact className="icon " />
      <IoMdMenu className="icon " />
    </div>
  );
}
export default Header;
