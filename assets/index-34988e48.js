(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=[{author:"Linda Watson",message:"It's amazing what I've accomplished since I embarked in this wonderful journey of self-discovery"},{author:"Paul Stout",message:"At times I cannot recognize myself when I suddenly realize it's me who's doing the very things I couldn't not long ago"},{author:"Mariah Wolf",message:"What an amazing coaching service I've found in Smith Energy Healing. 10/10 would recommend"}],l=r=>{c.map(s=>{const n=document.createElement("p");n.classList.add("testimonialMessage");const e=document.createElement("p");n.innerText=`"${s.message}"`,e.innerText=s.author;const t=document.createElement("div"),i=document.createElement("div");return i.classList.add("authorContainer"),i.appendChild(e),t.classList.add("testimonialContainer"),t.appendChild(n),t.appendChild(i),t.classList.add("invisible"),t}).forEach(s=>{r.appendChild(s)}),a(r,3e3,0)};function a(r,o,s){const n=Array.from(r.children);let e;n.forEach((t,i)=>{i==s?n[i].classList.remove("invisible"):n[i].classList.add("invisible")}),s==n.length-1?e=0:e=s+=1,setTimeout(()=>a(r,o,e),o)}l(document.querySelector(".testimonials"));