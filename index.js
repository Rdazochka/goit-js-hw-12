import{a as g,S as L,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();async function f(t,s){const e="https://pixabay.com/api/",a=new URLSearchParams({key:"56029004-579adc8bb65fd3fada05aacf1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}),r=`${e}?${a}`;return(await g.get(r)).data}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more-btn")},v=new L(".gallery a");function m(t){const s=t.map(e=>`<li class="gallery-item">
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
</li>`).join("");i.gallery.insertAdjacentHTML("beforeend",s),v.refresh()}function w(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden")}function p(){i.loadMore.classList.remove("hidden")}function c(){i.loadMore.classList.add("hidden")}const b=document.querySelector(".form"),S=document.querySelector(".load-more-btn");let l=1,u="";b.addEventListener("submit",async t=>{t.preventDefault();const e=new FormData(t.currentTarget).get("search-text").trim();if(e===""){n.error({title:"Помилка",message:"Введіть текст для пошуку"});return}u=e,w(),l=1,h(),c();try{const a=await f(e,l);if(a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(a.hits),a.totalHits<=15?(c(),n.error({message:"We're sorry, but you've reached the end of search results."})):p()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{y()}});S.addEventListener("click",async()=>{if(l+=1,!!u){h(),c();try{const t=await f(u,l);if(t.hits.length===0){c(),n.error({message:"We're sorry, but you've reached the end of search results."});return}m(t.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),t.totalHits<=l*15?(c(),n.error({message:"We're sorry, but you've reached the end of search results."})):p()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{y()}}});
//# sourceMappingURL=index.js.map
