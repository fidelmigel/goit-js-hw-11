import{S as g,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="46590037-17c17d616a892c92268aed1a1",d="https://pixabay.com/api/",f=o=>{const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${s.toString()}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})},p=o=>o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:m})=>`
    <li class="gallery-item">
      <a href="${t}" class="gallery-link">
        <img class="gallery-img" src="${s}" alt="${a}" width="360" height="200"/>
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${r}</p>
        <p><b>Comments:</b> ${i}</p>
        <p><b>Downloads:</b> ${m}</p>
      </div>
    </li>
  `).join("");let n;const y=()=>{n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:250})},b={searchForm:document.querySelector(".search-form"),inputForm:document.querySelector(".form-input"),searchBtn:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},{searchForm:L,inputForm:w,searchBtn:q,gallery:c,loaderEl:u}=b;L.addEventListener("submit",S);function S(o){o.preventDefault();const s=o.target.elements.search.value.trim();if(s===""){c.innerHTML="",o.target.reset(),l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"});return}c.innerHTML="",u.classList.remove("is-hidden"),f(s).then(t=>{t.total===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"}),c.innerHTML=p(t.hits),y(),o.target.reset()}).catch(t=>console.log(t)).finally(()=>{o.target.reset(),u.classList.add("is-hidden")})}
//# sourceMappingURL=index.js.map
