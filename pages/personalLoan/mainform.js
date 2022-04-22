import Image from "next/image";
import PImg from "../../Images/personalLoan/personal-loan.png";
import UserWithTie from "../../Images/personalLoan/user-with-tie-and-jacket.svg";
import Calender from "../../Images/personalLoan/calender.png";
import LocationIcon from "../../Images/personalLoan/location.png";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import LoanForm from "../../Components/PersonalLoan/loanForm";
import SalaryForm from "../../Components/PersonalLoan/salariedForm";
import BusinessForm from "../../Components/PersonalLoan/businessForm";
import SingleProduct from "../../Components/PersonalLoan/singleProduct";
import Man from "../../Images/personalLoan/bussiness-man.png";
import Woman from "../../Images/personalLoan/woman.png";
import Nutral from "../../Images/personalLoan/neutral.png";
import LoanType from "../../Images/personalLoan/personal-loan-type.svg";
const Mainform = () => {
  const page = useSelector((state) => state.loan.page);
  const data = useSelector((state) => state.loan.data);
  const salaryData = useSelector((state) => state.loan.salaryData);
  console.log(salaryData);
  let url = null;
  if (data.gender === "male") {
    url = Man;
  }
  if (data.gender === "female") {
    url = Woman;
  }
  if (data.gender === "other") {
    url = Nutral;
  }

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
              {page === 2 && <BusinessForm />}
            </div>
          </div>
        </div>

        {/* view Data section  */}
        <div className="form_singleItem h-screen overflow-scroll lg:col-span-4 m-4">
          <div className="show_Data_Header flex items-center">
            {data?.gender && (
              <Image
                width="60px"
                height="50px"
                className="show_data_user"
                src={url}
                alt=""
              />
            )}

            <div className="ml-2">
              {data.day && data.month && data.year && (
                <div className="flex items-center ">
                  <Image width="15px" height="15px" src={Calender} alt="" />
                  <h1 className="ml-1">{`${data.year}  ${data.month}  ${data.day}`}</h1>
                </div>
              )}

              {data?.location && (
                <div className="flex items-center ">
                  <Image width="15px" height="15px" src={LocationIcon} alt="" />
                  <h1 className="ml-1">{data.location}</h1>
                </div>
              )}
            </div>
          </div>
          {/* show Data section  */}
          <div>
            {/* <h1>Show Data</h1> */}
            {/* product Type  */}
            <SingleProduct
              image={LoanType}
              title={"Product Type"}
              subTitle={"Personal Loan "}
            />

            {/* Profession  */}
            {data?.profession && (
              <SingleProduct
                image={LoanType}
                title={"Profession"}
                subTitle={data?.profession}
              />
            )}

            {/* Personal Loan Type  */}
            {data?.loan_type && (
              <SingleProduct
                image={LoanType}
                title={"Personal Loan Type"}
                subTitle={data?.loan_type}
              />
            )}

            {/* Residence Type  */}
            {data?.residence && (
              <SingleProduct
                image={LoanType}
                title={"Residence Type"}
                subTitle={data?.residence}
              />
            )}

            {/* Location  */}
            {data?.location && (
              <SingleProduct
                image={LoanType}
                title={"Location"}
                subTitle={data?.location}
              />
            )}

            {/* salary section  */}
            {page === 1 && <h1 className="my-4">Salaried Incom Info</h1>}
            {salaryData.company_name && (
              <SingleProduct
                image={LoanType}
                title={"Company Name"}
                subTitle={salaryData?.company_name}
              />
            )}

            {salaryData.company_type && (
              <SingleProduct
                image={LoanType}
                title={"Company Type"}
                subTitle={salaryData?.company_type}
              />
            )}

            {salaryData?.job_status && (
              <SingleProduct
                image={LoanType}
                title={"Job Status"}
                subTitle={salaryData?.job_status}
              />
            )}
            {page === 1 && (
              <SingleProduct
                image={LoanType}
                title={"Current Job Experience"}
                subTitle={`${salaryData?.job_exp_curr_year} ${salaryData?.job_exp_curr_month}`}
              />
            )}

            {page === 1 && (
              <SingleProduct
                image={LoanType}
                title={"Total Job Experience"}
                subTitle={`${salaryData?.job_exp_total_year} ${salaryData?.job_exp_total_month}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainform;
