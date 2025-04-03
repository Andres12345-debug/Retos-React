import { AreaCirculo } from "../components/basicos/AreaCirculo";
import { Cadenas } from "../components/basicos/Cadenas";
import { Celsius } from "../components/basicos/Celsius";
import { Impares } from "../components/basicos/Impares";

export const Ejercicios = () => {


  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <div className="container py-5">
        <AreaCirculo />
      </div>
      <div className="container py-5">
        <Impares/>
      </div>
      <div className="container py-5">
        <Celsius/>
      </div>
      <div className="container py-5">
        <Cadenas/>
      </div>


      {/* Agrega más ejercicios aquí */}
    </div>
  );
};
