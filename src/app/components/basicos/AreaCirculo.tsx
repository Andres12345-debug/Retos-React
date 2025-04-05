import { useState } from "react";

export const AreaCirculo = () => {
    const [numero, setNumero] = useState<number | "">("");
    const [area, setArea] = useState<number | null>(null); // Estado para el área del círculo
    // Función para calcular el área cuando cambia el input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const radio = value === "" ? "" : parseFloat(value); // Convierte el valor a número o deja vacío si no es un número válido
        setNumero(radio); // Guarda el número en el estado
        if (radio !== "") {
            setArea(Math.PI * Math.pow(radio, 2)); // Calcula y guarda el área
        } else {
            setArea(null);
        }
    };   //
    return (


        <div className="container px-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold lh-1 titulos">CALCULA EL AREA DE UN  <span className="text-danger">CIRCULO</span></h1>
                    <p className="lead">Retostos es una plataforma interactiva diseñada para aprender y mejorar habilidades de programación mediante ejercicios prácticos en <span className="fw-bold">TypeScript</span>. Ofrecemos retos dinámicos que abarcan desde conceptos básicos como variables y funciones, hasta áreas avanzadas como programación funcional, manipulación de fechas y desafíos extras llenos de creatividad. <br></br>¡Un lugar perfecto para fortalecer tus conocimientos mientras te diviertes resolviendo problemas reales!</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <h3 className="fw-bold titulos">RESULTADO</h3>
                    <input
                        type="number"
                        value={numero}
                        onChange={handleChange} // Usa la función corregida
                        placeholder="Escribe el radio"
                    />
                    <p>Número ingresado (radio): {numero}</p>
                    {area !== null && <p>Área del círculo: {area.toFixed(2)}</p>}
                </div>
            </div>
        </div>


    )



}