import React from 'react'

interface IButtons{
    ButtonName?:string;
    actionButton?:() => void
    className?:string;
    disabled?:boolean
}



export const TimesButtons: React.FC<IButtons> =  ({ButtonName,actionButton,className,disabled}) => {
    return (
    <button disabled={disabled} className={className} onClick={actionButton}>
    
        {ButtonName}
        
        </button>)
} 
