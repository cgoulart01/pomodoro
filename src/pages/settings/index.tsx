
import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { json } from "stream/consumers"
import ArrowBack from "../../Components/ArrowBack/ArrowBack"
import { usePomodoroSettings } from "../../Context/SettingContext"
import styled from "../../styles/Settings.module.scss"







const Settings = () => {
 const {settings,handleSubmit} = usePomodoroSettings()
 const [local, setLocal] = useState(false)
 const focus = localStorage.getItem("focus")
 const short = localStorage.getItem("short")
 const long = localStorage.getItem("long")

const saveSettings= (chave:string, value:string)=>{
window.localStorage.setItem(chave,value)
}


  return(
    <>
        <ArrowBack />
        <div className={styled.background}>
       <div className={styled.settingsBackground}>
       <h1>Settings</h1>
       <div className={styled.inputStyle}>
       <label htmlFor="focus">Current Focus Time is  {focus!==null ? focus : settings.focus} minutes.</label>
        <input onChange={handleSubmit} name="focus"type="number" min="0"/>
        </div>
        <div className={styled.inputStyle}>
        <label htmlFor="long">Current long break is  {long!==null ? long : settings.long} minutes.</label>
        <input onChange={handleSubmit} name="long" type="number" min="0"/>
        </div>
        <div className={styled.inputStyle}>
        <label htmlFor="short"> Current short break is {short!==null ? short : settings.short} minutes.</label>
        <input onChange={handleSubmit} name="short"type="number" min="0"/>
        </div>
        <Link href="/"><button onClick={e=>{
          saveSettings("focus",JSON.stringify(settings.focus))
          saveSettings("short",JSON.stringify(settings.short))
          saveSettings("long",JSON.stringify(settings.long))
        }}>Save Settings</button>
       </Link>
       </div>
       </div>
    
        
        </>
  )
}


export default Settings
