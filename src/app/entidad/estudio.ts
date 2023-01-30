export class Estudio {
    id: number;
    titulo: string;
    institucion: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor(titulo: string, institucion: string, inicio: string, fin: string, descripcion: string){
        this.titulo= titulo;
        this.institucion = institucion;
        this.inicio= inicio;
        this.fin= fin;
        this.descripcion = descripcion;
    }
}
