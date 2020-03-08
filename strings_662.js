let str = "sun rises in east";
str = str.toLowerCase();
console.log(str);
let arr = str.split(" ");
console.log(arr);
let fstr = "";
let valchk = false;
for (let i = 0; i < arr.length; i++) {
  if (
    (i > 0 && arr[i - 1] == "the") ||
    arr[i - 1] == "an" ||
    arr[i - 1] == "a"
  ) {
    valchk = true;
    if (fstr == "") {
      fstr = arr[i];
    } else {
      fstr = fstr + " " + arr[i];
    }
  }
}
//console.log(fstr);

//console.log(y);
if (valchk == true && str != "") {
  //let y= fstr[0].toUpperCase()+fstr.substr(1);
  console.log(fstr);
} else {
  console.log(-1);
}

//submitted
