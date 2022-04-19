import Image from "next/image";

const bestDeal = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <h1 className="sec_title text-center">Find Your Best Deal</h1>
      <div className="container grid  lg:px-14 px-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 place-content-center place-items-center mx-auto">
        <div className="bestDealCard ">
          <div className="image">
            <img
              width="250px"
              height="145"
              src="https://assets.aamartaka.com/media/bcbd_content/adv/Background.png"
              alt=""
            />
          </div>
          <div className="cartInfo pl-5">
            <div style={{ height: "140px" }}>
              <p className="infoTitle ">Car Loan @7.99%</p>
              <p>
                Lowest Interest Rate. <br />
                Loan Facility Upto 40 Lacs. <br /> Loan Duration Max. 6 Years.
              </p>
            </div>
            <button className="btn">Apply Now</button>
          </div>
        </div>

        <div className="bestDealCard">
          <div className="image">
            <img
              width="250px"
              height="145"
              src="https://assets.aamartaka.com/media/bcbd_content/adv/BackgroundHomeLoan.png"
              alt=""
            />
          </div>
          <div className="cartInfo pl-5">
            <div style={{ height: "140px" }}>
              <p className="infoTitle ">Home Loan @7%</p>
              <p>
                Lowest Interest Rate. <br />
                Loan Facility Upto 1.20 Crore. <br /> Only for Apartment Buy.
              </p>
            </div>
            <button className="btn">Apply Now</button>
          </div>
        </div>

        <div className="bestDealCard">
          <div className="image">
            <img
              src="https://assets.aamartaka.com/media/bcbd_content/adv/Credit_Card_2.png"
              alt="Images"
              width="250px"
              height="145"
            />
          </div>
          <div className="cartInfo pl-5">
            <div style={{ height: "140px" }}>
              <p className="infoTitle ">Loan Amount Upto 80%</p>
              <p>
                Easy and Hassle Free.
                <br />
                Loan Facility upto 2.0 Crore.
                <br /> Get Maximum Loan on Total Cost. <br />
              </p>
            </div>
            <button className="btn">Apply Now</button>
          </div>
        </div>
        <div className="bestDealCard">
          <div className="image">
            <img
              width="250px"
              height="145"
              src="	https://assets.aamartaka.com/media/bcbd_content/adv/Car_Loan.png"
              alt=""
            />
          </div>
          <div className="cartInfo pl-5">
            <div style={{ height: "140px" }}>
              <p className="infoTitle ">Car Loan @7.99%</p>
              <p>
                Lowest Interest Rate. <br />
                Loan Facility Upto 40 Lacs. <br /> Loan Duration Max. 6 Years.
              </p>
            </div>
            <button className="btn">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bestDeal;
