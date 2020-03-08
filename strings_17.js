let str="XCODE";
let str1="";
let str2="";

for (let i=0;i<str.length;i++)
{
if(i%2==0)
{
    str1=str1+str[i];
}
else{
    str2=str2+str[i];
}
}
console.log(str1+" "+str2);