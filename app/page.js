import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ProductsSection from "./_components/ProductsSection";

export default async function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </>
  );
}
