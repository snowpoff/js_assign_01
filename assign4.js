var passedValues = process.argv
var mealValues = []

mealValues.push(Number(passedValues[2]))
mealValues.push(Number(passedValues[3]))

var mealCost = mealValues[0]
var tipPercent = mealValues[1]

const tipAmount = (tipPercent/100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `Your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)





