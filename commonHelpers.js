import"./assets/vendor-60237e46.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c={container:document.querySelector(".container"),form:document.querySelector("#singleImagesForm"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery")};async function l(r){if(r.preventDefault(),refs.gallery.innerHTML="",userTag=r.target.elements.search.value.trim(),console.log(userTag),userTag===""){iziToast.error({icon:"",position:"bottomCenter",message:"Write something"});return}}function a(r){return`<li class="gallery-item">
        <a href="${r.largeImageURL}" class="gallery-link">
          <img
            src="${r.webformatURL}"
            class="gallery-image"
            alt="${r.tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${r.likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r.downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${r.views}</span></div>
            <div class="description-item"><p>Comments</p><span>${r.comments}</span></div>
        </div>
      </li>`}console.log(a);c.form.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers.js.map
