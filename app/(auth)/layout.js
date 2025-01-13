import Footer from "../_components/Footer";
import Header from "../_components/Header";
import ProviderWrap from "../_rtk/ProviderWrap";

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
