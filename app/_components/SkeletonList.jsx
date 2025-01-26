function SkeletonList() {
  const skeleton = Array.from({ length: 10 }).map((_, i) => i);
  return skeleton.map((item) => (
    <div
      key={item}
      className="animate-pulse p-3 flex flex-col justify-between items-start max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="relative w-full bg-slate-200 h-[100px] md:h-[150px] lg:h-[200px]"></div>
      <div className="mt-4">
        <div>
          <h5 className="bg-slate-200 h-[25px] w-[120px] rounded mb-2"></h5>
        </div>
        <p className="bg-slate-200 h-[20px] w-[50px] rounded mb-3"></p>
        <div className="bg-slate-200 h-[35px] w-[100px] inline-flex items-center px-3 py-2  text-center rounded"></div>
      </div>
    </div>
  ));
}

export default SkeletonList;
