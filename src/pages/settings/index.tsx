
import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { json } from "stream/consumers"
import ArrowBack from "../../Components/ArrowBack/ArrowBack"
import { usePomodoroSettings } from "../../Context/SettingContext"
import styled from "../../styles/Settings.module.scss"



interface JSON {
  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  parse(text: string|null, reviver?: (this: any, key: string, value: any) => any): any;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}



const Settings = () => {
 const {settings,handleSubmit} = usePomodoroSettings()
 const [local, setLocal] = useState(false)
 const localSettings = local?( JSON.parse(localStorage.getItem("settings"))):null

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
