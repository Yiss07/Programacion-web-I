import type {BotonContadorProps} from "../Types/BotonContadorProps";

export const BotonContador: React.FC<BotonContadorProps> = ({
    incremento, decremento, reset, cantidad,
}) => {
return (
    <div className="flex items-center gap-5">
        <button onClick={decremento} className="w-10 h-10 flex items-center font-bold 
        justify-center bg-gray-400 rounded-md hover:bg-blue-600 hover:text-white">-</button>
        
        <span className="bg-white text-center font-bold border-2 w-20 p-2"> {cantidad}</span>
        
        <button onClick={incremento} className="w-10 h-10 flex items-center font-bold 
        justify-center bg-gray-400 rounded-md hover:bg-blue-600 hover:text-white ">+</button>
       
        <button onClick={reset} className="w-32 h-10 flex items-center font-bold 
        justify-center bg-black rounded-md hover:bg-red-600 text-white ">Reinicio</button>

    </div>
)
};