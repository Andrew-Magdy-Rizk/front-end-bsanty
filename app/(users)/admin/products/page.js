import Link from "next/link";

function page() {
  const products = [
    { id: "231", title: "awdwd", description: "dawdr23wrfef", price: 4234 },
  ];
  return (
    <>
      <h1 className="text-center m-3">Products</h1>
      <Link href="/products/add" className="btn btn-success mb-3 fs-5 fw-bold">
        Add Product
      </Link>
      <table className="product-table table text-center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 50)}...</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger me-2">Delete</button>
                  <button className="btn btn-warning me-2">Edit</button>
                  <Link
                    href={`/products/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default page;
