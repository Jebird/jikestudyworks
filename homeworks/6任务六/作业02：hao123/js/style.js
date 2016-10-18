// JavaScript Document
//获取 Cookie
function GetCookie(sName) 
{
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) 
    {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) 
        {
            return aCrumb[1];
        }
    }
    return null ;
}
//设置 Cookie
function SetCookie(name, value, time, domain) 
{
    var expdate = new Date();
    var expires = time;
    if (expires != null ) {
        expdate.setTime(expdate.getTime() + (expires * 1000));
        expd = "expires=" + expdate.toGMTString() + ";";
    } else
        expd = "";
    if (domain) 
    {
        domain = "domain=" + domain + "; path=/; ";
    }
    document.cookie = name + "=" + escape(value) + "; " + expd + domain;
}
var cookieTag = "nd_skin";
var vSkin = GetCookie(cookieTag);

//皮肤撤销初始化皮肤
if (vSkin == "mySkin") {
    setSkinColor('green');
}

function setSkinColor(vSkinNum) 
{
    SetCookie(cookieTag, vSkinNum, 60 * 60 * 24 * 30, "");
    if (vSkinNum == "mySkin") {
        vSkinNum = "green";
    }
    vSkin = GetCookie(cookieTag);
    document.getElementById("skinCss").href = "css/" + vSkin + ".css";
}

if (vSkin && vSkin != "Style") 
{
    document.getElementById("skinCss").href = "css/" + vSkin + ".css";
}
