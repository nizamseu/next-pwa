import React from "react";

const statistics = () => {
  return (
    <div className="statistics grid lg:grid-cols-3 md-grid-cols-3 sm:grid-cols-2 grid-cols lg:place-items-center place-items-start  gap-4">
      <div className="st_item px-4">
        <h1>250 M+</h1>
        <p>CORE LOAN DISBURSED</p>
      </div>
      <div className="st_item px-4 sm:place-content-start">
        <h1>1.5 K+</h1>
        <p>CREDIT CARDS DISBURSED</p>
      </div>
      <div className="st_item px-4 sm:place-content-start">
        <h1>45 K+</h1>
        <p>HAPPY CUSTOMERS</p>
      </div>
    </div>
  );
};

export default statistics;
