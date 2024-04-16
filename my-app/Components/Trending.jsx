import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Trending = () => {
      const [trending, setTrending] = useState([]);

      const url = 'https://api.coingecko.com/api/v3/search/trending';
      // Fetch Trending Coins Data from API

      useEffect(() => {
            axios.get(url).then((response) => {
                  setTrending(response.data.coins);
                  // console.log("response Coins", response.data.coins);
            })
      }, [])



      return (
            <div className='rounded-div my-12 py-8 text-primary '>

                  <h1 className='text-2xl font-bold pb-5 px-4'>Trending Flous</h1>


                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {trending.map((coin) => (
                              <div className='rounded-div flex items-center justify-between p-4 hover:scale-105 ease-in-out duration-300'>

                                    <div className='flex items-center'>
                                          <img className='rounded-full' src={coin.item.small} alt="/" />
                                          <div className='flex-col items-center mx-4'>
                                                <p className='font-bold '>{coin.item.name}</p>
                                                <p>{coin.item.symbol}</p>
                                          </div>
                                    </div>


                                    <div className='flex items-center justify-between mr-2'>
                                          <img className='w-5 mr-2 rounded-full' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                                          <p>${coin.item.price_btc.toFixed(7)}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Trending
