// JavaScript Document

var arr = new Array("a","x","b","d","m","a","k","m","p","j","a");//定义数组内容
var obj = {};//定义一个JSON新对象，用于记录每个元素以及出现的位置
arr.forEach(function(item, index) { //循环数组里的每一个元素，判断是否存在于obj对象里
    if (!obj[item]) {
        obj[item] = {
            indexs: [index]
        }
    } else {
        obj[item]['indexs'].push(index);//如果对象里没有这个元素，就增加一个新的元素
    }
});
var num = 0;//记录出现次数最大值
var str = '';//记录出现次数最多的字符
var reArr;//返回最大值的位置数组
for (var attr in obj) {
    var temp = obj[attr]['indexs'];
    if (temp.length > num) {
        num = temp.length;
        str = attr;
        reArr = temp;
    }
}
document.getElementById("maxElement").value = str;//获取到出现最多的元素
document.getElementById("maxCount").value = num;//获取到出现做多元素的数量
document.getElementById("maxPlace").value = reArr;//获取到出现最多元素的位置
