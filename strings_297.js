let str="abcd er x";
let arr=str.split(" ");
let finalstr="";

for (let i of arr)
{
    let arr2=i.split("");
    arr2=arr2.reverse();
    finalstr=finalstr+arr2.join('') +" ";
}

console.log(finalstr);