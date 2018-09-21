function burbuja(palabra){
    var aux;
    for(i=1; i<palabra.length;i++){
        for(j=0; j<palabra.length;j++){
            if(palabra[j+1]<palabra[j]){
                aux = palabra[j+1];
                palabra[j+1]=palabra[j];
                palabra[j]=aux;
            }
        } 
    }
    console.log(palabra);
}