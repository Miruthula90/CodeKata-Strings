let str = "i am kohli fan";
console.log(str);
let str2='';
let arr = str.split(" ");
for (let i of arr) {
  if (i.length == 1) {
    str2 = str2 + "" + i;
  } else {
    let y = i.split("");
    y = y.reverse();
    str2 = str2 + " " + y.join("");
  }
}

console.log(str2);
