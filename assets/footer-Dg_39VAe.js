(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const l=document.querySelector(".button-up"),v=document.querySelector(".footer"),p=document.querySelectorAll(".nav-link"),L=window.location.pathname,y={"/index.html":"Home","/blog.html":"Blog"};p.forEach((t,o)=>{y[L]===t.textContent&&t.classList.add("active")});l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const g=()=>{const t=window.innerWidth<=768?.05:.1;new IntersectionObserver(([n])=>{n.isIntersecting?l.classList.add("white"):l.classList.remove("white")},{root:null,threshold:t}).observe(v)};g();const m=document.querySelector(".burger-menu"),a=document.querySelector(".mobile-menu"),h=()=>{a.classList.toggle("visible"),m.classList.toggle("active"),a.classList.contains("visible")?document.body.classList.add("blocked"):document.body.classList.remove("blocked")};m.addEventListener("click",h);const b=document.querySelector(".footer__subscribe-form"),u=document.querySelector(".footer__subscribe-input"),r=document.querySelector(".footer__subscribe-error"),i=document.querySelector(".icon-success"),S=t=>{if(console.log(t),t.preventDefault(),!f()){r.textContent="Enter valid email";return}r.classList.add("visible"),r.textContent="Success!",i.classList.remove("visible");const o=t.submitter;o.textContent="Success!",b.reset(),setTimeout(()=>{i.classList.remove("visible"),r.classList.remove("visible"),t.submitter.textContent="Subscribe"},3e3)},f=()=>{const t=u.validity.valid&&u.value.trim()!=="";return t?(r.classList.remove("visible"),i.classList.add("visible")):(r.classList.add("visible"),i.classList.remove("visible")),t};u.addEventListener("input",f);b.addEventListener("submit",S);export{g as o};
//# sourceMappingURL=footer-Dg_39VAe.js.map
