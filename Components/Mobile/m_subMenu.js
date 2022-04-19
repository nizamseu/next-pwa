import Image from "next/image";
import Of from "../../Images/Icon/of.png";
import Notification from "../../Images/Icon/notification1.png";
const M_subMenu = () => {
  return (
    <div>
      <div className="m_subMenu mx-2 flex justify-center  items-center">
        <div className="flex items-center">
          <Image width="30px" height={"30px"} src={Of} alt="Offers" />
          <p className="sub_tex"> Tracking Application</p>
        </div>
        <div className="sub_middle_item"></div>
        <div className="flex items-center">
          <Image width="30px" height={"30px"} src={Of} alt="Offers" />
          <p className="sub_tex">Trending Offers</p>
        </div>
      </div>
    </div>
  );
};

export default M_subMenu;
