import React from 'react'
import ButtonAppBar from '../components/Navigation'
import SwipeableTextMobileStepper from '../components/Carousel'
import TopSearchBar from '../components/TopSearchBar'

function Home() {
  return (
    <div>
        <ButtonAppBar />
        <SwipeableTextMobileStepper />
        <TopSearchBar />
    </div>
  )
}

export default Home