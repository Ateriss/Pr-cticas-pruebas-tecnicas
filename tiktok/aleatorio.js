/* Imprime un elemento aleatorio de un array*/

const aleatory = (arr) =>{
    const elements = arr.length;
    const position = Math.floor(Math.random()*elements);
    return arr[position]
};

let arr = [1, "hello", 'epa', 7, 10, 555];

for(let i = 1; i<=10; i++){
    console.log(aleatory(arr))
}