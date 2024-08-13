let n=4;
fact=1;
res="";
if(n<0){
    console.log("please enter a positive number");
}
else if(n==0){
    console.log(`Factorial of ${n} is: 1`)
}
else{
for(i=1;i<=n;i++){
    if(i==n){
        res=res+i+" = ";
    }
    else{
        res=res+i+"*";
    }
    fact=fact*i;
}
console.log(`Factorial of ${n} is:`)
console.log(res+fact);
}

