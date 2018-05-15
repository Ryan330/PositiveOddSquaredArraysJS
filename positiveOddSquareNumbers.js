//Positive Array Function
//Create Array
var posNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Filter Positive Numbers
function posFilter(n) {
    var newposNum = [];

    n.forEach(function (m) {
    
        if (m % 2 == 0) {
            newposNum.push(m);
        }
    })
    return newposNum;
}


//Positive Numbers Print Section
console.log("<--Positive Numbers-->");

var posResults = posFilter(posNum);
console.log(posResults);




//Odd Array Function
//Create Array
var oddNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Filter Odd Numbers
function oddFilter(n) {
    var newoddNum = [];

    n.forEach(function (m) {
    
        if (m % 2 !== 0) {
            newoddNum.push(m);
        }
    })
    return newoddNum;
}


//Space
console.log("");
console.log("");


//Odd Numbers Print Section
console.log("<--Odd Numbers-->");

var oddResults = oddFilter(oddNum);
console.log(oddResults);




//Square Array Function
//Create Array
var squareNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Filter Square Numbers
function squareNumbers(n) {
    var newsquareNum = [];

    n.forEach(function (m) {
        m = m * m;

        newsquareNum.push(m);
        })
    return newsquareNum;
}


//Space
console.log("");
console.log("");


//Square Numbers Print Section
console.log("<--Squared Numbers-->");

var squareResults = squareNumbers(squareNum);
console.log(squareResults);