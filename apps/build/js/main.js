function burgerMenu(e){let n=$(e),t=n.find(".burger-menu_button",".burger-menu_lines"),i=n.find(".burger-menu_link"),r=n.find(".burger-menu_overlay");function a(){n.toggleClass("burger-menu_active"),n.hasClass("burger-menu_active")?$("body").css("overlow","hidden"):$("body").css("overlow","visible")}t.on("click",(e=>{e.preventDefault(),a()})),i.on("click",(()=>a())),r.on("click",(()=>a()))}burgerMenu(".burger-menu"),window.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll(".tel"),(function(e){var n;function t(e){e.keyCode&&(n=e.keyCode),this.selectionStart<2&&e.preventDefault();var t="+998 (__) ___ __ __",i=0,r=t.replace(/\D/g,""),a=this.value.replace(/\D/g,""),o=t.replace(/[_\d]/g,(function(e){return i<a.length?a.charAt(i++)||r.charAt(i):e}));-1!=(i=o.indexOf("_"))&&(i<5&&(i=3),o=o.slice(0,i));var l=t.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<3||n>47&&n<58)&&(this.value=o),"blur"==e.type&&this.value.length<3&&(this.value="")}e.addEventListener("input",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1),e.addEventListener("keydown",t,!1)}))})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),5)};var swiper=new Swiper(".mySwiper",{autoplay:!0,speed:650,breakpoints:{1200:{autoplay:!1}},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),counterAnimateContainer=(swiper=new Swiper(".mySwipermin",{pagination:{el:".swiper-paginationmin",clickable:!0}}),swiper=new Swiper(".mySwipermin2",{pagination:{el:".swiper-paginationmin2",clickable:!0}}),swiper=new Swiper(".mySwipermin3",{pagination:{el:".swiper-paginationmin3",clickable:!0}}),swiper=new Swiper(".mySwiperp",{slidesPerView:1,spaceBetween:0,loop:!0,autoplay:!0,speed:1e3,breakpoints:{576:{slidesPerView:2},992:{slidesPerView:4}},pagination:{el:".swiper-paginationmin3"}}),$(".counter-animate-container")||null);function scrolledDiv(e){try{var n=$(window).scrollTop(),t=n+$(window).height(),i=$(e).offset().top+100,r=i+$(e).height()/1.8}catch(e){console.error()}return r<=t&&i>=n}$(window).on("scroll.animate",(function(){counterAnimateContainer.length&&!counterAnimateContainer.hasClass("counter-animate-started")&&scrolledDiv(counterAnimateContainer)&&(counterAnimateContainer.addClass("counter-animate-started"),setTimeout((function(){$(".number").map((function(e,n){var t=1*(n=$(n)).text();if(!isNaN(t)){var i=0;n.text(i);var r=setInterval((function(){n.text(Math.round(i+=t/50)),i>=t&&(clearInterval(r),n.text(t))}),60)}}),3e3)})))}));