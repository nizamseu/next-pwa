import Image from "next/image";

const singleProduct = ({ image, title, subTitle }) => {
  return (
    <div className="single_product_item flex bg-white border-0 p-2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#0ab9f2",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Image width="30px" height="30px" src={image} alt="" />{" "}
      </div>
      <div className="text-left pl-2">
        <h1 style={{ color: "#0ab9f2", fontSize: "16px", fontWeight: "bold" }}>
          {title}
        </h1>
        <h1 style={{ color: "#212529" }}>{subTitle}</h1>
      </div>
    </div>
  );
};

export default singleProduct;
