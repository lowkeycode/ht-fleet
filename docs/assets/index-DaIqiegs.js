(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const q=200,d=document.querySelector(".print"),p=Array.from(document.querySelectorAll("input")).filter(t=>t.id.includes("og")&&!t.id.includes("total")),l=document.querySelector("#og-yearly-total"),f=Array.from(document.querySelectorAll("input")).filter(t=>t.id.includes("wu")&&!t.id.includes("total")),v=document.querySelector("#wu-yearly-total"),T=document.querySelector("#total-savings"),a=document.querySelector("#compare-a"),u=document.querySelector("#compare-b"),y=document.querySelector("#compare-c"),E=document.querySelector("#compare-d"),S=document.querySelector("#compare-e"),s=document.querySelector("#compare-f"),h=document.querySelector("#compare-g"),i=document.querySelector("#compare-h"),N=document.querySelector("#compare-i"),L=document.querySelector("#compare-j"),A=document.querySelector("#gas-vehicle"),F=document.querySelector("#diesel-vehicle"),C=[a,u,y,E,S],g=[s,h,i,N],I=[...C,...g];function O(){if(p.every(e=>!!e.value)){const e=p.map(n=>Number(Number(n.value).toFixed(2))),c=(e[0]+e[1]+e[2])*e[3]*e[4];l.value=`${c}`,a.value=l.value,b()}}function _(){if(f.every(e=>!!e.value)){const e=f.map(n=>Number(Number(n.value).toFixed(2))),c=(e[0]+e[1]+e[2])*e[3]*e[4];v.value=`${c}`,b()}}function b(){l.value&&v.value&&(T.value=(Number(l.value)-Number(v.value)).toFixed())}function P(){const t=!!a.value&&!!u.value,e=!!a.value&&!!u.value&&!!E.value;if(t&&(y.value=(Number(u.value)*q).toString()),e){const c=Number(a.value)+Number(y.value)+Number(E.value);S.value=c.toString()}}function w(){I.every(e=>!!e.value)&&(L.value=((Number(s.value)*Number(h.value)+Number(i.value)*Number(N.value))*12).toString())}function G(){A.textContent=s.value}function R(){F.textContent=i.value}p.forEach(t=>t.addEventListener("input",O));f.forEach(t=>t.addEventListener("input",_));C.forEach(t=>t.addEventListener("input",P));g.forEach(t=>t.addEventListener("input",w));s.addEventListener("input",G);i.addEventListener("input",R);d==null||d.addEventListener("click",()=>{window.print()});
