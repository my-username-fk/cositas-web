const IMG=Array.from({length:17},(_,i)=>"images/p"+(i+1)+".jpg");
const D=["Par de pulseras que se atraen, ideal para dos", "Cadenas doradas con dijes de colores", "Doble cadena plateada con estrellas", "Collar, aretes y anillo con mariposas", "Audífonos in-ear de diseño llamativo", "Pack de stickers kawaii para personalizar", "Set de pulseras de cuentas que combinan", "Stickers vintage para agendas y cuadernos", "Dijes de acero estilo nórdico", "Audífonos inalámbricos con estuche de carga", "Aretes dorados en forma de estrella", "Llaveros con estrella y cuentas", "Caja dorada lista para sorprender", "Cuentas de colores suaves y alegres", "Caja con estrellas y collares de cuentas", "Collar con estrella brillante", "Cuentas pastel y dije de estrella"];
const P=[
{n:"Pulseras magnéticas",c:"Pulseras",p:24900,o:34900,r:4.8,s:320},
{n:"Collares con dijes",c:"Collares",p:19900,o:27900,r:4.7,s:410},
{n:"Collares de estrella",c:"Collares",p:17900,o:24900,r:4.9,s:530},
{n:"Set de mariposa",c:"Collares",p:29900,o:42900,r:4.8,s:260},
{n:"Audífonos IEM",c:"Audífonos",p:59900,o:79900,r:4.6,s:150},
{n:"Stickers decorativos",c:"Stickers",p:9900,o:14900,r:4.9,s:780},
{n:"Pulseras elásticas",c:"Pulseras",p:12900,o:18900,r:4.7,s:390},
{n:"Stickers collage",c:"Stickers",p:8900,o:12900,r:4.8,s:640},
{n:"Collares vikingos",c:"Collares",p:22900,o:31900,r:4.7,s:220},
{n:"Audífonos gamer",c:"Audífonos",p:49900,o:69900,r:4.5,s:180},
{n:"Aretes de estrella",c:"Aretes",p:15900,o:22900,r:4.8,s:290},
{n:"Llaveros de estrella",c:"Llaveros",p:11900,o:16900,r:4.7,s:340},
{n:"Caja regalo estrellada",c:"Regalos",p:14900,o:21900,r:4.9,s:410},
{n:"Pulsera de cuentas de colores",c:"Pulseras",p:13900,o:19900,r:4.8,s:370},
{n:"Caja sorpresa con collares",c:"Regalos",p:34900,o:49900,r:4.9,s:190},
{n:"Dije de estrella dorada",c:"Collares",p:16900,o:23900,r:4.7,s:310},
{n:"Collar estrella con cuentas",c:"Collares",p:21900,o:29900,r:4.8,s:270}
].map((x,i)=>({...x,id:i,img:IMG[i],d:D[i]}));
const $=id=>document.getElementById(id),fmt=v=>"$"+v.toLocaleString("es-CO");
let cart={},cat="Todos",term="",srt="";
try{cart=JSON.parse(localStorage.getItem("cositas-cart")||"{}")}catch(e){}
"COSITAS".split("").forEach((l,i)=>{const s=document.createElement("span");s.textContent=i==1||i==5?l.toLowerCase():l;s.style.setProperty("--r",[-3,2,-2,3,-1,2,-3][i]+"deg");$("ransom").appendChild(s)});
["Todos",...new Set(P.map(p=>p.c))].forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c==cat);b.onclick=()=>{cat=c;[...$("chips").children].forEach(x=>x.setAttribute("aria-pressed",x==b));render()};$("chips").appendChild(b)});
const sug=$("sug"),qi=$("q"),pops=["Collares","Stickers","Audífonos","Regalos"];
const nz=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function showSug(){const q=nz(qi.value.trim());let h="";if(!q)h='<div class="pop"><small>Búsquedas populares</small>'+pops.map(x=>`<button data-q="${x}">${x}</button>`).join("")+"</div>";else{const m=P.filter(p=>nz(p.n+" "+p.c+" "+p.d).includes(q)).slice(0,5);h=m.length?m.map(p=>`<button class="sg" data-pid="${p.id}"><img src="${p.img}" alt=""><span><b>${p.n}</b><br><small>${p.c}</small></span><b>${fmt(p.p)}</b></button>`).join("")+`<button class="sg all" data-q="${qi.value.trim().replace(/"/g,"")}">Ver todos los resultados →</button>`:'<p class="meta" style="padding:10px">Sin resultados. Prueba con "collar" o "sticker".</p>'}sug.innerHTML=h;sug.hidden=false}
function doSearch(v){qi.value=v;term=v.trim();$("qc").hidden=!v;sug.hidden=true;render();if(location.hash!="#catalogo")location.hash="#catalogo"}
qi.oninput=()=>{term=qi.value.trim();$("qc").hidden=!qi.value;render();showSug()};qi.onfocus=showSug;
qi.onkeydown=e=>{if(e.key=="Escape")sug.hidden=true;if(e.key=="Enter")doSearch(qi.value)};
sug.onclick=e=>{const b=e.target.closest("button");if(!b)return;b.dataset.pid?doSearch(P[b.dataset.pid].n):doSearch(b.dataset.q)};
$("qc").onclick=()=>{qi.value="";term="";$("qc").hidden=true;render();showSug();qi.focus()};
document.addEventListener("click",e=>{if(!$("sbox").contains(e.target))sug.hidden=true});
const card=(p,i)=>`<article class="p" style="--i:${Math.min(i,8)}"><span class="badge">-${Math.round((1-p.p/p.o)*100)}%</span><button class="fav" aria-label="Guardar en favoritos" aria-pressed="${fav.has(p.id)}">♥</button><img src="${p.img}" alt="${p.n}" loading="lazy"><div class="pb"><h3>${p.n}</h3><div class="meta">${p.d}</div><div class="meta">★ ${p.r} · +${p.s} vendidos</div><div class="price">${fmt(p.p)}<s>${fmt(p.o)}</s></div><button class="add" data-id="${p.id}">Agregar al carrito</button></div></article>`;
function render(){
  const q=nz(term),safe=term.replace(/[<>&"]/g,""),l=P.filter(p=>(cat=="Todos"||p.c==cat)&&nz(p.n+" "+p.c+" "+p.d).includes(q));
  if(srt)l.sort((a,b)=>srt=="a"?a.p-b.p:srt=="d"?b.p-a.p:srt=="o"?(b.o-b.p)/b.o-(a.o-a.p)/a.o:b.s-a.s);
  $("res").textContent=l.length+" productos"+(safe?` para "${safe}"`:"")+(cat!="Todos"?` en ${cat}`:"");
  $("grid").innerHTML=l.length?l.map(card).join(""):`<p class="empty">No encontramos "${safe}". Prueba con otra palabra o <a href="https://wa.me/573216703979" target="_blank" rel="noopener">escríbenos por WhatsApp</a>.</p>`;
  $("best").innerHTML=[...P].sort((a,b)=>b.s-a.s).slice(0,4).map(card).join("");
}
$("grid").onclick=e=>{const f=e.target.closest(".fav");if(f){const id=+f.parentNode.querySelector(".add").dataset.id;fav.has(id)?fav.delete(id):fav.add(id);f.setAttribute("aria-pressed",fav.has(id));return}const b=e.target.closest(".add");if(!b)return;const id=b.dataset.id;cart[id]=(cart[id]||0)+1;save();toast("Agregado: "+P[id].n);fly(b,P[id].img)};
function save(){try{localStorage.setItem("cositas-cart",JSON.stringify(cart))}catch(e){}drawCart()}
function drawCart(){
  const ids=Object.keys(cart).filter(k=>cart[k]>0),nm=$("cname").value.trim(),nt=$("cnote").value.trim();let t=0,n=0,sv=0,msg=[nm?`Hola Cositas, soy ${nm}. Quiero hacer este pedido:`:"Hola Cositas, quiero hacer este pedido:"];
  const up=P.filter(x=>!cart[x.id]).sort((a,b)=>b.s-a.s).slice(0,3).map(x=>`<div class="us"><img src="${x.img}" alt=""><div><b>${x.n}</b><div class="meta">${fmt(x.p)}</div></div><button data-add="${x.id}" aria-label="Agregar ${x.n}">+ Agregar</button></div>`).join("");
  $("items").innerHTML=(ids.length?ids.map(k=>{const p=P[k],q=cart[k];t+=p.p*q;n+=q;sv+=(p.o-p.p)*q;msg.push(`• ${q} x ${p.n} (${fmt(p.p*q)})`);return `<div class="it"><img src="${p.img}" alt=""><div><b>${p.n}</b><div class="meta">${fmt(p.p)} c/u</div><div class="qty"><button data-a="-" data-id="${k}" aria-label="Quitar uno">−</button>${q}<button data-a="+" data-id="${k}" aria-label="Agregar uno">+</button></div></div><div class="ir"><b>${fmt(p.p*q)}</b><button class="rm" data-a="x" data-id="${k}" aria-label="Eliminar ${p.n} del carrito">🗑 Eliminar</button></div></div>`}).join(""):`<div class="empty" style="padding:30px 0">Tu carrito está vacío 🛍<br><button class="cta dark" data-go="catalogo">Ver catálogo</button></div>`)+(up?`<h3 class="ut">Te puede gustar</h3>${up}`:"");
  $("count").textContent=n;$("ctot").textContent=n?" · "+fmt(t):"";$("dcount").textContent=n?`(${n})`:"";$("clr").hidden=!ids.length;$("total").textContent=fmt(t);
  $("save").hidden=!sv;$("save").textContent="🎉 Ahorras "+fmt(sv)+" en este pedido";msg.push("Total: "+fmt(t));if(nt)msg.push("Nota/dirección: "+nt);
  $("wa").href="https://wa.me/573216703979?text="+encodeURIComponent(msg.join("\n"));$("wa").setAttribute("aria-disabled",!ids.length);
}
$("items").onclick=e=>{const g=e.target.closest("[data-go]");if(g){open(false);location.hash="#"+g.dataset.go;return}const ad=e.target.closest("[data-add]");if(ad){const i=ad.dataset.add;cart[i]=(cart[i]||0)+1;save();return}const b=e.target.closest("button[data-a]");if(!b)return;const id=b.dataset.id,undo=q=>toast("Eliminado: "+P[id].n,()=>{cart[id]=q;save()});if(b.dataset.a=="x"){const q=cart[id];delete cart[id];save();undo(q);return}cart[id]+=b.dataset.a=="+"?1:-1;if(cart[id]<=0){delete cart[id];save();undo(1);return}save()};
const open=v=>{$("drawer").classList.toggle("open",v);$("veil").classList.toggle("open",v)};
$("openCart").onclick=()=>open(true);$("closeCart").onclick=$("veil").onclick=()=>open(false);
document.onkeydown=e=>{if(e.key=="Escape")open(false)};
let tt;function toast(m,undo){const t=$("toast");t.textContent=m;if(undo){const b=document.createElement("button");b.textContent="Deshacer";b.onclick=()=>{undo();t.classList.remove("show")};t.appendChild(b)}t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),undo?4500:1600)}
function tick(){const d=new Date(),e=new Date(d);e.setHours(23,59,59,999);const s=Math.floor((e-d)/1000),z=v=>String(v).padStart(2,"0");$("h").textContent=z(Math.floor(s/3600));$("m").textContent=z(Math.floor(s%3600/60));$("s").textContent=z(s%60);if(!RM)$("s").animate([{transform:"scale(1.3)"},{transform:"none"}],{duration:300})}
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,fav=new Set(),st=$("star");
function bump(){const b=$("openCart");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump")}
function fly(btn,src){const im=btn.closest(".p").querySelector("img").getBoundingClientRect(),c=$("openCart").getBoundingClientRect();if(RM){bump();return}const f=document.createElement("img");f.src=src;f.className="fly";Object.assign(f.style,{left:im.left+"px",top:im.top+"px",width:im.width+"px",height:im.width+"px"});document.body.appendChild(f);f.animate([{transform:"none",opacity:1},{transform:`translate(${c.left-im.left+10}px,${c.top-im.top}px) scale(.08) rotate(200deg)`,opacity:.4}],{duration:700,easing:"cubic-bezier(.5,-.2,.8,.6)"}).onfinish=()=>{f.remove();bump()}}
st.onclick=()=>{if(RM)return;st.animate([{transform:"rotate(0)"},{transform:"rotate(360deg) scale(1.15)"},{transform:"rotate(720deg)"}],{duration:900,easing:"ease-in-out"});const r=st.getBoundingClientRect();for(let i=0;i<12;i++){const s=document.createElement("span");s.className="bs";s.textContent="★";s.style.left=r.left+r.width/2+"px";s.style.top=r.top+r.height/2+"px";document.body.appendChild(s);const a=i/12*6.28,d=90+Math.random()*80;s.animate([{transform:"translate(0,0)",opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) rotate(200deg)`,opacity:0}],{duration:900,easing:"ease-out"}).onfinish=()=>s.remove()}};
tick();setInterval(tick,1000);render();drawCart();
$("sort").onchange=e=>{srt=e.target.value;render()};
const TABS=["inicio","catalogo","como","nosotros","contacto"];
function go(){let id=location.hash.slice(1);if(id=="equipo")id="nosotros";if(!TABS.includes(id))id="inicio";TABS.forEach(t=>$(t).classList.toggle("on",t==id));document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("on",a.hash=="#"+id));scrollTo({top:0,behavior:RM?"auto":"smooth"})}
addEventListener("hashchange",go);go();
$("clr").onclick=()=>{cart={};save();toast("Carrito vaciado")};

function setCat(c){cat=c;term="";qi.value="";$("qc").hidden=true;[...$("chips").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.c==c));render()}
[...$("chips").children].forEach(b=>{b.dataset.c=b.textContent;b.onclick=()=>setCat(b.dataset.c)});
document.addEventListener("click",e=>{const a=e.target.closest("[data-cat]");if(a)setCat(a.dataset.cat)});
const EM={Pulseras:"📿",Collares:"✨",Audífonos:"🎧",Stickers:"🌸",Aretes:"⭐",Llaveros:"🔑",Regalos:"🎁"};
$("cats").innerHTML=Object.keys(EM).map(c=>`<a class="cat" href="#catalogo" data-cat="${c}"><span aria-hidden="true">${EM[c]}</span><b>${c}</b><small>${P.filter(p=>p.c==c).length} productos</small></a>`).join("");
$("stats").innerHTML=[[P.length,"productos"],[Object.keys(EM).length,"categorías"],["1 a 1","atención por WhatsApp"]].map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join("");
$("cname").oninput=$("cnote").oninput=drawCart;$("keep").onclick=()=>open(false);
$("cform").onsubmit=e=>{e.preventDefault();window.open("https://wa.me/573216703979?text="+encodeURIComponent(`Hola Cositas, soy ${$("cfn").value.trim()}. ${$("cfm").value}: ${$("cfx").value.trim()}`),"_blank","noopener")};
$("best").onclick=$("grid").onclick;
