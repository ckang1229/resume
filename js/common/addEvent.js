/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    module.exports = (function(win, doc, undefined){
        //��event���������� �ж�������
        var _eventCompat = function(event){
            var type = event.type;

            if(type == 'DOMMouseScroll' || type == 'mousewheel'){
                event.dalta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
            }

            return event;
        }

        //������¼������� ��������ݺ��event����
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