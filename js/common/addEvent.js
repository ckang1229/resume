/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    module.exports = (function(win, doc, undefined){
        //对event对象做兼容 判断鼠标滚轮
        var _eventCompat = function(event){
            var type = event.type;

            if(type == 'DOMMouseScroll' || type == 'mousewheel'){
                event.dalta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
            }

            return event;
        }

        //对添加事件做兼容 并传入兼容后的event对象
        if(window.addEventListener){
            return function(el, type, callback, capture){
                el.addEventListener(type, function(event){
                    callback.call(this, _eventCompat(event));
                },capture || false);
            }
        }else{
            return function(el, type, callback, capture){
                el.attachEvent('on' + type, function(event){
                    event = event || win.event;
                    callback.call(el, _eventCompat(event));
                })
            }
        }
    })(window, document)
})