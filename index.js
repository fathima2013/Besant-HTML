var logobj=
{
    emalid:"",
    passwrd:""
};
var obj ={};
var arrObj=[];
function logIn()
{
    document.getElementById("emlid").value="";
    document.getElementById("psswd").value="";
    console.log(logobj);
}
function getEmail(e)
{
    logobj.emalid=e.target.value;
}
function getPasswd(e)
{
    logobj.passwrd=e.target.value;
}
function getName(e)
{
    obj["firstName"]=e.target.value;   
}
function getNum(e)
{
    obj["phoneNumber"]=e.target.value;
}
function getEmlid(e)
{
    obj["emailId"]=e.target.value;  
}
function getPass(e)
{
    obj["password"]=e.target.value;    
}
function registerMe()
{
    console.log(obj);
    if(obj.length!=0)
    {
        arrObj.push(obj);
        console.log(arrObj);
    localStorage.setItem("user",JSON.stringify(arrObj));
    var data=localStorage.getItem("user");
    console.log(JSON.parse(data));
    document.getElementById("fname").value="";
    document.getElementById("num").value="";
    document.getElementById("gtemlid").value="";
    document.getElementById("gtpswd").value="";
    obj={};
    }
}

