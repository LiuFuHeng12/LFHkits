/* 随机整数 */
function randomInt(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}

/* 随机颜色  rgb*/
function randomColor(r, g, b) {
    var r = randomint(0, 255);
    var g = randomint(0, 255);
    var b = randomint(0, 255);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
}

/* 随机颜色  16进制 */
function randomHexColor() {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color1 = ['#'];
    for (let i = 0; i < 6; i++) {
        let r = Math.floor(Math.random() * 16);
        color1.push(arr[r])
    }
    return color1.join('');
}



/* 获取年月日时分秒 */
/* 补零 */
function buling(n) {
    n < 10 ? n = '0' + n : n;
    return n;
}
function formatdate() {
    var date = new Date();
    /* 分别获取年月日时分秒 */
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    month = buling(month);
    day = buling(day);
    hour = buling(hour);
    minute = buling(minute);
    second = buling(second);
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}



// 
function data() {
    //需要在最前面，把本地数据获取出来，创建多个li，放到ul里面
    let data = localStorage.getItem('wbshuju');
    // 把字符串转换为数组
    /* //中级写法：  let arr = !date ? [] : JSON.parse(date); */
    /* 给arr赋值的高级版本 */
    /*
    let arr = JSON.parse(data) || [];
    */
    // 初级写法
    let arr = [];
    if (data === null) {
        arr = []
    } else {
        arr = JSON.parse(data);
    }
    return arr;
}