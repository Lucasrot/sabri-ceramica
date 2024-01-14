// validacion.jsx
export const validarFormulario = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    // Realizar lógica de envío de formulario
    try {
        const formData = new FormData(form);
        const response = await fetch('URL_DEL_SERVIDOR', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Formulario enviado exitosamente');
            return true;
        } else {
            console.error('Error al enviar el formulario');
            return false;
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return false;
    }
};
