function nComentario(){
    let li = document.createElement("li");
    let valoringressado = document.getElementById("novoComentario").value;
    let text = document.createTextNode(valoringressado);
    li.appendChild(text);

    if(valoringressado === ''){
        alert("Ingresse um Comentario!")
    } else{
        document.getElementById("comentarios").appendChild(li);
    }

    document.getElementById("novoComentario").value = "";
    li.className = "comentario";

    let apagar = document.createElement("p");
    apagar.innerHTML = ("Apagar");
    apagar.className = "close";
    li.appendChild(apagar);

    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++){
        close[i].oncklick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}