// Call the dataTables jQuery plugin
$(document).ready(function() {
//On ready
});

async function iniciarSesion() {
    let datos = {};
    datos.mail = document.getElementById('txtMail').value;
    datos.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });

    const response = await request.text();
    if(response != "fail"){

    localStorage.token = response;
    localStorage.mail = datos.mail;

    window.location.href = 'usuarios.html'

    } else {
    alert("Las credenciales son incorrectas, intente nuevamente.")}
}
