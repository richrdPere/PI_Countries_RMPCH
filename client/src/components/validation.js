const validation = (data) => {

    let errors = {};

    // Validacion email
    if(!data.email){
        errors.email = "El email es requerido";
    } 
    // eslint-disable-next-line no-empty
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        errors.email = "No tiene formato de email";
    }
    else if(data.email.length > 35 ){
        errors.email = "El email no debe tener mas de 35 caracteres";
    }

    // Validacion password
    if(!data.password){
        errors.password = "La contraseña es requerida";
    }
    else if(!/\d/.test(data.password)){
        errors.password = "La contraseña debe tener al menos un caracter";
    }
    else if(data.password.length < 6 || data.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;