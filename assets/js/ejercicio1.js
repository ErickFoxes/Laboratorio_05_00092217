function palindromo(palabra){
    let palabra_Palindroma = '';
    for(i=0; i<palabra.length;i++){
        palabra_Palindroma=palabra_Palindroma+palabra[palabra.length-(i+1)];
    }
    console.log(palabra_Palindroma);
}