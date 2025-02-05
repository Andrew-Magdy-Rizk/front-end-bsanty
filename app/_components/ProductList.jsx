"use client";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, ProductsThunk } from "../_rtk/slices/productReducers";
import Loading from "../loading";
import SkeletonList from "./SkeletonList";

function ProductList() {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsThunk());
  }, []);

  return state.loading ? (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-center align-middle gap-4 py-10">
      <SkeletonList />
    </div>
  ) : (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-center align-middle gap-4 py-10">
        {state.products.length < 1 ? (
          <div className="text-center text-gray-500 dark:text-white">
            No Products Found
          </div>
        ) : (
          state.products.map((product) => {
            return (
              <div
                key={product._id}
                className="p-3 flex flex-col justify-between items-start overflow-hidden max-w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                {/* <div className="relative w-full h-[100px] md:h-[150px] lg:h-[200px]"> */}
                <Link
                  onClick={() => dispatch(getProduct(product))}
                  className="relative w-full h-[100px] md:h-[150px] lg:h-[200px]"
                  href={`/user/products/${product._id}`}
                >
                  <Image
                    className="rounded-t-lg object-contain"
                    src={product.imageCover}
                    alt="Product Image"
                    loading="lazy"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
                {/* </div> */}
                <div className="mt-4">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product?.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-sm text-gray-600 dark:text-gray-400 text-wrap">
                    {product?.description.length > 50
                      ? product?.description.slice(0, 50) + "..."
                      : product?.description}
                  </p>
                  <Link
                    href={`/user/products/${product._id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination />
    </>
  );
}

export default ProductList;
