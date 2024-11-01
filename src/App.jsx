import React from 'react'
import Aluno from './components/Aluno'
import Imc from './components/Imc'
import "./App.css"

export default function App() {
  return (
    <>
      <header>
      <h1>Calculadora de IMC</h1>
      </header>
      <main>
      <Imc/>
      </main>
      <footer>
        <Aluno nome="Ana Luiza Alves Motta"/>
      </footer>
    </>
  )
}
