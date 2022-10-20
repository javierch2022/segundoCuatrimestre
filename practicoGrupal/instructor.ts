import { Capacitacion } from "./capacitacion";

export class Instructor {
    private dni: number;
    private nombre: string;
    private apellido: string;
    private cupoModalidadVirtual: number;
    private capacitaciones: Capacitacion[];


    constructor(pDNI: number, pNombre: string, pApellido: string, pCupoModVirt: number) {
        this.dni = pDNI;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.cupoModalidadVirtual = pCupoModVirt;
        this.capacitaciones = [];
    };
    public inscribirACurso(capacitacion: Capacitacion): boolean {
        let flag: boolean = true;
        for (let i: number = 0; i < this.capacitaciones.length; i++) {
            if (this.capacitaciones[i] === capacitacion) {
                flag = false;
            }
        }

        if (flag) {
            this.capacitaciones.push(capacitacion);
            return true;
        } else {
            return false;
        }
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
}