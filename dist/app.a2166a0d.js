parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function e(e,n,t,r,o,c,u){try{var i=e[c](u),a=i.value}catch(l){return void t(l)}i.done?n(a):Promise.resolve(a).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,c){var u=n.apply(t,r);function i(n){e(u,o,c,i,a,"next",n)}function a(n){e(u,o,c,i,a,"throw",n)}i(void 0)})}}function t(e,n,t){var o=document.getElementById(n),c=r();c?(c.open("get",e),c.onreadystatechange=function(){if(4==c.readyState)if(null===t)o.innerHTML=c.responseText;else{var e=c.responseText.split("\n")[t];console.log(e),o.innerHTML=e}},c.send(null)):document.location=e}function r(){try{return new XMLHttpRequest}catch(e){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return null}}}}function o(e){return c.apply(this,arguments)}function c(){return(c=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:emailjs.init("user_wHMUFoVGLeOyXGAgKmDUU"),emailjs.send("service_ja7krkb","template_9vctrlj",n).then(function(e){console.log("SUCCESS!",e.status,e.text)},function(e){console.log("FAILED...",e)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function u(){return{nameto:"Админу всея руси",name:document.getElementById("1").value,adress:document.getElementById("2").value,details:document.getElementById("3").value}}window.onload=function(){t("page1.html","contentBody",null)};
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.a2166a0d.js.map