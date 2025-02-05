import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default layout;
