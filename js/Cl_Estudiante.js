export default class Cl_Estudiante{
    constructor(n, aN, cM){
        this.nombre = n;
        this.acumNotas = aN;
        this.cantMaterias = cM;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set acumNotas(aN){
        this._acumNotas = aN;
    }
    get acumNotas(){
        return this._acumNotas;
    }
    set cantMaterias(aM){
        this._cantMaterias = aM;
    }
    get cantMaterias(){
        return this._cantMaterias;
    }
    calcularPromedio(){
        return this._acumNotas/this._cantMaterias;
    }
} 