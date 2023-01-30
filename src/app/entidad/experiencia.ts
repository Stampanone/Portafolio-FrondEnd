export class Experiencia {

    id: number;
    puesto: string;
    institucion: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor(puesto: string, institucion: string, inicio: string, fin: string, descripcion: string){
        this.puesto= puesto;
        this.institucion = institucion;
        this.inicio= inicio;
        this.fin= fin;
        this.descripcion = descripcion;
    }
}
