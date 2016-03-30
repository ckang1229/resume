/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    (function(win, doc, undefined){
        var pageSlide, setClass;
        var isPc = require('isPc');
        var item = doc.getElementsByClassName('section');
        var navList = doc.getElementsByClassName('nav-list');
        var main = item[0].parentNode;
        var cloneMain = main.cloneNode(true);
        var cloneSection = cloneMain.getElementsByClassName('section');

        if(isPc) {
            doc.documentElement.style.fontSize = '50px';
            document.getElementById('navbar').style.display = 'block';

            cloneMain.style.cssText = 'height: 100%;overflow: hidden;-ms-touch-action:none';

            for (var i = 0, len = cloneSection.length; i < len; i++) {
                cloneSection[i].style.position = 'absolute';
                cloneSection[i].style.height = '100%';
            }

            main.parentNode.replaceChild(cloneMain, main);

            //传入回调函数
            require.async(['pageSlide'], function(pageSlide){
                pageSlide(pageChange);
            })
        }

        function pageChange(oldIndex, newIndex, setClass){
            setClass.removeClass(navList[oldIndex], ['active']);
            if(newIndex > oldIndex){
                for(var i= 0;i<newIndex;i++){
                    item[i].style.msTransform = 'translateY(-100%)';
                    item[i].style.transform = 'translateY(-100%)';
                    setClass.addClass(item[i], ['leaving']);
                }
            }else{
                for(var i= oldIndex -1;i<oldIndex && i >= newIndex;i--){
                    item[i].style.msTransform = 'translateY(0)';
                    item[i].style.transform = 'translateY(0)';
                    setClass.removeClass(item[i], ['leaving']);
                }
            }
            setClass.addClass(navList[newIndex], ['active']);
        }
    })(window, document)

})