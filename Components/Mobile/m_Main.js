import Image from "next/image";
import Ploan from "../../Images/Icon/personal_loan.svg";
import Hloan from "../../Images/Icon/home_laon.svg";
import Car from "../../Images/Icon/car_loan.svg";
import CC from "../../Images/Icon/credit-card-front.svg";
import DPS from "../../Images/Icon/dps.svg";
import FD from "../../Images/Icon/fixed_deposit.svg";

const M_Main = () => {
  const data = [
    { name: "Personal Loan", img: Ploan },
    { name: "Home Loan", img: Hloan },
    { name: "Car Loan", img: Car },
    { name: "Credit Card", img: CC },
    { name: "DPS", img: DPS },
    { name: "Fix Deposite", img: FD },
  ];

  return (
    <div>
      <h1 className="main_title">Compare Rates, Check Eligibility </h1>

      <h1 className="applyText"> & Apply</h1>

      <div className=" grid gap-1  grid-cols-3 place-content-center mt-8 place-items-center mx-auto ">
        {data &&
          data.map((item) => {
            return (
              <>
                <div className="mainCard">
                  <Image
                    className="cardImg"
                    height="60px"
                    width="100%"
                    src={item.img}
                    alt=""
                  />
                  <p className="cardText">{item.name}</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default M_Main;
