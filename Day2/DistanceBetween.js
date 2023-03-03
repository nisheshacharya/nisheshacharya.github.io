function calcDistance(firstXCoordinate,firstYCoordinate,secondXCoordinate,secondYCoordinate ){
    return Math.sqrt(Math.pow((secondYCoordinate-firstYCoordinate),2)+Math.pow((secondXCoordinate-firstXCoordinate),2));

}
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));