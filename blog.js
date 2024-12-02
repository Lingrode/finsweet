import"./assets/footer-jTjVQDYj.js";import{a}from"./assets/vendor-BQLDhyXy.js";const r=document.querySelectorAll(".posts__item"),n="https://jsonplaceholder.org";for(const t of r)console.log(t);const i=async()=>(await a(`${n}/posts`)).data,l=t=>{const{title:e,content:s,category:o}=t,c=s.split(".").slice(0,3).join(".");return`
    <div class="posts__item-wrapper">
      <a class="posts__item-subtitle" href="#">${o}</a>
      <h3 class="posts__item-title"><a href="#">${e}</a></h3>
      <p class="posts__item-text">${c}</p>
    </div>
  `},p=async()=>{try{const e=(await i()).filter(s=>s.id<=5);r.forEach((s,o)=>{if(e[o]){const c=l(e[o]);s.insertAdjacentHTML("beforeend",c)}})}catch(t){console.log(t)}};p();
//# sourceMappingURL=blog.js.map
