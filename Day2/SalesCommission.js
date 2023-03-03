function computeSalesCommission(isSalaried, salesAmount){
    if(isSalaried){
        if(salesAmount<300){
            return 0;
        }else if(salesAmount<500){
            return 0.01*salesAmount;
        }else{
            return  (0.01*500) + 0.02*(salesAmount-500);
        }
    }else{
        if(salesAmount<300){
            return 0;
        }else if(salesAmount<500){
            return 0.02*salesAmount;
        }else{
            return (0.02*500) + 0.03*(salesAmount-500);
        }
    }

}
console.log("expect 0: ", computeSalesCommission(true, 200)); 
console.log("expect 0: ", computeSalesCommission(false, 200)); 
console.log("expect 3: ", computeSalesCommission(true, 300)); 
console.log("expect 6: ", computeSalesCommission(false, 300)); 
console.log("expect 65: ", computeSalesCommission(true, 3500)); 
console.log("expect 100: ", computeSalesCommission(false, 3500));