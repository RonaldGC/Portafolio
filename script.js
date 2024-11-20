document.addEventListener('DOMContentLoaded', function () {
    const contactIcon = document.getElementById('contact-icon');

    if (contactIcon) {
        contactIcon.addEventListener('click', function () {
            toggleVisibility('contact-menu');
        });
    } else {
        console.error("El elemento con ID 'contact-icon' no se encontró en el DOM.");
    }

    const formButton = document.getElementById('boton-formulario');
    if (formButton) {
        formButton.addEventListener('click', function () {
            toggleVisibility('formulario-contacto');
        });
    } else {
        console.error("No se encontró el elemento ID boton-formulario");
    }
    
});

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        console.log("Estado actual del elemento:", element.classList);

        if (element.classList.contains('show')) {
            element.classList.remove('show'); 
            setTimeout(() => {
                element.classList.add('hidden'); 
                console.log("Nuevo estado del elemento después de ocultar:", element.classList);
            }), 300; 
        } else if (element.classList.contains('hidden')) {
            element.classList.remove('hidden'); 
            setTimeout(() => {
                element.classList.add('show');
                console.log("Nuevo estado del elemento después de mostrar:", element.classList);
            }), 0; 
        }
    }
}

