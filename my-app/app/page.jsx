"use client"
import Navbar from "@Components/Navbar";
import { ThemeProvider } from "@context/ThemeContext";
import Image from "next/image";
import Homee from "./pages/Home/page.jsx";
import SingIn from "./pages/SingIn/page";
import SingUp from "./pages/SingUp/page.jsx";
import Account from "./pages/Account/page.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
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
      <Navbar />
      <Homee coins={coins} />
      <SingIn />
      <SingUp />
      <Account />
    </ThemeProvider >
  );
}
