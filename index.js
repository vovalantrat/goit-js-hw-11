import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{n as t,t as n}from"./assets/vendor-BaVgY16z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=e(t(),1),i=`55035088-7302bd2f5e79e745d79615534`,a=`https://pixabay.com/api/`;function o(e){return n.get(a,{params:{key:i,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}}).then(e=>e.data)}var s=document.querySelector(`.gallery`),c=document.querySelector(`.loader`),l;function u(e){let t=e.map(e=>`
    <li class="li-elem">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="status">
        <p class="status-item">Likes <span class="status-number">${e.likes}</span></p>
        <p class="status-item">Views <span class="status-number">${e.views}</span></p>
        <p class="status-item">Comments <span class="status-number">${e.comments}</span></p>
        <p class="status-item">Downloads <span class="status-number">${e.downloads}</span></p>
      </div>
    </li>
  `).join(``);s.insertAdjacentHTML(`beforeend`,t),l?l.refresh():l=new SimpleLightbox(`.gallery a`,{captions:!0,captionsData:`alt`,captionDelay:250})}function d(){s.innerHTML=``}function f(){c.classList.add(`visible`)}function p(){c.classList.remove(`visible`)}document.querySelector(`.form`).addEventListener(`submit`,e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();t&&(d(),f(),o(t).then(e=>{if(e.hits.length===0){r.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`,maxWidth:432,class:`custom-toast`});return}u(e.hits)}).catch(()=>{r.default.error({message:`Something went wrong`})}).finally(()=>{p()}))});
//# sourceMappingURL=index.js.map