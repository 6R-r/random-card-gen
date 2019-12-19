window.onload = function () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
    let symbols =["&#9824;", "&#9827;", "&#9829;", "&#9830;"];

    let i = Math.floor(Math.random() * numeros.length);
    
    
    
    document.querySelector("#numerocentro").innerHTML = `${numeros[i]}`;
    
    let y = Math.floor(Math.random() * symbols.length);

    document.querySelector("#symbol").innerHTML = `${symbols[y]}`;
    document.querySelector("#symbol2").innerHTML = `${symbols[y]}`;
    if( y == 2 || y == 3){
        document.querySelector("#symbol").style.color = "red";
        document.querySelector("#symbol2").style.color = "red";
    }

}