import Image from "next/image";
import PImg from "../../Images/personalLoan/personal-loan.png";
import UserWithTie from "../../Images/personalLoan/user-with-tie-and-jacket.svg";
import Calender from "../../Images/personalLoan/calender.png";
import LocationIcon from "../../Images/personalLoan/location.png";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import LoanForm from "../../Components/PersonalLoan/loanForm";
import SalaryForm from "../../Components/PersonalLoan/salariedForm";
const Mainform = () => {
  const page = useSelector((state) => state.loan.page);
  const data = useSelector((state) => state.loan.data);
  console.log(page);
  return (
    <div style={{ backgroundColor: "#1b5f8d", height: "100%" }}>
      <div className=" mx-16 grid lg:grid-cols-12 grid-cols justify-center">
        {/* this is form seppter section  */}
        <div className="form_singleItem lg:col-span-8 m-4">
          <div className="formHeader flex items-center">
            <Image width="50px" height="50px" src={PImg} alt="" />
            <h1 className="ml-2 formHeaderText">Personal Loan Eligibility</h1>
          </div>

          <div>
            <div>
              <Stepper
                activeStep={page}
                steps={[
                  { title: "Step One" },
                  { title: "Step Two" },
                  { title: "Step Three" },
                  { title: "Step Four" },
                ]}
              />
              {page === 0 && <LoanForm />}
              {page === 1 && <SalaryForm />}
            </div>
          </div>
        </div>

        {/* view Data section  */}
        <div className="form_singleItem lg:col-span-4 m-4">
          <div className="show_Data_Header flex items-center">
            <Image
              width="60px"
              height="50px"
              className="show_data_user"
              src={UserWithTie}
              alt=""
            />
            <div className="ml-2">
              <div className="flex items-center ">
                <Image width="15px" height="15px" src={Calender} alt="" />
                <h1 className="ml-1">52 years 3 months 19 days</h1>
              </div>
              {data?.location && (
                <div className="flex items-center ">
                  <Image width="15px" height="15px" src={LocationIcon} alt="" />
                  <h1 className="ml-1">{data.location}</h1>
                </div>
              )}
            </div>
          </div>
          <h1>Show Data</h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mainform;
