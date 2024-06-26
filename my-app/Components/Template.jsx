import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AiOutlineAim, AiOutlineStar } from 'react-icons/ai'
import Link from 'next/link';
import { UserAuth } from "@context/AuthContext.jsx";
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Template = ({ coin }) => {
      const [savedCoin, setSavedCoin] = useState(false);
      const { user } = UserAuth();

      const coinPath = doc(db, 'users', `${user?.email}`);
      const saveCoin = async () => {
            if (user?.email) {
                  setSavedCoin(true);
                  await updateDoc(coinPath, {
                        watchList: arrayUnion({
                              id: coin.id,
                              name: coin.name,
                              image: coin.image,
                              rank: coin.market_cap_rank,
                              symbol: coin.symbol,
                        }),
                  });
            } else {
                  alert('Please sign in to save a coin to your watch list');
            }
      };


      return (
            <tr key={coin.id} className='h-[80px] border-b overflow-hidden'>
                  <td onClick={saveCoin}>
                        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
                  </td>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                        <Link href={{
                              pathname: `/pages/CoinPage`,
                              query: { id: coin.id },
                        }}>
                              <div className='flex items-center'>

                                    <img className='w-6 mr-2 rounded-full' src={coin.image} alt={coin.id} />
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
                  <Sparklines data={coin.sparkline_in_7d.price}>
                        <SparklinesLine color='teal' />
                  </Sparklines>
            </tr >



      )
}

export default Template
