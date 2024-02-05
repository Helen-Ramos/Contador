import React, {useState} from "react";

function Contador(){

const [numero, setNumero] = useState(0)

return(
        <>
        <h1> {numero} </h1>
        <button> + </button>
        <button> - </button>
        <button> C </button>

        </>
    )
}

export default Contador