const usuarios = [
    { user: 'luis', password: '123'},
    { user: 'maria', password: '321'}
]; 

function inicioSesion(){
    //prevenir el envio del formulario si se llama desde sumit
    if(event)event.preventDefault();
    let usu = document.getElementById('usu').value;
    let pass= document.getElementById('pass').value;

    let verifica = !!usuarios.find(e =>e.user==usu && e.password==pass);

    if(verifica){
        alert("Usuario correcto......!!!!!")
        window.location.href="pages/inicio.html";
    }
    else{
        alert("Usuario o password incorrectos....!!")
    }
}