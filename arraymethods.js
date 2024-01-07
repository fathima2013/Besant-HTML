var a=[];
var fruit="";
var frt=document.getElementById("fruit");
function getValue(e)
{
 fruit=e.target.value;
}
function addMe()
{
console.log(a.includes(fruit));
if((!a.includes(fruit)))
    {
        a.push(fruit);
        frt.value="";
    }
console.log(a);
}
function removeMe()
{
for(var i=a.length-1;i>=0;i--)
 {
    if(a[i]=== fruit)
    a.splice(i,1);
    frt.value="";
 }
 console.log(a);
}

