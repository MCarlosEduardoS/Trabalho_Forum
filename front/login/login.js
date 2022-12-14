function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "stalker@gmail.com" && senha == "1234"){
        alert('Logou como usuario');
        location.href = 
        "http://127.0.0.1:5501/front/principal/index.html";
    }else{
        ("Usuario ou senha incorreto")
    }    

    if(login == "admin" && senha == "admin"){
        alert('Logou como administrador');
        location.href = 
        "http://127.0.0.1:5501/front/principal/index.html";
    }
}