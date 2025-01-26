"use client";

import { createCategoryApi } from "@/app/_axios/api/categories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/(users)/admin/products/loading";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { getCategories } from "@/app/_rtk/slices/categoryReducers";
import SuccessMsg from "@/app/_components/SuccessMsg";

function FormAdd() {
  const pathName = usePathname();
  const [data, setDate] = useState({
    name: "",
    image: null,
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState([]);
  const [success, setSuccess] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setDate({ ...data, [name]: e.target.files[0] });
    } else {
      setDate({ ...data, [name]: value });
    }
  };
  const handelError = () => {
    clearTimeout();
    setTimeout(() => {
      setErr([]);
    }, 3000);
    return (
      err.length > 0 && err.map((err) => <ErrorMessage error={err} key={err} />)
    );
  };

  const handelSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!data.image) {
        setErr([...err, { status: "field", message: "image is required" }]);
        setLoading(false);
        return;
      }
      const form = new FormData();
      form.append("image", data.image);
      form.append("name", data.name);
      const token = auth.token;
      const res = await createCategoryApi({ form, token });
      dispatch(getCategories(res.data));
      handelSuccess();
    } catch (error) {
      if (error?.response?.data !== undefined) {
        setErr([...err, error.response.data]);
      } else {
        setErr([
          ...err,
          {
            status: 500,
            msg: "Server Error",
          },
        ]);
      }
    }

    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <section>
        <div
          className={`duration-500 ease-in-out transform -translate-y-full opacity-100 fixed ${
            success ? "top-[20%]" : "top-0"
          } left-1/2 -translate-x-1/2 w-2/3 z-10 p-4`}
        >
          <SuccessMsg msg="Category" />
        </div>

        {err.length > 0 && (
          <ul className="absolute top-5 mx-auto w-full">
            <li className="flex flex-col gap-4 items-center justify-center mx-10">
              {handelError()}
            </li>
          </ul>
        )}
        <div className="container mx-auto p-6 dark:text-white">
          <form onSubmit={handelSubmit}>
            <div className="flex justify-between items-center mb-4">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <Link
                      href={pathName.split("/").slice(0, 2).join("/")}
                      className="block transition hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <span className="sr-only"> Home </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </Link>
                  </li>

                  {/* <span className="rtl:rotate-180">/</span> */}

                  {pathName.split("/").map(
                    (path) =>
                      path !== "" && (
                        <div key={path} className="flex">
                          <span className="rtl:rotate-180 mx-1">/</span>
                          <li>
                            <a
                              href="#"
                              className="block transition hover:text-gray-700 dark:hover:text-gray-200"
                            >
                              {path}
                            </a>
                          </li>
                        </div>
                      )
                  )}
                </ol>
              </nav>
              <button
                type="submit"
                className="py-2 px-4 text-sm bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 duration-300 hover:shadow-md hover:shadow-primary-500"
              >
                Add Category
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-start w-full">
              <div className="flex-1 flex flex-col gap-4 w-full lg:w-auto">
                <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-medium mb-3">
                    General Information
                  </h3>
                  <div className="mb-3">
                    <label htmlFor="productName" className="block mb-1">
                      Name
                    </label>
                    <input
                      onChange={handelChange}
                      type="text"
                      name="name"
                      value={data.name}
                      required
                      className="text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                      id="productName"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-medium mb-3">category Image</h3>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="image"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                      >
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          onChange={handelChange}
                          type="file"
                          className="hidden"
                          name="image"
                          id="image"
                          placeholder="Enter Price"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormAdd;
