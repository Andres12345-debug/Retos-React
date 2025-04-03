import { useState } from "react";
export const Impares = () => { 
    const [numeroUno, setNumeroUno] = useState<number | "">("");
    const [numeroDos, setNumeroDos] = useState<number | "">("");
    const [sumaImpares, setSumaImpares] = useState<number | null>(null); // Estado para la suma de los números impares
    
    const handleChangeUno = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; // Obtiene el valor del input directamente 
        let num: number | "" = value === "" ? "" : parseFloat(value);        
        if (typeof num === "number" && !isNaN(num) && num % 2 === 0) {
            num += 1; 
        }
        setNumeroUno(num);
    };

    const handleChangeDos = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        let num: number | "" = value === "" ? "" : parseFloat(value);
        
        if (typeof num === "number" && !isNaN(num) && num % 2 === 0) {
            num += 1; 
        }

        setNumeroDos(num);
    };
    const sumarImpares = () => {
        if (typeof numeroUno === "number" && typeof numeroDos === "number") {
            setSumaImpares(numeroUno + numeroDos);
        } else {
            setSumaImpares(null);
        }
    };


return(
    <div className="container">
    <h1>Sumar números impares</h1>
    <input
        type="number"
        value={numeroUno}
        onChange={handleChangeUno}
        placeholder="Primer número"
    />
    <input
        type="number"
        value={numeroDos}
        onChange={handleChangeDos}
        placeholder="Segundo número"
    />
    <button onClick={sumarImpares}>Sumar impares</button>
    {sumaImpares !== null && <p>La suma de los impares es: {sumaImpares}</p>}
</div>
)


}
