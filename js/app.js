(function () {
    emailjs.init("PBKLlhpAZgZdmjDYx"); // Reemplaza con tu User ID de EmailJS
})();

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
    buttonSubmit.id = 'btn-enviar-form';

    divFormulario.classList = 'formulario-inputs-contacto';
    form.classList = 'formulario-contacto';
    form.id = 'formulario-contacto';
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

    // Deshabilitar el scroll del body
    body.style.overflow = 'hidden';
    // Aplica la clase de animación después de agregar el formulario al DOM
    setTimeout(() => {
        sectionContacto.classList.add('transition-active');
    }, 0); // Pequeña demora para que el DOM se actualice

    // Aplica la animación después de que el formulario ha sido agregado al DOM
    sectionContacto.setAttribute('transition-style', 'in:wipe:left');
    // Cerrar formulario si se hace clic en el contenedor de contacto
    contenedorContacto.addEventListener('click', cerrarFormulario);

    function cerrarFormulario(event) {
        // Verifica si se hace clic en el contenedor de contacto, pero no en el formulario
        if (event.target === sectionContacto) {
            sectionContacto.classList.add('transition-active-reverse');
            body.style.overflow = 'auto'; // Habilitar scroll del body
            setTimeout(() => {
                sectionContacto.remove();
                contenedorContacto.removeEventListener('click', cerrarFormulario); // Desactivar el evento una vez cerrado el formulario
            }, 3500); // Ajusta el tiempo según la duración de tu animación
        }


    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        enviarEmail();
    });

    // console.log(sectionContacto)
}


function enviarEmail() {
    const form = document.getElementById('formulario-contacto');
    const gmail = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector('textarea').value;

    if (!gmail || !mensaje) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    emailjs.send("service_s11iot6", "template_v660gcn", {
        message: mensaje,
        email_id: gmail,
    }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado correctamente.');
    }, function (error) {
        console.log('FAILED...', error);
        alert('Ocurrió un error al enviar el mensaje.');
    });

    form.querySelector('input[type="email"]').value = '';
    form.querySelector('textarea').value = '';
    // Cerrar formulario después de enviar el mensaje
    // document.getElementById('section-contacto').click();
    
}