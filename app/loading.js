import "@/public/styles/loading.css";
function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen flex items-center justify-center h-screen bg-primary-500">
      <span className="loader h-screen"></span>
    </div>
  );
}

export default Loading;
