// validacion.jsx

// Función para validar el nombre
export const validarNombre = (nombre) => {
    return nombre.trim() !== ''; // Requiere que el nombre no esté vacío
};

// Función para validar el apellido
export const validarApellido = (apellido) => {
    return apellido.trim() !== ''; // Requiere que el apellido no esté vacío
};

// Función para validar el correo electrónico
export const validarEmail = (email) => {
    // Expresión regular para verificar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Función para validar el número de teléfono
export const validarTelefono = (telefono) => {
    // Puedes agregar lógica adicional para validar el formato del número de teléfono si es necesario
    return telefono.trim() !== '' && !isNaN(telefono);
};

// Función para validar la selección de horario
export const validarCurso = (horario) => {
    return horario !== undefined; // Requiere que se haya seleccionado un horario
};

// Función principal para validar el formulario
export const validarFormulario = async (event) => {
    const nombre = event.target.elements['form-name'].value;
    const apellido = event.target.elements['form-lastname'].value;
    const email = event.target.elements['form-email'].value;
    const telefono = event.target.elements['form-phone-number'].value;
    const horario = event.target.elements['formHorario'].value;

    const esNombreValido = validarNombre(nombre);
    const esApellidoValido = validarApellido(apellido);
    const esEmailValido = validarEmail(email);
    const esTelefonoValido = validarTelefono(telefono);
    const esCursoValido = validarCurso(horario);

    const isValid = esNombreValido && esApellidoValido && esEmailValido && esTelefonoValido && esCursoValido;

    return isValid;
};
