"use strict";!function(){function t(t){for(var e=[];t=t.parentNode||t.host||t.defaultView;)e.push(t);return e}function e(t){return function(e){var r=void 0!==e.getAttribute?e.getAttribute("class")||"":void 0;void 0!==r&&-1===r.indexOf(t)&&e.setAttribute("class",r.concat(" ",t).trim())}}var r=["\n","\t"," ","\r"];try{return"undefined"!=typeof window&&!document.querySelector(":focus-within")}catch(n){return function(){var n=function(n){if(!i){window.requestAnimationFrame((function(){i=!1,"blur"===n.type&&Array.prototype.slice.call(t(n.target)).forEach(function(t){return function(e){var n=void 0!==e.getAttribute?e.getAttribute("class")||"":void 0;if(n){var i=n.indexOf(t);0<=i&&(0===i||0<=r.indexOf(n.charAt(i-1)))&&(""===(n=n.replace(t,"").trim())?e.removeAttribute("class"):e.setAttribute("class",n))}}}("focus-within")),"focus"===n.type&&Array.prototype.slice.call(t(n.target)).forEach(e("focus-within"))}));var i=!0}};return document.addEventListener("focus",n,!0),document.addEventListener("blur",n,!0),e("js-focus-within")(document.body),!0}()}}();