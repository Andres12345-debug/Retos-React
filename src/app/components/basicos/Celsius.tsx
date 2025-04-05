import { useState } from "react";

export const Celsius = () => {
    const [celsius, setCelsius] = useState<number | "">("");
    const [fahrenheit, setFahrenheit] = useState<number | null>(null); // Estado para el calculo de Celsius

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const dato = value === "" ? "" : parseFloat(value); // Convierte el valor a número o deja vacío si no es un número válido
        setCelsius(dato); // Guarda el número en el estado
        if (dato !== "") {
            setFahrenheit(dato * 9 / 5 + 32); // Calcula y guarda el dato

        } else {
            setFahrenheit(null);
        }
    };   //


    return (

        <div className="container px-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold lh-1 titulos">Conversor Celsius a  <span className="text-danger">Fahrenheit</span></h1>
                    <p className="lead">Retostos es una plataforma interactiva diseñada para aprender y mejorar habilidades de programación mediante ejercicios prácticos en <span className="fw-bold">TypeScript</span>. Ofrecemos retos dinámicos que abarcan desde conceptos básicos como variables y funciones, hasta áreas avanzadas como programación funcional, manipulación de fechas y desafíos extras llenos de creatividad. <br></br>¡Un lugar perfecto para fortalecer tus conocimientos mientras te diviertes resolviendo problemas reales!</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <h3 className="fw-bold titulos">RESULTADO</h3>
                    <input
                        type="number"
                        value={celsius}
                        onChange={handleChange} // Usa la función corregida
                        placeholder="Escribe el valor en Celsius"
                    />
                    <p>Número ingresado (Celsius): {celsius}</p>
                    {fahrenheit !== null && <p>Valor en Fahrenheit: {fahrenheit.toFixed(2)}</p>}
                </div>
            </div>
        </div>

    )

}