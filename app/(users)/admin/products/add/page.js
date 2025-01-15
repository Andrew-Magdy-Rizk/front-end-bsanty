function page() {
  return (
    <>
      <h2>AddProduct</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Enter Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter Price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <button type="sbmit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default page;
