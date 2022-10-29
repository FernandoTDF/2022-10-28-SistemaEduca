class Alumno {
    private nombre: string;
    private apellido: string;
    private notaMatematica: number;
    private notaGeografia: number;
    private notaSociales: number;

    constructor(pNombre: string, pApellido: string, pNotaMatematica: number, pNotaGeografia: number, pNotaSociales: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaGeografia = pNotaGeografia;
        this.notaMatematica = pNotaMatematica;
        this.notaSociales = pNotaSociales;
    }

    public setNombre(pNom: string): void {
        this.nombre = pNom;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setApellido(pApellido: string): void {
        this.apellido = pApellido;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setNotaMatematica(pNota: number): void {
        this.notaMatematica = pNota;
    }

    public getNotaMatematica(): number {
        return this.notaMatematica;
    }

    public setNotaGeofrafia(pNota: number): void {
        this.notaGeografia = pNota;
    }

    public getNotaGeografia(): number {
        return this.notaGeografia;
    }


    public setNotaSociales(pNota: number): void {
        this.notaSociales = pNota;
    }

    public getNotaSociales(): number {
        return this.notaSociales;
    }

    public getCalificacionMatematica(): string {
        if (this.notaMatematica > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }

    public getCalificacionGeografia(): string {
        if (this.notaGeografia > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }

    public getCalificacionSociales(): string {
        if (this.notaSociales > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }
}

//Clase profesor y metodos
class Profesor {
    private nombre: string;
    private apellido: string;
    private listadoDeAlumnos: Alumno[];

    constructor(pNombre: string, pApellido: string, pListadoAl: Alumno[]) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoDeAlumnos = pListadoAl;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNom: string): void {
        this.nombre = pNom;
    }
    public setApellido(pApellido: string): void {
        this.apellido = pApellido;
    }

    public getApellido(): string {
        return this.apellido;
    }
}

//Clase escuela y metodos
class Escuela {
    private nombreEscuela: string;
    private listadoAlumnos: Alumno[];
    private listadoProfesores: Profesor[];

    constructor(pNombre: string, pListadoAlumnos: Alumno[], pListadoProfesores: Profesor[]) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }

    public getNombreEscuela(): string {
        return this.nombreEscuela;
    }
    public setNombreEscuela(pNom:string): void {
        this.nombreEscuela = pNom;
    }

    public contrataProfesor(pProfesor: Profesor): void {
        this.listadoProfesores.push(pProfesor);
        console.log("Profesor Contratado" + pProfesor.getNombre());
    }
    public despedirProfesor(pProfesor: Profesor): void {
        for (let i: number = 0; i < this.listadoProfesores.length; i++) {
            if (pProfesor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i, 1);
                console.log("profesor despedido " + pProfesor.getApellido());
            } else {
                console.log("no se encontro al profesor en el registro " + i);
            }
        }
    }

    public matricularAlumno(pAlumno: Alumno): void {
        this.listadoAlumnos.push(pAlumno);
        console.log("Se ha matriculado al alumno" + pAlumno.getNombre());
    }
    public removerAlumno(pAlumno: Alumno): void {
        for (let i: number = 0; i < this.listadoAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
                console.log("alumno expusado " + pAlumno.getApellido());
            } else {
                console.log("no se encontro el alumno en el registro " + i);
            }
        }
    }
}






//prueba de aplicacion
let alumnoA = new Alumno("Cesar", "Greca", 5, 4, 3);
let alumnoB = new Alumno("Agustin", "Chimento", 7, 8, 9);
let alumnoC = new Alumno("Alejandro", "Brau", 9, 9, 9);
let listadoAl: Alumno[] = [alumnoA, alumnoB, alumnoC];

console.log("---------------------------------------------------");
console.log("A continuacion se muestra el listado de Alumnos")
console.log(listadoAl)
console.log("---------------------------------------------------");

let docenteM = new Profesor("Miguel", "Klor", listadoAl);
let docenteG = new Profesor("Luis", "Sobrero", listadoAl);
let docenteS = new Profesor("Jose", "Hengelberger", listadoAl);
let listadoDocentes: Profesor[] = [docenteG, docenteM, docenteS];

console.log("---------------------------------------------------");
console.log("A continuacion se muestra el listado de Profesores")
console.log(listadoDocentes)

let escuelaPrimaria: Escuela = new Escuela("EET N1 General Francisco Ramirez", listadoAl, listadoDocentes);

console.log("---------------------------------------------------");
console.log("A continuacion se va a despedir al docenteM Daniel Conforti")
escuelaPrimaria.despedirProfesor(docenteM);

console.log("---------------------------------------------------");
console.log("A continuacion se va a contratar al docenteM Fernando Frias")
let docenteGroso = new Profesor("Fernando", "Frias", listadoAl);
escuelaPrimaria.contrataProfesor(docenteGroso);

console.log("---------------------------------------------------");
console.log("A continuacion se va a matricular un nuevo alumnoD Miguel Herrera")
let alumnoD = new Alumno("Miguel", "Herrera", 5, 8, 10)
escuelaPrimaria.matricularAlumno(alumnoD);

console.log("---------------------------------------------------");
console.log("A continuacion se va a expulsar al alumnoC Rocio Fernandez")
escuelaPrimaria.removerAlumno(alumnoC);

console.log("---------------------------------------------------");
console.log("A continuacion se imprime el listado de Docentes")
console.log(listadoDocentes)

console.log("---------------------------------------------------");
console.log("A continuacion se imprime el listado de Alumnos")
console.log(listadoAl)