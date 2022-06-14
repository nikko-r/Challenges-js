//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (pNum) => {
    if (pNum < 0) {
        return false
    } else {
        return true
    }
}
console.log(isNumberPositive(-1))
console.log(isNumberPositive(10))

//2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {
    return days / 365
}
console.log(convertDaysToAge(3650))
console.log(convertDaysToAge(6570))

//3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    if (num2 > num1 && num2 > num3) {
        return num2
    }
    if (num3 > num1 && num3 > num2) {
        return num3
    }
}
console.log(getLargestNumber(2, 1, 4))
console.log(getLargestNumber(6, 2, 3))

//4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (nameArray) => {
    //let nameArray = ["Charlie", "Rob", "Andy"]
    let lastNamei = nameArray.length - 1
    return (nameArray[lastNamei])
        //    console.log(nameArray)
        //    console.log(nameArray.length)
}

console.log(getLastName(["Charlie", "Rob", "Andy"]))
console.log(getLastName(["Ash", "Stu"]))

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (numArray) => {
    for (let i = 0; i < numArray.length; i++) {
        if ((numArray[i]) < 0) {
            return false
        }
    }
    return true
}

console.log(allNumbersPositive([2, 4, 5]))
console.log(allNumbersPositive([-5, 4, 6]))