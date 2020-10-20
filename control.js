function validarUsuario(form) {
    let input = form.usuario;
    if (input.value == "" || input.value.indexOf('@', 0) == -1) {
        alert("El usuario no debe estar vacío y debe contener un @");
        input.focus();
        return (false);
    } else {
        //alert("Campo correcto");
        return (true);
    }
}

function validarClave(form) {
    let input = form.clave;
    if (input.value == "") {
        alert("La clave no debe estar vacía");
        input.focus();
        return (false);
    } else {
        // alert("Campo correcto");
        return (true);
    }
}

function validarCampos(form) {
    if (!validarUsuario(form)) return;
    if (!validarClave(form)) return;
    alert("Todos los campos están correctos");
    document.test.submit();
}