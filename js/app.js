

const contactoButton = document.getElementById('contacto');
const body = document.getElementById('body-principal');
const contenedorContacto = document.getElementById('contenedor-contacto');
contactoButton.addEventListener('click', abrirContacto);

function abrirContacto() {

    if (document.querySelector('.formulario-contacto')) {
        console.log('El formulario ya está abierto.');
        return;
    }
    
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    const divFormulario = document.createElement('div');
    const labelGmail = document.createElement('label');
    const inputGmail = document.createElement('input');
    const labelMensaje = document.createElement('label');
    const mensaje = document.createElement('textarea');
    const buttonSubmit = document.createElement('button');
    const sectionContacto = document.createElement('section');

    sectionContacto.classList = 'section-contacto';
    sectionContacto.id = 'section-contacto';
    

    body.overflow = 'hidden'; // Deshabilitar scroll del body
    inputGmail.type = 'email';
    inputGmail.required = true;
    labelGmail.textContent = 'Gmail*';
    h2.textContent = 'Contacto';
    labelMensaje.textContent = 'Mensaje*';
    buttonSubmit.type = 'submit';
    buttonSubmit.textContent = 'Enviar';

    divFormulario.classList = 'formulario-inputs-contacto';
    form.classList = 'formulario-contacto';
    mensaje.name = 'mensaje';
    mensaje.id = 'mensaje';


    contenedorContacto.appendChild(sectionContacto);
    sectionContacto.appendChild(form);
    form.appendChild(h2);
    form.appendChild(divFormulario);
    divFormulario.appendChild(labelGmail);
    divFormulario.appendChild(inputGmail);
    divFormulario.appendChild(labelMensaje);
    divFormulario.appendChild(mensaje);
    divFormulario.appendChild(buttonSubmit);


    // Aplica la clase de animación después de agregar el formulario al DOM
    setTimeout(() => {
        sectionContacto.classList.add('transition-active');
    }, 1); // Pequeña demora para que el DOM se actualice

    // Aplica la animación después de que el formulario ha sido agregado al DOM
    sectionContacto.setAttribute('transition-style', 'in:wipe:left');
    // Cerrar formulario si se hace clic en el contenedor de contacto
    contenedorContacto.addEventListener('click', cerrarFormulario);

    function cerrarFormulario(event) {
        // Verifica si se hace clic en el contenedor de contacto, pero no en el formulario
        if (event.target === sectionContacto) {
            sectionContacto.remove();
            contenedorContacto.removeEventListener('click', cerrarFormulario); // Desactivar el evento una vez cerrado el formulario
        }
    }

    // console.log(sectionContacto)
}
