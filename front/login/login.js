function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = 
        "http://127.0.0.1:5500/front/principal/index.html";
    }else {
        alert('Usuario ou senha incorretas')
    }
}