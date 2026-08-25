function saludar(nombre, genero, edad, idioma) {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();

    let saludo;
    //edad invalida
    if(edad>120 || edad<0){
        return alert("Edad no válida");
    }
    //nombre vacio
    if(nombre==""){
        return "Hola visitante";
    }
    //idioma ingles
    if (idioma === "ingles") {
        if (horaActual < 12) {
            saludo = "Good morning";
        } else if (horaActual < 18) {
            saludo = "Good afternoon";
        } else {
            saludo = "Good evening";
        }

        if (edad > 30) {
            if (genero === "femenino") {
                return saludo + " Mrs. " + nombre;
            }

            return saludo + " Mr. " + nombre;
        }

        return saludo + " " + nombre + ", welcome";
    }

    //español
    if (horaActual < 12) {
        saludo = "Buenos días";
    } else if (horaActual < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    if (edad > 30) {
        if (genero === "femenino") {
            return saludo + " Sra. " + nombre;
        }

        return saludo + " Sr. " + nombre;
    }

    if (genero === "femenino") {
        return saludo + " " + nombre + ", bienvenida";
    }

    return saludo + " " + nombre + ", bienvenido";
}

export default saludar;