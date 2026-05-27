import{a as g,S as p,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();async function f(t,a){const e="https://pixabay.com/api/",s=new URLSearchParams({key:"56029004-579adc8bb65fd3fada05aacf1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}),r=`${e}?${s}`;return(await g.get(r)).data}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more-btn")},L=new p(".gallery a");function m(t){const a=t.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
    <div class="info-item">
      <p>Likes</p>
      <p>${e.likes}</p>
    </div>

    <div class="info-item">
      <p>Views</p>
      <p>${e.views}</p>
    </div>

    <div class="info-item">
      <p>Comments</p>
      <p>${e.comments}</p>
    </div>

    <div class="info-item">
      <p>Downloads</p>
      <p>${e.downloads}</p>
    </div>
  </div>
</li>`).join("");i.gallery.insertAdjacentHTML("beforeend",a),L.refresh()}function v(){i.gallery.innerHTML=""}function y(){i.loader.classList.remove("hidden")}function h(){i.loader.classList.add("hidden")}function w(){i.loadMore.classList.remove("hidden")}function d(){i.loadMore.classList.add("hidden")}const b=document.querySelector(".form"),S=document.querySelector(".load-more-btn");let c=1,u="";b.addEventListener("submit",async t=>{t.preventDefault();const e=new FormData(t.currentTarget).get("search-text").trim();if(e===""){n.error({title:"Помилка",message:"Введіть текст для пошуку"});return}u=e,v(),c=1,y(),d();try{const s=await f(e,c);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(s.hits),s.totalHits<=15?d():w()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{h()}});S.addEventListener("click",async()=>{if(c+=1,!!u){y();try{const t=await f(u,c);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),t.totalHits<=c*15&&(d(),n.error({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{h()}}});
//# sourceMappingURL=index.js.map
