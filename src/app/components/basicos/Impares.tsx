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


    return (
        <div className="container px-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold lh-1 titulos">SUMAR NUMEROS <span className="text-danger">IMPARES</span></h1>
                    <p className="lead">Retostos es una plataforma interactiva diseñada para aprender y mejorar habilidades de programación mediante ejercicios prácticos en <span className="fw-bold">TypeScript</span>. Ofrecemos retos dinámicos que abarcan desde conceptos básicos como variables y funciones, hasta áreas avanzadas como programación funcional, manipulación de fechas y desafíos extras llenos de creatividad. <br></br>¡Un lugar perfecto para fortalecer tus conocimientos mientras te diviertes resolviendo problemas reales!</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <h3 className="fw-bold titulos">RESULTADO</h3>
                    <input
                        type="number"
                        value={numeroUno}
                        onChange={handleChangeUno}
                        placeholder="Primer número"
                    /> <input
                        type="number"
                        value={numeroDos}
                        onChange={handleChangeDos}
                        placeholder="Segundo número"
                    />
                    <button onClick={sumarImpares}>Sumar impares</button>
                    {sumaImpares !== null && <p>La suma de los impares es: {sumaImpares}</p>}
                </div>
            </div>
        </div>

    )


}
