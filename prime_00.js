let n=23;
rr=0;
if(n<=0 || n==1){
    console.log("Not a prime");
}
else{
    for(i=2;i<n/2;i++){
        if(n%i==0){
            rr=1;
            break;

        }
    }
   

}
if(rr==1){
        console.log("Not a prime")
}
else{
        console.log("it is Prime");
    }