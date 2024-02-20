import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const s={container:document.querySelector(".container"),form:document.querySelector("#singleImagesForm"),btn:document.querySelector(".form-button"),loader:document.querySelector("#singleImages"),galleryList:document.querySelector(".gallery")};async function u(e){const o="42447990-17cd7de231c9689be9e26f0f6",i="https://pixabay.com/api/",n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${i}?key=${o}&${n}`;return await fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function c(){l.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){s.loader.classList.remove("hidden")}async function m(){await new Promise(e=>setTimeout(e,1500)),s.loader.classList.add("hidden")}function f(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img
            src="${e.webformatURL}"
            class="gallery-image"
            alt="${e.tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${e.likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${e.downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${e.views}</span></div>
            <div class="description-item"><p>Comments</p><span>${e.comments}</span></div>
        </div>
      </li>`}function y(e){const o=e.hits.map(f).join("");if(e.hits.length){s.galleryList.innerHTML=o;const i=new d(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});i.on("show.simplelightbox"),i.refresh()}else c()}async function g(e){e.preventDefault(),p(),s.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();try{const i=await u(o);y(i)}catch{c()}finally{await m()}s.form.reset()}s.form.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
