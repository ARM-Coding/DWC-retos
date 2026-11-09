/**
 * Ejercicio 1
 */
interface NombreInterfaz {
    id: number;
    username: String;
    email: String;
    rol: "admin" | "editor" | "alumno";
    token?: String;
}

const UsuarioValido: NombreInterfaz = {
    id: 1,
    username: "Alex",
    email: "hol@gmail.com",
    rol: "admin",
    token: "test"
}

/**
 * Ejercicio 2
 */
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

const misTareas: Tarea[] = [];

misTareas.push(
    { id: 1, titulo: "Aprender TypeScript", completada: false },
    { id: 2, titulo: "Aprender JavaScript", completada: true },
    { id: 3, titulo: "Aprender React", completada: false }
);

function completarTarea(
    lista: Tarea[],
    idBuscar: number
): Tarea[] {
    return lista.map(tarea => {
        if (tarea.id === idBuscar) {
            return { ...tarea, completada: true };
        }
        return tarea;
    });
}

/**
 * Ejercicio 3
 */
class ProductComponent {
    constructor(
        public nombreProducto: string,
        private precioBase: number,
    ) { }

    private readonly iva: number = 0.21

    public obtenerPrecioFinal(): number {
        return this.precioBase * (1 + this.iva);
    }

}

const producto = new ProductComponent("Teclado", 50);

console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());

/**
 * Ejercicio 4
 */
interface RespuestaServidor {
    status: "success" | "error";
    data?: String[];
    mensajeError?: String;
}

function procesarRespuesta(res: RespuestaServidor): void {
    if (res.status === 'success') {

        if (res.data) {
            res.data.forEach(elemento => {
                console.log(elemento);
            });
        }

    } else {
        console.error(res.mensajeError ?? 'Error desconocido');
    }
}

/**
 * Ejercicio 5
 */
class ServicioDatos {
    constructor(public endpoint: string) { }

    conectar(): void {
        console.log("Conectando a " + this.endpoint);
    }
}

class ServicioUsuarios extends ServicioDatos {
    public readonly entidad: string = 'usuarios';

    constructor(endpoint: string) {
        super(endpoint);
    }
}

const servicio = new ServicioUsuarios('https://api.ejemplo.com');

servicio.conectar();
console.log(servicio.entidad);
console.log(servicio.endpoint);