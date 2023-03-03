/**
 */
function swap(a, b){
    let temp = b;
     b = a;
     a = temp;
     return ("a: "+a + "  b:"+b )

}
console.log(swap("a","b"));