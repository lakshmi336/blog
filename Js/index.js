var emailOrPhno=sessionStorage.getItem("E&M");
var pass=sessionStorage.getItem("pass");
var inputTags=document.getElementsByClassName("inputTag");

function loginFun()
{
    var userGivenID=inputTags[0].value
    var userGivenPass=inputTags[1].value
    var formTag=document.forms
    if(userGivenID==emailOrPhno && userGivenPass==pass)
    {
        document.getElementById("loginButton").type="Submit"
        formTag[0].action="./HTML/home.html"
    }
    else if(userGivenID!=emailOrPhno && userGivenPass==pass)
    {
        document.getElementById("status").innerHTML="Wrong UserId"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,red,#FBB03B)"
    }
    else if(userGivenID==emailOrPhno && userGivenPass!=pass)
    {
        document.getElementById("status").innerHTML="Wrong Password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,#D4145A,red)"
    } 
    else{
        document.getElementById("status").innerHTML="Wrong UserId and Password"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,#FBB03B)"  
    }  
}
function visiblepassword()
{
 inputTags[1].type="text"
 document.getElementById("visibleLogo").src="./Assets/Logo/openeye.jpeg"
 document.getElementById("visibleLogo").style.transform="rotateY(180deg)"
 document.getElementById("visibleLogo").style.transition="transform 0.2s"
}
function invisiblepassword()
{
    inputTags[1].type="password"
    document.getElementById("visibleLogo").src="./Assets/Logo/closeeye.jpeg"
    document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"
}