let str="missssissipie";
//console.log(str);
function checkrepeatetive(str)
{
    let arr=[];
    let chkval=false;
    for(let i=0;i<str.length;i++)
    {
        if (str[i]==str[i+1])
        {
            chkval=true;
       arr.push(i);
       arr.push(i+1);

        }
    }
    //console.log(arr);
    let uniq = [...new Set(arr)];
    //console.log(uniq);
    let arr2=str.split('');
    for (let j=0;j<uniq.length;j++)
    {
       //console.log(j);
       
        arr2.splice(uniq[j]-j,1)
       // console.log(arr2);         
    }
let z=arr2.join('');
//console.log(z);
    if (chkval==true)
    {
        z=checkrepeatetive(z);
    }
   
        return z;
    
    

}
let finalval=checkrepeatetive(str);
console.log(finalval);
