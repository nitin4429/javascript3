function CalculateTotalCartValue(){
     let totalvalue=0;
    for( i=0;i<arguments.length;i++){
        totalvalue+=arguments[i];
    }
    console.log(`The total cart value is ${totalvalue}`)
    return totalvalue;
}