// export const secondsToHms =  (d) =>{
//     d = Number(d)
//     const h = Math.floor(d / 3600)
//     const m = Math.floor(d % 3600 / 60)
//     const s = Math.floor(d % 3600 % 60)
  
//     const hDisplay = h > 0 ? h + (h === 1 ? " hora, " : " horas, ") : ""
//     const mDisplay = m > 0 ? m + (m === 1 ? " minuto, " : " minutos, ") : ""
//     const sDisplay = s > 0 ? s + (s === 1 ? " segundo" : " segundos") : ""
//     const hours = hDisplay + mDisplay + sDisplay
//     if(!d){
//       return ""
//     }
//     return hours
//   }
  export const secondsToHms = (d) => {
  d = Number(d)

  const m = Math.floor(d % 3600 / 60)
  const s = Math.floor(d % 3600 % 60)

   
  const mDisplay = (m<10? `0${m}:`: `${m} :`)
  const sDisplay = (s<10? `0${s}`: s)
  const hours =  mDisplay + sDisplay
  if(!d){
    return "00:00"
  }
  return hours
}