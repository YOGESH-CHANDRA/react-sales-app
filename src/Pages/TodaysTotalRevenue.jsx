import { useEffect, useState } from "react";
import { useSalesRecord } from "../SalesContext";


// total revenue component
const TodaysTotalRevenue = () => {
  const [revenue, setRevenue] = useState(0);
  const { salesData, TotalRevenue } = useSalesRecord();
  useEffect(() => setRevenue(TotalRevenue()), [salesData]);
  return (
    <div className="todaysTotalRevenue m-auto">
      <h1 className="text-center">TODAYS REVENUE IS Rs. {revenue}/-</h1>
    </div>
  );
};

export default TodaysTotalRevenue;
