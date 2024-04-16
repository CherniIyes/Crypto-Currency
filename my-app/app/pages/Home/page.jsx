import CoinSearch from '@Components/CoinSearch'
import Trending from '@Components/Trending'
import React from 'react'

const Home = ({ coins }) => {
      return (
            <div>
                  <CoinSearch coins={coins} />
                  <Trending />
            </div>
      )
}

export default Home
