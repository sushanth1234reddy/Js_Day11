function convert(n){
    let final="";
     for(i in n){
        
        if(n[i]=="@"){
            let a=n[i+1];
            let b=n[i+2];
            final=final+n[i].toUpperCase();
             final=final+a.toLowerCase();
             final=final+b.toLowerCase();




         }
        final=final+n[i];
        

    }
    console.log(final);
}
convert("So!Me@THILnG");