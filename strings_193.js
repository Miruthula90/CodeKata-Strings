let a="computer program";
let nwarr=a.split("");
let obj={};

nwarr.forEach((ele)=>
{
    if (obj.hasOwnProperty(ele))
    {
        obj[ele]=obj[ele]+1;
    }
    else{
        obj[ele]=1;
    }
})

//console.log(obj);

let output="";
nwarr.forEach((ele)=>
{
    if (obj[ele]>1)
    {
output=output+ele.toString().toUpperCase();
    }
    else if(obj[ele]==1){
        output=output+ele.toString();
    }
})

console.log(output);
//submitted