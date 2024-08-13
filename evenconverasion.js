function convert(n){
    let final="";
    for(i of n){
        let idx=n.indexOf(i);
        if(idx%2==0){
        if(i==i.toLowerCase()){
            final=final+i.toUpperCase();

        }
        else{
            final=final+i.toLowerCase();
        }
    }
    else{
        final=final+i;
    }
    }
    console.log(final);

   
}
convert("sushanth");