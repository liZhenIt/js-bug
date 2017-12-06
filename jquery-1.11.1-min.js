/**
 * ��ʾele
 * @param ele
 */
function show(ele){
    ele.style.display = "block";
}

/**
 * ����ele
 * @param ele
 */
function hide(ele){
    ele.style.display = "none";
}

/**
 * ����id��ȡԪ��
 * @param str
 * @returns {Element}
 */
function $(str){
    return document.getElementById(str);
}

/**
 * ���ܣ���ȡҳ��Ķ���������౻��ȥ�Ĳ���;
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}

/**
 * ����������Ĵ�С����body�ı���ɫ
 */
function changeBodyBackgroundColor() {
    //ֱ�Ӽ����������������Ĵ�С��Ȼ���ж�;
    if(client().width>960){
        document.body.style.background = "red";
    }else if(client().width>640){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "blue";
    }
}

/**
 * ��ȡ�������������Ŀ��
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width: window.innerWidth||document.documentElement.clientWidth,
        height: window.innerHeight||document.documentElement.clientHeight
    }
}