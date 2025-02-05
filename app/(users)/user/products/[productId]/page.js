import ProductDetails from "@/app/_components/ProductDetails";

function page({ params }) {
  console.log(params);
  return <ProductDetails params={params} />;
}

export default page;
