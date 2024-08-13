function convert(n){
    let final="";
    for(i of n){
        if(i==i.toLowerCase()){
            final=final+i.toUpperCase();

        }
        else{
            final=final+i.toLowerCase();
        }
    }
    console.log(final);

   
}
convert("HeLlO");