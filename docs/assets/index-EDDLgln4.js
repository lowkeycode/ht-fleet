(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const b=200,d=document.querySelector("button"),f=Array.from(document.querySelectorAll("input")).filter(t=>t.id.includes("og")&&!t.id.includes("total")),u=document.querySelector("#og-yearly-total"),p=Array.from(document.querySelectorAll("input")).filter(t=>t.id.includes("wu")&&!t.id.includes("total")),v=document.querySelector("#wu-yearly-total"),C=document.querySelector("#total-savings"),a=document.querySelector("#compare-a"),l=document.querySelector("#compare-b"),s=document.querySelector("#compare-c"),i=document.querySelector("#compare-d"),y=document.querySelector("#compare-e"),h=document.querySelector("#compare-f"),g=document.querySelector("#compare-g"),S=document.querySelector("#compare-h"),q=[a,l,s,i,y],E=[h,g,S],T=[a,l,s,i,y,h,g];function L(){if(f.every(e=>!!e.value)){const e=f.map(n=>Number(Number(n.value).toFixed(2))),c=(e[0]+e[1]+e[2])*e[3]*e[4];u.value=`${c}`,a.value=u.value,N()}}function A(){if(p.every(e=>!!e.value)){const e=p.map(n=>Number(Number(n.value).toFixed(2))),c=(e[0]+e[1]+e[2])*e[3]*e[4];v.value=`${c}`,N()}}function N(){u.value&&v.value&&(C.value=(Number(u.value)-Number(v.value)).toFixed())}function F(){console.log("here"),console.log(a.value),console.log(l.value);const t=!!a.value&&!!l.value,e=!!a.value&&!!l.value&&!!i.value;if(t&&(s.value=(Number(l.value)*b).toString()),e){const c=Number(a.value)+Number(s.value)+Number(i.value);y.value=c.toString()}}function O(){T.every(e=>!!e.value)&&(S.value=(Number(h.value)*Number(g.value)*12).toString())}f.forEach(t=>t.addEventListener("input",L));p.forEach(t=>t.addEventListener("input",A));q.forEach(t=>t.addEventListener("input",F));E.forEach(t=>t.addEventListener("input",O));d==null||d.addEventListener("click",()=>{window.print()});