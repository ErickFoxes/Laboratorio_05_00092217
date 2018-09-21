function fibonnacci(){
    var n1, n2,n3;
    n1=0;
    n2=1;
    console.log("0");
    console.log("1");
    for (let i = 0; i<=10; i++) {
       n3=n1+n2;
       console.log(n3);
       n1=n2;
       n2=n3;
    }
}