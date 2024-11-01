import React, { useState } from 'react';

export default function Imc() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState("");

    function calcular(peso, altura) {
        let alturaFinal = (altura/100)
        let imc = peso / (alturaFinal * alturaFinal);
        let resultado;
        
        if (imc < 18.5) {
            resultado = "Baixo peso";
        } else if (imc >= 18.5 && imc <= 24.99) {
            resultado = "Eutrofia (peso adequado)";
        } else if (imc >= 25 && imc <= 29.99) {
            resultado = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.99) {
            resultado = "Obesidade grau 1";
        } else if (imc >= 35 && imc <= 39.99) {
            resultado = "Obesidade grau 2";
        } else {
            resultado = "Obesidade extrema";
        }

        return `${imc.toFixed(2)}  ${resultado}`;
    }

    function mostrar(event) {
        event.preventDefault(); 
        const resultadoCalculo = calcular(peso, altura);
        setResultado(resultadoCalculo);
    }
  
    return (
            <form onSubmit={mostrar}>
                <div className='dados'>
                <label>Peso:</label>
                <input type="number" name="peso" placeholder="Digite seu peso (em kg)" onChange={(e) => setPeso(parseFloat(e.target.value))} />
                <label>Altura:</label>
                <input type="number" name="altura" placeholder="Digite sua altura (em cm)" onChange={(e) => setAltura(parseFloat(e.target.value))} />
                <button type="submit">Enviar</button>
                <p className='resultado'>Seu resultado é: {resultado}</p>
                </div>
                
            </form>
    );
}
