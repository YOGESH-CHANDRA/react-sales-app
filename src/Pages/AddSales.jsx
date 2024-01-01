import { useSalesRecord } from "../SalesContext";


// Add sales form component
const AddSales = () => {
  console.log(useSalesRecord);
  const SalesRecord = useSalesRecord();
  console.log(SalesRecord);
  const { salesItem, setSalesItem, salesData, setSalesData, TotalRevenue } =
    SalesRecord;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesItem((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSalesData((prev) => [...prev, salesItem]);
    console.log(salesItem);
    setSalesItem({ salesId: "", productName: "", quantity: "", amount: "" });
  };

  console.log(TotalRevenue());
  return (
    <div className="addSales">
      <h1 className="text-center my-2">ADD SALES ENTRY</h1>
      <form className="bg-light p-2">
        <div className="form-group">
          <label htmlFor="salesId">Sales Id </label>
          <br />
          <input
            type="text"
            id="salesId"
            className=" form-control "
            name="salesId"
            value={salesItem.salesId}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <br />
          <input
            type="text"
            id="productName"
            className=" form-control "
            name="productName"
            value={salesItem.productName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group ">
          <label htmlFor="Quantity">Quantity</label>
          <br />
          <input
            type="number"
            id="quantity"
            className=" form-control  "
            name="quantity"
            value={salesItem.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            type="number"
            id="amount"
            className="form-control"
            name="amount"
            value={salesItem.amount}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSales;
