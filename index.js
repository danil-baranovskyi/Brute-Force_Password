//1) Функция логин, создать массив символов.
//2) Создать функцию матрицы, ключ и значение. Где ключ это текущий символ в слове а значение это его соответсвие из массива разрешённых символов.
//3) Функция текущего инкреметируемого значения. Определяет какой ключ сейчас перебираеться.
//4) При проходе значения у ключа до конца массива разрешённых символов, обнулить текущее значение и перейти выше.
//5) Функция инкремента принимает 3 аргумента матрицу(объект), преведущее значение и текущеее итерируемое.
//6) Функция преобразования текущей матрицы в строку.
//7) Проверка строки(Пароля в логине) в цикле.


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
////////////////////////////////////////////////////////////////////////////////////////////////////////

// functions
function brute(maxLength) {


  for (let matrixLength = 1; matrixLength <= maxLength; matrixLength++) {
    let a = matrix(matrixLength);

  }
}


function login(pass) { //LOGIN
  return pass === "aa";
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

  if (prevIndex === null || index === prevIndex) {
    return matrix;
  }

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
brute(3);
// console.log(getIndex({
//   0: 43,
//   1: 42,
//   2: 43
// },letters.length))
