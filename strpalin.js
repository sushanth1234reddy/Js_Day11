function palin(x){
    
    let sum="";
    let y="";
   for(let i=x.length-1;i>=0;i--){
       sum=sum+x[i];
    }
    y=sum;
    if(x==y){
        console.log("It is palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}
palin("OhhO");
palin("hello");
palin("abbba");