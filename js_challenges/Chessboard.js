


let total = 8;

let text = "";

for (let row = 0; row <= total; row++) {
    for (let collumn = 0; collumn <= total; collumn++) {
        if ((collumn + row) % 2 == 0) {
            text += "  ";
        } else {
            text += "#";
            text += "\n"
        }
    }
    text += "\n";
}
console.log(text);


//meu erro era procurar colocar a variável sem biding ou guardar nela os valores para serem mostrados

/* let max_Value = 5;

let a = "";
let b = "";

for (let i = 1; i < max_Value; i++){
    a += " #";
}

for (let n = 1; n < max_Value; n++){
    b += "# ";
}

let c = a + "\n" + b + "\n"+ a + "\n" + b + "\n" + a + "\n" + b + "\n" + a + "\n" + b + "\n";

console.log(c); */



/* let a = " # # # #\n# # # # "
let b = "\n # # # #\n# # # # \n"

let c = a + b;
console.log(c + c); */



/* for (let n = 1; n <= 8; n++) {
    let e = " "
    let x = "#"
    if (n % 2 == 0) {
        console.log(x + e + x + e + x + e + x + e + "\n" + x);
    } else if (n % 2 != 0) {
        console.log(e + x + e + x + e + x + e + x);
    }

} */
