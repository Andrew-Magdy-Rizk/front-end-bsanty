"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productThunk } from "../_rtk/slices/productReducers";
import Loading from "../loading";
import { useState } from "react";

function ProductDetails({ params }) {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (!state?.product?._id) {
      dispatch(productThunk(params.productId));
    }
  }, []);
  return (
    <div className="container mx-auto">
      {!state.loading ? (
        <section className="py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center">
              <div className="slider-box md:mt-[80px] w-full max-lg:mx-auto mx-0">
                <div className="swiper main-slide-carousel swiper-container relative mb-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={state.product?.imageCover}
                          alt="product-info"
                          fill
                          className="max-lg:mx-auto object-cover md:mx-auto w-[80%] h-[500px] rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-for-slider">
                  <div className="swiper-wrapper flex justify-center items-start gap-4">
                    {state.product?.images &&
                      state.product?.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative w-full h-[150px] swiper-slide thumbs-slide mx-auto group"
                        >
                          <Image
                            src={image}
                            alt="product-info"
                            fill
                            className="object-cover cursor-pointer rounded-xl transition-all duration-500 border-2  group-hover:border-primary"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                  <div className="flex items-center justify-between gap-6 mb-6">
                    <div className="text">
                      <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 dark:text-white">
                        {state.product?.name}
                      </h2>
                      <p className="font-bold uppercase text-base text-gray-400 dark:text-neutral-400">
                        {state.product?.category?.name}
                      </p>
                    </div>
                    <button className="group transition-all duration-500 p-0.5">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="fill-gray-50 transition-all duration-500 group-hover:fill-gray-100 dark:fill-neutral-600 dark:group-hover:fill-neutral-500"
                          cx="30"
                          cy="30"
                          r="30"
                          fill=""
                        />
                        <path
                          className="stroke-secondary transition-all duration-500 group-hover:stroke-Primary"
                          d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                    <div className="flex items-center">
                      <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 dark:text-white">
                        EGY {state.product?.price}{" "}
                      </h5>
                      <span className="ml-3 font-semibold text-lg dark:text-white">
                        {((parseInt(state.product?.price) -
                          parseInt(state.product?.priceAfterDiscount)) /
                          parseInt(state.product?.price)) *
                          100 || discount}
                        % off
                      </span>
                    </div>
                    <svg
                      className="mx-5 max-[400px]:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="36"
                      viewBox="0 0 2 36"
                      fill="none"
                    >
                      <path d="M1 0V36" stroke="#E5E7EB" />
                    </svg>
                    <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                            fill="white"
                          />
                          <g>
                            <path
                              d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_12657_16865">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                          <clipPath id="clip1_12657_16865">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-base font-medium text-white">
                        4.8
                      </span>
                    </button>
                  </div>
                  <div className="mb-10">
                    <p className="text-2xl font-bold dark:text-white">
                      description
                    </p>
                    <p className="text-lg font-medium dark:text-white">
                      {state.product?.description}
                    </p>
                  </div>
                  <p className="font-medium text-lg text-gray-900 mb-2 dark:text-white">
                    Color
                  </p>
                  <div className="grid grid-cols-5 gap-3 mb-10 max-w-sm">
                    <div className="color-box group">
                      <div>
                        <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-black" />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                          Black
                        </p>
                      </div>
                    </div>
                    <div className="color-box group">
                      <div>
                        <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-red-600" />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                          Red
                        </p>
                      </div>
                    </div>
                    <div className="color-box group">
                      <div>
                        <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-blue-600" />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                          Blue
                        </p>
                      </div>
                    </div>
                    <div className="color-box group">
                      <div>
                        <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-gray-500" />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                          Gray
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                    <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                      <button className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-black group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.5 11H5.5" />
                          <path d="M16.5 11H5.5" />
                          <path d="M16.5 11H5.5" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-secondary outline-0 hover:placeholder:text-primary dark:text-white dark:placeholder:text-neutral-300"
                        placeholder={0}
                        disabled={true}
                      />
                      <button className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-black group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 5.5V16.5M16.5 11H5.5" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" />
                        </svg>
                      </button>
                    </div>
                    <button className="group py-3 px-5 rounded-full bg-lime-200 text-black font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-600 hover:bg-lime-300">
                      <svg
                        className="stroke-black transition-all duration-500"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                  <button className="text-center w-full px-5 py-4 rounded-[100px] bg-primary flex items-center justify-center font-semibold text-lg text-black shadow-sm shadow-transparent transition-all duration-500 hover:bg-secondary hover:shadow-gray-500">
                    Buy Now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // <SkeletonProductInfo />
        // <div>not found</div>
        <Loading />
      )}
      {/* {state.length > 0 && (
        <div className="my-32">
          <h2 className="text-2xl font-bold mb-5 dark:text-white">
            Similar Products
          </h2>
          <ProductList />
        </div>
      )} */}

      {/* <script src='../actionProductInfo.js'/> */}
      {/* {checkout && (
        <CheckOut
          hidden={setCheckout}
          Total={(
            product?.attributes?.product_Price * qauntity.toFixed(2)
          ).toFixed(2)}
        />
      )} */}
    </div>
  );
}

export default ProductDetails;
