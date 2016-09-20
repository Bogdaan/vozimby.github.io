window.app={registerComponent:function(t,e){t=[].concat(t);var n=t[0],i=function(t){return t?"object"==typeof t?$(t):$(".c-"+n).find(t):$(".c-"+n)};$.extend(i,$);var o=e(i);t.forEach(function(t){window.app[t]=o}),$(function(){o.init&&o.init()})}},window.app.registerComponent("analytics",function(t){return{init:function(){},reachGoal:function(){"undefined"!=typeof document.yaCounter25294952&&document.yaCounter25294952.reachGoal(name)}}}),window.app.registerComponent("city-checker",function(t){return{init:function(){this.prepareData(),t("#citychecker").bind("submit",this.handleSubmit)},prepareData:function(){document.availibleCities=[],document.availibleCitiesLabels=[],window.app.storage.get("city",function(e){e.forEach(function(t){document.availibleCities.push(t[0]),document.availibleCitiesLabels.push(t[1])}),t("#checkcityinp").typeahead({source:document.availibleCities})})},handleSubmit:function(e){e.preventDefault(),t("#citychecker-result").text("ищем ..."),window.app.analytics.reachGoal("SpisokGorodov");var n=function(t,e){var n=e.replace(".","\\.").replace("(","\\(").replace(")","\\)"),i=new RegExp(n+".*","i"),o=-1;return t.forEach(function(t,e){i.test(t)&&(o=e)}),o},i=t("#checkcityinp").val();i=i.charAt(0).toUpperCase()+i.slice(1);var o=n(document.availibleCities,i);o==-1?t("#citychecker-result").html("Данного города нет в списке основных городов.<br/> Уточнить сроки и стоимость доставки Вы можете по тел. 6666-565"):t("#citychecker-result").text(document.availibleCitiesLabels[o])}}}),window.app.registerComponent("header",function(t){return{init:function(){this.handleSocialButtons()},handleSocialButtons:function(){t(".socnet .soc_btn").tooltip({html:!0,animation:!1,trigger:"click"}),jQuery("body").click(function(e){t(e.target).hasClass("soc_btn")||t(".socnet .tooltip.bottom").remove()}),t(".socnet .soc_btn").bind("mouseenter",function(){t(".socnet .soc_btn.showed").removeClass("showed").trigger("click"),t(this).addClass("showed").trigger("click")}).bind("click",function(){t(this).hasClass("clicked")?t(this).removeClass("clicked"):t(this).addClass("clicked"),t(".socnet .soc_btn.clicked").each(function(){t(this).hasClass("showed")||t(this).trigger("click")})})}}}),window.app.registerComponent("hero",function(t){return{init:function(){t(".map_hint a").tooltip({html:!0,animation:!1}),this.animateClouds()},animateClouds:function(){setInterval(function(){var t=jQuery("#cloud_1");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_2");t.animate({left:"-100px"},55e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_3");t.animate({left:"-100px"},95e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_4");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_5");t.animate({left:"-100px"},85e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#sun_clouds");t.animate({left:"16px"},8500),t.animate({left:"56px"},8500)},3),setInterval(function(){var t=jQuery("#cloudbg");t.animate({left:"468px"},8500),t.animate({left:"508px"},8500)},3),setInterval(function(){var t=jQuery("#sun");t.animate({borderSpacing:30},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear"),t.animate({borderSpacing:0},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear")},0)}}}),window.app.registerComponent("job-form",function(t){return{init:function(){t(".jobinfo:first").focus(),t("form").bind("submit",this.handleSubmit)},handleSubmit:function(e){e.preventDefault(),e.stopPropagation();var n=t("form").serialize();t.get("/api.php",n,function(e){"success"==e?(t("form").addClass("hidden"),alert("Спасибо! Ваше резюме будет рассмотрено в ближайшее время."),location.href="/"):alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")})}}}),window.app.registerComponent(["page-index","page"],function(t){return{init:function(){}}}),window.app.registerComponent("popup-opinions",function(t){return{init:function(){this.handleFormInput(),this.handleSubmit()},handleFormInput:function(){t("#dont-chk, #blagod-chk").on("change",function(e){var n=t(this).prop("checked");t(this).parent().find(".by-details").toggle(n),t(this).parent().find(".by-passport").toggle(!n)})},handleSubmit:function(){t("form").bind("submit",function(e){var n=t(e.target).serialize(),i="Что-то пошло не так. Свяжитесь с нами по телефону или по почте.",o="courierinfo"==t(e.target).attr("id")?"Спасибо! Ваша благодарность принята.":"Спасибо! Ваша жалоба принята.";t.get("/api.php",n,function(n){t(e.target).parents(".modal-content").find(".close").trigger("click"),alert("success"==n?o:i)}),e.preventDefault()})}}}),window.app.registerComponent("price-checker",function(t){return{init:function(){t(".tip").tooltip({html:!0,animation:!1}),t(".prettyCheckable").each(function(){t(this).prettyCheckable()}),t(".js-form input").change(function(){""==t(this).val()?t(this).removeClass("filled"):t(this).addClass("filled")}),t("input.digit-only").bind("keyup change",function(){/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""))}),t(".numeric").autoNumeric("init",{aSep:".",aDec:",",vMin:"0",vMax:"999999999999"});var e=t("#calculation").first();if(0!=e.size()){var n=jQuery("#calculator-map-modal").first(),i=function(t,e,n,i){var e=isNaN(e=Math.abs(e))?2:e,n=void 0==n?".":n,i=void 0==i?",":i,o=t<0?"-":"",a=parseInt(t=Math.abs(+t||0).toFixed(e))+"",s=(s=a.length)>3?s%3:0;return o+(s?a.substr(0,s)+i:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+i)+(e?n+Math.abs(t-a).toFixed(e).slice(2):"")},o=function(t){var e=parseInt((""+t).replace(/[^0-9]/g,"")),n=1e4;return(""+(e/n).toFixed(2)).replace(".",",")+" ("+i(t,0,".",".")+") руб."},a=function(t){return t.replace(/([0-9]{2}[.][0-9]{2})[.0-9]{5}/g,"$1")},s=function(){var n=!1;return e.find('input[type="text"]:visible').each(function(){""==t(this).val()&&(n=!0)}),e.find("select:visible").not(".dependent-sub").not("#clc-typeid").each(function(){""==t(this).val()&&(n=!0)}),n},r=function(t){e.find("#clc-result").html('<div class="noresult">'+t+"</div>")},l=function(e,i){n.find(".modal-title").text(i);var o=e.find(".watch-on-map").first();o.removeClass("filled");var a=new google.maps.Geocoder;a.geocode({address:i,region:"by"},function(e,i){i==google.maps.GeocoderStatus.OK&&(o.addClass("filled"),o.unbind("click").click(function(){t(this).hasClass("filled")&&(n.modal("show"),n.find(".close").unbind("click").click(function(){n.modal("hide")}),setTimeout(function(){var t=new google.maps.DirectionsRenderer,n=new google.maps.DirectionsService,i=new google.maps.LatLng(53.9,27.566666),o=new google.maps.Map(document.getElementById("calculator-map-canvas"),{zoom:10,center:i});t.setMap(o),o.setCenter(e[0].geometry.location);new google.maps.Marker({map:o,position:e[0].geometry.location});n.route({origin:i,destination:e[0].geometry.location,travelMode:google.maps.TravelMode.DRIVING},function(e,n){n==google.maps.DirectionsStatus.OK&&t.setDirections(e)})},200))}))})};e.find("#clc-sender").change(function(){e.find(".control-group-ctselect option:first").prop("selected",!0),e.find(".control-group-typeid select:first option:first").prop("selected",!0),e.find(".control-group-typeid select:gt(0)").css("display","none"),e.find('input[type="text"]').removeClass("filled").val(""),e.find('input[type="checkbox"]').removeClass("filled").prop("checked",!1),e.find(".prettycheckbox a.checked").removeClass("checked");var n=t(this).val();"0"==n?(e.find(".control-group-typeid, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),e.find(".control-group-cost").addClass("force-hidden")):"1"==n&&(e.find(".control-group-ctselect, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),e.find(".control-group-cost").removeClass("force-hidden")),e.find(".control-group-ctselect").removeClass("hidden")}),e.find("#clc-calculation-type").change(function(){var n=t(this).val();return"- выберите -"==n?void t(this).parent().removeClass("filled"):(t(this).parent().addClass("filled"),void("2"==n?(e.find(".control-group-typeid").addClass("hidden"),e.find(".control-group-dimension").removeClass("hidden"),e.find(".control-group-dimension input").keyup(function(){var n=function(){var n=!0;return e.find(".control-group-dimension input").each(function(){""==t(this).val()&&(n=!1)}),n};n()&&e.find(".control-group-locality").removeClass("hidden")}),e.find(".control-group-cost").addClass("force-hidden"),e.find(".control-group-cost:visible").addClass("hidden")):"1"==n&&(e.find(".control-group-typeid").removeClass("hidden"),e.find(".control-group-dimension").addClass("hidden"),e.find(".control-group-cost").removeClass("force-hidden"))))}),window.app.storage.get("rates",function(n){var i=e.find("#clc-typeid");i.append(jQuery(n)),i.dependentSelects({placeholderOption:"- выберите -"}),i.parent().find("select").change(function(){var n=i.parent().find("select:visible:last"),o=n.children("option");if(2==o.size()){var a=o.last();a.prop("selected")||(a.prop("selected",!0).attr("selected","selected"),n.trigger("change"))}var s=i.parent().find("select:visible option:selected:last"),r=s.val();if("- выберите -"==r)return void t(this).parent().removeClass("filled");t(this).parent().addClass("filled");var l=s.data("cast");"1"==l?e.find(".control-group-dimension").removeClass("hidden"):e.find(".control-group-dimension").addClass("hidden"),e.find(".control-group-cost:not(.force-hidden)").size()>0?(e.find(".control-group-cost:not(.force-hidden)").removeClass("hidden"),e.find(".control-group-cost input").bind("keyup",function(){e.find(".control-group-locality").removeClass("hidden"),e.find(".control-group-additional").removeClass("hidden")})):(e.find(".control-group-locality").removeClass("hidden"),e.find(".control-group-additional").removeClass("hidden")),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last")})}),window.app.storage.get("locs",function(n){e.find(".clc-locality-input").typeahead({source:n,matcher:function(t){var e=this.query.toLowerCase(),n=t;1==e.split(" ").length&&(n=t.split(" ")[0]);var i=new RegExp(".*"+e+".*","i");return i.test(n)}}).bind("change blur",function(){var i=t(this).parents(".control-group-locality").first();if(n.indexOf(t(this).val())===-1)t(this).val(""),i.find(".watch-on-map").removeClass("filled");else{e.find(".control-group-additional").removeClass("hidden"),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last");var o=t(this).val(),a="";(parts=o.match(/(.+) \(([^,]+), ([^,]+)\)/))?a=parts[1]+", Беларусь":(parts=o.match(/(.+) \(([^,]+)\)/))&&(a="город "+parts[1]+", "+parts[2]+", Беларусь"),l(i,a.replace("обл.","область"))}if("locality-from"==t(this).attr("name")){var s=t(this).val(),r=e.find(".controls-fromstore");"Минск (Минский р-н, Минская обл.)"==s?r.removeClass("hidden"):r.addClass("hidden")}})}),e.find("input, select").bind("change keyup",function(t){e.find("#clc-result").html(""),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last")}),e.bind("submit",function(n){return n.preventDefault(),n.stopPropagation(),s()?void r("Заполните все поля"):(r("Считаем, подождите..."),window.app.analytics.reachGoal("Kalculator"),void t.get("/api.php",e.serialize(),function(t){if(null===t||"undefined"==typeof t.body||"undefined"==typeof t.status||null===t.body||"ok"!=t.status)return void r("На данный момент калькулятор недоступен");var n=3,i=2,s=1,l="minimal",c="custom",d=e.find("#clc-result").first();if(t.body[c]&&t.body[c].enabled)return void d.html('<div class="exp clearfix">    <span class="custominfo">Требуется индивидуальный расчет - пожалуйста свяжитесь с нами 6666-565</span>     </div>');if(t.body[l]&&t.body[l].enabled)return void d.html('<div class="exp clearfix">    <span class="cost">от '+o(t.body[l].cost)+'</span>    <span class="mininfo">- узнать более 6666-565</span>     </div>');var u="";t.body[i].enabled&&(u='<div class="std clearfix">    <span class="lbl">Стандарт</span>    <span class="cost">'+o(t.body[i].cost)+'</span>    <span class="dates">'+a(t.body[i].days)+"</span>    </div>"),d.html('<div class="exp clearfix">    <span class="lbl">Экспресс</span>    <span class="cost">'+o(t.body[s].cost)+'</span>    <span class="dates">'+a(t.body[s].days)+"</span>    </div>"+u+'<div class="eco clearfix">    <span class="lbl">Эконом</span>    <span class="cost">'+o(t.body[n].cost)+'</span>    <span class="dates">'+a(t.body[n].days)+'</span>    </div><div class="inf"><span>Ближайшие дни доставки</span></div>')},"json"))})}}}}),window.app.registerComponent("status-checker",function(t){return{init:function(){t("#rstatus").bind("submit",this.handleSubmit)},handleSubmit:function(e){e.preventDefault(),e.stopPropagation(),window.app.analytics.reachGoal("Otslejivanie");var n=t("#rst-series").val(),i=t("#rst-number").val();return""==n||""==i?void alert("Заполните все поля"):void t.get("/api.php",{form:"rstatus",series:n,number:i},function(e){t("#rstatus-result .rstatus-res").addClass("hidden"),"Доставляется"==e.substr(0,12)&&t("#rstatus-result .delivery").removeClass("hidden"),"Заказ на"==e.substr(0,8)?(t("#rstatus-result .process div").html(e),t("#rstatus-result .process").removeClass("hidden")):"Доставлено"==e?t("#rstatus-result .delivered").removeClass("hidden"):"Доставка"==e.substr(0,8)?(t("#rstatus-result .planed div").html(e),t("#rstatus-result .planed").removeClass("hidden")):"Возврат"==e?t("#rstatus-result .return").removeClass("hidden"):alert(e)})}}}),window.app.registerComponent("storage",function(t){return{_rawdata:{},get:function(t,e){return this.cache(t,e),this},cache:function(t,e){var n=this.getCache(t);return"undefined"!=typeof n&&null!==n?e(n):this.api(t,e),this},api:function(t,e){var n={};return n[t]=1,that=this,jQuery.get("/api.php",n,function(n){that.setCache(t,n),e(n)}),this},supportsStorage:function(){return!1},getCachePrefix:function(){var t=new Date;return t.getFullYear()+t.getMonth()+t.getDate()},clearStorage:function(){this.supportsStorage()&&localStorage.length>8&&localStorage.clear()},setCache:function(t,e){if(this._rawdata[t]=e,this.supportsStorage()){var n=this.getCachePrefix();localStorage.setItem(n,JSON.stringify(this._rawdata))}},getCache:function(t){if(this.supportsStorage()){var e=this.getCachePrefix(),n=JSON.parse(localStorage.getItem(e));return"undefined"==typeof n||null===n?null:"undefined"!=typeof n[t]?n[t]:"undefined"!=typeof this._rawdata[t]?this._rawdata[t]:null}return"undefined"!=typeof this._rawdata[t]?this._rawdata[t]:null}}}),window.app.registerComponent("svg-replace",function(t){return{init:function(){t().each(function(){var t=jQuery(this),e=t.attr("id"),n=t.attr("class"),i=t.attr("src");jQuery.get(i,function(i){var o=jQuery(i).find("svg");"undefined"!=typeof e&&(o=o.attr("id",e)),"undefined"!=typeof n&&(o=o.attr("class",n)),o=o.removeAttr("xmlns:a"),t.replaceWith(o)},"xml")})}}});