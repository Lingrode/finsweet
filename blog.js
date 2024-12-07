import"./assets/footer-BKmWx1tH.js";import{a}from"./assets/vendor-BQLDhyXy.js";const n=document.querySelectorAll(".posts__item"),r=document.querySelector(".category__title"),l="https://jsonplaceholder.org",i=window.location.pathname;i==="/blog.html"&&(r.textContent="All Categories",r.style.textAlign="left");const p=async()=>(await a(`${l}/posts`)).data,m=t=>{const{title:s,content:e,category:o}=t,c=e.split(".").slice(0,3).join(".");return`
    <div class="posts__item-wrapper">
      <a class="posts__item-subtitle" href="#">${o}</a>
      <h3 class="posts__item-title"><a href="#">${s}</a></h3>
      <p class="posts__item-text">${c}</p>
    </div>
  `},_=async()=>{try{const s=(await p()).filter(e=>e.id<=5);n.forEach((e,o)=>{if(s[o]){const c=m(s[o]);e.insertAdjacentHTML("beforeend",c)}})}catch(t){console.log(t)}};_();
//# sourceMappingURL=blog.js.map
