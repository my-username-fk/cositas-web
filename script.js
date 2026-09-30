const IMG=Array.from({length:17},(_,i)=>"images/p"+(i+1)+".jpg");
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
].map((x,i)=>({...x,id:i,img:IMG[i]}));
const $=id=>document.getElementById(id),fmt=v=>"$"+v.toLocaleString("es-CO");
let cart={},cat="Todos",term="",srt="";
try{cart=JSON.parse(localStorage.getItem("cositas-cart")||"{}")}catch(e){}
"COSITAS".split("").forEach((l,i)=>{const s=document.createElement("span");s.textContent=i==1||i==5?l.toLowerCase():l;s.style.setProperty("--r",[-3,2,-2,3,-1,2,-3][i]+"deg");$("ransom").appendChild(s)});
["Todos",...new Set(P.map(p=>p.c))].forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c==cat);b.onclick=()=>{cat=c;[...$("chips").children].forEach(x=>x.setAttribute("aria-pressed",x==b));render()};$("chips").appendChild(b)});
$("q").oninput=e=>{term=e.target.value.toLowerCase().trim();render()};
function render(){
  const l=P.filter(p=>(cat=="Todos"||p.c==cat)&&(p.n+" "+p.c).toLowerCase().includes(term));if(srt)l.sort((a,b)=>srt=="a"?a.p-b.p:srt=="d"?b.p-a.p:b.s-a.s);$("res").textContent=l.length+" productos";
  $("grid").innerHTML=l.length?l.map((p,i)=>`<article class="p" style="--i:${Math.min(i,8)}"><span class="badge">-${Math.round((1-p.p/p.o)*100)}%</span><button class="fav" aria-label="Guardar en favoritos" aria-pressed="${fav.has(p.id)}">♥</button><img src="${p.img}" alt="${p.n}" loading="lazy"><div class="pb"><h3>${p.n}</h3><div class="meta">★ ${p.r} · +${p.s} vendidos</div><div class="price">${fmt(p.p)}<s>${fmt(p.o)}</s></div><button class="add" data-id="${p.id}">Agregar al carrito</button></div></article>`).join(""):`<p class="empty">No encontramos productos con "${term}". Prueba con otra palabra.</p>`;
}
$("grid").onclick=e=>{const f=e.target.closest(".fav");if(f){const id=+f.parentNode.querySelector(".add").dataset.id;fav.has(id)?fav.delete(id):fav.add(id);f.setAttribute("aria-pressed",fav.has(id));return}const b=e.target.closest(".add");if(!b)return;const id=b.dataset.id;cart[id]=(cart[id]||0)+1;save();toast("Agregado: "+P[id].n);fly(b,P[id].img)};
function save(){try{localStorage.setItem("cositas-cart",JSON.stringify(cart))}catch(e){}drawCart()}
function drawCart(){
  const ids=Object.keys(cart).filter(k=>cart[k]>0);let t=0,n=0,msg=["Hola Cositas, quiero hacer este pedido:"];
  $("items").innerHTML=ids.length?ids.map(k=>{const p=P[k],q=cart[k];t+=p.p*q;n+=q;msg.push(`• ${q} x ${p.n} (${fmt(p.p*q)})`);return `<div class="it"><img src="${p.img}" alt=""><div><b>${p.n}</b><div class="qty"><button data-a="-" data-id="${k}" aria-label="Quitar uno">−</button>${q}<button data-a="+" data-id="${k}" aria-label="Agregar uno">+</button></div></div><div class="ir"><b>${fmt(p.p*q)}</b><button class="rm" data-a="x" data-id="${k}" aria-label="Eliminar ${p.n} del carrito">🗑 Eliminar</button></div></div>`}).join(""):`<p class="empty" style="padding:40px 0">Tu carrito está vacío. Agrega algo del catálogo.</p>`;
  $("count").textContent=n;$("clr").hidden=!ids.length;$("total").textContent=fmt(t);msg.push("Total: "+fmt(t));
  $("wa").href="https://wa.me/573216703979?text="+encodeURIComponent(msg.join("\n"));$("wa").setAttribute("aria-disabled",!ids.length);
}
$("items").onclick=e=>{const b=e.target.closest("button[data-a]");if(!b)return;const id=b.dataset.id;if(b.dataset.a=="x"){delete cart[id];toast("Producto eliminado del carrito")}else{cart[id]+=b.dataset.a=="+"?1:-1;if(cart[id]<=0)delete cart[id]}save()};
const open=v=>{$("drawer").classList.toggle("open",v);$("veil").classList.toggle("open",v)};
$("openCart").onclick=()=>open(true);$("closeCart").onclick=$("veil").onclick=()=>open(false);
document.onkeydown=e=>{if(e.key=="Escape")open(false)};
let tt;function toast(m){const t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),1600)}
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
$("q").addEventListener("input",()=>{if(location.hash!="#catalogo")location.hash="#catalogo"});
$("clr").onclick=()=>{cart={};save();toast("Carrito vaciado")};
