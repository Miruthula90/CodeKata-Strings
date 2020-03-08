let str="hello";
let arr=str.split('');
//console.log(arr);
let index=[];

if (str.length%2==0)
{
    index.push(str.length/2,(str.length/2)-1);
    
}
else
{
    index.push(Math.ceil(str.length/2)-1);
}
for (let x of index)
{
    arr[x]='*';
}
//console.log(arr);
if (['a',"e",'i','o','u'].indexOf('e')!=-1)
{
console.log('wah')
}
console.log(arr.join(''));
console.log(arr);
let check=arr.some((ele)=>{

    ele=="a"||ele=="e"||ele=="i"||ele=="o"||ele=="u";
    
})

console.log(check);