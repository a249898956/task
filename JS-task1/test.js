/**
 * Created by Administrator on 2016/5/10.
 */
var last = 0;
setInterval("randomcolor()",1000);   //间隔1000毫秒不停地执行randomcolor()，也可以写为setInterval(randomcolor,1000);
function randomcolor() {                  //定义一个函数，名为randomcolor()
    var color;
    var colornumber = Math.floor(Math.random() * 3);
    var colorname;
    var box = document.getElementById("box").children;//box的值为Id名box下的子元素
    var boxnumber = Math.floor(Math.random() * 9); //0~8随机整数，random为随机数，包括小数，floor是向下取整

    box[last].style.background="#E8830D";
    switch(colornumber){ // switch 语句来选择要执行的多个代码块之一
        case 0:
            color = "blue";
            colorname = "蓝色";
            break;
        case 1:
            color = "red";
            colorname = "红色";
            break;
        case 2:
            color = "green";
            colorname = "绿色";
            break;
    }
    box[boxnumber].style.backgroundColor = color;
    last = boxnumber;
    console.log("格子" + (boxnumber+1) +"变成了" + colorname)
}