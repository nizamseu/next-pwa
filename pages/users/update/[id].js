import { useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const updateAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Updated",
    text: "Successfully Updated",
    showConfirmButton: false,
    timer: 1500,
  });
};

const Update = () => {
  const { id } = Router?.query;
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/singleuser/?id=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3000/api/singleuser/?id=${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          updateAlert();
          Router.push("/users/userslist");
        }
      });
  };

  const handleChange = (e) => {
    const restData = { ...data, [e.target.name]: e.target.value };
    console.log(restData);
    setData(restData);
  };

  return (
    <div>
      <h1 className="mt-12 text-center mb-8 text-3xl">Update</h1>
      <div className="flex flex-col justify-center items-center align-middle m-auto w-1/2">
        <form onSubmit={handleUpdate} className="m-auto w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Name
          </label>
          <input
            onChange={handleChange}
            value={data.name}
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Email
          </label>
          <input
            onChange={handleChange}
            value={data?.email}
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Location
          </label>
          <input
            onChange={handleChange}
            value={data?.location}
            name="location"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />

          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Position
          </label>
          <input
            onChange={handleChange}
            value={data?.position}
            name="position"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />

          <br />
          <input type="submit" value={"Update"} />
        </form>
      </div>
    </div>
  );
};

export default Update;
