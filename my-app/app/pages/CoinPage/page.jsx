"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify'
import Navbar from '@Components/Navbar';
import { ThemeProvider } from '@context/ThemeContext';
import { useSearchParams } from 'next/navigation';
import Footer from '@Components/Fotter';
import Image from "next/image";

const CoinPage = () => {


      const [coin, setCoin] = useState({});
      const params = useSearchParams()
      const id = params.get("id")
      // console.log("Coin ID:", params.get("id"));


      const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`;

      useEffect(() => {
            if (id) {
                  axios.get(url).then((response) => {
                        console.log("API Response:", response.data);
                        setCoin(response.data);
                  });
            }
      }, [id]);

      if (!id) return <p>Loading...</p>;



      return (

            <div className='rounded-div my-12 py-8'>

                  <div className='flex py-8'>
                        <Image className='w-20 mr-8' src={coin.image?.large} alt='/'
                              width={150}
                              height={150}
                              quality={70}
                              loading="lazy"
                        />
                        <div>
                              <p className='text-3xl font-bold'>{coin?.name} price</p>
                              <p>({coin.symbol?.toUpperCase()})  / USD</p>
                        </div>
                  </div>



                  <div className=' grid md:grid-cols-2 gap-8'>

                        {/*  */}
                        <div>
                              <div className='flex justify-between'>
                                    {coin.market_data?.current_price.usd ? (<p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>) : null}
                                    <p className='text-2xl'>7 Day</p>
                              </div>
                              <div>
                                    <Sparklines data={coin.market_data?.sparkline_7d.price}>
                                          <SparklinesLine color='teal' />
                                    </Sparklines>
                              </div>
                              <div className='flex justify-between py-4'>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Market Cap</p>
                                          {coin.market_data?.market_cap ? (
                                                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                                          ) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Volume (24h)</p>
                                          {coin.market_data?.market_cap ? (
                                                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                                          ) : null}
                                    </div>
                              </div>

                              <div className='flex justify-between py-4'>
                                    <div>
                                          <p className='text-gray-500 text-sm'>24h High</p>
                                          {coin.market_data?.high_24h ? (
                                                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                                          ) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>24h Low</p>
                                          {coin.market_data?.low_24h ? (
                                                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                                          ) : null}
                                    </div>
                              </div>
                        </div>
                        {/*  */}





                        {/*  */}
                        <div>
                              <p className='text-xl font-bold'>Market Stats</p>
                              <div className='flex justify-between py-4'>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Market Rank</p>
                                          {coin.market_cap_rank}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Hashing Algo</p>
                                          {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Trust Score</p>
                                          {/* {coin.tickers ? <p>{coin.liquidity_score}</p> : "----"} */}
                                          <p>----</p>
                                    </div>
                              </div>


                              <div className='flex justify-between py-4'>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (24h)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2) + "%"} </p>) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (7d)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2) + "%"} </p>) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (14d)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2) + "%"} </p>) : null}
                                    </div>
                              </div>
                              <div className='flex justify-between py-4'>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (30d)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2) + "%"} </p>) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (60d)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2) + "%"} </p>) : null}
                                    </div>
                                    <div>
                                          <p className='text-gray-500 text-sm'>Price Change (1y)</p>
                                          {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2) + "%"} </p>) : null}
                                    </div>
                              </div>
                              <div className='flex justify-around p-8 text-accent'>
                                    <FaTwitter />
                                    <FaFacebook />
                                    <FaReddit />
                                    <FaGithub />
                              </div>
                        </div>
                        {/*  */}


                  </div>

                  <div className='py-4'>
                        <p className='text-xl font-bold text-center'>About {coin.name}</p>
                        <p className='text-center' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''), }} ></p>
                  </div>
            </div >

      )
}

export default CoinPage
