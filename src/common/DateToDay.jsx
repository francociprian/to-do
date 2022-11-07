import React from 'react'

export default function DateToDay() {
  const date = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekdays = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];

  const dateWeekEng = weekdays[date.getDay()]
  const dateDayEng = `${months[date.getMonth()]} ${date.getDate()}`
  const dateYearEng = date.getFullYear()
  
  return (
    <div className='mb-2'>
      <p className='text-sm font-light flex flex-col'>
        <span className='text-2xl font-bold'>{dateWeekEng}</span> 
        <span className='text-md'>{dateDayEng}</span>
      </p>
    </div>
  )
}