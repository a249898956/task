/**
 * Created by Administrator on 2016/5/12.
 */
var TotalNum;
var TotalArrStr;

function setting() {
    TotalNum = parseInt(document.getElementById("totalnum").value);//把获取的字符串转化为数字
    if (isNaN(TotalNum) || TotalNum < 6 || TotalNum > 18)//限制用户输入范围
        alert("请输入6-18之间的数字");
    else {
        distribute();
    }
}

function distribute() {
    var detail = "";
    var KillerNum;
    var TotalArr = [];
    var n;
    var i;

    KillerNum = Math.floor(TotalNum / 4);
    if (TotalNum === 8)
        KillerNum = 1;
    for (n = 0; n < KillerNum; n++) {
        TotalArr[n] = "杀手";
    }
    for (n = KillerNum; n < TotalNum; n++) {
        TotalArr[n] = "平民";
    }

    //sort对数组进行排序
    TotalArr.sort(function () {
        return 0.5 - Math.random()
    });
    /*
     每次从数组里面挑选两个数 进行运算
     如果传入的参数是0 两个数位置不变
     如果参数小于0 就交换位置
     如果参数大于0就不交换位置
     接下来用刚才的较大数字跟下一个进行比较，这样循环进行排序
     恰好。我们利用了这一点使用了0.5 - Math.random
     这个运算的结果要么是大于0,要么是小于0
     这样要么交换位置，要么不交换位置
     当然大于或者小于0是随即出现的。所以数组就被随即排序了
     */

    for (i = 0; i < TotalNum; i++) {
        detail = detail + (i + 1) + "号—" + TotalArr[i] + "<br/>";
        document.getElementById("detail").innerHTML = detail;
    }

    //数组变成字符串存储
    TotalArrStr = JSON.stringify(TotalArr);
    localStorage.sth = TotalArrStr;
    console.log("数组变成字符串存储" + TotalArrStr);
}

function start() {
    if (TotalArrStr != null) {
        location.href = "Page04-SimplifiedVersion-Check.html";
    } else {
        alert("少年，你还没有进行玩家分配 ￣へ￣");
    }
}