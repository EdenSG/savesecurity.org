/*
 @licstart  The following is the entire license notice for the
    JavaScript code in this page.

 Copyright (C) 2015 Fight for the Future

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version. The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 @licend  The above is the entire license notice
    for the JavaScript code in this page.
*/

function googlePlus(){var a=window.location.protocol+"//"+window.location.host;window.open("https://plus.google.com/share?url="+a,"share_gl","width=500, height=300, toolbar=no, status=no, menubar=no")}window.components=window.components||{},window.components.forms=function(a,b){"use strict";function c(){var b=a.getElementById("form-zip_code");"US"!==o.value?b.setAttribute("placeholder","Post code"):b.setAttribute("placeholder","ZIP")}function d(){p.remove(),o.setAttribute("name","answer[country]"),o.classList.add("visible"),n.classList.add("hidden")}function e(){q.setAttribute("style","height: "+q.clientHeight+"px;"),b.setTimeout(function(){q.setAttribute("style","height: 0;")},20)}function f(c){var d=a.createElement("h2"),e=a.createElement("p");q.removeAttribute("disabled"),m.remove(),d.textContent="Something went wrong",c.type?e.textContent="There seems to be a problem somewhere in between your computer and our server. Might not be a bad idea to give it another try.":c.status?e.textContent='(the nerdy info is that the server returned a status of "'+c.status+'" and said "'+c.statusText+'".)':e.textContent="this seems to be a weird error. the nerds have been alerted.",b.modals.generateModal([d,e]),m.remove(),l.removeAttribute("disabled")}function g(){var c=a.createElement("div"),d=a.getElementsByClassName("share")[0];console.log("share:",d),d.classList.add("visible"),c.innerHTML='<h2>Thanks for signing</h2>\n<p>Now, share this page to spread the word.</p><ul class="share inline visible">\n'+d.innerHTML+'</ul><p><small>…or, <a href="https://donate.fightforthefuture.org/?amount=5&frequency=just-once">chip in $5</a> to help us spread the message.</small></p>',b.modals.generateModal([c]),e(),document.querySelector(".modal-content button.facebook").addEventListener("click",FreeProgress.share.bind(FreeProgress)),document.querySelector(".modal-content button.google").addEventListener("click",googlePlus),document.querySelector(".modal-content button.twitter").addEventListener("click",FreeProgress.tweet.bind(FreeProgress))}function h(c){function d(){var c={identifier:"dad151da-e162-4ec5-8679-655bfcb2d03f",website:b.location.origin,tags:JSON.parse(a.querySelector('[name="subscription[tag_list]"]').value),noOptIn:!1,name:a.getElementById("form-first_name").value,email:a.getElementById("form-email").value,ZIP:a.getElementById("form-zip_code").value,country:o.value,comments:a.getElementById("form-comments").value};return JSON.stringify(c)}function e(){h.status>=200&&h.status<400?g():f(h)}c.preventDefault();var h=new XMLHttpRequest;q.setAttribute("disabled",!0),m.classList.add("submitted"),l.setAttribute("disabled",!0),q.appendChild(m),h.open("POST",q.dataset.host+"/submission",!0),h.setRequestHeader("Content-Type","application/json"),h.addEventListener("error",f),h.addEventListener("load",e),h.send(d())}function i(){n.addEventListener("click",d),o.addEventListener("change",c),q.addEventListener("submit",h)}function j(){i()}var k=a.getElementsByTagName("body")[0],l=k.querySelector('[type="submit"]'),m=a.createElement("div"),n=a.querySelector('[for="select-country"]'),o=a.getElementById("select-country"),p=a.getElementById("hidden-country"),q=a.forms[0];m.classList.add("submitted"),m.innerHTML='<h2>Hang on a tick&hellip;</h2><h3>&hellip;reticulating splines.</h3><div class="circle-spinner">&nbsp;</div>',j()},function(a,b){"use strict";function c(){var c=a.getElementsByClassName("modal-content")[0];a.getElementsByClassName("overlay")[0].remove(),c.removeAttribute("style"),c.classList.add("off-screen"),b.setTimeout(function(){c.remove()},420)}function d(d,e){var i,j=a.createElement("div"),k=a.createElement("div");for(void 0===d.length&&(d=[d]),"boolean"!=typeof e&&(e=!1),j.id=e?"no-click-for-you":"dismiss-me",j.classList.add("overlay"),k.classList.add("modal-content"),e||(i=a.createElement("button"),i.classList.add("close-modal"),i.innerHTML="&times;",k.appendChild(i),i.addEventListener("click",c),j.addEventListener("click",c)),f=0;f<d.length;f++)k.appendChild(d[f]);h.appendChild(j),h.appendChild(k),g.appendChild(h),b.setTimeout(function(){h.classList.remove("fade-in")},500)}function e(){c();var b=a.createElement("h2");b.innerHTML="Something went wrong.<br />Do you have a network connection?",d([b])}b.modals=b.modals||{};var f,g=a.getElementsByTagName("body")[0],h=a.createElement("div");h.classList.add("modal-parent","fade-in"),b.modals.dismissModal=c,b.modals.generateModal=d,b.modals.noConnectionModal=e}(document,window),function(a,b){"use strict";function c(){var c=a.getElementsByClassName("modal-parent")[0];c.setAttribute("style","opacity: 0"),b.setTimeout(function(){c.remove()},420)}function d(d,e){var i,j=a.createElement("div"),k=a.createElement("div");for(void 0===d.length&&(d=[d]),"boolean"!=typeof e&&(e=!1),j.id=e?"no-click-for-you":"dismiss-me",j.classList.add("overlay"),k.classList.add("modal-content","off-screen"),e||(i=a.createElement("button"),i.classList.add("close-modal"),i.innerHTML="&times;",k.appendChild(i),i.addEventListener("click",c),j.addEventListener("click",c)),f=0;f<d.length;f++)k.appendChild(d[f]);h.appendChild(j),h.appendChild(k),g.appendChild(h),b.setTimeout(function(){k.classList.remove("off-screen")},50)}function e(){c();var b=a.createElement("h2");b.innerHTML="Something went wrong.<br />Do you have a network connection?",d([b])}b.modals=b.modals||{};var f,g=a.getElementsByTagName("body")[0],h=a.createElement("div");h.classList.add("modal-parent"),b.modals.dismissModal=c,b.modals.generateModal=d,b.modals.noConnectionModal=e}(document,window),function(a,b){b.views=b.views||{},b.views.modals={}}(document,window);var $c=document.createElement.bind(document);!function(a,b){"use strict";function c(){b.components=b.components||{};var c=0,d=a.getElementsByTagName("body")[0].dataset.components;if(void 0!==d)for(d=d.split(" "),c=d.length;c--;)""!==d[c]&&void 0!==b.components[d[c]]&&b.components[d[c]](a,b)}c();var d=function(){var b=(window.pageYOffset||a.scrollTop)-(a.clientTop||0);b>300&&(window.removeEventListener("scroll",d),document.querySelector("ul.share").classList.add("visible"))};window.addEventListener("scroll",d);for(var e=document.querySelectorAll("button.google"),f=0;f<e.length;f++)e[f].addEventListener("click",function(a){a.preventDefault(),googlePlus()},!1);if(-1!==window.location.href.indexOf("ALWAYS_SHOW_SC_BANNER")){var g=document.createElement("script");g.src="/banner.js",document.head.appendChild(g)}}(document,window);
//# sourceMappingURL=core.js.map