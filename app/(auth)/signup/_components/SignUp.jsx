"use client";
import { signup } from "@/app/_axios/api/auth";
import ErrorMessage from "@/app/_components/ErrorMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setRemember(!remember);
  };

  const handelError = () => {
    clearTimeout();
    setTimeout(() => {
      setErr([]);
    }, 3000);
    return (
      err.length > 0 &&
      err.map((error) => <ErrorMessage error={error} key={err} />)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      setErr(...err, { state: "field", message: "Passwords do not match" });
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "password does not match!",
        text: "Something went wrong!",
      });
    }
    try {
      const res = await signup(data);
      console.log(res);
      setLoading(false);
      router.push("/login");
    } catch (error) {
      setErr([...err, ...error.response.data.errors]);
      console.log(error);
      setLoading(false);
      //   if (errors) {
      //     errors.forEach(async (error) => {
      //       await Swal.fire({
      //         icon: "error",
      //         title: error.msg,
      //         text: "Something went wrong!",
      //       });
      //     });
      //   }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {err.length > 0 && (
          <ul className="fixed top-5 w-[90%]">
            <div className="flex flex-col gap-4 items-center justify-center">
              {handelError()}
            </div>
          </ul>
        )}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  FullName
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  required="required"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="required"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
                  required="required"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:outline-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:outline-primary-600 dark:ring-offset-gray-800"
                      required=""
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? "loading..." : "Sign up"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
