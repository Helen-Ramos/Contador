import React, {useState} from "react";
import "./Contador.css"

function Contador(){

const [numero, setNumero] = useState(0)

//Função para adicionar um valor quando eu clicar no botão +

function Adicionar (){
    if (numero < 20){
    setNumero(numero + 1) // setNumero atualiza / modifica / seta o numero: set Numero ( o que quero que ele faça) pega o numero e soma 1 valor: setNumero(numero +1)
    }
}

//Função para diminuir um valor quando eu clicar no botão -

function Remover (){
    if(numero > 0){
    setNumero(numero - 1)
    }
}

//Função para limpar o valor (voltar ao estado inicial), quando eu clicar no botão C

function Limpar (){
    setNumero (0)
}

return(
        <div className="boxContador">
        <h1> {numero} </h1>
        <button onClick={Adicionar}>  + </button>
        <button onClick={Remover}> - </button>
        <button onClick={Limpar}> C </button>
        </div>
    )
}

export default Contador