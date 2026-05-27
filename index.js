import{a as l,S as d,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(a){const o="https://pixabay.com/api/",r=new URLSearchParams({key:"56029004-579adc8bb65fd3fada05aacf1",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${o}?${r}`;return(await l.get(s)).data}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},u=new d(".gallery a");function m(a){const o=a.map(r=>`<li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
    <div class="info-item">
      <p>Likes</p>
      <p>${r.likes}</p>
    </div>

    <div class="info-item">
      <p>Views</p>
      <p>${r.views}</p>
    </div>

    <div class="info-item">
      <p>Comments</p>
      <p>${r.comments}</p>
    </div>

    <div class="info-item">
      <p>Downloads</p>
      <p>${r.downloads}</p>
    </div>
  </div>
</li>`).join("");i.gallery.insertAdjacentHTML("beforeend",o),u.refresh()}function p(){i.gallery.innerHTML=""}function y(){i.loader.classList.remove("hidden")}function g(){i.loader.classList.add("hidden")}const h=document.querySelector(".form");h.addEventListener("submit",async a=>{a.preventDefault();const r=new FormData(a.currentTarget).get("search-text").trim();if(r===""){c.error({title:"Помилка",message:"Введіть текст для пошуку"});return}p(),y();try{const s=await f(r);if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(s.hits)}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{g()}});
//# sourceMappingURL=index.js.map
