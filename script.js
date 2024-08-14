function repeatString(string,number){
for(i=0; i<number;i++){
    console.log(string);
}
}

repeatString("URUGUAY NOMA", 5);

const button = document.querySelector("button");
button.addEventListener("click", function(){
    let s = prompt("Ingrese una frase");
    let n = prompt("Ingrese un número");
    alert("Ahora mire la consola")
    repeatString(s,n)});