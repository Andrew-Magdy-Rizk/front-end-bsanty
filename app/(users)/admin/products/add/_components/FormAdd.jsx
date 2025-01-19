"use client";

import { getCategories } from "@/app/_axios/api/categories";
import { createProduct } from "@/app/_axios/api/products";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading";

function FormAdd() {
  const pathName = usePathname();
  const [data, setDate] = useState({
    name: "",
    description: "",
    price: "",
    priceAfterDiscount: "",
    imageCover: null,
    images: [],
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name === "imageCover") {
      setDate({ ...data, [name]: e.target.files[0] });
    } else {
      setDate({ ...data, [name]: value });
    }
  };
  const handelChangeImages = (e) => {
    const files = Array.from(e.target.files);
    setDate({ ...data, images: files });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    try {
      const form = new FormData();
      Object.keys(data).forEach(
        (key) => key !== "images" && form.append(key, data[key])
      );
      data.images.forEach((image) => form.append("images", image));
      console.log(form);
      const token = auth.token;
      const res = await createProduct(form, token);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const getCategory = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data.data);
      setDate({ ...data, category: res.data.data[0]._id });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <section>
        <div className="container mx-auto p-6 dark:text-white">
          <form onSubmit={handelSubmit}>
            <div className="flex justify-between items-center mb-4">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
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
                        <>
                          <span className="rtl:rotate-180">/</span>
                          <li>
                            <a
                              href="#"
                              className="block transition hover:text-gray-700 dark:hover:text-gray-200"
                            >
                              {path}
                            </a>
                          </li>
                        </>
                      )
                  )}

                  {/* <li>
                  <a
                    href="#"
                    className="block transition hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    {" "}
                    Shirts{" "}
                  </a>
                </li>

                <span className="rtl:rotate-180">/</span>

                <li>
                  <a
                    href="#"
                    className="block transition hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    Plain Tee
                  </a>
                </li> */}
                </ol>
              </nav>
              <button
                type="submit"
                className="py-2 px-4 text-sm bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 duration-300 hover:shadow-md hover:shadow-primary-500"
              >
                Add Product
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
                      className="text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                      id="productName"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productDescription" className="block mb-1">
                      Description
                    </label>
                    <textarea
                      onChange={handelChange}
                      className="text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                      id="productDescription"
                      name="description"
                      rows="3"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-medium mb-3">Pricing</h3>
                  <div className="flex gap-2 justify-center items-center">
                    <div className="mb-3 w-full">
                      <label htmlFor="productPrice" className="block mb-1">
                        Price
                      </label>
                      <input
                        onChange={handelChange}
                        type="number"
                        className="text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                        name="price"
                        id="productPrice"
                        placeholder="Enter Price"
                      />
                    </div>
                    <div className="mb-3 w-full">
                      <label htmlFor="discount" className="block mb-1">
                        Discount
                      </label>
                      <input
                        onChange={handelChange}
                        type="number"
                        className="appearance-none text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                        name="priceAfterDiscount"
                        id="discount"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-medium mb-3">Product Images</h3>
                  {/* <div className="mb-3">
                    <label htmlFor="productPrice" className="block mb-1">
                      imageCover
                    </label>
                    <input
                      onChange={handelChange}
                      type="file"
                      className=" "
                      name="imageCover"
                      id="productPrice"
                      placeholder="Enter Price"
                    />
                  </div> */}
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div class="flex items-center justify-center w-full">
                      <label
                        for="imageCover"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                      >
                        <div class="flex flex-col items-center justify-center p-6 text-center">
                          <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          onChange={handelChange}
                          type="file"
                          className="hidden"
                          name="imageCover"
                          id="imageCover"
                          placeholder="Enter Price"
                        />
                      </label>
                    </div>

                    <div class="flex items-center justify-center w-full">
                      <label
                        for="productImages"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                      >
                        <div class="flex flex-col items-center justify-center p-6 text-center">
                          <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX.count 5 Image)
                          </p>
                        </div>
                        <input
                          onChange={handelChangeImages}
                          type="file"
                          multiple
                          className="hidden"
                          name="images"
                          id="productImages"
                        />
                      </label>
                    </div>
                  </div>

                  {/* <div className="mb-3">
                    <label htmlFor="productPrice" className="block mb-1">
                      image
                    </label>
                    <input
                      onChange={handelChangeImages}
                      type="file"
                      multiple
                      className="form-control"
                      name="images"
                      id="productPrice"
                      placeholder="Enter Price"
                    />
                  </div> */}
                </div>

                <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <div className="mb-3">
                    <label htmlFor="category" className="block mb-3">
                      Category
                    </label>
                    <select
                      onChange={handelChange}
                      name="category"
                      id="category"
                      className="appearance-none text-gray-900 rounded-lg focus:outline-primary-600 focus-visible:outline-none  block w-full px-3 py-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:outline-primary-500"
                    >
                      {categories.map((category) => (
                        <option
                          key={category._id}
                          value={category._id}
                          onChange={handelChange}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
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
