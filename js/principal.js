/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca.
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
estudiante y reporte el monto de la beca, o si no le corresponde beca.  */
import Cl_eBecado from "./Cl_eBecado.js";
import Cl_Beca from "./Cl_Beca.js";


let estudiante1 = new Cl_eBecado("Mary", 132, 8);
let estudiante2 = new Cl_eBecado("Alirio", 315, 35);
let beca = new Cl_Beca()
beca.procesar(estudiante1);
beca.procesar(estudiante2);

let salida = document.getElementById("Salida");
salida.innerHTML = `
<br> Nombre del estudiante: ${estudiante1.nombre} 
<br> Acumulado de notas: ${estudiante1.acumNotas}
<br> Cantidad de materias: ${estudiante1.cantMaterias}
<br> Nota promedio: ${estudiante1.calcularPromedio()}
<br> Mary recibe una beca de: $${estudiante1.calcularbeca()}
<br>
`
salida.innerHTML += `
<br> Nombre del estudiante: ${estudiante2.nombre} 
<br> Acumulado de notas: ${estudiante2.acumNotas}
<br> Cantidad de materias: ${estudiante2.cantMaterias}
<br> Nota promedio: ${estudiante2.calcularPromedio()}
<br> Alirio ${estudiante2.calcularbeca()} `


