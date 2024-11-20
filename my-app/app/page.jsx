"use client"
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import axios from "axios";
import Home from "./pages/Home/page.jsx";
import { AuthContextProvider } from "@context/AuthContext.jsx";
import { ThemeProvider } from "@context/ThemeContext";

export default function app() {
  const [coins, setCoins] = useState([]);


  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log("response", response.data)
    });
  }, [url]);


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        {/* <AuthContextProvider> */}
        <Home coins={coins} />
        {/* </AuthContextProvider > */}
      </ThemeProvider >
    </Suspense>
  );
}
