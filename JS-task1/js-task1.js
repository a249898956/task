/**
 * Created by Administrator on 2016/5/9.
 */
var last = 0; //声明一个名为last的变量，并赋值为0

setInterval("changecolor()", 1000);  //间隔1000毫秒不停地执行changecolor()

function changecolor() {   //定义一个函数，名为changecolor()

    var color;
    var colorsnumber;
    var colorname;
    var grid = document.getElementsByClassName("block");
    var gridnumber = Math.floor(Math.random() * 9);//0~8随机数*/

    grid[last].style.backgroundColor = "#e8830d";
    colorsnumber = Math.floor(Math.random() * 3);//0~2随机整数
    switch (colorsnumber) {                      // switch 语句来选择要执行的多个代码块之一
        case 0:
            color = "red";
            colorname = "红色";
            break;
        case 1:
            color = "green";
            colorname = "绿色";
            break;
        case 2:
            color = "blue";
            colorname = "蓝色";
            break;
    }
    grid[gridnumber].style.backgroundColor = color;
    last = gridnumber;
    console.log("格子" + (gridnumber + 1) + "变成了" + colorname);
}



/*lastone作为局部变量版本
 function Test() {
 var lastone = 0;

 return function changecolor() {

 var color ;
 var colorsnumber;
 var colorname;
 var grid = document.getElementsByClassName("square");
 var gridnumber;
 grid[lastone].style.backgroundColor = "#e8830d";
 colorsnumber = Math.floor(Math.random() * 3);//0~2随机数*!/
 switch (colorsnumber) {
 case 0:
 color = "red";
 colorname = "红色";
 break;
 case 1:
 color = "green";
 colorname = "绿色";
 break;
 case 2:
 color = "blue";
 colorname = "蓝色";
 break;
 }
 gridnumber = Math.floor(Math.random() * 9);//0~8随机数*!/
 grid[gridnumber].style.backgroundColor = color;
 lastone = gridnumber;

 console.log("格子" + (gridnumber + 1) + "变成了" + colorname);
 }
 }
 var test = Test()
 setInterval(test, 1000);*/
