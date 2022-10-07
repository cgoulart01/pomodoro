import React from 'react'

interface IButtons{
    ButtonName?:string;
    actionButton?:() => void
    className?:string;
}



export const TimesButtons: React.FC<IButtons> =  ({ButtonName,actionButton,className}) => {
    return (
    <button className={className} onClick={actionButton}>
    
        {ButtonName}
        
        </button>)
} 
