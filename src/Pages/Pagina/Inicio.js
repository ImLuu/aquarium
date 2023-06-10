import React from 'react'
import './Inicio.css'
import Header from '../../Components/Head/Header';
import Tarjets from '../../Components/Tarjet/Tarjets';
import Tarjeta from '../../Components/Tarjet/Tarjeta';

 function Inicio() {
  return (
    <>
      <Header/>
      <Tarjets/>
      <Tarjeta/>
    </>
  )
}
export default Inicio;