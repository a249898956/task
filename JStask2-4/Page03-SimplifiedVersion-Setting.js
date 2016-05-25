var TotalNum;
var TotalArrStr;

function setting() {
    TotalNum = parseInt(document.getElementById("totalnum").value);//把获取的字符串转化为数字
    if (isNaN(TotalNum) || TotalNum < 6 || TotalNum > 18)//限制用户输入范围，isNaN(a)用于检查a是否是非数字值,非数值时，则返回true
        alert("请输入6-18之间的数字");//如果TotalNum为非数值或小于6或大于18，则弹出窗口
    else {
        distribute();
    }
}

function distribute() {
    var detail = "";//定义一个空字符串
    var KillerNum;
    var TotalArr = [];//[ ],中括号，表示一个数组，也可以理解为一个数组对象。
    var n;
    var i;

    KillerNum = Math.floor(TotalNum / 4);
    if (TotalNum === 8)//==和===区别详见日报和JS收藏夹
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