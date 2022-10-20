import { Curso } from "./curso";

export class Capacitacion {
    private notasCurso: number[];
    private curso: Curso;

    constructor(pCurso: Curso) {
        this.curso = pCurso;
        this.notasCurso = []; 
    }

    public setCurso(pCurso: Curso): void {
        this.curso = pCurso;
    }
    public getCurso(): Curso {
        return this.curso;
    }
    public agregarNota(nota: number): void {
        this.notasCurso.push(nota);
    }
    public getNotasCurso(): number[] {
        return this.notasCurso;
    }
}