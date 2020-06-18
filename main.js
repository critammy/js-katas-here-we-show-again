const parentElement = document.querySelector('.katas-list')

//Kata1
//cite: Scott Martin, Tony Lukowski, Alex Alea

const kata1Heading = document.createElement("h3")
parentElement.append(kata1Heading)
kata1Heading.append("KATA 1")

let array = [];
for (let counter = 1; counter <= 20; counter += 1) {
    array.push(counter)
}
parentElement.append(array)

//kata2
const kata2Heading = document.createElement("h3")
parentElement.append(kata2Heading)
kata2Heading.append("KATA 2")

let array2 = [];
for (let counter2 = 2; counter2 < + 20; counter2 += 2) {
    array2.push(counter2)
}
parentElement.append(array2)

//kata3
const kata3Heading = document.createElement("h3")
parentElement.append(kata3Heading)
kata3Heading.append("KATA 3")

let array3 = [];
for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
    array3.push(counter3)
}
parentElement.append(array3)

//kata4

const kata4Heading = document.createElement("h3")
parentElement.append(kata4Heading)
kata4Heading.append("KATA 4")

let array4 = [];
for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    array4.push(counter4)
}
parentElement.append(array4)

//kata5

const kata5Heading = document.createElement("h3")
parentElement.append(kata5Heading)
kata5Heading.append("KATA 5")

let array5 = [];
for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
    if (counter5IsPerfectSquare) {
        array5.push(counter5)
    }
}
parentElement.append(array5)

//kata6

const kata6Heading = document.createElement("h3")
parentElement.append(kata6Heading)
kata6Heading.append("KATA 6")

let array6 = [];
for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    array6.push(counter6)
}
parentElement.append(array6)

//kata 7
const kata7Heading = document.createElement("h3")
parentElement.append(kata7Heading)
kata7Heading.append("KATA 7")

let array7 = [];
for (let counter7 = 20; counter7 >= 1; counter7 -= 2) {
    array7.push(counter7)
}
parentElement.append(array7)

//kata 8

const kata8Heading = document.createElement("h3")
parentElement.append(kata8Heading)
kata8Heading.append("KATA 8")

let array8 = [];
for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
    array8.push(counter8)
}
parentElement.append(array8)

//kata 9 
const kata9Heading = document.createElement("h3")
parentElement.append(kata9Heading)
kata9Heading.append("KATA 9")

let array9 = [];
for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    array9.push(counter9)
}
parentElement.append(array9)

//kata 10
const kata10Heading = document.createElement("h3")
parentElement.append(kata10Heading)
kata10Heading.append("KATA 10")

let array10 = [];
for (let counter10 = 100; counter10 >= 1; counter10 -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter10))
    if (counter10IsPerfectSquare) {
        array10.push(counter10)
    }
}
parentElement.append(array10)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472
];


//kata 11
const kata11Heading = document.createElement("h3")
parentElement.append(kata11Heading)
kata11Heading.append("KATA 11")

parentElement.append(sampleArray)

//kata 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)



const kata12Heading = document.createElement("h3")
parentElement.append(kata12Heading)
kata12Heading.append("KATA 12")

let outputArray = [];
for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 === 0) {
        outputArray.push(sampleArray[index])
    }
}
parentElement.append(outputArray)


//kata 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13Heading = document.createElement("h3")
parentElement.append(kata13Heading)
kata13Heading.append("KATA 13")

let odds = [];
for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 !== 0) {
        odds.push(sampleArray[index])
    }
}
parentElement.append(odds)

//kata 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14Heading = document.createElement("h3")
parentElement.append(kata14Heading)
kata14Heading.append("KATA 14")

let squares = [];
for (let index = 0; index < sampleArray.length; index += 1) {
  square = sampleArray[index] * sampleArray[index]
  squares.push(square)
}
parentElement.append(squares)


//kata 15 Display the sum of all the numbers from 1 to 20.
const kata15Heading = document.createElement("h3")
parentElement.append(kata15Heading)
kata15Heading.append("KATA 15")

let arrayTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;
for (let index = 0; index < arrayTotal.length; index += 1) {
  sum += arrayTotal[index]
}
parentElement.append(sum)


//kata 16 Display the sum of all the elements in sampleArray.
const kata16Heading = document.createElement("h3")
parentElement.append(kata16Heading)
kata16Heading.append("KATA 16")

let sum2 = 0;
for (let index = 0; index < sampleArray.length; index += 1) {
  sum2 += sampleArray[index]
}
parentElement.append(sum2)

//kata 17 Display the smallest element in sampleArray.
const kata17Heading = document.createElement("h3")
parentElement.append(kata17Heading)
kata17Heading.append("KATA 17")


let smallest = Math.min.apply(Math, sampleArray)
parentElement.append(smallest)

//kata 18 Display the largest element in sampleArray.
const kata18Heading = document.createElement("h3")
parentElement.append(kata18Heading)
kata18Heading.append("KATA 18") 

let largest = Math.max.apply(Math, sampleArray)
parentElement.append(largest)