import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector("form"),s="feedback-form-state";e.addEventListener("input",l);e.addEventListener("submit",n);function l(t){t.preventDefault();const a={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem(s,JSON.stringify(a))}function m(){const t=localStorage.getItem(s),a=JSON.parse(t);a&&(e.elements.email.value=a.email,e.elements.message.value=a.message)}m();function n(t){t.preventDefault(),e.elements.email.value&&e.elements.message.value&&(console.log(localStorage.getItem(s)),t.currentTarget.reset(),localStorage.removeItem(s))}
//# sourceMappingURL=commonHelpers2.js.map
