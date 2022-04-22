import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, saveData } from "../../Redux/loanSlice";

const BusinessForm = () => {
  const page = useSelector((state) => state.loan.page);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(nextPage());
  };
  const handlePre = () => {
    dispatch(prevPage());
  };
  return (
    <div className="mt-12">
      <h1 className="text-5xl">This is Business Form</h1>

      <div>
        {page === 2 && (
          <button onClick={() => handlePre()} className="pre mb-4">
            Preview
          </button>
        )}

        {/* <button onClick={() => handleNext()} className="next mb-4">
          Next
        </button> */}
      </div>
    </div>
  );
};

export default BusinessForm;
