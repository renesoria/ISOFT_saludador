function saludar(nombre){
    let fechaActual=new Date();
    let horaActual=fechaActual.getHours();
    if(horaActual<12){
        return "Buenos días " + nombre;
    }else if(horaActual<18){
        return "Buenas tardes " + nombre;
    }else{
        return "Buenas noches " + nombre;
    }
}
export default saludar;