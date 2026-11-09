
import type { itemProps } from "../Types/itemProps";
import useContador from "../Hooks/UseContador";
import { BotonContador } from "./BotonContador";


export const Item: React.FC<itemProps> = ({
        cantidad,
    }) => {
    const{
        contador,
        incremento,
        decremento,
        reset
    } = useContador (cantidad);


    return (
        <div className=" p-10 flex justify-items-center bg-gray-100 rounded-lg shadow-lg text-center">
            <div>
                <h1 className=" font-bold text-2xl text-blue-900 p-4"> Registro de Eventos</h1>
                
            </div>
            <BotonContador incremento = {incremento} 
            decremento = {decremento} 
            reset = {reset} 
            cantidad = {contador}/>
        </div>
    );
};
