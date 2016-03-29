/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    exports.addClass = function(el, newClass){
        var classArr = el.className.split(' ');

        el.className = classArr.concat(newClass).join(' ');
    }

    exports.removeClass = function(el, newClass){
        var classArr = el.className.split(' ');

        for(var i= 0,len = classArr.length;i<len;i++){
            for(var j= 0,len2 = newClass.length;j<len2;j++){
                if(classArr[i] == newClass[j]){
                    Array.prototype.splice.call(classArr, i, 1);
                }
            }
        }

        el.className = classArr.join(' ');
    }
})