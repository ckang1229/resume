/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    module.exports = (function(win, doc, undefined){
        var moving = false;
        var _addEvent = require('addEvent');
        var _isPc = require('isPc');

        var activeIndex = 0;
        var navList = doc.getElementsByClassName('nav-list');
        var _onEvent = typeof doc.onmousewheel === 'undefined' ? 'DOMMouseScroll' : 'mousewheel';

        function controller(callback, oldIndex, newIndex){
            moving = true;
            callback(oldIndex, newIndex);
            setTimeout(function(){
                moving = false;
            },800)
        }

        return function(callback){
            //鼠标滚轮
            _addEvent(doc, _onEvent, function(event){
                if(moving) return;

                if(event.dalta > 0 && !moving){
                    if(activeIndex == 0) return;

                    controller(callback, activeIndex, --activeIndex);
                }else{
                    if(activeIndex == 3) return;

                    controller(callback, activeIndex, ++activeIndex);
                }
            },false);

            //点击选项卡
            _addEvent(navList[0].parentNode, 'click', function(event){
                if(moving) return;

                var target = event.target;
                var index = target.getAttribute('data-index');
                if(target.className.indexOf('nav-list') != -1 && target.className.indexOf('active') == -1){
                    index > activeIndex ? controller(callback, activeIndex, index) : controller(callback, activeIndex, index);
                    activeIndex = index;
                }
            },false)
        };
    })(window, document)
})