import Footer from "../_components/Footer";
import Header from "../_components/Header";

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
