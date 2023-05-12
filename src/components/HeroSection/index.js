import React, {useState} from 'react'
//import { Button } from 'react-scroll'
import {Button} from '../ButtonElement'
import {HeroContainer, HeroContent ,HeroH1 ,HeroP , HeroBtnWrapper ,ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {
    const[hover , setHover]=useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer  id='home'>
        <HeroContent>
            <HeroH1>Virtual Banking made Easy</HeroH1>
            <HeroP>
                sign up for a new account today and receive $250 in credit towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true" dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Get Started { hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>    

      
    </HeroContainer>
  )
}

export default HeroSection
