import React from 'react'
import NavBar from '../components/navBar'
import Banner from './banner'
import OperationSection from './operations'
import Features from './features'
import Guide from './guide'
import GetStarted from './getStarted'
import Footer from "../components/Footer"

const Invoice = () => {
    return (
        <div className='bg-lightGrey'>
            <NavBar />
            <Banner />
            <OperationSection />
            <Features />
            <Guide />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Invoice 