function circulo(){
    let radio = prompt('radio: ');
    let area;
    if(radio<=0){
        console.log("ERROR: El radio debe ser mayor que cero");
    }else{
        area=(Math.PI)*(Math.pow(radio,2));
    }
    console.log(area);
}