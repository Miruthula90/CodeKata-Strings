let str="I am shrey";
let str2 = str.toLowerCase();
let str3="";
let arr = str2.split(" ");
for (let i = 0; i < str2.length; i++) {

    if (['a','e','i','o','u',''].indexOf(str2[i])==-1)
    {
        str3=str3+""+str2[i]
    }


}
if (str3.length==0)
{
    console.log(-1);
}
else{
    console.log(str3);
}
//submitted