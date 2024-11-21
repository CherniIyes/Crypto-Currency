"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Trending = () => {
      const [trending, setTrending] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      const url = 'https://api.coingecko.com/api/v3/search/trending';

      useEffect(() => {
            axios.get(url)
                  .then((response) => {
                        setTrending(response.data.coins);
                        setIsLoading(false);
                  })
                  .catch((error) => {
                        console.error("Error fetching data:", error);
                        setIsLoading(false);
                  });
      }, []);

      return (
            <div className="rounded-div my-12 py-8 text-primary">
                  <h1 className="text-2xl font-bold pb-5 px-4">Trending Flous</h1>

                  {isLoading ? (
                        <p className="text-center">Loading...</p>
                  ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {trending.map((coin) => (
                                    <div
                                          key={coin.item.id}
                                          className="rounded-div flex items-center justify-between p-4 hover:scale-105 ease-in-out duration-300"
                                    >
                                          <div className="flex items-center">
                                                {/* <img
                                                      className="rounded-full"
                                                      src={coin.item.small}
                                                      alt={coin.item.name}
                                                /> */}
                                                <Image className="rounded-full"
                                                      src={coin.item.small}
                                                      alt={coin.item.name}
                                                      width={30}
                                                      height={30}
                                                      quality={70}
                                                      loading="lazy"
                                                />




                                                <div className="flex-col items-center mx-4">
                                                      <p className="font-bold">{coin.item.name}</p>
                                                      <p>{coin.item.symbol}</p>
                                                </div>
                                          </div>

                                          <div className="flex items-center justify-between mr-2">
                                                <p>${coin.item.price_btc.toFixed(7)}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  )}
            </div>
      );
};

export default Trending;
