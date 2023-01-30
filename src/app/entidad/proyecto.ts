export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    urlFoto: string;

    constructor(nombre: string, descripcion: string, urlFoto: string){
        this.nombre= nombre;
        this.descripcion= descripcion;
        this.urlFoto= urlFoto;
    }
}
