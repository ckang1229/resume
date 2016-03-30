/**
 * Created by Administrator on 2016/3/29.
 */
define(function(require, exports, module){
    (function(win, doc, undefined){
        var pageSlide = require('pageSlide');
        var setClass = require('setClass');
        var isPc = require('isPc');

        var item = doc.getElementsByClassName('section');
        var navList = doc.getElementsByClassName('nav-list');
        var main = item[0].parentNode;
        var cloneMain = main.cloneNode(true);

        function pageChange(oldIndex, newIndex){
            setClass.removeClass(navList[oldIndex], ['active']);
            if(newIndex > oldIndex){
                for(var i= 0;i<newIndex;i++){
                    item[i].style.transform = 'translateY(-100%)';
                }
            }else{
                for(var i= oldIndex -1;i<oldIndex && i >= newIndex;i--){
                    item[i].style.transform = 'translateY(0)';
                }
            }
            setClass.addClass(navList[newIndex], ['active']);
        }

        if(isPc) {
            //传入回调函数
            pageSlide(pageChange);
        }else{
            document.getElementById('navbar').style.display = 'none';

            cloneMain.style.overflow = 'auto';
            var cloneSection = cloneMain.getElementsByClassName('section');

            for(var i= 0,len = cloneSection.length;i<len; i++){
                cloneSection[i].style.position = 'static';
                cloneSection[i].style.height = 'auto';
            }

            main.parentNode.replaceChild(cloneMain, main);
        }
    })(window, document)

})