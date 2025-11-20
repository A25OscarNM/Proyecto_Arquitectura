const form = document.getElementById('formContacto');
  const mensajeFinal = document.getElementById('mensaje-final');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Valores
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();
    const asunto = form.asunto.value.trim();
    const mensaje = form.mensaje.value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoValido = /^[0-9]{7,15}$/;

    // Referencias a errores
    const errores = {
      nombre: document.getElementById('error-nombre'),
      email: document.getElementById('error-email'),
      telefono: document.getElementById('error-telefono'),
      asunto: document.getElementById('error-asunto'),
      mensaje: document.getElementById('error-mensaje')
    };

    // Oculta todos los errores primero
    for (let key in errores) {
      errores[key].textContent = '';
      errores[key].style.display = 'none';
    }

    mensajeFinal.style.display = 'none';

    // Validaciones (solo muestra el primer error encontrado)
    if (!nombre) {
      errores.nombre.textContent = 'Por favor, introduce tu nombre.';
      errores.nombre.style.display = 'block';
      form.nombre.focus();
      return;
    }

    if (!email) {
      errores.email.textContent = 'Por favor, introduce tu email.';
      errores.email.style.display = 'block';
      form.email.focus();
      return;
    }

    if (!emailValido.test(email)) {
      errores.email.textContent = 'El formato del email no es válido.';
      errores.email.style.display = 'block';
      form.email.focus();
      return;
    }

    if (!telefono) {
      errores.telefono.textContent = 'Por favor, introduce tu número de teléfono.';
      errores.telefono.style.display = 'block';
      form.telefono.focus();
      return;
    }

    if (!telefonoValido.test(telefono)) {
      errores.telefono.textContent = 'El teléfono debe tener entre 7 y 15 dígitos.';
      errores.telefono.style.display = 'block';
      form.telefono.focus();
      return;
    }

    if (!asunto) {
      errores.asunto.textContent = 'Por favor, introduce un asunto.';
      errores.asunto.style.display = 'block';
      form.asunto.focus();
      return;
    }

    if (!mensaje) {
      errores.mensaje.textContent = 'Por favor, escribe un mensaje.';
      errores.mensaje.style.display = 'block';
      form.mensaje.focus();
      return;
    }

    // Si todo es correcto
    mensajeFinal.style.display = 'block';
    form.reset();
    setTimeout(() => mensajeFinal.style.display = 'none', 3000);
  });