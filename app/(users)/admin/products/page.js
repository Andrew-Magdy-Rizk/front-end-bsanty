"use client";
import Link from "next/link";
import Toggel from "./_components/Toggel";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductsThunk,
  deleteProduct,
} from "@/app/_rtk/slices/productReducers";
import Pagination from "@/app/_components/Pagination";

function Page() {
  const state = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsThunk());
  }, [dispatch]);

  const handelDelete = (id) => {
    dispatch(deleteProduct({ id, token: auth.token }));
  };

  // const handleToggle = (id) => {
  //   dispatch(
  //     updateProduct({
  //       id,
  //       updates: { inStock: !product.inStock },
  //     })
  //   );
  // };
  return (
    <section>
      <div className="container mx-auto p-6 dark:text-white">
        <h1 className="text-center py-4 text-3xl font-bold">Products</h1>
        <Link
          href="/admin/products/add"
          className="text-lg px-4 py-2 bg-primary-500 text-white hover:bg-primary-600 duration-300 hover:shadow-md hover:shadow-primary-500 rounded-lg"
        >
          Add Product
        </Link>
        <table className="table w-full text-center mt-6">
          <thead className="border-b-2 dark:border-gray-500">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>inStock</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {state.products ? (
              state.products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description.slice(0, 50)}...</td>
                  <td>{product.price}</td>
                  <td>
                    <Toggel
                      inStock={product.inStock}
                      // onToggle={() => handleToggle(product._id)}
                    />
                  </td>
                  <td className="p-2 flex justify-center items-center gap-2">
                    <button
                      onClick={() => handelDelete(product._id)}
                      className="p-2 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                    {/* <button className="p-2 bg-primary-400 text-white rounded-md">
                      Edit
                    </button> */}
                    {/* <Link
                      href={`/products/${product._id}`}
                      className="p-2 bg-green-700 text-white rounded-md"
                    >
                      View
                    </Link> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Products Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination />
      </div>
    </section>
  );
}

export default Page;
