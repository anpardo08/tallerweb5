function toggle(elemento) {
    if (elemento.value === "a") {
      document.getElementById("uno").style.display = "block";
    } else {
      if (elemento.value === "b") {
        document.getElementById("uno").style.display = "none";
      }
    }
}


function checkPassword(valor){
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(myregex.test(valor)){
        alert("El usuario fue creado")
        return true;
    }else{
        alert(valor+" NO es valido!");
        return false;
    }
}

function checkForm(form){

    if(form.pwd1.value !== "" && form.pwd1.value === form.pwd2.value) {
        if(!checkPassword(form.pwd1.value)) {
            alert("Al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.");
            form.pwd1.focus();
            return false;
        }
    } else {
        alert("Error: las contraseñas no coinciden!");
        form.pwd1.focus();
        return false;
    }
    return true;
}