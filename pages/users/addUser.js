import { useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";
const AlertMessage = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1000,
  });
};

const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post("/api/adduser", data).then((res) => {
      console.log(res);
      if (res?.data?.insertedId) {
        AlertMessage();
        Router.push("/users/userslist");
      }
    });

    reset();
  };

  return (
    <div>
      <h1 className="mt-12 text-center mb-8 text-3xl">Add A New User</h1>
      <div className="flex flex-col justify-center items-center align-middle m-auto w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Name
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}{" "}
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}{" "}
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Location
          </label>
          <input
            {...register("location", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.location && (
            <span className="text-red-500">This field is required</span>
          )}{" "}
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Position
          </label>
          <input
            {...register("position", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          {errors.position && (
            <span className="text-red-500">This field is required</span>
          )}{" "}
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
