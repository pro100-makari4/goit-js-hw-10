import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-form-state",a=document.querySelector(".feedback-form");function n(e){const t=e.message.value,o=e.email.value;return{message:t,email:o}}a.addEventListener("input",e=>{const t=n(e.currentTarget),o=JSON.stringify(t);localStorage.setItem(r,o)});const s=localStorage.getItem(r);if(s){const e=JSON.parse(s);a.message.value=e.message,a.email.value=e.email}a.addEventListener("submit",e=>{e.preventDefault();const t=n(e.currentTarget);a.reset(),localStorage.clear(),console.log(t)});
//# sourceMappingURL=commonHelpers2.js.map
