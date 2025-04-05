import { useState } from "react";

export const Cadenas = () => {
    const [palabra, setPalabra] = useState<string>(""); // Estado solo con string
    const [longitud, setLongitud] = useState<number | null>(null); // Estado para la longitud

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; // Obtiene el nuevo valor
        setPalabra(value); // Guarda el valor en el estado

        if (value !== "") {
            setLongitud(value.length); // Guarda la longitud de la palabra
        } else {
            setLongitud(null);
        }
    };

    return (

        <div className="container px-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold lh-1 titulos">CONVIERTE UNA CADENA EN <span className="text-danger">SU LONGITUD NÚMERICA</span></h1>
                    <p className="lead">Retostos es una plataforma interactiva diseñada para aprender y mejorar habilidades de programación mediante ejercicios prácticos en <span className="fw-bold">TypeScript</span>. Ofrecemos retos dinámicos que abarcan desde conceptos básicos como variables y funciones, hasta áreas avanzadas como programación funcional, manipulación de fechas y desafíos extras llenos de creatividad. <br></br>¡Un lugar perfecto para fortalecer tus conocimientos mientras te diviertes resolviendo problemas reales!</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <h3 className="fw-bold titulos">RESULTADO</h3>
                    <input
                        type="text"
                        value={palabra}
                        onChange={handleChange}
                        placeholder="Escribe una palabra"
                    />
                    <p>Palabra ingresada: {palabra}</p>
                    {longitud !== null && <p>Longitud: {longitud}</p>}
                </div>
            </div>
        </div>

    );
};
