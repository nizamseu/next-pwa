import Image from "next/image";
import Logo from "../../Images/Icon/logoWeb.png";
import Notification from "../../Images/Icon/notification1.png";
const M_Menu = () => {
  return (
    <div className="m_menu flex justify-between items-center px-8 py-2">
      <div>
        <svg
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="nav-svg"
          height="1em"
          width="1em"
          color="#D3531A"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          ></path>
        </svg>
      </div>
      <div>
        <Image width={"140px"} height={"40px"} src={Logo} alt="" />
      </div>
      <div>
        {" "}
        <Image width={"43px"} height={"50px"} src={Notification} alt="" />
      </div>
    </div>
  );
};

export default M_Menu;
