const UsuarioValido = {
    id: 1,
    username: "Alex",
    email: "hol@gmail.com",
    rol: "admin",
    token: "test"
};
const misTareas = [];
misTareas.push({ id: 1, titulo: "Aprender TypeScript", completada: false }, { id: 2, titulo: "Aprender JavaScript", completada: true }, { id: 3, titulo: "Aprender React", completada: false });
function completarTarea(lista, idBuscar) {
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
    nombreProducto;
    precioBase;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    iva = 0.21;
    obtenerPrecioFinal() {
        return this.precioBase * (1 + this.iva);
    }
}
const producto = new ProductComponent("Teclado", 50);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());
function procesarRespuesta(res) {
    if (res.status === 'success') {
        if (res.data) {
            res.data.forEach(elemento => {
                console.log(elemento);
            });
        }
    }
    else {
        console.error(res.mensajeError ?? 'Error desconocido');
    }
}
/**
 * Ejercicio 5
 */
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log("Conectando a " + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = 'usuarios';
    constructor(endpoint) {
        super(endpoint);
    }
}
const servicio = new ServicioUsuarios('https://api.ejemplo.com');
servicio.conectar();
console.log(servicio.entidad);
console.log(servicio.endpoint);
export {};
//# sourceMappingURL=app.js.map