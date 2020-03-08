let str="ppll";
let arr=str.split('');
let val=false;
for (let i=0;i<str.length;i++)
{
    
    if (arr.indexOf(str[i])==arr.lastIndexOf(str[i]))
    {
        val=true;
        console.log(str[i]);
        break;
    }
}

if(val==false)
{
    console.log(-1);
}