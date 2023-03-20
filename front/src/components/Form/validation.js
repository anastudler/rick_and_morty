const validation = (userData) => {
    let errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(userData.username)){
        errors.username = "El email es invalido";
    }
    if (!userData.username){
        errors.username = "Este campo no puede estar vacio";
    }
    if (userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres";
    }
    if(!userData.password.march(/\d/)){
        errors.password = "La contraseña de contener al menos un número";
    }
    if (userData.password.length < 6 && userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 números";
    }
}


export default validation;