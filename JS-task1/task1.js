/**
 * Created by Administrator on 2016/5/11.
 */
var last=0;
setInterval(randomcolor,1000);
function randomcolor(){
    var color;
    var colorName;
    var colorNumber = Math.floor(Math.random() *3);
    var box = document.getElementById("box").children;
    var boxNumber = Math.floor(Math.random() *9);

    box[last].style.backgroundColor ="#E8830D";

    switch (colorNumber){
        case 0:
            color = "red";
            colorName = "红色";
            break;
        case 1:
            color = "blue";
            colorName = "蓝色";
            break;
        case 2:
            color = "green";
            colorName = "绿色";
            break;
    }
    box[boxNumber].style.backgroundColor = color;
    last = boxNumber;
    console.log("格子"+(boxNumber+1)+"变成了"+colorName);
}