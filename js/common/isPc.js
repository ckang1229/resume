/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    module.exports = (function(win, doc, undefined){
        var userAgentInfo = win.navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0, len = Agents.length; v < len; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    })(window, document)
})