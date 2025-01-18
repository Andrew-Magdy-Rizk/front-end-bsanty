"use client";
import Link from "next/link";
import { getProducts } from "@/app/_axios/api/products";
import Toggel from "./_components/Toggel";
import { useState, useEffect } from "react";

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts(5, 1);
        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  const handleToggle = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === id ? { ...product, inStock: !product.inStock } : product
      )
    );
  };

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
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description.slice(0, 50)}...</td>
                <td>{product.price}</td>
                <td>
                  <Toggel
                    inStock={product.inStock}
                    onToggle={() => handleToggle(product._id)}
                  />
                </td>
                <td className="p-2 flex justify-center items-center gap-2">
                  <button className="p-2 bg-red-500 text-white rounded-md">
                    Delete
                  </button>
                  <button className="p-2 bg-primary-400 text-white rounded-md">
                    Edit
                  </button>
                  <Link
                    href={`/products/${product._id}`}
                    className="p-2 bg-green-700 text-white rounded-md"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Page;
