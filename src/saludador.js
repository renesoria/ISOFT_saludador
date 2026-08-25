function saludar(nombre, genero) {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();

    let saludo;

    if (horaActual < 12) {
        saludo = "Buenos días";
    } else if (horaActual < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    if (genero === "femenino") {
        return saludo + " " + nombre + ", bienvenida";
    }

    return saludo + " " + nombre + ", bienvenido";
}

export default saludar;