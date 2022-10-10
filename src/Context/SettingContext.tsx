import { Settings } from 'http2'
import { AppContextType } from 'next/dist/shared/lib/utils'
import React, { Children, ReactNode, useContext, useEffect, useState } from 'react'


type SettingsContextProps ={
    children: ReactNode
}



type SettingsContextType ={
    setSettings?:(e:any)=>void
    handleSubmit?:(e:any)=>void
    settings:{
        focus: number,
        long: number,
        short: number
        }
}


const initialValues={
        settings:{
            focus:25,
            long:15,        
            short:5,
        }     
           
}



export const SettingsContext = React.createContext<SettingsContextType>(initialValues)



export const ContextProvider = ({children}:SettingsContextProps) => {

    const [settings,setSettings] = useState(initialValues.settings)




const handleSubmit= (e:any) =>{
    e.preventDefault()
    const name = e.target?.name
    const value = e.target?.value
    setSettings({...settings,[name]:value})

  } 
  



   return(
    <SettingsContext.Provider value={{settings,setSettings,handleSubmit}}>

    {children}

    </SettingsContext.Provider>

   ) 

   
   }

export const usePomodoroSettings = () => useContext(SettingsContext)