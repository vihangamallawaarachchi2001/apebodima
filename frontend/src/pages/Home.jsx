import React from 'react'
import ButtonAppBar from '../components/Navigation'
import WelcomeBanner from '../components/WelcomeBanner'
import IntoductionSection from '../components/IntoductionSection'
import FeaturesSection from '../components/FeaturesSection'
import Aboutsection from '../components/about-section'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import FooterSection from '../components/FooterSection'
import ContactUsSection from '../components/ContactUsSection'
import CareersSection from '../components/CareersSection'

function Home() {
  return (
    <div>
        <ButtonAppBar />
        <WelcomeBanner />
        <IntoductionSection />
        <FeaturesSection />
        <CareersSection />
        <Aboutsection />
        <WhyChooseUsSection />
        <ContactUsSection />
        <FooterSection />
    </div>
  )
}

export default Home

