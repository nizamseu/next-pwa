import axios from "axios";
import BestDeal from "../Components/BestDeal/bestDeal";
import Maincard from "../Components/MainCard/maincard";
import Discover from "../Components/Discover/discover";
import Statistics from "../Components/Statistics/statistics";

import Ploan from "../Images/Icon/personal_loan.svg";
import Hloan from "../Images/Icon/home_laon.svg";
import Car from "../Images/Icon/car_loan.svg";
import CC from "../Images/Icon/credit-card-front.svg";
import DPS from "../Images/Icon/dps.svg";
import FD from "../Images/Icon/fixed_deposit.svg";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import M_Menu from "../Components/Mobile/m_Menu";
import M_subMenu from "../Components/Mobile/m_subMenu";
import M_Main from "../Components/Mobile/m_Main";
import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const Index = () => {
  const [local, setLocal] = useState("en");
  const message = {
    en: {
      title1: "Compare Rates, Check Eligibility",
      title2: "and Apply",
      data: [
        { name: "Personal Loan", img: Ploan },
        { name: "Home Loan", img: Hloan },
        { name: "Car Loan", img: Car },
        { name: "Credit Card", img: CC },
        { name: "DPS", img: DPS },
        { name: "Fix Deposite", img: FD },
      ],
    },
    bn: {
      title1: "হার তুলনা করুন, যোগ্যতা পরীক্ষা করুন ",
      title2: "এবং আবেদন করুন",
      data: [
        { name: "পার্সোনাল লোন ", img: Ploan },
        { name: "হোম লোন ", img: Hloan },
        { name: "কার লোন ", img: Car },
        { name: "ক্রেডিট কার্ড ", img: CC },
        { name: "ডি.পি.এস ", img: DPS },
        { name: "ফিক্সড ডিপোজিট ", img: FD },
      ],
    },
  };
  return (
    <div>
      <IntlProvider locale={local} messages={message[local]}>
        <MobileView>
          <M_Menu setLocal={setLocal} local={local} message={message}></M_Menu>
          <M_subMenu />
          <M_Main messages={message[local]} message={message}></M_Main>
        </MobileView>

        <BrowserView>
          <Maincard />
          <BestDeal />
          <Discover />
          <Statistics />
        </BrowserView>
      </IntlProvider>
    </div>
  );
};

export default Index;
