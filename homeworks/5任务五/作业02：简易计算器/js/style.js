// JavaScript Document
function result() {
    isx = document.getElementById("x").value;
    isy = document.getElementById("y").value;
    if (isNaN(isx) || isNaN(isy) || (isx == '') || (isy == '')) {
        alert("请输入正确的数字");
        return;
    }
    var x = parseFloat(isx);
    /*获取到第一个数*/
    var y = parseFloat(isy);
    /*获取到第二个数*/
    var oper = document.getElementById("oper").value;
    /*获取到运算符*/
    var myresult = document.getElementById("result");
    /*获取到输出结果*/
    if (oper == "+") {
        myresult.innerHTML = accAdd(x, y);
    } 
    else if (oper == "-") {
        myresult.innerHTML = accSub(x, y);
    } 
    else if (oper == "*") {
        myresult.innerHTML = accMul(x, y);
    } 
    else if (oper == "/") {
        if (isy == 0) {
            alert("除数不能为0");/*当除数为0时，提醒用户*/
            return;
        }
        myresult.innerHTML = accDiv(x, y);
    }
}

/*加法函数*/
function accAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } 
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } 
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

/* 减法函数 */
function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } 
	catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } 
	catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/* 乘法函数 */
function accMul(arg1, arg2) 
{
    var m = 0
      , s1 = arg1.toString()
      , s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length
    } 
	catch (e) {}
    try {
        m += s2.split(".")[1].length
    } 
	catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

/* 除法函数 */
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length
    } 
	catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length
    } 
	catch (e) {}
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
