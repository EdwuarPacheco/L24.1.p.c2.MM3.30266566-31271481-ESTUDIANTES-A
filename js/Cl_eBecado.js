import Cl_Estudiante from "./Cl_Estudiante.js";
export default class Cl_eBecado extends Cl_Estudiante{
    constructor(n,aN,cM){
        super(n, aN, cM)
    }


    calcularbeca(){
    if(this.calcularPromedio() > 15){
        return  30;
    }
    else if(this.calcularPromedio() >= 10){
        return  20;
    }
    else{
        return "no le corresponde beca"
    }
    
}
}