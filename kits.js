/* 随机整数 */ 
function randomInt(m,n){
    return Math.floor(Math.random()*(n-m+1)+m);
}

/* 随机颜色  rgb*/
function randomColor(r,g,b){
    var r=randomint(0,255);
    var g=randomint(0,255);
    var b=randomint(0,255);
    var color='rgb('+r+','+g+','+b+')';
    return color;
}
/* 随机颜色  rgb*/
function randomColor1(r,g,b){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var color='rgb('+r+','+g+','+b+')';
    return color;
}

/* 随机颜色  16进制 */
function randomHexColor(){
    var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var color1=['#'];
    for(let i=0;i<6;i++){
        let r = Math.floor(Math.random()*16);
        color1.push(arr[r])
    }
    return color1.join('');
}

