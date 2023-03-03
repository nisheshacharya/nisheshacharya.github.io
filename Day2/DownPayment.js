/*
create a function calcDownPayment(cost) where   arguement cost is  price of house. 
if(the cost of house<50K) 
    return 5% of the cost;
else if (the cost is ess than 100k)
    return $2500 + 10% of (cost - $50K) ;
else if (the cost  less than 200k )
    return $7500 + 15% of (cost - $100K) ;
else
    return  $20000 + 10% of (cost - $200K);
 */

    function calcDownPayment(cost){
        if(cost<50000){
            return 0.05*cost;
        }else if(cost<100000){
            return 2500+(0.1*(cost-50000));
        }else if(cost<200000){
            return 7500+(0.15*(cost-100000));
        }else{
            return 20000+(0.1*(cost-200000));
        }
    }
    console.log("expect 2000: ", calcDownPayment(40000)); 
    console.log("expect 2500: ", calcDownPayment(50000)); 
    console.log("expect 7500: ", calcDownPayment(100000)); 
    console.log("expect 25000: ", calcDownPayment(250000)); 
