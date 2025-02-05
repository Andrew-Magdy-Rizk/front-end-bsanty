"use client";
import { login } from "@/app/_axios/api/auth";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin, clearError } from "@/app/_rtk/slices/authReducers";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/_components/ErrorMessage";
function Login() {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const route = useRouter();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // const handelError = () => {
  //   clearTimeout();
  //   setTimeout(() => {
  //     setErr([]);
  //   }, 3000);
  //   return (
  //     err.length > 0 && err.map((err) => <ErrorMessage error={err} key={err} />)
  //   );
  // };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(actLogin(data));
      if (res.type === "auth/actLogin/fulfilled") {
        if (res.payload?.data?.data?.role === "admin") {
          route.replace("/admin");
        } else if (res.payload?.data?.data?.role === "user") {
          console.log("true");
          route.replace("/user");
        }
      } else if (res.type === "auth/actLogin/rejected") {
        setTimeout(() => {
          dispatch(clearError());
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {auth.error && (
          <ul className="fixed top-5 w-[90%]">
            <div className="flex flex-col gap-4 items-center justify-center">
              <ErrorMessage error={auth.error} />
            </div>
          </ul>
        )}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handelSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handelChange}
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                  placeholder="name@company.com"
                  required
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
                  onChange={handelChange}
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500"
                  required
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
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
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={auth.loading}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {auth.loading ? "Loading..." : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
