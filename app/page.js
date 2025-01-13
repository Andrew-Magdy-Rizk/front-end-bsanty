import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ProductsSection from "./_components/productsSection";

export default async function Home() {
  // const res = await getProducts();
  // const products = res.data;
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </>
  );
}
