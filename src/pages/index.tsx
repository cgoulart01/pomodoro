import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {VscSettingsGear} from "react-icons/vsc"

import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { TimesButtons } from '../Components/TimesButtons/TimesButtons'
import {secondsToHms} from '../helpers/SecondToHms.js'
import styled from "../styles/Home.module.scss"
import { usePomodoroSettings } from '../Context/SettingContext'

 const Home = () => {
    const pomodoroCtx = usePomodoroSettings()
    const [timer,setTimer] = useState(pomodoroCtx.settings.focus*60)
    const [play,setPlay] = useState(false)
    const [timeTyper,setTimeTyper] =useState("focus")
    const focus = localStorage.getItem("focus")
    const short = localStorage.getItem("short")
    const long = localStorage.getItem("long")
    
    const focusTimer= () =>{
        setTimer((focus?parseInt(focus): pomodoroCtx.settings.focus)*60)
        setTimeTyper("focus")
    }
    const shortBreak= () =>{
        setTimer((short?parseInt(short):pomodoroCtx.settings.short)*60)
        setTimeTyper("")
    }

const longBreak= () =>{
    setTimer((long?parseInt(long):pomodoroCtx.settings.long)*60)
    setTimeTyper("long")
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
        <>
       
        <div className={styled.background}>
            
            <header className={styled.Title}>
                <h1>
                    PomodoroTimer
                    </h1>
                    </header>
                    <div className={styled.instructions}>

<h3>
Instructions
</h3>
<p >for each focus cycle do a short break cycle, and when it completes four the next break will be a long break.</p>

<p>
The clock follows the pomodoro pattern, with the focus period being 25min, the short pause 5min and the long pause 15min.
    
if you want to change the values ​​just click on the    <VscSettingsGear/> to configure.
 </p>
</div>  

            <div className={styled.pomodoroConteiner}>
            
             <div className={styled.timesConteiner}>  
              
              <TimesButtons disabled={play} className={styled.timeButton} ButtonName='Pomodoro' actionButton={()=>focusTimer()}/>
              <TimesButtons disabled={play} className={styled.timeButton}ButtonName='Long Break' actionButton={()=>longBreak()}/>
              <TimesButtons disabled={play} className={styled.timeButton} ButtonName='Short Break' actionButton={()=> shortBreak()}/>
              
               </div>
               
                <p> {secondsToHms(timer)} </p>
                <div className={styled.settings}>
                <Link href="/settings">
              <VscSettingsGear style={{fontSize:"25px"}}/> 

              </Link>
                <TimesButtons className={styled.timeButton} actionButton={()=>startTimer()} ButtonName={!play?'Start':"Pause"}/>
                </div>
               
             </div>

        
        </div></>
            
        )
} 
export default Home