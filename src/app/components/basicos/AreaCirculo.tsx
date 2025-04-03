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

        <div className="container">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <h3 className="fw-bold">RESULTADO</h3>
                        <input
                            type="number"
                            value={numero}
                            onChange={handleChange} // Usa la función corregida
                            placeholder="Escribe el radio"
                        />
                        <p>Número ingresado (radio): {numero}</p>
                        {area !== null && <p>Área del círculo: {area.toFixed(2)}</p>}

                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3 text-lg-start">CALCULA EL AREA DE UN  <span className="text-danger">CIRCULO</span></h1>
                        <p className="lead text-lg-start">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
        </div>

    )



}