"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinPage = () => {
      const [coin, setCoin] = useState({});
      const params = useParams()

      const url =
            // `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
            `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true`;

      useEffect(() => {
            axios.get(url).then((response) => {
                  setCoin(response.data);
                  // console.log(response.data);
            });
      }, [url]);
      console.log("aaaaaaaaaaaaaaaaaaaaaa", coin.market_data?.sparkline_7d.price);

      return (
            <div>
                  <div>
                        <img src={coin.image?.large} alt="" />
                        <div>
                              <p>{coin?.name} price</p>
                              <p>({coin.symbol?.toUpperCase()})  / USD</p>
                        </div>
                  </div>



                  <div>
                        <div>
                              {coin.market_data?.current_price.usd ? (<p>${coin.market_data.current_price.usd.toLocaleString()}</p>) : null}
                              <p>7 Day</p>
                        </div>
                        <div>
                              <Sparklines data={coin.market_data?.sparkline_7d.price}>
                                    <SparklinesLine color='teal' />
                              </Sparklines>
                        </div>
                        <div>
                              <div>
                                    <p>Market Cap</p>
                                    {coin.market_data?.market_cap ? (
                                          <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                                    ) : null}
                              </div>
                              <div>
                                    <p>Volume (24h) </p>
                                    {coin.market_data?.market_cap ? (
                                          <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                                    ) : null}
                              </div>
                        </div>

                        <div>
                              <div>
                                    <p>24h High</p>
                                    {coin.market_data?.high_24h ? (
                                          <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                                    ) : null}
                                    <p>24h Low</p>
                                    {coin.market_data?.low_24h ? (
                                          <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                                    ) : null}
                              </div>
                        </div>


                  </div>


            </div>
      )
}

export default CoinPage
