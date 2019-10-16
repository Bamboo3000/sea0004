function siemaAutoplay(e,t,n){var i=setInterval(function(){t.next()},e);n.addEventListener("mouseenter",function(){clearInterval(i)}),n.addEventListener("mouseleave",function(){i=setInterval(function(){t.next()},e)})}function loadCarousel(){var e=document.getElementById("siema-carousel");if(e){const t=new Siema({selector:"#siema-carousel",duration:500,easing:"ease",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!0});document.getElementById("siema-prev").addEventListener("click",function(){t.prev()}),document.getElementById("siema-next").addEventListener("click",function(){t.next()}),siemaAutoplay(5e3,t,e)}}function loadClientsCarousel(){var e=document.getElementById("siema-carousel-clients");if(e){const t=new Siema({selector:"#siema-carousel-clients",duration:500,easing:"ease",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!0});document.getElementById("siema-prev-clients").addEventListener("click",function(){t.prev()}),document.getElementById("siema-next-clients").addEventListener("click",function(){t.next()})}}function loadCandidatesCarousel(){var e=document.getElementById("siema-carousel-candidates");if(e){const t=new Siema({selector:"#siema-carousel-candidates",duration:500,easing:"ease",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!0});document.getElementById("siema-prev-candidates").addEventListener("click",function(){t.prev()}),document.getElementById("siema-next-candidates").addEventListener("click",function(){t.next()})}}function initContactMap(){{var e=document.getElementById("contact_map"),t=new google.maps.Map(e,{center:{lat:52.3214064,lng:4.8788931},zoom:14,scrollwheel:!1,draggable:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!0}),n=location.href.split("/"),i=n[0],s=n[2],o=i+"//"+s,a={url:o+"/themes/searchit/assets/img/logo-pin.png",size:new google.maps.Size(160,200),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(40,100),scaledSize:new google.maps.Size(80,100)};new google.maps.Marker({map:t,position:new google.maps.LatLng(52.3214064,4.8788931),icon:a})}t.set("styles",[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#7f8ec1"},{visibility:"on"}]}])}function isScriptLoaded(e){for(var t=document.getElementsByTagName("script"),n=t.length;n--;)if(t[n].src==e)return!0;return!1}function addScript(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=e,t.appendChild(n)}function loadScript(e,t){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}function afterFormOpen(){0==isScriptLoaded("https://www.google.com/recaptcha/api.js")&&addScript("https://www.google.com/recaptcha/api.js"),0==isScriptLoaded("https://connect.facebook.net/en_US/sdk.js")&&loadScript("https://connect.facebook.net/en_US/sdk.js",function(){window.fbAsyncInit=function(){FB.init({appId:"382574281913074",autoLogAppEvents:!0,xfbml:!0,version:"v4.0"})},FB.getLoginStatus(function(e){statusChangeCallback(e)}),$("form").find(".social-btns").append('<button class="fb" type="button" onclick="myFacebookLogin()">Facebook</button>').find(".d-none").removeClass("d-none")})}function myFacebookLogin(){FB.login(function(e){"connected"===e.status?FB.api("/me",{fields:"name, email, birthday, gender, location, picture"},function(e){if(console.log(e),e.name&&$("form").find('input[name="applicant-name"]').val(e.name),e.email&&$("form").find('input[name="applicant-email"]').val(e.email),"male"==e.gender?$("form").find('input[name="gender"][value="male"]').prop("checked",!0):"female"==e.gender&&$("form").find('input[name="gender"][value="female"]').prop("checked",!0),e.location.name&&$("form").find('input[name="applicant-city"]').val(e.location.name),e.birthday){var t=e.birthday,n=t.split("/");n=n[2]+"-"+n[0]+"-"+n[1],$("form").find('input[name="dob"]').val(n)}}):console.log("User cancelled login or did not fully authorize.")},{scope:"public_profile,email,user_gender,user_location,user_birthday"})}function setCookie(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s="expires="+i.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}function getCookie(e){for(var t=e+"=",n=decodeURIComponent(document.cookie),i=n.split(";"),s=0;s<i.length;s++){for(var o=i[s];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}function checkCookieMessage(){"yes"!==getCookie("cookieConfirm")&&document.getElementById("cookieMessage").classList.add("show")}function cookieAgree(){setCookie("cookieConfirm","yes",365),document.getElementById("cookieMessage").classList.remove("show")}function hasClass(e,t){return e.className&&new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)}function jobsLoadingIndicator(){var e=document.getElementsByClassName("job-listing__list-container")[0];hasClass(e,"loading")?e.classList.remove("loading"):e.classList.add("loading")}function openSearch(e){e.classList.add("active"),document.getElementById("search-field-general").classList.add("active"),document.getElementById("header-social-links").classList.add("active"),setTimeout(function(){document.getElementById("search-field-general-input").focus()},500)}function openFilters(e){e.parentNode.classList.toggle("active")}function hideSearch(){document.getElementById("search-field-general").classList.remove("active"),document.getElementById("header-social-links").classList.remove("active"),document.getElementsByClassName("search-btn")[0].classList.remove("active")}function showLang(e,t){window.innerWidth<=760&&!hasClass(e,"active")?(t.preventDefault(),e.classList.add("active")):window.innerWidth<=760&&hasClass(e,"active")&&(t.preventDefault(),e.classList.remove("active"))}function showMenu(e){hasClass(e,"active")?hideMenu():(e.classList.add("active"),document.getElementsByTagName("body")[0].classList.add("menu-active"),document.getElementsByTagName("html")[0].classList.add("menu-active"),document.getElementById("wrapper").classList.add("menu-active"),setTimeout(function(){document.getElementById("wrapper").insertAdjacentHTML("afterend",'<div id="menuCloserButton"></div>'),document.getElementById("menuCloserButton").addEventListener("click",hideMenu)},300))}function hideMenu(){var e=document.getElementById("menuCloserButton");document.getElementById("menu-btn").classList.remove("active"),document.getElementsByTagName("body")[0].classList.remove("menu-active"),document.getElementsByTagName("html")[0].classList.remove("menu-active"),document.getElementById("wrapper").classList.remove("menu-active"),e.parentNode.removeChild(e)}function showSubMenu(e){hasClass(e.nextElementSibling,"active")?(e.classList.remove("active"),e.nextElementSibling.classList.remove("active")):(e.classList.add("active"),e.nextElementSibling.classList.add("active"))}function checkboxLabel(e){e.getElementsByTagName("input")[0].checked===!0?(e.classList.remove("active"),e.getElementsByTagName("input")[0].checked=!1):(e.classList.add("active"),e.getElementsByTagName("input")[0].checked=!0)}function stopBodyScrolling(e){e===!0?document.body.addEventListener("touchmove",freezeVp,!1):document.body.removeEventListener("touchmove",freezeVp,!1)}function showForm(){afterFormOpen(),document.getElementById("jobFormModal").style.display="flex",setTimeout(function(){document.getElementById("jobFormModal").classList.add("active"),document.getElementsByTagName("html")[0].classList.add("modal-open"),document.getElementsByTagName("html")[0].classList.add("menu-active"),document.getElementsByTagName("body")[0].classList.add("menu-active")},50),stopBodyScrolling(!0)}function hideForm(){document.getElementById("jobFormModal").classList.remove("active"),document.getElementsByTagName("html")[0].classList.remove("modal-open"),document.getElementsByTagName("html")[0].classList.remove("menu-active"),document.getElementsByTagName("body")[0].classList.remove("menu-active"),setTimeout(function(){document.getElementById("jobFormModal").style.display="none"},500),stopBodyScrolling(!1)}function showCVForm(){afterFormOpen(),document.getElementById("uploadCvModal").style.display="flex",setTimeout(function(){document.getElementById("uploadCvModal").classList.add("active"),document.getElementsByTagName("html")[0].classList.add("modal-open"),document.getElementsByTagName("html")[0].classList.add("menu-active"),document.getElementsByTagName("body")[0].classList.add("menu-active")},50),stopBodyScrolling(!0)}function hideCVForm(){document.getElementById("uploadCvModal").classList.remove("active"),document.getElementsByTagName("html")[0].classList.remove("modal-open"),document.getElementsByTagName("html")[0].classList.remove("menu-active"),document.getElementsByTagName("body")[0].classList.remove("menu-active"),setTimeout(function(){document.getElementById("uploadCvModal").style.display="none"},500),stopBodyScrolling(!1)}function showFilterForm(){document.getElementById("filterModal").style.display="block",setTimeout(function(){document.getElementById("filterModal").classList.add("active"),document.getElementsByTagName("html")[0].classList.add("modal-open")},50)}function hideFilterForm(){document.getElementById("filterModal").classList.remove("active"),document.getElementsByTagName("html")[0].classList.remove("modal-open"),setTimeout(function(){document.getElementById("filterModal").style.display="none"},500)}function getFileName(e,t){$text=e.value,document.getElementById(t).innerHTML=$text.split("\\")[2]}function cvFormOpen(){"#uploadcv"===window.location.hash&&showCVForm()}function searchbarText(){var e=["CTO","Development Manager","CIO","CISO","Python Developer","Technical Teamlead","PHP Developer","Java Developer","JavaScript Developer","Front-End Developer","Scrum Master","Agile Coach","Scala Developer",".NET Developer","Tester","DevOps Engineer","Solution Architect","QA Engineer","Product Owner","Lead Developer","Sales Manager","Account Manager","Business Developer","Inside Sales","Recruitment Consultant","Test Automation Consultant","Data Scientist","Android Developer","iOS Developer","Mobile Solution Architect","Sitecore Developer","Hybris Developer","Talent Sourcer","Game Developer","Digital Consultant"],t=document.getElementById("searchboxtextchange");if(t){var n=e[Math.floor(Math.random()*e.length)];t.placeholder="";for(var i=0;i<n.length;i++)setTimeout(function(e){return t===document.activeElement?!1:(t.placeholder=t.placeholder+n.charAt(e),void 0)},75*i,i)}}function stopTyping(){document.getElementById("searchboxtextchange").placeholder="",clearInterval(searchbarTyping),searchbarTyping=null,document.getElementById("searchboxtextchange").placeholder="",document.getElementById("searchboxtextchange").placeholder=document.getElementById("placeholdertext").textContent}function startTyping(){clearInterval(searchbarTyping),searchbarText(),searchbarTyping=null,searchbarTyping=setInterval(function(){searchbarText()},3500)}function urlParser(e){var t=document.createElement("a");t.href=e;var n=t.hostname;return n}function getReferrer(){var e=document.referrer;if(getCookie("referrerURL"))var t=getCookie("referrerURL");if(e.length>0||t){if("undefined"!=typeof t&&null!==t)var n=urlParser(t),i=t.split("?")[1];else var n=urlParser(e),i=e.split("?")[1];console.log(i);var s=!1,o=n;if("undefined"!=typeof i&&null!==i){for(var a=i.split("&"),r="gclid",l=[],c=0;c<a.length;c++)l.push(a[c].split("="));console.log(l);for(var c=0;c<l.length;c++)for(var d=l[c],m=0;m<d.length;m++)if(null!==d[m].match(r)){console.log(d[m]),s=!0,console.log(s);break}}n!==window.location.hostname?(console.log("from:"+o+" yay!"),t||setCookie("referrerURL",e,"7"),s===!0?(console.log("selecting Adwords!"),$("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').val("Google Adwords"),console.log($("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').find(":selected"))):(console.log("appending an option!"+o),$("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').append($("<option>",{value:o,text:o})),$("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').val(o),console.log($("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').find(":selected")))):($("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').val("Website SIR"),console.log("from: here, yay!"),console.log($("#uploadCvModal, #jobFormModal").find('select[name="applicant-find"]').find(":selected")))}}function onFormSubmit(){$(document).on("submit","form.application-form, form.cv-form",function(){$(this).addClass("disabled").find('input[type="submit"]').attr("disabled",!0).addClass("disabled"),$(this).hasClass("application-form")?setCookie("jobid_"+$(this).find("input.job-id").val(),$(this).find("input.job-id").val(),365):$(this).hasClass("cv-form")&&setCookie("cvform","sent",365)})}function onFormLoad(){var e=$("form.application-form").find("input.job-id").val(),t=getCookie("jobid_"+e);getCookie("cvform")&&$("form.cv-form").addClass("cv-sent"),188!==e&&e==t&&$("form.application-form").addClass("application-sent")}function unblurApplication(){$("form.application-form").removeClass("application-sent")}function unblurCV(){$("form.cv-form").removeClass("cv-sent")}function cvCaptchaCallback(){$("form.cv-form").find('input[type="submit"]').attr("disabled",!1).removeClass("disabled")}function appCaptchaCallback(){$("form.application-form").find('input[type="submit"]').attr("disabled",!1).removeClass("disabled")}function menuScroll(){var e=$(".main-navigation"),t=$(window).scrollTop();t>=100?e.hasClass("scrolled")||e.addClass("scrolled"):e.hasClass("scrolled")&&e.removeClass("scrolled")}function lazyImages(){$(".lazy").each(function(){var e=$(this).data("src");$(this).attr("src",e).removeAttr("data-src")})}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){var i=this;n(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[t]),e.appendChild(n)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===i(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=0===this.currentSlide&&this.config.loop?this.innerElements.length-this.perPage:Math.max(this.currentSlide-e,0),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?0:Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),n=Math.ceil(t/(this.selectorWidth/this.perPage));e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):0>e&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[t]),e.appendChild(n)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(0>e||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.currentSlide=e<=this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,n){if(0>t||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),n&&n.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),e){for(var n=document.createDocumentFragment(),i=0;i<this.innerElements.length;i++)n.appendChild(this.innerElements[i]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},n=e;for(var i in n)t[i]=n[i];return t}},{key:"webkitOrNot",value:function(){var e=document.documentElement.style;return"string"==typeof e.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});var _smartsupp=_smartsupp||{};_smartsupp.key="f32f591b82ffa879c325ae96ca021013ef7a7d64",_smartsupp.gaKey="UA-6319827-2",window.smartsupp||function(e){var t,n,i=smartsupp=function(){i._.push(arguments)};i._=[],t=e.getElementsByTagName("script")[0],n=e.createElement("script"),n.type="text/javascript",n.charset="utf-8",n.async=!0,n.src="//www.smartsuppchat.com/loader.js?",t.parentNode.insertBefore(n,t)}(document);var freezeVp=function(e){e.preventDefault()},searchbarTyping=setInterval(function(){searchbarText()},3500);document.getElementById("jobFormModal")&&document.getElementById("jobFormModal").addEventListener("click",function(e){e.target===document.getElementById("jobFormModal")&&hideForm()},!1),document.getElementById("uploadCvModal")&&document.getElementById("uploadCvModal").addEventListener("click",function(e){e.target===document.getElementById("uploadCvModal")&&hideCVForm()},!1),$(window).on("load scroll",function(){menuScroll()});var $formCont;$(document).ready(function(){$formCont=$("#jobFormModal").length?$("#uploadCvModal, #jobFormModal"):$("#uploadCvModal"),cvFormOpen(),loadCarousel(),loadClientsCarousel(),loadCandidatesCarousel(),checkCookieMessage(),searchbarText(),onFormSubmit(),onFormLoad()}),$(window).on("load",function(){lazyImages()});