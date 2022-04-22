import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, saveData } from "../../Redux/loanSlice";

const SalariedForm = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(saveData({ name, value }));
  };

  const handleNext = () => {
    dispatch(nextPage());
  };
  return (
    <div className="gender grid xl:grid-cols-12 grid-cols">
      {/* your Company Name here  */}
      <div className="flex justify-items-center items-center mt-8 mx-4">
        {/* text area section  */}
        <div className="col-span-4 my-2 w-full">
          <h1 className="text-left text-xl">Company Name</h1>
        </div>

        {/* input value area  */}
        <div className="col-span-8 w-full">
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <input
                name="company_name"
                className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      {/* your Company Types here  */}
      <div className="flex justify-items-center items-center  mx-4">
        {/* text area section  */}
        <div className="col-span-4 my-2 w-full">
          <h1 className="text-left text-xl">Company Type</h1>
        </div>

        {/* input value area  */}
        <div className="col-span-8 w-full">
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <select
                required
                name="company_type"
                onChange={handleChange}
                className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
              >
                <option selected>Company Type</option>
                <option value="government">Government</option>
                <option value="NGO">NGO</option>
                <option value="school and college">school and college</option>
                <option value="university">University</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* your Company Types here  */}
      <div className="flex justify-items-center items-center  mx-4">
        {/* text area section  */}
        <div className="col-span-4 my-2 w-full">
          <h1 className="text-left text-xl">Your Job Status</h1>
        </div>

        {/* input value area  */}
        <div className="col-span-8 w-full">
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <select
                required
                name="job_status"
                onChange={handleChange}
                className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
              >
                <option selected>Job Status</option>
                <option value="Contractual">Contractual</option>
                <option value="Permanent">Permanent</option>
                <option value="Probationary">Probationary</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Job experience Current */}
      <div className="flex items-center  mx-4">
        {/* text area  */}
        <div className="col-span-4 my-2  w-full">
          <h1 className="text-left text-xl">Job experience(Current)</h1>
        </div>
        {/* input value area  */}
        <div className="col-span-8 w-full">
          <div className="flex justify-between items-center ">
            <div className="flex justify-center mr-2 w-full">
              <div className="mb-3 w-full">
                <select
                  required
                  name="job_exp_curr_year"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Year</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 year">2 Year</option>
                  <option value="3 Year">3 Year </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="mb-3 w-full">
                <select
                  required
                  name="job_exp_curr_month"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Month</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Month">2 Month</option>
                  <option value="3 Month">3 Month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job experience Total */}
      <div className="flex items-center  mx-4">
        {/* text area  */}
        <div className="col-span-4 my-2  w-full">
          <h1 className="text-left text-xl">Job experience(Total)</h1>
        </div>
        {/* input value area  */}
        <div className="col-span-8 w-full">
          <div className="flex justify-between items-center ">
            <div className="flex justify-center mr-2 w-full">
              <div className="mb-3 w-full">
                <select
                  required
                  name="job_exp_total_year"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Year</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 year">2 Year</option>
                  <option value="3 Year">3 Year </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="mb-3 w-full">
                <select
                  required
                  name="job_exp_total_month"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Month</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Month">2 Month</option>
                  <option value="3 Month">3 Month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalariedForm;