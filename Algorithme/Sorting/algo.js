// let Tableofnumber = [1, 0, 1, 1];
// // 101011 +1 =      101100
// Inc = (n) => {
//   if (Tableofnumber[n] == 0) {
//     Tableofnumber[n] = 1;
//     return 1;// Base case
//   }

//   if (Tableofnumber[n] == 1) {
//     Tableofnumber[n] = 0;
//     console.log('*')
//     Inc(n - 1);

//   }
// };

// Inc(3);
// console.log(Tableofnumber); //complexity in worst case is n-1 in the best case is o(1)
// //base case is Tableofnumber[n]==0

// let listnumber = [1, 5, 9, 8, 7];
// let i = 0;
// let sumy = 0;
// const sum = (i) => {
//   if (i > 4) {
//     console.log(sumy);
//     return sumy;
//   } else {
//     sumy = listnumber[i] + sumy;
//     sum(i + 1);
//   }
// };

// sum(0);

// exponentioal
let expo = 1;

const expont = (x, y) => {
  if (x == 0) {
    console.log(expo);
    return expo;
  } else {
    expo = expo * y;
    expont(x - 1, y);
  }
};

// expont(2,10);

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

// associate root with is descendants
abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);

let array = [10, 5]; // First  item in the Array is  the Pivote is 33
let prem = 0;
var less = [];
var grather = [];
let pivote;
const quicksort = (array) => {
  if (array.length < 2) {
    return array;
  }
  if (array.length == 2) {
    if (array[0] < array[1]) {
      return array;
    }
    if (array[0] > array[1]) {
      prem = array[1];
      array[1] = array[0];
      array[0] = prem;
      return array;
    }
  } else {
    pivote = array[0]; // this is the pivote 33
    less = array.filter((item) => item < array[0]);
    grather = array.filter((item) => item > array[0]);

    return quicksort(less).concat(quicksort(grather)).concat(array[0]);
  }
};

console.log(quicksort([10, 6, 33,88,41,7,15]));
