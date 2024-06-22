import React from 'react'
import ButtonAppBar from '../components/Navigation'
import WelcomeBanner from '../components/WelcomeBanner'
import IntoductionSection from '../components/IntoductionSection'
import FeaturesSection from '../components/FeaturesSection'

function Home() {
  return (
    <div>
        <ButtonAppBar />
        <WelcomeBanner />
        <IntoductionSection />
        <FeaturesSection />
    </div>
  )
}

export default Home

