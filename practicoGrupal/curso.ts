export class Curso {  //en el uml los atributos estan como "PRIVADOS"

    protected nombre: string;
    protected modalidad: string;
    protected minimoNotaCurso: number;

    constructor(pNombre: string, pModalidad: string, pMinimoNotaCurso: number) {
        this.nombre = pNombre;
        this.modalidad = pModalidad;
        this.minimoNotaCurso = pMinimoNotaCurso;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getModalidad(): string {
        return this.modalidad;
    }
    public getNotaMinimaCurso(): number {
        return this.minimoNotaCurso;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    public setModalidad(pModalidad: string): void {
        this.modalidad = pModalidad;
    }
    public setNotaMinimaCurso(pMinimoNotaCurso: number): void {
        this.minimoNotaCurso = pMinimoNotaCurso;
    }



}
