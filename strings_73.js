let N=19;
N=N.toString();
let sum=0;
if (N>=1 && N<=1000000000000000000)
{
for (let i=0;i<N.length;i++)
{
sum=sum+((+N[i])*(+N[i]));
}
}
console.log(sum);