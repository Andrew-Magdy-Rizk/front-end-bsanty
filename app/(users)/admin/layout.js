import Header from "./_components/Header";
import SlideMenu from "./_components/SlideMenu";

function layout({ children }) {
  return (
    <main className="relative grid grid-cols-12">
      <SlideMenu />
      <section className="relative col-span-12 md:col-span-9">
        <Header />
        {children}
      </section>
    </main>
  );
}

export default layout;
