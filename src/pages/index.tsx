import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { TimesButtons } from '../Components/TimesButtons/TimesButtons'
import {secondsToHms} from '../helpers/SecondToHms.js'
import styled from "../styles/Home.module.scss"

 const Home = () => {
    const [timer,setTimer] = useState(25*60)
    const [play,setPlay] = useState(false)

    const focusTimer= () =>{
        setTimer(25*60)
    }
    const shortBreak= () =>{
        setTimer(5*60)
    }

const longBreak= () =>{
    setTimer(15*60)
}

const startTimer = ()=>{
    setPlay(!play)
}
 useEffect(()=>{
 if(timer===0){
   setTimeout(()=>
   alert("O tempo Acabou"),1000)
   setTimer(timer)
   setPlay(false)
   return
 }else if(play===true){
    setTimeout(()=>{
        setTimer(timer-1)
   },1000)
 }

 },[timer,play])

    return (
        <div className={styled.background}>
            
            <header className={styled.Title}>
                <h1>
                    PomodoroTimer
                    </h1>
                    </header>

            <div className={styled.pomodoroConteiner}>
            
             <div className={styled.timesConteiner}>  
              
              <TimesButtons className={styled.timeButton} ButtonName='Pomodoro' actionButton={()=>focusTimer()}/>
              <TimesButtons className={styled.timeButton}ButtonName='Long Break' actionButton={()=>longBreak()}/>
              <TimesButtons className={styled.timeButton} ButtonName='Short Break' actionButton={()=> shortBreak()}/>
               </div>
              
                <p> {secondsToHms(timer)} </p>
                
                <TimesButtons className={styled.timeButton} actionButton={()=>startTimer()} ButtonName={!play?'Start':"Pause"}/>
             </div>
        
        </div>
            
        )
} 
export default Home