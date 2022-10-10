
import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { json } from "stream/consumers"
import ArrowBack from "../../Components/ArrowBack/ArrowBack"
import { usePomodoroSettings } from "../../Context/SettingContext"
import styled from "../../styles/Settings.module.scss"







const Settings = () => {
 const {settings,handleSubmit} = usePomodoroSettings()
 const [local, setLocal] = useState(false)
 const localSettings = local?( JSON.parse(localStorage.getItem("settings")||"")):null

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
       <label htmlFor="focus">Current Focus Time is  {localSettings!==null ? localSettings.focus : settings.focus} minutes.</label>
        <input onChange={handleSubmit} name="focus"type="number" min="0"/>
        </div>
        <div className={styled.inputStyle}>
        <label htmlFor="long">Current long break is  {localSettings!==null ? localSettings.long : settings.long} minutes.</label>
        <input onChange={handleSubmit} name="long" type="number" min="0"/>
        </div>
        <div className={styled.inputStyle}>
        <label htmlFor="short"> Current short break is {localSettings!==null ? localSettings.short : settings.short} minutes.</label>
        <input onChange={handleSubmit} name="short"type="number" min="0"/>
        </div>
        <Link href="/"><button onClick={e=>{
          saveSettings("settings",JSON.stringify(settings))
        }}>Save Settings</button>
       </Link>
       </div>
       </div>
    
        
        </>
  )
}


export default Settings
