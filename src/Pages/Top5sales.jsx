import { useEffect, useState } from "react";
import { useSalesRecord } from "../SalesContext";

const Top5sales = () => {
  const { salesData } = useSalesRecord();

  const [top5sales, setTop5sales] = useState([]);

  //sorting top sales and arrange for 5 top sales
  useEffect(() => {
    setTop5sales(salesData);
    const topSales = salesData.sort((a, b) => a.amount - b.amount);
    if (topSales.length >= 5) {
      setTop5sales(topSales.reverse().slice(0, 5));
    } else {
      setTop5sales(topSales);
    }
  }, []);

  return (
    <div className="top5sales bg-secondary">
      <h1 className="text-center">TOP 5 SALES</h1>
      <table className="table bg-white w-100">
        <thead className="border-bottom">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {top5sales.map((salesItem, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{salesItem.salesId}</td>
              <td>{salesItem.productName}</td>
              <td>{salesItem.quantity}</td>
              <td>{salesItem.amount}/-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top5sales;
