import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s={container:document.querySelector(".container"),form:document.querySelector("#singleImagesForm"),btn:document.querySelector(".form-button"),loader:document.querySelector("#singleImages"),galleryList:document.querySelector(".gallery")};async function u(t){const o="42447990-17cd7de231c9689be9e26f0f6",i="https://pixabay.com/api/",n=`q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=`${i}?key=${o}&${n}`;return await fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function c(){l.error({position:"topRight",iconUrl:"../img/Group.png",maxWidth:"432",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",message:"Sorry, there are no images matching your search query.Please try again!"})}function p(){s.loader.classList.remove("hidden")}function f(){s.loader.classList.add("hidden")}function m(t){return`<li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img
            src="${t.webformatURL}"
            class="gallery-image"
            alt="${t.tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t.likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${t.downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${t.views}</span></div>
            <div class="description-item"><p>Comments</p><span>${t.comments}</span></div>
        </div>
      </li>`}function g(t){const o=t.hits.map(m).join("");if(t.hits.length){s.galleryList.innerHTML=o;const i=new d(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});i.on("show.simplelightbox"),i.refresh()}else c()}async function y(t){t.preventDefault(),p(),s.galleryList.innerHTML="";const o=t.currentTarget.elements.input.value.trim();try{const i=await u(o);g(i)}catch{c()}finally{await f()}s.form.reset()}s.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
