export class Idioma {
    id: number;
    nombre: string;
    porcentajeDominado: number;

    constructor(nombre: string, porcentajeDominado: number){
        this.nombre= nombre;
        this.porcentajeDominado= porcentajeDominado;
    }
}
