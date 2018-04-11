export function session(aKey, aVal) {
    if (typeof aVal == "undefined") {
        return JSON.parse(sessionStorage.getItem(aKey));
    } else {
        sessionStorage.setItem(aKey, JSON.stringify(aVal));
    }
}

export function local(aKey, aVal) {
    if (typeof aVal == "undefined") {
        return JSON.parse(localStorage.getItem(aKey));
    } else {
        localStorage.setItem(aKey, JSON.stringify(aVal));
    }
}

export function sessionRemove(aKey) {
    sessionStorage.removeItem(aKey);
}

export function localRemove(aKey) {
    localStorage.removeItem(aKey);
}

export function query(name, str) {
    var reg = new RegExp("(^|&)" + name + "=([^&|^#]*)(&|#|$)");
    var str = str ? str : window.location.href;
    var r = str.substr(str.indexOf("?") + 1).match(reg);
    return (r != null) ? decodeURIComponent(r[2]) : null;
}

export function platform() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    return { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部,
        isWeiXin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' ? true : false // 判断是否微信浏览器
    };
}

/**
 * 设置DOM自定义参数
 * @param {object} data 
 */
export function setAttrData(data) {
    if (typeof data == 'object') {
        let attr = ''
        Object.keys(data).forEach(key => {
            attr += `data-${key}="${data[key]}" `
        })
        return attr;
    }
    return '';
}

/**
 * 判断是否为字符串不存在类型
 * @param {*} str 
 */
export function isStringNull(str) {
    if (str == 'null' || str == 'undefined' || (typeof str != 'number' && !str)) {
        return null
    }
    return str;
}
