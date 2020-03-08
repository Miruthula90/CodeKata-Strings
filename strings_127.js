let userInput=[0,0]

let input1=parseInt(userInput[0]);
  let input2=parseInt(userInput[1]);
  let sum='yes';
  
  if (input1<=100000)
  {
      for(let i=0;i<=input2;i++)
      {
          
//sum=sum+i.toString();
if (input1.toString().indexOf(i)==-1)
{
    sum='no';
    break;
}
      }
  }

  console.log(sum);


  const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
userInput.push(data);
})

inp.on("close",()=>{
let input1=parseInt(userInput[0]);
  let input2=parseInt(userInput[1]);
  let sum='yes';
  
  if (input1<=100000)
  {
      for(let i=0;i<=input2;i++)
      {
          
//sum=sum+i.toString();
if (input1.toString().indexOf(i)==-1)
{
    sum='no';
    break;
}
      }
  }

  console.log(sum);
    
});