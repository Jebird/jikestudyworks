// JavaScript Document
var num = 0, result = 0, numshow = "0";
var operate = 0;
//判断输入状态的标志
var calcul = 0;
//判断计算状态的标志
var quit = 0;
//防止重复按键的标志
var str = String(document.getElementById('numShow').value);
//获取到输入的数字
function getNum(num) {
    str = (str != "0") ? ((operate == 0) ? str : "") : "";
    //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str = str + String(num);
    //给当前值追加字符 
    document.getElementById('numShow').value = str;
    //刷新显示 
    operate = 0;
    //重置输入状态 
    quit = 0;
    //重置防止重复按键的标志 
}
//获取小数点
function poi() {
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0";
    //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i < str.length; i++) {
        if (str.substr(i, 1) == ".") {
            return false;
        }
    }
    str = str + ".";
    document.getElementById('numShow').value = str;
    //刷新显示 
    operate = 0;
    //重置输入状态 
}
//退一位数字
function del() {
	//判断为0的情况，如果为0，仍显示为0
    if (str == "0") {
        str = "0";
    } 
    else {
        str = str.substr(0, str.length - 1);//字符截取，截取到第一位至倒数第二位
    }
    if (str == '') {
        str = "0";
    }
    document.getElementById("numShow").value = str;
}
//清空
function cle() {
    num = 0;
    result = 0;
    document.getElementById("numShow").value = 0;
}
//相反数
function opp() {
    str = -Number(str);
    document.getElementById('numShow').value = str;
    operate = 1;
    //重置输入状态
}
//正弦
function sin() {
    str =parseFloat(Math.sin(Number(str) * Math.PI / 180).toFixed(8));//注意数据转换，js里三角函数使用的是弧度，而不是角度
    document.getElementById('numShow').value = str;
    operate = 1;
    //重置输入状态 
}
//余弦
function cos() {
    str = parseFloat(Math.cos(Number(str) * Math.PI / 180).toFixed(8));
    document.getElementById('numShow').value = str;
    operate = 1;
    //重置输入状态 
}
//正切
function tan() {
    str = parseFloat(Math.tan(Number(str) * Math.PI / 180).toFixed(8));
    document.getElementById('numShow').value = str;
    operate = 1;
    //重置输入状态 
}
//加法
function add() {
    calculate();
    //调用计算函数
    operate = 1;
    //更改输入状态
    calcul = 1;
    //更改计算状态为加
}
//减法
function sub() {
    calculate();
    //调用计算函数
    operate = 1;
    //更改输入状态
    calcul = 2;
    //更改计算状态为减
}
//乘法
function mul() {
    calculate();
    //调用计算函数
    operate = 1;
    //更改输入状态
    calcul = 3;
    //更改计算状态为乘
}
//除法
function div() {
    calculate();
    operate = 1;
    calcul = 4;
    //更改计算状态为除
}
//等于
function equ() {
    calculate();
    //调用计算函数
    operate = 1;
    //更改输入状态
    num = 0;
    result = 0;
    numshow = "0";
}
//计算函数
function calculate() {
    numshow = Number(document.getElementById('numShow').value);
    if (num != 0 && quit != 1) {
        //判断前一个运算数是否为零以及防重复按键的状态
        switch (calcul) {
            //判断要输入状态
        case 1:
            result = accAdd(num, numshow);//调用加法函数，防止js误差问题
            break;
            //计算"+"
        case 2:
            result =accSub(num, numshow);
            break;
            //计算"-"
        case 3:
            result =accMul(num, numshow);
            break;
        case 4:
            if (numshow == 0) {
				alert("除数不能为0！");
                result = accDiv(num, numshow);
            }
            result = accDiv(num, numshow);
            break;
        }
        quit = 1;
        //避免重复按键
    } 
    else {
        result = numshow;
    }
    numshow = String(result);
    document.getElementById('numShow').value = numshow;
    num = result;
    //存储当前值
}
//引用函数，解决js运算的问题
//加法函数
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

//减法函数
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

//乘法函数
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

//除法函数
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





