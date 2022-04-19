import Image from "next/image";
import handShake from "../../Images/Icon/handshake.png";
import Exp from "../../Images/Icon/experience.svg";
import Reliability from "../../Images/Icon/reliability.svg";
import Fastest from "../../Images/Icon/faster_service.svg";

const discover = () => {
  return (
    <div>
      <h1 className=" discover_title text-left mx-24">
        Discover Your Financial Options!
      </h1>
      <div className=" grid lg:grid-cols-12 relative ">
        <img
          style={{ right: "0" }}
          className=" absolute xl:block lg:block md:hidden sm:hidden hidden"
          src="https://aamartaka.com/images/customer-tab.png"
          alt=""
        />
        <div className="pl-4  pt-5 mx-24  lg:col-span-7">
          <div className="discover-left">
            <div className="dis_icon mr-3">
              <Image width={"60px"} height={"50px"} src={Exp} alt="" />
            </div>
            <div className="dis_info">
              <h1 className="dis-info-title">Experience</h1>
              <h1 className="dis_info_text">
                We have experience to serve more than 40k <br /> customer.
              </h1>
            </div>
          </div>
          <div className="discover-left">
            <div className="dis_icon mr-3">
              <Image width={"60px"} height={"50px"} src={Reliability} alt="" />
            </div>
            <div className="dis_info">
              <h1 className="dis-info-title">Reliability</h1>
              <h1 className="dis_info_text">
                We strictly follow our partner banks
                <br /> guideline..
              </h1>
            </div>
          </div>
          <div className="discover-left">
            <div className="dis_icon mr-3">
              <Image width={"60px"} height={"50px"} src={Fastest} alt="" />
            </div>
            <div className="dis_info">
              <h1 className="dis-info-title">Fastest & Hassle Free</h1>
              <h1 className="dis_info_text">
                Get loan or credit card in a faster way <br /> customer.
              </h1>
            </div>
          </div>
          <div className="discover-left">
            <div className="dis_icon mr-3">
              <Image width={"60px"} height={"50px"} src={Fastest} alt="" />
            </div>
            <div className="dis_info">
              <h1 className="dis-info-title">Experience</h1>
              <h1 className="dis_info_text">
                We have experience to serve more than 40k <br /> customer.
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          {/* <img
            className="w-full"
            src="https://aamartaka.com/images/customer-tab.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default discover;
