import axios from "axios";
import BestDeal from "../Components/BestDeal/bestDeal";
import Maincard from "../Components/MainCard/maincard";
import Discover from "../Components/Discover/discover";
import Statistics from "../Components/Statistics/statistics";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import M_Menu from "../Components/Mobile/m_Menu";
import M_subMenu from "../Components/Mobile/m_subMenu";
import M_Main from "../Components/Mobile/m_Main";
const index = () => {
  return (
    <div>
      <MobileView>
        <M_Menu></M_Menu>
        <M_subMenu />
        <M_Main></M_Main>
      </MobileView>

      <BrowserView>
        <Maincard />
        <BestDeal />
        <Discover />
        <Statistics />
      </BrowserView>
    </div>
  );
};

export default index;
