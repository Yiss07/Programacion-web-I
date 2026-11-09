import { useState } from "react";
import type { Contador } from "../Types/Contador";

const useContador = (valorInicial: number = 1): Contador =>{
const [contador, setContador] = useState<number>(valorInicial);
const incremento = (): void => setContador(prev => prev + 1);
const decremento = (): void => setContador(prev => (prev > 1 ? prev - 1:1));
const reset = (): void => setContador(valorInicial);
return { contador, incremento, decremento, reset };
};

export default useContador;