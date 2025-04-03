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
        <div>
            <input
                type="text"
                value={palabra}
                onChange={handleChange}
                placeholder="Escribe una palabra"
            />
            <p>Palabra ingresada: {palabra}</p>
            {longitud !== null && <p>Longitud: {longitud}</p>}
        </div>
    );
};
