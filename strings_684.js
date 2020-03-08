let N=5;
let str="edsab";
let arr=str.split('');
let arr2=[];
let obj={};
let str2="";
for(let i of arr)
{
obj[i.charCodeAt(0)]=i;
arr2.push(i.charCodeAt(0));
}
//console.log(obj);

arr2.sort((a,b)=>a-b);
//console.log(arr2);
arr=[];
for(let k of arr2)
{
    //console.log(obj[k]);
    str2=str2+obj[k];
//arr.push(k.charAt(0));
}
console.log(str2);
//submitted
