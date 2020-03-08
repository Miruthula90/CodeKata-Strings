let N=0;
//let arr=['kabali','kaabli','kab','kababa','kabail'];
let arr=[ ,'kaabli','kab','kababa','kabail'];
let str="kabali";
let valcount=0;
let chk=true;

if (N>=1 && N<=1000){
    console.log('check');
    for (let j=0;j<arr.length;j++)
    {
        chk=true;
        if (arr[j]!=undefined && arr[j].length==str.length )
        {
            //console.log(arr[j]);
              for (let i=0;i<str.length;i++)
              {
                //console.log(str[i]);
                  if(arr[j].indexOf(str[i])==-1)
                  {
                      chk=false;
                      break;
                  }
              }
              if (chk==true)
              {
                valcount=valcount+1;
              }
           
        }
    }
}

console.log(valcount);
