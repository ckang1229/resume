(function(win, doc, docEl){
		var dpr;
        var width;
		var isIPhone = (function(){
			return navigator.userAgent.indexOf('iPhone') == -1 ? false : true;
		})()

		if (isIPhone) {
   		 // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
		   if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
		       dpr = 3;
		   } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
		       dpr = 2;
		   } else {
		       dpr = 1;
		   }
		} else {
		   // 其他设备下，仍旧使用1倍的方案
		   dpr = 1;
		}

		var scale = 1 / dpr;
		docEl.setAttribute('data-dpr', dpr);

		var metaEl = doc.createElement('meta');
	 	metaEl.setAttribute('name', 'viewport');
	 	metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	 	if (docEl.firstElementChild) {
	        docEl.firstElementChild.appendChild(metaEl);
	 	} else {
	        var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
	        doc.write(wrap.innerHTML);
		}

        width = docEl.getBoundingClientRect().width;
        docEl.style.fontSize = (dpr == 1  && width >= 540) ? '54px' : width / 10 +'px';

		doc.addEventListener('DOMContentLoaded', function(){
			doc.getElementsByTagName('body')[0].style.fontSize = 12 * dpr + 'px';
		}, false);
	})(window, document, document.documentElement)