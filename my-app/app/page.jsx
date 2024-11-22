"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/Home/page.jsx";
import { ThemeProvider } from "@context/ThemeContext";
import Image from "next/image";

export default function Home() {
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
    <ThemeProvider>
      <HomePage coins={coins} />
    </ThemeProvider >
  );
}
