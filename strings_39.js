let stmnt="i love codekata";
let tofind="Love";
let count=0;
let stmantarr=stmnt.split(" ");
for(let k of stmantarr)
{
    if (tofind.toLowerCase()==k.toLowerCase())
    {
count=count+1;
    }
}

(count>0)?console.log(count):console.log(-1);
//submitted