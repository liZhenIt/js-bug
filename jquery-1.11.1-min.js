/**
 * 显示ele
 * @param ele
 */
function show(ele){
    ele.style.display = "block";
}

/**
 * 隐藏ele
 * @param ele
 */
function hide(ele){
    ele.style.display = "none";
}

/**
 * 根据id获取元素
 * @param str
 * @returns {Element}
 */
function $(str){
    return document.getElementById(str);
}

/**
 * 功能：获取页面的顶部或者左侧被卷去的部分;
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}

/**
 * 根据浏览器的大小设置body的背景色
 */
function changeBodyBackgroundColor() {
    //直接检测出浏览器可视区域的大小，然后判断;
    if(client().width>960){
        document.body.style.background = "red";
    }else if(client().width>640){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "blue";
    }
}

/**
 * 获取浏览器可视区域的宽高
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width: window.innerWidth||document.documentElement.clientWidth,
        height: window.innerHeight||document.documentElement.clientHeight
    }
}