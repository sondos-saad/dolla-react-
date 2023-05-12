import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import {  homeObjOne,  homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen , setIsOpen]= useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
    </>
  )
}

export default Home
