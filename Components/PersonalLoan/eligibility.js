import Router from "next/router";
import { useDispatch } from "react-redux";
import { saveData } from "../../Redux/loanSlice";

const Eligibility = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch(saveData({ name, value }));
  };
  return (
    <div className="eligibility mb-20">
      <h1 className="text-5xl pt-24 pb-12 text-center text-white ">
        We help you to get <span className="font-bold ">personal</span> loan
        easily
      </h1>
      <div className="elg_Main_Sec ">
        <div className=" xl:grid-cols-2  lg:grid grid-cols-2 md:grid-cols sm:grid-cols grid-cols">
          {/* loan type  */}
          <div className="m-4">
            <h1 className="elg_title">Select Loan Type</h1>
            {/* New Loan */}
            <div className="single_field">
              <label className="radio-container">
                New Loan
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="new_loan"
                  name="loan_type"
                  value="New Loan"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
            {/* take Over  */}
            <div className="single_field">
              <label className="radio-container">
                Take Over
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="take_over"
                  name="loan_type"
                  value="Take Over"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
            {/* Top Up */}
            <div className="single_field">
              <label className="radio-container">
                Top Up
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="top_up"
                  name="loan_type"
                  value="Top Up"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
            {/* <button className="elg_btn_compare">Compare Rate</button> */}
          </div>

          {/* Profession  */}
          <div className="m-4">
            <h1 className="elg_title">Select Your Profession</h1>

            {/*  Profession form is here  */}
            <div className="flex justify-center">
              <div className="mb-3 w-full">
                <select
                  required
                  name="profession"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Select Your Profession</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Businessman">Businessman</option>
                  <option value="Land Lord">Land Lord</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* buttion section  */}
        <div className="flex items-center justify-between">
          <button className="elg_btn_compare  m-4">Compare Rate</button>
          <button
            onClick={() => Router.push("/personalLoan/mainform")}
            className="elg_btn_check  m-4"
          >
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
