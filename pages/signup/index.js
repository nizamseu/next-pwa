import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
const Index = () => {
  const { createNewUserUsingEmailPassword } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createNewUserUsingEmailPassword(
      data.email,
      data.password,
      data.displayName
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-11 ">
      <div className="grid place-items-center h-screen">
        <div className="md:w-2/4 w-full bg-white p-5 drop-shadow-xl py-6">
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl rounded-full text-gray-700  p-3"
            />
          </div>
          <h3 className="mb-5 text-3xl font-semibold text-gray-700 text-center">
            SIgnUp
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3"
          >
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500 text-left">
                Name
              </label>
              <input
                id="name"
                label="Name"
                name="name"
                {...register("displayName", { required: true })}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500 text-left">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500 text-left">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                {...register("password", { required: true })}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:underline focus:text-blue-800"
              >
                <a className="text-sky-500 font-bold"> Already have account?</a>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-red-500 focus:ring-1"
            >
              SignUp
            </button>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <button
                  //   onClick={handleGoogleSignUp}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-red-500 rounded-md group hover:bg-red-500 focus:outline-none"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="group-hover:text-white text-lg text-red-500"
                    />
                  </span>
                  <span className="text-sm font-medium text-red-500 group-hover:text-white">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
