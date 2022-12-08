const ec = document.querySelector("#ec");
const sc = document.querySelector("#sc");

function login() {
    let info = {
        "email": ec.value,
        "senha": sc.value
    }

    fetch("http://10.87.207.28:5000/forum/login", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            localStorage.setItem("info", JSON.stringify({"username":data.username, "image":data.img}));

            window.location.href = "../home/";
        }
    })
}