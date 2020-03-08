let str="aabbba";
let arr=str.split('');
let obj={};
arr.forEach((ele)=>
{
    if (obj.hasOwnProperty(ele))
    {
        obj[ele]=obj[ele]+1;
    }
    else{
        obj[ele]=1;
    }
})
let i="";
let str2=Object.keys(obj).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(str2);
//submitted