import { createContext, useContext, useState } from "react";

const salesContext = createContext(null);

// creating central data using use context API in react
// sales data available on all pages. and create custom hook function for useSalesRecord for context API

export const SalesContextProvider = ({ children }) => {
  const [salesData, setSalesData] = useState([]);
  const [salesItem, setSalesItem] = useState({
    salesId: "",
    productName: "",
    quantity: "",
    amount: "",
  });

  const TotalRevenue = () => {
    const Revenue = salesData.reduce(
      (acc, currentData) => acc + Number(currentData.amount),
      0
    );
    
    return Revenue;
  };

  return (
    <salesContext.Provider
      value={{
        salesData,
        setSalesData,
        salesItem,
        setSalesItem,
        TotalRevenue,
      }}
    >
      {children}
    </salesContext.Provider>
  );
};

// custom hook

export const useSalesRecord = () => {
  return useContext(salesContext);
};
