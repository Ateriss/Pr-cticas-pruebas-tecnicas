console.log('imprimir un elemento aleatorio de un array')

function array(num){
    const arrayLength = num.length;
    const position = Math.floor(Math.random()*arrayLength);
    return num[position];
    
}
let prueba1 = [1, 2, 3, 4, "hola", "hello", 'epa', 7, 10, 555];


let impersiones = 10;
for(let i = 0; i<=impersiones; i++){
    console.log(array(prueba1));

}

console.log('ver si una variables es igual a un elemnto de un array')

const colors = ["amarillo", "azul", "verde", "blanco"];
let colorUser = "blanco";
console.log(colors.includes(colorUser));


console.log('solicitar una palabra y mostrar el numero de consonates y numeros de vocales')
let vocales = 0;
let consonates = 0;
let palabra = "Aleluya"
for(const letras of palabra.toLowerCase()){
    if(letras === 'a' || letras === 'e' || letras === 'i' || letras === 'o' || letras === 'u'){
        vocales++
       
    } else {
        consonates++
        
    }
}

console.log(`el numero de vocales es: ${vocales}`)
console.log(`el numero de consonates es: ${consonates}`);
console.log(`el numero de letras en total es: ${palabra.length}`)




module.exports = array;