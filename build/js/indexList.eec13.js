webpackJsonp([1,5],{236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),u=n(172),f=n(237);n(238);var p=n(242),d=r(p),m=n(243),h={indexList:{paddingRight:"0.75rem",marginBottom:"0.2rem",borderTop:"1px solid #dfdfdf",borderBottom:"1px solid #dfdfdf",background:"#fff",paddingLeft:"0.75rem",paddingBottom:"0.3rem"},h4Style:{margin:"0.3rem 0",color:"#259",fontSize:"16px"},pStyle:{margin:"0.3rem 0",fontSize:"15px"},listBlock:{margin:0},userTitle:{dispaly:"inline-blcok"}},v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],defaultTop:null},n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){document.getElementById("outerScroller");this.fetchData();var e=this.refs.outerScroller.offsetTop;this.setState({defaultTop:e}),this.pullToRefresh(this.refs.outerScroller,this.refs.pullToRefreshBox,this.refs.scrollList,this.refs.preloader,this.refs.pullToRefreshArrow)}},{key:"fetchData",value:function(){var e=this;f.ArticleModel.fetchList("",function(t){e.setState({list:t}),e.loadingFinish(e.refs.outerScroller,e.refs.preloader,e.refs.scrollList)},function(e){console.log(e)})}},{key:"giveStar",value:function(e){var t=this,n=f.UserModel.fetchToken();if(!n)return void $.toast("您还没有登录");var r=e.nativeEvent.target,o=r.getAttribute("data-articleid"),a={userId:n,articleId:o};f.ArticleModel.giveStar(a,function(e){e.title?(r.style.color="red",$.toast(e.content),t.componentDidMount()):(r.style.color="none",$.toast(e.content),t.componentDidMount())},function(e){console.log(e)})}},{key:"starStyle",value:function(e){for(var t=f.UserModel.fetchToken(),n=0;n<e.length;n++){var r=e[n];if(r==t)return{marginRight:"0.5rem",paddingLeft:"0.3rem",color:"red"}}return{marginRight:"0.5rem",paddingLeft:"0.3rem"}}},{key:"wordControl",value:function(e){return e.length>65&&(e=e.substring(0,65)+" ..."),e}},{key:"pullToRefresh",value:function(e,t,n,r,o){function a(t){t==d&&0==n.scrollTop&&e.addEventListener("touchstart",l,!1)}function l(t){f=t.targetTouches[0].pageY,e.addEventListener("touchmove",i,!1)}function i(t){if(n.scrollTop>0)return void e.removeEventListener("touchmove",i,!1);var r=t.targetTouches[0].pageY;r>f?(e.addEventListener("touchmove",s,!1),e.removeEventListener("touchmove",i,!1)):e.removeEventListener("touchmove",i,!1)}function s(r){var o=r.targetTouches[0].pageY,a=o-f;e.style.top=d+a+"px",a>=Math.abs(d)?u(t,"up"):a<Math.abs(d)?p.removeClass(t,"up"):e.style.top=d+"px",parseInt(e.style.top)<d&&(e.style.top=d+"px"),n.style.overflow="hidden",e.addEventListener("touchend",c,!1)}function c(t){if(e.removeEventListener("touchmove",s,!1),parseInt(e.style.top)<0){var l=setInterval(function(){e.style.top=parseInt(e.style.top)-3+"px",parseInt(e.style.top)<=d&&(clearInterval(l),e.offsetTop<d&&(e.style.top=d+"px",a(e.offsetTop)))},10);return void(n.style.overflow="auto")}if(e.offsetTop>=0){o.style.display="none",r.style.display="block";var i=setInterval(function(){e.style.top=e.offsetTop-3+"px",e.offsetTop<=0&&(e.offsetTop<d&&(e.style.top=d+"px"),e.style.top=0,clearInterval(i),e.removeEventListener("touchmove",s,!1),e.removeEventListener("touchend",c,!1))},10);p.fetchData()}}function u(e,t){for(var n=t.replace(/(^\s+)|(\s+$)/g,"").split(/\s+/g),r=0;r<n.length;r++){var o=n[r];p.hasClass(e,o)||(e.className+=" "+o)}}var f,p=this,d=e.offsetTop;n.style.height=document.body.clientHeight+"px",a(e.offsetTop),n.onscroll=function(){var t=n.scrollTop;0==parseInt(t)&&a(e.offsetTop)}}},{key:"loadingFinish",value:function(e,t,n){var r=this;n.style?n.style.overflow="auto":null,t.style?t.style.display="none":null;var o=setInterval(function(){return e.style.top=parseInt(e.style.top)-3+"px",e.style.top?void(parseInt(e.style.top)<=r.state.defaultTop&&(clearInterval(o),e.offsetTop<r.state.defaultTop&&(e.style.top=r.state.defaultTop+"px"),r.pullToRefresh(r.refs.outerScroller,r.refs.pullToRefreshBox,r.refs.scrollList,r.refs.preloader,r.refs.pullToRefreshArrow),r.refs.pullToRefreshArrow.style.display="block",r.removeClass(r.refs.pullToRefreshBox,"up"))):void clearInterval(o)},10)}},{key:"removeClass",value:function(e,t){for(var n=t.replace(/(^\s+)|(\s+$)/g,"").split(/\s+/g),r=0;r<n.length;r++){var o=n[r];if(this.hasClass(e,o)){var a=new RegExp("(^| +)"+o+"( +|$)");e.className=e.className.replace(a," ")}}}},{key:"hasClass",value:function(e,t){var n=new RegExp("(\\b)"+t+"(\\b)");return n.test(e.className)}},{key:"indexList",value:function(){var e=this,t=this.state.list;return t.map(function(t,n){return c.default.createElement("li",{className:"",style:h.indexList,key:t._id},c.default.createElement(u.Link,{to:"/indexList/"+t._id,style:{display:"block"}},c.default.createElement("div",{className:"list"},c.default.createElement("div",{className:"",style:{paddingTop:"0.4rem"}},c.default.createElement("div",{style:{display:"inline-block",verticalAlign:"top",height:"2rem"}},c.default.createElement("img",{src:t.user.avatar,style:{marginRight:"0.3rem",height:"1.7rem",display:"inline-block"},alt:""})),c.default.createElement("div",{style:{display:"inline-block",verticalAlign:"top",height:"2rem"}},c.default.createElement("div",{style:{fontSize:"14px",fontWeight:600}},t.user.username),c.default.createElement("div",{style:{fontSize:"12px"}},c.default.createElement("span",{className:"icon icon-clock"}," ")," ",(0,m.dateDiff)(t.createAt)))),c.default.createElement("div",{className:""},c.default.createElement("h4",{style:h.h4Style},t.title)),c.default.createElement("div",{className:""},c.default.createElement("p",{style:h.pStyle},e.wordControl(t.content))))),c.default.createElement("div",{style:{display:"block",width:"100%",fontSize:"14px"}},c.default.createElement("span",{className:"icon icon-star",style:e.starStyle(t.star),onClick:function(t){e.giveStar(t)},"data-articleId":t._id}," ",t.star.length),c.default.createElement("span",{className:"icon icon-message"}," ",t.commentNum)))})}},{key:"render",value:function(){return c.default.createElement("div",{"data-log":"log"},c.default.createElement("main",{className:"page page-current"},c.default.createElement("div",{className:"outerScroller",id:"outerScroller",ref:"outerScroller"},c.default.createElement("div",{className:"pullToRefreshBox",id:"pullToRefreshBox",ref:"pullToRefreshBox"},c.default.createElement("div",{className:"preloader",id:"",ref:"preloader"}),c.default.createElement("div",{className:"pullToRefreshArrow",id:"",ref:"pullToRefreshArrow"})),c.default.createElement("ul",{style:{background:"#eee"},className:"scroll",ref:"scrollList"},this.indexList()))),c.default.createElement("div",{className:"panel-overlay"}),c.default.createElement("div",{className:"panel panel-left panel-reveal theme-dark",id:"panel-left-demo"},c.default.createElement(d.default,null)))}}]),t}(c.default.Component);e.exports=v},237:function(e,t){"use strict";function n(e,t,n,r,o){var a={method:e,mode:"cors",headers:{"Content-Type":"application/json"},body:"GET"==e?null:JSON.stringify(n)};"get"==e.toLowerCase()&&(t+=l._getSearchFromObject(n)),fetch(t,a).then(l.checkStates).then(l.parseJSON).then(function(e){r(e)}).catch(function(e){return console.log(e),401==e.state?(alert("登录过期,重新登录"),void(location.hash="login")):void(e.response&&e.response.json().then(function(e){console.log(e),e.message&&alert(e.message)}))})}function r(e,t,n,r){var o=new XMLHttpRequest;o.open("POST",e),o.onload=function(e){var t=JSON.parse(o.responseText);if(200==o.status)n(t);else{var r=t;r.message&&alert(r.message)}},o.send(t)}Object.defineProperty(t,"__esModule",{value:!0});var o="userToken",a="http://114.215.80.72:4545/",l={checkStates:function(e){if(e.ok)return e;var t=new Error(e.statusText);throw t.state=e.status,t.response=e,t},parseJSON:function(e){return e.json()},_getSearchFromObject:function(e,t){if(null==e)return"";var n="?";for(var r in e)n+=r+"="+encodeURIComponent(e[r])+"&";return n.slice(0,-1)}},i={storeToken:function(e){localStorage.setItem(o,e)},fetchToken:function(){return localStorage.getItem(o)},register:function(e,t,r){n("POST",a+"user/register",e,t,r)},login:function(e,t,r){n("POST",a+"user/login",e,t,r)},getUserInfo:function(e,t,r){n("GET",a+"user/getUserInfo",e,t,r)},uploadAvatar:function(e,t,n){r(a+"user/uploadAvatar",e,t,n)},fetchArticle:function(e,t,r){n("GET",a+"user/fetchArticle",e,t,r)}},s={pulish:function(e,t,r){n("POST",a+"article/pulish",e,t,r)},fetchList:function(e,t,r){n("GET",a+"article/fetchList",e,t,r)},fetchArticle:function(e,t,r){n("GET",a+"article/fetchArticle/"+e,null,t,r)},giveStar:function(e,t,r){n("POST",a+"article/giveStar",e,t,r)},comment:function(e,t,r){n("POST",a+"article/comment",e,t,r)}};t.UserModel=i,t.ArticleModel=s},238:function(e,t,n){var r=n(239);"string"==typeof r&&(r=[[e.id,r,""]]);n(241)(r,{});r.locals&&(e.exports=r.locals)},239:function(e,t,n){t=e.exports=n(240)(),t.push([e.id,"a{color:inherit}.floatLeft{float:left}.floatRight{float:right}.indexList{padding-right:.75rem}.big{font-size:30px}.article{text-indent:2em;font-size:15px}#app{height:100%}.marR{margin-right:.4rem}.font12{font-size:13px}.content{top:-40px}.detailContent{position:absolute;top:0;right:0;bottom:50px;left:0;padding:.5rem;background:#fff;overflow:auto}.clearPt{font-size:18px}.clearPL,.clearPt{margin-top:0;margin-bottom:0}.clearPL{font-size:16px}li,ul{list-style:none;margin:0;padding:0}hr{height:1px;border:none;border-top:1px solid #eee}.comment{position:fixed;bottom:0;height:60px;padding-top:5px;background:#fff;width:100%;z-index:999;padding:3px .5rem;box-shadow:0 -1px 3px 0 #888}.commentInput{padding:0 .5rem;height:100%}.commentAvatar{height:2rem;width:2rem}.commentList{border-top:1px solid #e0e0e0;padding:.2rem 0}.loading{height:44px;width:100%}.pullToRefreshBox{position:relative;left:0;top:0;width:100%;height:40px}.pullToRefreshBox .pullToRefreshArrow{width:1rem;height:1rem;position:absolute;left:50%;top:50%;margin-left:-.15rem;margin-top:-.5rem;background:no-repeat 50%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 40'%3E%3Cpath fill='%238c8c8c' d='M9 22V0h8v22h9L13.5 40 0 22z'/%3E%3C/svg%3E\");background-size:.65rem 1rem;z-index:11;-webkit-transform:rotate(0deg) translateZ(0);transform:rotate(0deg) translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s}.pullToRefreshBox.up .pullToRefreshArrow{-webkit-transform:rotate(180deg) translateZ(0);transform:rotate(180deg) translateZ(0)}.pullToRefreshBox .preloader{display:none;width:1rem;height:1rem;position:absolute;left:50%;top:50%;margin-left:-.15rem;margin-top:-.5rem;background:no-repeat 50%;background-image:url(\"http://uploadfile.huiyi8.com/2014/1023/20141023034756992.gif\");background-size:1rem 1rem;z-index:10}.scroll{width:100%;margin-top:0;padding:0;height:100%;overflow:auto;padding-bottom:50px}.outerScroller{position:absolute;top:-40px;bottom:0;width:100%;left:0;overflow:hidden}",""])},240:function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var l=t[o];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},241:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var l=[],a=0;a<r.parts.length;a++)l.push(c(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:l}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],l=o[1],i=o[2],s=o[3],c={css:l,media:i,sourceMap:s};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=y++;n=g||(g=i(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=f.bind(null,n),o=function(){l(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],l=0;l<n.length;l++){var i=n[l],s=d[i.id];s.refs--,a.push(s)}if(e){var c=o(e);r(c,t)}for(var l=0;l<a.length;l++){var s=a[l];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),u=n(237),f=(n(172),n(34)),p=(r(f),function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={info:[]},n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=u.UserModel.fetchToken();return e?void this.fetchData():void this.context.router.push("login")}},{key:"fetchData",value:function(){var e=this,t=u.UserModel.fetchToken(),n={token:t};u.UserModel.getUserInfo(n,function(t){e.setState({info:t})},function(e){console.log(e)})}},{key:"componentWillUnmount",value:function(){}},{key:"openUpload",value:function(e){e.stopPropagation(),avatar.click()}},{key:"uploadAvatar",value:function(e){var t=this,n=e.target.files[0];if(console.log(n),n.size>204800)return void $.alert("头像大小不能超过200K");var r=this.refs.avatarForm,o=new FormData(r),a=u.UserModel.fetchToken();o.append("token",a),u.UserModel.uploadAvatar(o,function(e){$.toast(e.content),t.componentDidMount()},function(e){console.log(e)})}},{key:"signOut",value:function(e){var t=this;e.preventDefault(),setTimeout(function(){$.closePanel()},0),$.confirm("您要退出登录么?",function(){localStorage.removeItem("userToken"),t.context.router.push("/login")})}},{key:"toMyArticle",value:function(){var e=this;$.closePanel(),setTimeout(function(){e.context.router.push("/myArticle")},1e3)}},{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement("header",{className:"bar bar-nav",style:{position:"relative"}},c.default.createElement("h1",{className:"title"},"我")),c.default.createElement("div",{className:"content",style:{top:"1.2rem"}},c.default.createElement("div",{className:"list-block"},c.default.createElement("ul",null,c.default.createElement("li",{className:"item-content item-link"},c.default.createElement("div",{className:"item-inner"},c.default.createElement("form",{id:"avatarForm",ref:"avatarForm",style:{display:"none"}},c.default.createElement("input",{type:"file",id:"avatar",ref:"avatar",name:"avatar",style:{display:"none"},onChange:this.uploadAvatar.bind(this)})),c.default.createElement("div",{className:"item-title"},c.default.createElement("img",{src:this.state.info.avatar,style:{height:"2.5rem"},onClick:function(t){e.openUpload(t)}})),c.default.createElement("div",{className:"item-after"},this.state.info.username))))),c.default.createElement("div",{className:"list-block"},c.default.createElement("ul",null,c.default.createElement("li",{className:"item-content"},c.default.createElement("div",{className:"item-media"},c.default.createElement("i",{className:"icon icon-edit"})),c.default.createElement("div",{className:"item-inner"},c.default.createElement("div",{onClick:function(){e.toMyArticle()},style:{height:"100%",width:"100%",display:"block"},className:"item-title"},"我的文章"))))),c.default.createElement("div",{className:"content-block"},c.default.createElement("p",null,c.default.createElement("a",{onClick:function(t){e.signOut(t)},className:"button button-danger button-fill button-big"},"退出登录")))))}}]),t}(c.default.Component));p.contextTypes={router:c.default.PropTypes.object},e.exports=p},243:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=(new Date).getTime(),n=t-e,r="",o=6e4,a=60*o,l=24*a,i=30*l,s=12*i,c=n/s,u=n/i,f=n/(7*l),p=n/l,d=n/a,m=n/o;return r=c>=1?parseInt(c)+"年前":u>=1?parseInt(u)+"个月前":f>=1?parseInt(f)+"周前":p>=1?parseInt(p)+"天前":d>=1?parseInt(d)+"个小时前":m>=1?parseInt(m)+"分钟前":"刚刚"};t.dateDiff=n}});