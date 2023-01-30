export class Persona {
    id: number;
    apellido: string;
    nombre: string;
    domicilio: string;
    fechaNacimiento: string;
    telefono: string;
    mail: string;
    sobreMi: string;
    fotoPerfilUrl: string;
    fotoPortada: string;

    constructor(apellido: string, nombre: string, domicilio: string, fechaNacimiento: string, telefono: string, mail: string, sobreMi: string, fotoPerfilUrl: string, fotoPortada: string){
        this.apellido= apellido;
        this.nombre= nombre;
        this.domicilio= domicilio;
        this.fechaNacimiento= fechaNacimiento;
        this.telefono= telefono;
        this.mail= mail;
        this.sobreMi= sobreMi;
        this.fotoPerfilUrl= fotoPerfilUrl;
        this.fotoPortada= fotoPortada;
    }
}
