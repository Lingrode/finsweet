(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector(".button-up"),v=document.querySelector(".footer"),p=document.querySelectorAll(".nav-link"),L=window.location.pathname;document.addEventListener("load",()=>{window.location.pathname="/index.html"});const y={"/finsweet/index.html":"Home","/finsweet/blog.html":"Blog"};p.forEach((t,s)=>{y[L]===t.textContent&&t.classList.add("active")});l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const g=()=>{const t=window.innerWidth<=768?.05:.1;new IntersectionObserver(([n])=>{n.isIntersecting?l.classList.add("white"):l.classList.remove("white")},{root:null,threshold:t}).observe(v)};g();const m=document.querySelector(".burger-menu"),a=document.querySelector(".mobile-menu"),h=()=>{a.classList.toggle("visible"),m.classList.toggle("active"),a.classList.contains("visible")?document.body.classList.add("blocked"):document.body.classList.remove("blocked")};m.addEventListener("click",h);const b=document.querySelector(".footer__subscribe-form"),u=document.querySelector(".footer__subscribe-input"),r=document.querySelector(".footer__subscribe-error"),i=document.querySelector(".icon-success"),w=t=>{if(console.log(t),t.preventDefault(),!f()){r.textContent="Enter valid email";return}r.classList.add("visible"),r.textContent="Success!",i.classList.remove("visible");const s=t.submitter;s.textContent="Success!",b.reset(),setTimeout(()=>{i.classList.remove("visible"),r.classList.remove("visible"),t.submitter.textContent="Subscribe"},3e3)},f=()=>{const t=u.validity.valid&&u.value.trim()!=="";return t?(r.classList.remove("visible"),i.classList.add("visible")):(r.classList.add("visible"),i.classList.remove("visible")),t};u.addEventListener("input",f);b.addEventListener("submit",w);export{g as o};
//# sourceMappingURL=footer-D4aJu8yR.js.map
