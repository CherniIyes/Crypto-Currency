// "use client"
import Navbar from "@Components/Navbar";
import { ThemeProvider } from "@context/ThemeContext";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider >
  );
}
