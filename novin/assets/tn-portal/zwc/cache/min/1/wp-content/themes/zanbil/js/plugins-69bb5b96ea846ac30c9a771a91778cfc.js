jQuery.cookie=function(e,t,n){if(typeof t!="undefined"){n=n||{};if(t===null){t="";n.expires=-1}var r="";if(n.expires&&(typeof n.expires=="number"||n.expires.toUTCString)){var i;if(typeof n.expires=="number"){i=new Date;i.setTime(i.getTime()+n.expires*24*60*60*1e3)}else{i=n.expires}r="; expires="+i.toUTCString()}var s=n.path?"; path="+n.path:"";var o=n.domain?"; domain="+n.domain:"";var u=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),r,s,o,u].join("")}else{var a=null;if(document.cookie&&document.cookie!=""){var f=document.cookie.split(";");for(var l=0;l<f.length;l++){var c=jQuery.trim(f[l]);if(c.substring(0,e.length+1)==e+"="){a=decodeURIComponent(c.substring(e.length+1));break}}}return a}}
/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
;(function($,undefined){'use strict';var BLANK='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';$.fn.imagesLoaded=function(callback){var $this=this,deferred=$.isFunction($.Deferred)?$.Deferred():0,hasNotify=$.isFunction(deferred.notify),$images=$this.find('img').add($this.filter('img')),loaded=[],proper=[],broken=[];if($.isPlainObject(callback)){$.each(callback,function(key,value){if(key==='callback'){callback=value}else if(deferred){deferred[key](value)}})}
function doneLoading(){var $proper=$(proper),$broken=$(broken);if(deferred){if(broken.length){deferred.reject($images,$proper,$broken)}else{deferred.resolve($images)}}
if($.isFunction(callback)){callback.call($this,$images,$proper,$broken)}}
function imgLoadedHandler(event){imgLoaded(event.target,event.type==='error')}
function imgLoaded(img,isBroken){if(img.src===BLANK||$.inArray(img,loaded)!==-1){return}
loaded.push(img);if(isBroken){broken.push(img)}else{proper.push(img)}
$.data(img,'imagesLoaded',{isBroken:isBroken,src:img.src});if(hasNotify){deferred.notifyWith($(img),[isBroken,$images,$(proper),$(broken)])}
if($images.length===loaded.length){setTimeout(doneLoading);$images.unbind('.imagesLoaded',imgLoadedHandler)}}
if(!$images.length){doneLoading()}else{$images.bind('load.imagesLoaded error.imagesLoaded',imgLoadedHandler).each(function(i,el){var src=el.src;var cached=$.data(el,'imagesLoaded');if(cached&&cached.src===src){imgLoaded(el,cached.isBroken);return}
if(el.complete&&el.naturalWidth!==undefined){imgLoaded(el,el.naturalWidth===0||el.naturalHeight===0);return}
if(el.readyState||el.complete){el.src=BLANK;el.src=src}})}
return deferred?deferred.promise($this):$this}})(jQuery)