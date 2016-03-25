/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-boxshadow-boxsizing-csstransitions-fontface-inputtypes-setclasses !*/
!function(e,t,n){function s(e,t){return typeof e===t}function o(){var e,t,n,o,i,r,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)r=e[i],a=r.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),v.push((o?"":"no-")+a.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=r(C?"svg":"body"),e.fake=!0),e}function l(e,n,s,o){var i,l,f,u,d="modernizr",c=r("div"),p=a();if(parseInt(s,10))for(;s--;)f=r("div"),f.id=o?o[s]:d+(s+1),c.appendChild(f);return i=r("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):c.parentNode.removeChild(c),!!l}function f(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],s(o,"function")?d(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,s){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+s+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,i){function a(){d&&(delete R.style,delete R.modElem)}if(i=s(i,"undefined")?!1:i,!s(o,"undefined")){var l=m(e,o);if(!s(l,"undefined"))return l}for(var d,c,p,h,y,g=["modernizr","tspan"];!R.style;)d=!0,R.modElem=r(g.shift()),R.style=R.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],y=R.style[h],f(h,"-")&&(h=u(h)),R.style[h]!==n){if(i||s(o,"undefined"))return a(),"pfx"==t?h:!0;try{R.style[h]=o}catch(v){}if(R.style[h]!=y)return a(),"pfx"==t?h:!0}return a(),!1}function y(e,t,n,o,i){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?h(a,t,o,i):(a=(e+" "+P.join(r+" ")+r).split(" "),c(a,t,n))}function g(e,t,s){return y(e,n,n,t,s)}var v=[],x=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S=r("input"),_="search tel url email datetime date month week time datetime-local number range color".split(" "),T={};Modernizr.inputtypes=function(e){for(var s,o,i,r=e.length,a="1)",l=0;r>l;l++)S.setAttribute("type",s=e[l]),i="text"!==S.type&&"style"in S,i&&(S.value=a,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&S.style.WebkitAppearance!==n?(w.appendChild(S),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,w.removeChild(S)):/^(search|tel)$/.test(s)||(i=/^(url|email)$/.test(s)?S.checkValidity&&S.checkValidity()===!1:S.value!=a)),T[e[l]]=!!i;return T}(_);var E=b.testStyles=l,k=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||s}();k?Modernizr.addTest("fontface",!1):E('@font-face {font-family:"font";src:url("https://")}',function(e,n){var s=t.getElementById("smodernizr"),o=s.sheet||s.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",r)});var z="Moz O ms Webkit",A=b._config.usePrefixes?z.split(" "):[];b._cssomPrefixes=A;var P=b._config.usePrefixes?z.toLowerCase().split(" "):[];b._domPrefixes=P;var N={elem:r("modernizr")};Modernizr._q.push(function(){delete N.elem});var R={style:N.elem.style};Modernizr._q.unshift(function(){delete R.style}),b.testAllProps=y,b.testAllProps=g,Modernizr.addTest("boxshadow",g("boxShadow","1px 1px",!0)),Modernizr.addTest("csstransitions",g("transition","all",!0)),Modernizr.addTest("boxsizing",g("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),o(),i(v),delete b.addTest,delete b.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);