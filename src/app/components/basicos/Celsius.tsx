import { useState } from "react";

export const Celsius = () => {
    const [celsius, setCelsius] = useState<number | "">("");
    const [fahrenheit, setFahrenheit] = useState<number | null>(null); // Estado para el calculo de Celsius

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const dato = value === "" ? "" : parseFloat(value); // Convierte el valor a número o deja vacío si no es un número válido
        setCelsius(dato); // Guarda el número en el estado
        if (dato !== "") {
            setFahrenheit(dato * 9/5+32); // Calcula y guarda el dato

        } else {
            setFahrenheit(null);
        }
    };   //
    

    return(
        <div>
            <h3>Conversor Celsius a Fahrenheit</h3>           
            <input
                type="number"
                value={celsius}
                onChange={handleChange} // Usa la función corregida
                placeholder="Escribe el valor en Celsius"
            />
            <p>Número ingresado (Celsius): {celsius}</p>
            {fahrenheit !== null && <p>Valor en Fahrenheit: {fahrenheit.toFixed(2)}</p>}
            
        </div>
    )

}