import React from 'react'

import Header from '../components/header/Header'
import OurService from '../components/ourservice/OurService'
import FeaturedClient from '../components/featuredclient/FeaturedClient'
import Testimonial from '../components/testimonial/Testimonial'



function Home() {
    return (
        <div>

      
          <Header/> 
          <OurService/>
          <FeaturedClient/>
          <Testimonial/>
        

     
        </div>
    )
}

export default Home
