# Retos de TypeScript

Repositorio de ejercicios prácticos de **TypeScript**, orientados al aprendizaje de sus principales características y conceptos mediante pequeños retos de programación.

El objetivo del proyecto es adquirir una base sólida de TypeScript y comprender conceptos fundamentales de programación orientada a objetos, tipado estático, manipulación de datos y gestión de errores, aplicables posteriormente al desarrollo de aplicaciones con Angular.

## Tabla de contenidos

- [Características](#características)
- [Retos realizados](#retos-realizados)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)

## Características

- Tipado estático mediante interfaces y tipos personalizados.
- Manipulación inmutable de arrays y objetos.
- Programación orientada a objetos mediante clases y encapsulación.
- Gestión de errores y respuestas de servidor.
- Herencia de clases y reutilización de código.
- Aplicación práctica de conceptos fundamentales de TypeScript.

## Retos realizados

### Reto 1: El Contrato de la API

**Concepto:** Interfaces y uniones de tipos.

Creación de una interfaz `UsuarioAPI` para modelar la estructura de una respuesta de usuario procedente de una API.

Se trabajan los siguientes conceptos:
- Declaración de interfaces.
- Tipado de propiedades.
- Uniones de tipos (`Union Types`).
- Propiedades opcionales.

### Reto 2: Inmutabilidad Tipada con Arrays de Objetos

**Concepto:** Arrays tipados e inmutabilidad.

Implementación de una función `completarTarea()` capaz de actualizar el estado de una tarea sin modificar el array original.

Se trabajan los siguientes conceptos:
- Arrays de objetos tipados.
- Método `map()`.
- Operador spread (`...`).
- Operador ternario.
- Inmutabilidad de datos.

### Reto 3: La Clase Componente y la Encapsulación

**Concepto:** Programación orientada a objetos y encapsulación.

Creación de una clase `ProductComponent` que calcula el precio final de un producto aplicando el IVA, protegiendo sus propiedades internas.

Se trabajan los siguientes conceptos:
- Clases y constructores.
- Modificadores de acceso (`public` y `private`).
- Propiedades de parámetros (*Parameter Properties*).
- Propiedades de solo lectura (`readonly`).
- Métodos tipados.

### Reto 4: Control de Errores con Tipado Restringido

**Concepto:** Tipado restringido y comprobación de tipos.

Implementación de una interfaz `RespuestaServidor` y una función `procesarRespuesta()` capaz de gestionar respuestas exitosas y respuestas de error.

Se trabajan los siguientes conceptos:
- Uniones de tipos.
- Propiedades opcionales.
- Método `forEach()`.
- Type Narrowing.
- Operador Nullish Coalescing (`??`).

### Reto 5: Clases Heredadas y el uso de `super()`

**Concepto:** Herencia y reutilización de código.

Creación de una clase base `ServicioDatos` y una clase derivada `ServicioUsuarios`, que reutiliza las propiedades y métodos de su clase padre.

Se trabajan los siguientes conceptos:
- Herencia mediante `extends`.
- Constructores de clases.
- Invocación del constructor padre mediante `super()`.
- Reutilización de propiedades y métodos.
- Propiedades `readonly`.

## Tecnologías utilizadas

- **TypeScript:** lenguaje principal del proyecto.
- **HTML5:** estructura de las páginas, cuando corresponda.
- **CSS3:** estilos e interfaz visual, cuando corresponda.
- **Node.js:** entorno de ejecución y herramientas de desarrollo.
- **npm:** gestión de dependencias.

## Requisitos

- Node.js >= 18.0
- npm >= 9.0
- TypeScript

## Instalación

Clona el repositorio e instala sus dependencias:

```bash
git clone https://github.com/ARM-Coding/DWC-retos.git
cd DWC-retos
npm install
```

## Uso

Para comprobar los tipos de TypeScript sin generar archivos JavaScript:

```bash
npx tsc --noEmit
```

Para compilar los archivos TypeScript a JavaScript según la configuración del proyecto:

```bash
npx tsc
```

La compilación y ejecución de los ejercicios dependerá de la configuración de `tsconfig.json` y del entorno utilizado.

---

**Proyecto educativo desarrollado como práctica de TypeScript**, con especial atención a los conceptos necesarios para continuar aprendiendo desarrollo frontend y Angular.
