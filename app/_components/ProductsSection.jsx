import ProductList from "./ProductList";

function ProductsSection() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <h1 className="text-3xl font-bold dark:text-white">Products Section</h1>
      <ProductList />
    </div>
  );
}

export default ProductsSection;
