(()=>{var u=["nickel","palladium","platinum","darmstadtium"];function f(a){return u.indexOf(a.toLowerCase())}function h(){let a=window.location.pathname.toLowerCase();for(let t of u)if(a.includes(`/${t}/`))return t;return u[0]}async function b(a,t){return await(await fetch("/data/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({element:a,page:t})})).json()}function x(a){let t=document.createElement("aside");return t.className=`
    fixed left-0 top-0 h-full w-20 md:w-28 bg-black bg-opacity-80
    flex flex-col items-center py-8 gap-6 shadow-xl border-r border-pink-600
    z-50
    hidden md:flex
  `,u.forEach((i,r)=>{let n=document.createElement("img");n.src=`/img/elements/${r}.png`,n.alt=i,n.title=i.charAt(0).toUpperCase()+i.slice(1),n.className=`
      w-14 h-14 object-contain cursor-pointer rounded transition-transform duration-300
      hover:scale-110
      ${i===a?"ring-4 ring-pink-500":""}
    `,n.onclick=()=>{i!==a&&(window.location.href=`/${i}/`)},t.appendChild(n)}),t}function E(a,t,i,r){a.innerHTML="";let n=document.createElement("h2");n.className="text-4xl font-extrabold mb-8 text-pink-400 drop-shadow-md flex items-center gap-4 justify-center flex-wrap";let c=document.createElement("img"),s=f(i);c.src=`/img/elements/${s}.png`,c.alt=i,c.className="w-14 h-14 object-contain",n.appendChild(c),n.appendChild(document.createTextNode(t.Nome)),a.appendChild(n);let e=document.createElement("div");if(e.className="max-w-3xl mx-auto bg-gray-900 bg-opacity-90 rounded-xl p-8 shadow-lg",r===2){let o=document.createElement("video");o.src=`/img/atoms/${s}/${s}.mp4`,o.autoplay=!0,o.loop=!0,o.muted=!0,o.playsInline=!0,o.className="mx-auto mb-8 w-48 h-auto rounded-md shadow-lg",e.appendChild(o)}Object.entries(t).forEach(([o,d])=>{if(o==="Nome")return;let l=document.createElement("div");l.className="mb-7";let m=document.createElement("h3");m.className=`
      text-xl font-semibold mb-2 cursor-pointer
      transition-transform duration-300 ease-in-out
      hover:text-pink-400 hover:-translate-y-1
      flex items-center gap-2 select-none
    `;let p=document.createElement("img");p.src=`/img/elements/${s}.png`,p.alt=o,p.className="w-5 h-5 object-contain",m.appendChild(p),m.appendChild(document.createTextNode(o.replace(/_/g," "))),l.appendChild(m);let g=document.createElement("p");g.className="text-gray-300 leading-relaxed",g.textContent=d,l.appendChild(g),e.appendChild(l)}),a.appendChild(e)}function v(a,t,i){let r=["Informa\xE7\xF5es Gerais","Distribui\xE7\xE3o Eletr\xF4nica","Informa\xE7\xF5es Espec\xEDficas"],n=1,c=document.createElement("nav");return c.className="mb-10 flex flex-wrap justify-center gap-4",r.forEach((s,e)=>{let o=document.createElement("button");o.textContent=s,o.className=`
      px-5 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white
      transition transform duration-300 ease-in-out
      hover:-translate-y-1 hover:scale-105 shadow-lg
      text-sm md:text-base font-semibold
      focus:outline-none focus:ring-2 focus:ring-pink-400
      ${e+1===n?"ring-2 ring-pink-400":""}
    `,o.onclick=()=>{n!==e+1&&(n=e+1,[...c.children].forEach((d,l)=>{d.classList.toggle("ring-2",l===e),d.classList.toggle("ring-pink-400",l===e)}),i(n))},c.appendChild(o)}),t.appendChild(c),s=>{n=s,i(s),[...c.children].forEach((e,o)=>{e.classList.toggle("ring-2",o===s-1),e.classList.toggle("ring-pink-400",o===s-1)})}}function y(){let a=h(),t=document.getElementById("jungle-root");if(!t)return;if(!document.getElementById("bg-video")){let e=document.createElement("video");e.id="bg-video",e.src="/img/local/init/atoms.mp4",e.playbackRate=.8,e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0,document.body.appendChild(e)}let i=document.querySelector("aside");i&&i.remove();let r=x(a);document.body.appendChild(r),t.innerHTML="",t.classList.remove("visible");let n=document.createElement("div");n.className="w-full",t.appendChild(n);let c=e=>{t.style.pointerEvents="none",b(f(a),e).then(o=>{E(n,o,a,e),t.classList.add("visible"),t.style.pointerEvents="auto"}).catch(()=>{n.innerHTML='<p class="text-center text-red-500">Erro ao carregar os dados.</p>',t.classList.add("visible"),t.style.pointerEvents="auto"})};v(f(a),t,c)(1)}document.addEventListener("DOMContentLoaded",y);})();
