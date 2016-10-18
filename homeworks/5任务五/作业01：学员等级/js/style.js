// JavaScript Document

function getnum() {
    var num = document.getElementById("score").value;/*获取到输入的数字*/
    var mylevel = document.getElementById("level");/*获取到学生等级内容*/
	if (isNaN(num)) {
        mylevel.innerHTML = "请输入0-100的分数";
        return;
    }
    if (num <= 100 && num > 90) {
        mylevel.innerHTML = "1等生";
    } 
    else if (num <= 90 && num > 80) {
        mylevel.innerHTML = "2等生";
    } 
    else if (num <= 80 && num > 70) {
        mylevel.innerHTML = "3等生";
    } 
    else if (num <= 70 && num > 60) {
        mylevel.innerHTML = "4等生";
    } 
    else if (num <= 60 && num > 50) {
        mylevel.innerHTML = "5等生";
    } 
    else if (num <= 50 && num > 40) {
        mylevel.innerHTML = "6等生";
    } 
    else if (num <= 40 && num > 30) {
        mylevel.innerHTML = "7等生";
    } 
    else if (num <= 30 && num > 20) {
        mylevel.innerHTML = "8等生";
    } 
    else if (num <= 20 && num > 10) {
        mylevel.innerHTML = "9等生";
    } 
    else if (num <= 10 && num >= 0) {
        mylevel.innerHTML = "10等生";
    } 
    else if (num > 100 || num < 0) {
        mylevel.innerHTML = "请输入0-100的分数";
    }
}
