import React, { useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AiOutlineAim, AiOutlineStar } from 'react-icons/ai'
import Link from 'next/link';
import Image from "next/image";

const Template = ({ coin }) => {



      return (
            <tr key={coin.id} className='h-[80px] border-b overflow-hidden'>
                  <td >
                        <AiOutlineStar />
                  </td>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                        <Link href={{
                              pathname: `/pages/CoinPage`,
                              query: { id: coin.id },
                        }}>
                              <div className='flex items-center'>

                                    <Image className='w-6 mr-2 rounded-full' src={coin.image} alt={coin.id}
                                          width={20}
                                          height={20}
                                          quality={70}
                                          loading="lazy"
                                    />
                                    <p className='hidden sm:table-cell'>{coin.name}</p>
                              </div>
                        </Link>
                  </td>
                  <td className='uppercase'>{coin.symbol}</td>
                  <td >${coin.current_price}</td>
                  <td className='text-red-600'>{coin.high_24h > 1 ? (
                        <p className='text-green-600'>
                              ${coin.high_24h.toFixed(2)}
                        </p>
                  ) : (
                        <p className='text-red-600'>
                              ${coin.high_24h.toFixed(2)}
                        </p>
                  )}
                  </td>
                  <td className='w-[180px] hidden md:table-cell'>{coin.total_volume.toLocaleString()}</td>
                  <td className='w-[180px] hidden md:table-cell'>{coin.market_cap.toLocaleString()}</td>
                  <td>
                        <Sparklines data={coin.sparkline_in_7d.price}>
                              <SparklinesLine color='teal' />
                        </Sparklines>
                  </td>
            </tr >



      )
}

export default Template
