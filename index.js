const letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
////////////////////////////////////////////////////////////////////////////////////////////////////////

// functions
function brute(maxLength) {
    let resolve
    let a;
    for (let matrixLength = 0; matrixLength < maxLength; matrixLength++) {
        a = matrix(matrixLength);
        let index;
        while ((index = getIndex(a, letters.length)) !== null) {
            resolve = increment(a, index);
            if (login(matrixToString(resolve))) {

                console.log("You login is : " + matrixToString(resolve))
                return true;
            }
        }
    }
}


function login(pass) { //LOGIN
    return pass === "zzzz";
}


function matrix(length) {
    let matrix = {};

    for (let i = 0; i <= length; i++) {
        matrix[i] = 0;
    }

    return matrix;
}


function getIndex(matrix, arrLength) {

    for (let i = Object.values(matrix).length - 1; i >= 0; i--) {
        if (matrix[i] < arrLength - 1) {
            return i;
        }
    }

    return null;
}

function increment(matrix, index, prevIndex = null) {

    matrix[index]++;

    // if (prevIndex === null || index === prevIndex) {
    //   return matrix;
    // }

    for (let i = index + 1; i < Object.values(matrix).length; i++) {
        matrix[i] = 0;
    }

    return matrix;
}

function matrixToString(matrix) { //преобразование матрицы в строку
    const valuesArr = Object.values(matrix);
    let str = '';

    valuesArr.forEach(el => {
        str += letters[el];
    })

    return str;
}


///
brute(4);


// let some = {
//   0 : 1,
//   1 : 51
// }
// let index;
// console.log(increment(some, getIndex(some, letters.length)))
