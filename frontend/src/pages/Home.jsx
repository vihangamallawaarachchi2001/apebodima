import React from 'react'
import ButtonAppBar from '../components/Navigation'
import SwipeableTextMobileStepper from '../components/Carousel'
import TopSearchBar from '../components/TopSearchBar'
import WelcomeBanner from '../components/WelcomeBanner'

function Home() {
  return (
    <div>
        <ButtonAppBar />
        <WelcomeBanner />
    </div>
  )
}

export default Home

{/*<SwipeableTextMobileStepper />
        <TopSearchBar />*/}