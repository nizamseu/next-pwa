import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../../Redux/loanSlice";

const LoanForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(saveData({ name, value }));
  };
  return (
    <div>
      <div className="gender grid xl:grid-cols-12 grid-cols">
        {/* gender Area  */}
        <div>
          {/* text area section  */}
          <div className="col-span-4 my-2">
            <h1 className="text-left text-xl">Gender</h1>
          </div>
          {/* input value area section  */}
          <div className="col-span-8 w-full">
            <div className="single_field ">
              <label className="radio-container">
                Female
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="new_loan"
                  name="gender"
                  value="female"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
            <div className="single_field">
              <label className="radio-container">
                Male
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="new_loan"
                  name="gender"
                  value="male"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
            <div className="single_field">
              <label className="radio-container">
                Other
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="new_loan"
                  name="gender"
                  value="other"
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        {/* Date of Birth  */}
        <div cclassName="col-span-4 my-2">
          {/* text area  */}
          <div>
            <h1 className="text-left text-xl">Date of Birth</h1>
          </div>
          {/* input value area  */}
          <div className="col-span-8 w-full">
            <div className="flex items-center ">
              <div className="flex justify-center mr-2">
                <div className="mb-3 w-full">
                  <select
                    required
                    name="day"
                    onChange={handleChange}
                    className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                  >
                    <option selected>Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mr-2">
                <div className="mb-3 w-full">
                  <select
                    required
                    name="month"
                    onChange={handleChange}
                    className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                  >
                    <option selected>Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="mb-3 w-full">
                  <select
                    required
                    name="year"
                    onChange={handleChange}
                    className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                  >
                    <option selected>Year</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="2000">2000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* your Profession area is here  */}
        <div>
          {/* text area section  */}
          <div className="col-span-4 my-2">
            <h1 className="text-left text-xl">Your Profession</h1>
          </div>

          {/* input value area  */}
          <div className="col-span-8 w-full">
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

        {/* Residence area is here  */}
        <div>
          {/* text area section  */}
          <div className="col-span-4 my-2">
            <h1 className="text-left text-xl">Your Residence Type</h1>
          </div>

          {/* input value area  */}
          <div className="col-span-8 w-full">
            <div className="flex justify-center">
              <div className="mb-3 w-full">
                <select
                  required
                  name="residence"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Select Your Residence Type </option>
                  <option value="Selft Own Home">Selft Own Home</option>
                  <option value="Rental Home">Rental Home</option>
                  <option value="Company Provide">Company Provide</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Business Location */}
        <div>
          {/* text area section  */}
          <div className="col-span-4 my-2">
            <h1 className="text-left text-xl">Business Location</h1>
          </div>

          {/* input value area  */}
          <div className="col-span-8 w-full">
            <div className="flex justify-center">
              <div className="mb-3 w-full">
                <select
                  required
                  name="location"
                  onChange={handleChange}
                  className="form-select form-select-lg mb-3 w-full px-4 py-2 mt-1 text-xl font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300b rounded "
                >
                  <option selected>Select Devision</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Comilla">Comilla</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;
