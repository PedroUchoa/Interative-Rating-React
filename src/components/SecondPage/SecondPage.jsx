import React from 'react'
import { useLocation } from 'react-router-dom'
import CalculatorImg from '../Imgs/illustration-thank-you.svg'
import './SecondPage.css'

function SecondPage() {
  const location = useLocation()


  return (
    <div className='container-principal'>
      <img src={CalculatorImg} alt='Imagem de uma calculadora' />
      <div className='container-value'>
        <h1>You selected {location.state.value} out of 5</h1>
      </div>
      <h2>Thank You</h2>
      <p>We appreciate you taking the time to give a rating. if you ever need more support, don`t hesitate to get in touch!</p>
    </div>
  )
}

export default SecondPage