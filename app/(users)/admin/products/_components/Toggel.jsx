function Toggel({ inStock, onToggle }) {
  return (
    <label
      htmlFor="AcceptConditions"
      className={`relative inline-block h-8 w-14 cursor-pointer rounded-full transition ${
        inStock ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <input
        onClick={onToggle}
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
      />
      <span
        className={`absolute inset-y-0 m-1 size-6 rounded-full bg-white transition-all ${
          inStock ? "start-6" : "start-0"
        }`}
      ></span>
    </label>
  );
}

export default Toggel;
