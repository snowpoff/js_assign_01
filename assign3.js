var myValues = process.argv
var myArray = []
myArray.push(Number(myValues[2]))
myArray.push(Number(myValues[3]))
myValues = myArray[0] + myArray[1]

if (myValues > 1000){
    console.log(myArray[0] + " + " + myArray[1] + " is greater than 1000." )
} else if (1000 > myValues && myValues > 100){
    console.log(myArray[0] + " + " + myArray[1] + " is greater than 100 but less than 1000." )
} else if (100 > myValues && myValues > 10){
    console.log(myArray[0] + " + " + myArray[1] + " is greater than 10 but less than 100." )
} else if (myValues === 10 || myValues === 100 || myValues === 1000){
    console.log(myArray[0] + " + " + myArray[1] + " is one of 10, 100, or 1000." )
} else {
    console.log(myArray[0] + " + " + myArray[1] + " is less than 10 or involves a non-number." )
}