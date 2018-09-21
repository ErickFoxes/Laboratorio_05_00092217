function binario(numero){
    let bin="";
    while(true){
        if(numero===2){
            bin="10"+bin;
            break;
        }
        if(numero<=1){
            bin="1"+bin;
            break;
        }
        bin=(numero%2)+bin;
        numero=Math.trunc(numero/2);
    }
    console.log(bin);
}