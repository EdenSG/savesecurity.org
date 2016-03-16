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

!function(){var a="body { transition: margin-top .5s ease-in; } body._sc_banner_active { margin-top: 100px;} #_sc_banner { transition: margin-top .5s ease-in; margin-top: -75px; position: absolute; left: 0px; top: 0px; width: 100%; height: 75px; background: #171717 url(https://s3.amazonaws.com/s3.fightforthefuture.org/images/justbanner.jpg) center top no-repeat; box-shadow: 0px 1px 20px rgba(0, 0, 0, .3); cursor: pointer; } body._sc_banner_active #_sc_banner { margin-top: 0px; } #_sc_banner button { position: absolute; right: 15px; top: 0px; border: 0px; background: 0px; color: white; font-size: 30px; padding: 0px; width: auto; height: auto; cursor: pointer; opacity: .7; } #_sc_banner button:hover { opacity: 1; }",b=function(a,b,c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="expires="+d.toGMTString();document.cookie=a+"="+b+"; "+e},c=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){var e=c[d].trim();if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""};if(-1!==window.location.href.indexOf("ALWAYS_SHOW_SC_BANNER")||!c("_SC_BANNER_SHOWN_YAY")){var d=document.createElement("style");d.type="text/css",d.id="_savecrypto_css",d.styleSheet?d.styleSheet.cssText=a:d.appendChild(document.createTextNode(a)),document.head.appendChild(d);var e=document.createElement("div");e.id="_sc_banner";var f=document.createElement("button");f.textContent="×",e.appendChild(f),e.onclick=function(a){a&&a.preventDefault(),a.target==f?(document.body.classList.remove("_sc_banner_active"),setTimeout(function(){document.body.removeChild(e)},500)):window.open("https://savesecurity.org?from=banner")};var g=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(!(768>g)){var h=new Image;h.src="https://s3.amazonaws.com/s3.fightforthefuture.org/images/justbanner.jpg",h.onload=function(){document.body.appendChild(e),setTimeout(function(){document.body.classList.add("_sc_banner_active")},50),b("_SC_BANNER_SHOWN_YAY","true",365)}}}}();
//# sourceMappingURL=banner.js.map