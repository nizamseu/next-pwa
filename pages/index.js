import axios from "axios";
import BestDeal from "../Components/BestDeal/bestDeal";
import Maincard from "../Components/MainCard/maincard";
import Discover from "../Components/Discover/discover";
import Statistics from "../Components/Statistics/statistics";
const index = () => {
  return (
    <div>
      <Maincard />
      <BestDeal />
      <Discover />
      <Statistics />
    </div>
  );
};

export default index;
