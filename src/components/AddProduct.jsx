import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/productSlice"

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const updateProduct = (e) => {
    e.preventDefault();
    dispatch(update({title, price}))
  };
  return (
    <div>
      <form className="box mt-5" onSubmit={updateProduct}>
        <div className="field">
          <label htmlFor="" className="label">
            Title
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Price
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
