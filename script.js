/* ============ CATÁLOGO ============
   Precios en pesos colombianos (COP), tomados de products_by_price.docx.
   v = diseños a elegir (productos de conjunto). Sin v = producto único.
   g = fotos de la galería (vistas generales / ángulos). */
const IM=(s,n)=>"images/productos/"+s+"-"+n+".jpg";
const P=[
{id:"pollo-de-peluche",n:"Pollo de peluche",c:"Tejidos",p:30000,img:IM("pollo",1),g:[IM("pollo",1),IM("pollo",2)],
 d:"Pollito tejido en crochet, listo para abrazar.",
 l:"Pollito tejido en crochet en tono crema, con piquito y patitas naranja. Un peluche con mucho cariño para regalar o para acompañar tu espacio."},
{id:"panoletas",n:"Pañoletas",c:"Cabello",p:20000,img:IM("panoletas",1),
 d:"Pañoletas para darle un toque de estilo a tu look.",
 l:"Pañoletas para darle un toque de estilo a tu look: úsalas en el cabello, el cuello o donde tu creatividad quiera. Pronto subiremos las fotos."},
{id:"rosas",n:"Rosas",c:"Tejidos",p:17000,img:IM("rosas",1),
 d:"Rosas rojas tejidas en crochet que no se marchitan.",
 l:"Rosas rojas tejidas en crochet con tallo verde. Un detalle que no se marchita, ideal para regalar o decorar. El precio es por rosa."},
{id:"tulipanes",n:"Tulipanes",c:"Tejidos",p:13000,img:IM("tulipanes",1),
 d:"Tulipanes tejidos en crochet en colores suaves.",
 l:"Tulipanes tejidos en crochet con tallos y hojas verdes, en tonos crema, rosa y amarillo. Un ramito que dura para siempre. El precio es por tulipán."},
{id:"aretes-a-mano",z:1.5,n:"Aretes a mano",c:"Aretes",p:10000,img:IM("aretes-mano",0),g:[IM("aretes-mano",0),IM("aretes-mano","g1")],
 d:"Aretes hechos a mano: mariquitas, fresas, flores y más.",
 l:"Aretes hechos a mano con mucho detalle: mariquitas, fresas, mariposas, orquídeas y flores tejidas. Elige el diseño que más te guste.",
 v:[{n:"Mariquitas",img:IM("aretes-mano",1)},{n:"Fresas",img:IM("aretes-mano",2)},{n:"Mariposas",img:IM("aretes-mano",3)},{n:"Orquídeas",img:IM("aretes-mano",4)},{n:"Flores azules",img:IM("aretes-mano",5)}]},
{id:"gargantillas",n:"Gargantillas",c:"Gargantillas",p:7000,img:IM("gargantillas",0),g:[IM("gargantillas",0),IM("gargantillas","g1")],
 d:"Gargantillas y cadenas para todos los gustos.",
 l:"Gargantillas y cadenas para todos los gustos: de flores y hojas, de encaje con estrella, de cordón y de cadena con dijes. Elige tu diseño favorito.",
 v:[{n:"Hojas verdes",img:IM("gargantillas",1)},{n:"Flores y hojas",img:IM("gargantillas",2)},{n:"Margaritas blancas",img:IM("gargantillas",3)},{n:"Encaje negro con estrella",img:IM("gargantillas",4)},{n:"Cordón con eslabones",img:IM("gargantillas",5)},{n:"Cordón con argolla",img:IM("gargantillas",6)},{n:"Cadena con gota de cristal",img:IM("gargantillas",7)},{n:"Cadena con flor",img:IM("gargantillas",8)}]},
{id:"cristales",z:1.7,n:"Cristales",c:"Cristales",p:7000,img:IM("cristales",0),g:[IM("cristales",0),IM("cristales",5)],
 d:"Piedras, puntas y dijes de cristal.",
 l:"Piedras, puntas y dijes de cristal para regalar, coleccionar o llevar contigo. Elige la pieza que más te llame la atención.",
 v:[{n:"Piedra clara",img:IM("cristales",1)},{n:"Piedra ámbar",img:IM("cristales",2)},{n:"Piedra gris",img:IM("cristales",3)},{n:"Punta roja",img:IM("cristales",4)},{n:"Dije blanco",img:IM("cristales",6)},{n:"Dije azul",img:IM("cristales",7)},{n:"Dije verde",img:IM("cristales",8)}]},
{id:"llaveros",z:1.6,n:"Llaveros",c:"Llaveros",p:7000,img:IM("llaveros",0),g:[IM("llaveros",0)],
 d:"Llaveros con figuritas: hongo, estrella, gatitos y más.",
 l:"Llaveros con figuritas muy tiernas: un hongo, una estrella, gatitos, un tiburón y más. Elige tu diseño y llévalo en tus llaves o en tu mochila.",
 v:[{n:"Hongo rojo",img:IM("llaveros",1)},{n:"Gatito gris",img:IM("llaveros",2)},{n:"Monstruito verde",img:IM("llaveros",3)},{n:"Estrella amarilla",img:IM("llaveros",4)},{n:"Tiburón azul",img:IM("llaveros",5)},{n:"Gatito de panza blanca",img:IM("llaveros",6)}]},
{id:"pines",z:2.1,n:"Pines",c:"Pines",p:7000,img:IM("pines",0),g:[IM("pines",0),IM("pines","g2"),IM("pines","g1")],
 d:"Pines para personalizar tu chaqueta o mochila.",
 l:"Pines para llenar de personalidad tu chaqueta, mochila o gorra. Hay gatitos, frutas, animalitos y figuras en arcilla: elige tu diseño favorito.",
 v:[{n:"Gato con letrero",img:IM("pines",1)},{n:"Gato travieso",img:IM("pines",2)},{n:"Not today",img:IM("pines",3)},{n:"Gato con gorro de rana",img:IM("pines",4)},{n:"Gato en llamas",img:IM("pines",5)},{n:"Gato con globo",img:IM("pines",6)},{n:"Gato con lupa",img:IM("pines",7)},{n:"Narval",img:IM("pines",8)},{n:"Luna con nube",img:IM("pines",9)},{n:"Molinillo",img:IM("pines",10)},{n:"Café",img:IM("pines",11)},{n:"Dinosaurio",img:IM("pines",12)},{n:"Piña",img:IM("pines",13)},{n:"Rábano",img:IM("pines",14)},{n:"Avión de papel",img:IM("pines",15)},{n:"Fantasmita",img:IM("pines",16)},{n:"Calavera rosada",img:IM("pines",17)},{n:"Gatita con moño",img:IM("pines",18)},{n:"Ranita",img:IM("pines",19)}]},
{id:"aretes-clasicos",z:1.5,n:"Aretes clásicos",c:"Aretes",p:7000,img:IM("aretes-clasicos",0),g:[IM("aretes-clasicos",0)],
 d:"Perlas, argollas y cruces que combinan con todo.",
 l:"Aretes clásicos que combinan con todo: perlas, argollas plateadas y una cruz negra. Elige tu diseño.",
 v:[{n:"Perlas pequeñas",img:IM("aretes-clasicos",1)},{n:"Perlas medianas",img:IM("aretes-clasicos",2)},{n:"Argolla ancha",img:IM("aretes-clasicos",3)},{n:"Argolla trenzada",img:IM("aretes-clasicos",4)},{n:"Argolla de perlas",img:IM("aretes-clasicos",5)},{n:"Cruz negra",img:IM("aretes-clasicos",6)}]},
{id:"hippers-para-celular",z:1.6,n:"Hippers para celular",c:"Extras",p:7000,img:IM("hippers",0),g:[IM("hippers",0)],
 d:"Figuritas en arcilla para tu celular.",
 l:"Figuritas en arcilla con animalitos muy tiernos para tu celular. Elige tu favorito.",
 v:[{n:"Perrito café",img:IM("hippers",1)},{n:"Cachorro crema",img:IM("hippers",2)},{n:"Conejo verde",img:IM("hippers",3)},{n:"Gatito amarillo",img:IM("hippers",4)},{n:"Ballena verde",img:IM("hippers",5)}]},
{id:"anillos",n:"Anillos",c:"Anillos",p:6000,img:IM("anillos",1),
 d:"Anillos plateados y dorados para combinar.",
 l:"Anillos en tonos plateado y dorado, de distintos estilos para combinar y apilar. El precio es por anillo."},
{id:"ticket-de-rifa",n:"Ticket de rifa",c:"Extras",p:2000,img:IM("rifa",1),
 d:"Participa en la rifa de Cositas.",
 l:"Ticket para participar en la rifa de Cositas. ¡Mucha suerte! Pronto subiremos la foto."},
{id:"hebillas-para-el-cabello",n:"Hebillas para el cabello",c:"Cabello",p:1500,img:IM("ebillas",4),
 d:"Hebillas de colores: mariquitas, flores, fresas y estrellas.",
 l:"Hebillas para el cabello en formas divertidas: mariquitas, flores pastel, fresas y estrellas de colores. Elige tu diseño. El precio es por hebilla.",
 v:[{n:"Mariquitas",img:IM("ebillas",1)},{n:"Flores pastel",img:IM("ebillas",2)},{n:"Fresas",img:IM("ebillas",3)},{n:"Estrellas de colores",img:IM("ebillas",4)}]},
{id:"piercings-falsos",n:"Piercings falsos",c:"Extras",p:1000,img:IM("piercings",1),
 d:"Estrena look sin perforarte.",
 l:"Piercings falsos, sin perforación, para estrenar look sin compromiso. Pronto subiremos las fotos."}
].map(x=>({...x,g:x.g||[x.img],s:(x.n+" "+x.c+" "+x.d+" "+(x.v||[]).map(v=>v.n).join(" "))}));
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const FEAT=["pines","aretes-a-mano","llaveros","pollo-de-peluche"];

/* ============ UTILIDADES ============ */
const $=id=>document.getElementById(id),fmt=v=>"$"+v.toLocaleString("es-CO");
const nz=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const WA="https://wa.me/573216703979";
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||d)}catch(e){return JSON.parse(d)}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
try{localStorage.removeItem("cositas-cart")}catch(e){}  // carrito del catálogo anterior
let cart=ld("cositas-cart-v2","{}"),fav=new Set(ld("cositas-fav","[]").filter(id=>byId[id]));
let cat="Todos",term="",srt="";
const keyOf=(id,vi)=>id+"|"+(vi<0?"":vi);
const itemOf=k=>{const [id,vi]=k.split("|"),p=byId[id];if(!p)return null;const v=vi!==""&&p.v?p.v[+vi]:null;if(vi!==""&&!v)return null;return {p,v,name:p.n+(v?" – "+v.n:""),img:v?v.img:p.img}};
Object.keys(cart).forEach(k=>{if(!itemOf(k))delete cart[k]});

/* ============ TEMA CLARO / OSCURO ============ */
function setTheme(t,persist){
  document.documentElement.dataset.theme=t;
  if(persist)try{localStorage.setItem("cositas-theme",t)}catch(e){}
  const b=$("theme");b.setAttribute("aria-pressed",t=="dark");
  b.setAttribute("aria-label",t=="dark"?"Activar modo claro":"Activar modo oscuro");
  b.title=t=="dark"?"Modo claro":"Modo oscuro";
  b.querySelector("use").setAttribute("href",t=="dark"?"#i-sun":"#i-moon");
}
$("theme").onclick=()=>setTheme(document.documentElement.dataset.theme=="dark"?"light":"dark",true);
setTheme(document.documentElement.dataset.theme||"light",false);

/* ============ TARJETAS Y CATÁLOGO ============ */
const heart='<svg class="sv" aria-hidden="true"><use href="#i-heart"/></svg>';
const favBtn=(id,cls="fav",txt="")=>`<button class="${cls}" data-fav="${id}" aria-label="${fav.has(id)?"Quitar de favoritos":"Guardar en favoritos"}" aria-pressed="${fav.has(id)}">${heart}${txt}</button>`;
const card=(p,i)=>`<article class="p" style="--i:${Math.min(i,8)}">${favBtn(p.id)}${p.v?`<span class="badge">${p.v.length} diseños</span>`:""}<a class="pimg" href="#producto/${p.id}" aria-label="Ver ${p.n}"><img src="${p.img}" alt="${p.n}" loading="lazy"></a><div class="pb"><h3><a href="#producto/${p.id}">${p.n}</a></h3><div class="meta">${p.d}</div><div class="price">${fmt(p.p)}</div>${p.v?`<a class="add" href="#producto/${p.id}">Elegir diseño</a>`:`<button class="add" data-add="${p.id}">Agregar al carrito</button>`}</div></article>`;
function render(){
  const q=nz(term),safe=term.replace(/[<>&"]/g,""),l=P.filter(p=>(cat=="Todos"||p.c==cat)&&nz(p.s).includes(q));
  if(srt)l.sort((a,b)=>srt=="a"?a.p-b.p:b.p-a.p);
  $("res").textContent=l.length+(l.length==1?" producto":" productos")+(safe?` para "${safe}"`:"")+(cat!="Todos"?` en ${cat}`:"");
  $("grid").innerHTML=l.length?l.map(card).join(""):`<p class="empty">No encontramos "${safe}". Prueba con otra palabra o <a href="${WA}" target="_blank" rel="noopener">escríbenos por WhatsApp</a>.</p>`;
  $("best").innerHTML=FEAT.map(id=>byId[id]).map(card).join("");
}
const CATS=[...new Set(P.map(p=>p.c))];
["Todos",...CATS].forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.dataset.c=c;b.setAttribute("aria-pressed",c==cat);$("chips").appendChild(b)});
const sug=$("sug"),qi=$("q"),pops=["Pines","Aretes","Gargantillas","Llaveros"];
function setCat(c){cat=c;term="";qi.value="";$("qc").hidden=true;[...$("chips").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.c==c));render()}
$("chips").onclick=e=>{const b=e.target.closest(".chip");if(b)setCat(b.dataset.c)};
document.addEventListener("click",e=>{const a=e.target.closest("[data-cat]");if(a)setCat(a.dataset.cat)});
$("sort").onchange=e=>{srt=e.target.value;render()};

/* Categorías del inicio y números */
const EM={Tejidos:"heart",Aretes:"earring",Gargantillas:"necklace",Pines:"sticker",Llaveros:"key",Cristales:"gem",Anillos:"bracelet",Cabello:"sparkles",Extras:"gift"};
$("cats").innerHTML=CATS.map(c=>{const n=P.filter(p=>p.c==c).length;return `<a class="cat" href="#catalogo" data-cat="${c}"><span aria-hidden="true"><svg class="sv"><use href="#i-${EM[c]||"star"}"/></svg></span><b>${c}</b><small>${n} ${n==1?"producto":"productos"}</small></a>`}).join("");
$("stats").innerHTML=[[P.length,"productos"],[CATS.length,"categorías"],["1 a 1","atención por WhatsApp"]].map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join("");

/* ============ BUSCADOR ============ */
function showSug(){const q=nz(qi.value.trim());let h="";if(!q)h='<div class="pop"><small>Búsquedas populares</small>'+pops.map(x=>`<button data-q="${x}">${x}</button>`).join("")+"</div>";else{const m=P.filter(p=>nz(p.s).includes(q)).slice(0,5);h=m.length?m.map(p=>`<button class="sg" data-pid="${p.id}"><img src="${p.img}" alt=""><span><b>${p.n}</b><br><small>${p.c}</small></span><b>${fmt(p.p)}</b></button>`).join("")+`<button class="sg all" data-q="${qi.value.trim().replace(/"/g,"")}">Ver todos los resultados →</button>`:'<p class="meta" style="padding:10px">Sin resultados. Prueba con "pines" o "aretes".</p>'}sug.innerHTML=h;sug.hidden=false}
function doSearch(v){qi.value=v;term=v.trim();cat="Todos";[...$("chips").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.c=="Todos"));$("qc").hidden=!v;sug.hidden=true;render();if(location.hash!="#catalogo")location.hash="#catalogo"}
qi.oninput=()=>{term=qi.value.trim();$("qc").hidden=!qi.value;render();showSug()};qi.onfocus=showSug;
qi.onkeydown=e=>{if(e.key=="Escape")sug.hidden=true;if(e.key=="Enter")doSearch(qi.value)};
sug.onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.pid){sug.hidden=true;qi.value="";term="";$("qc").hidden=true;render();location.hash="#producto/"+b.dataset.pid}else doSearch(b.dataset.q)};
$("qc").onclick=()=>{qi.value="";term="";$("qc").hidden=true;render();showSug();qi.focus()};
document.addEventListener("click",e=>{if(!$("sbox").contains(e.target))sug.hidden=true});

/* ============ CARRITO ============ */
function addCart(k,n=1,imgEl){
  const it=itemOf(k);if(!it)return;
  cart[k]=(cart[k]||0)+n;saveCart();toast("Agregado: "+it.name);if(imgEl)fly(imgEl,it.img);else bump();
}
function saveCart(){sv("cositas-cart-v2",cart);drawCart()}
function drawCart(){
  const ks=Object.keys(cart).filter(k=>cart[k]>0&&itemOf(k)),nm=$("cname").value.trim(),nt=$("cnote").value.trim();let t=0,n=0,msg=[nm?`Hola Cositas, soy ${nm}. Quiero hacer este pedido:`:"Hola Cositas, quiero hacer este pedido:"];
  const inCart=new Set(ks.map(k=>k.split("|")[0]));
  const up=[...FEAT,...P.map(p=>p.id)].filter((id,i,a)=>a.indexOf(id)==i&&!inCart.has(id)).slice(0,3).map(id=>byId[id]).map(x=>`<div class="us"><img src="${x.img}" alt=""><div><b>${x.n}</b><div class="meta">${fmt(x.p)}</div></div>${x.v?`<a class="usb" href="#producto/${x.id}" data-close>Ver diseños</a>`:`<button data-add="${x.id}" aria-label="Agregar ${x.n}">+ Agregar</button>`}</div>`).join("");
  $("items").innerHTML=(ks.length?ks.map(k=>{const it=itemOf(k),q=cart[k];t+=it.p.p*q;n+=q;msg.push(`• ${q} x ${it.name} (${fmt(it.p.p*q)})`);return `<div class="it"><img src="${it.img}" alt=""><div><b>${it.name}</b><div class="meta">${fmt(it.p.p)} c/u</div><div class="qty"><button data-a="-" data-id="${k}" aria-label="Quitar uno">−</button>${q}<button data-a="+" data-id="${k}" aria-label="Agregar uno">+</button></div></div><div class="ir"><b>${fmt(it.p.p*q)}</b><button class="rm" data-a="x" data-id="${k}" aria-label="Eliminar ${it.name} del carrito"><svg class="sv" aria-hidden="true"><use href="#i-trash"/></svg> Eliminar</button></div></div>`}).join(""):`<div class="empty" style="padding:30px 0"><img class="ic huge" src="images/ic-cart.jpg" alt="">Tu carrito está vacío<br><button class="cta dark" data-go="catalogo">Ver catálogo</button></div>`)+(up?`<h3 class="ut">Te puede gustar</h3>${up}`:"");
  $("count").textContent=n;$("ctot").textContent=n?" · "+fmt(t):"";$("dcount").textContent=n?`(${n})`:"";$("clr").hidden=!ks.length;$("total").textContent=fmt(t);
  msg.push("Total: "+fmt(t));if(nt)msg.push("Nota/dirección: "+nt);
  $("wa").href=WA+"?text="+encodeURIComponent(msg.join("\n"));$("wa").setAttribute("aria-disabled",!ks.length);
}
$("items").onclick=e=>{
  if(e.target.closest("[data-close]")){open(false);return}
  const g=e.target.closest("[data-go]");if(g){open(false);location.hash="#"+g.dataset.go;return}
  const ad=e.target.closest("[data-add]");if(ad){const k=ad.dataset.add+"|";cart[k]=(cart[k]||0)+1;saveCart();return}
  const b=e.target.closest("button[data-a]");if(!b)return;
  const id=b.dataset.id,it=itemOf(id),undo=q=>toast("Eliminado: "+it.name,()=>{cart[id]=q;saveCart()});
  if(b.dataset.a=="x"){const q=cart[id];delete cart[id];saveCart();undo(q);return}
  cart[id]+=b.dataset.a=="+"?1:-1;if(cart[id]<=0){delete cart[id];saveCart();undo(1);return}saveCart();
};
$("clr").onclick=()=>{cart={};saveCart();toast("Carrito vaciado")};
$("cname").oninput=$("cnote").oninput=drawCart;

/* ============ FAVORITOS ============ */
function saveFav(){sv("cositas-fav",[...fav]);drawFav()}
function syncFavBtns(){document.querySelectorAll("[data-fav]").forEach(b=>{const on=fav.has(b.dataset.fav);b.setAttribute("aria-pressed",on);b.setAttribute("aria-label",on?"Quitar de favoritos":"Guardar en favoritos");const t=b.querySelector(".ft");if(t)t.textContent=on?"En favoritos":"Guardar en favoritos"})}
function toggleFav(id){
  const on=!fav.has(id);on?fav.add(id):fav.delete(id);saveFav();syncFavBtns();
  toast(on?"Guardado en favoritos: "+byId[id].n:"Quitado de favoritos");
  if(on&&!RM){const f=$("openFav");f.classList.remove("bump");void f.offsetWidth;f.classList.add("bump")}
}
function drawFav(){
  const ids=[...fav].filter(id=>byId[id]);
  $("fitems").innerHTML=ids.length?ids.map(id=>{const p=byId[id];return `<div class="it"><a href="#producto/${id}" data-close><img src="${p.img}" alt="${p.n}"></a><div><b>${p.n}</b><div class="meta">${fmt(p.p)}${p.v?` · ${p.v.length} diseños`:""}</div>${p.v?`<a class="mini" href="#producto/${id}" data-close>Elegir diseño</a>`:`<button class="mini" data-fadd="${id}">Agregar al carrito</button>`}</div><div class="ir"><button class="rm" data-frm="${id}" aria-label="Quitar ${p.n} de favoritos"><svg class="sv" aria-hidden="true"><use href="#i-trash"/></svg> Quitar</button></div></div>`}).join(""):`<div class="empty" style="padding:30px 0"><span class="bd2 big" aria-hidden="true">${heart}</span>Aún no tienes favoritos<br><small>Toca el corazón de un producto para guardarlo aquí.</small><br><button class="cta dark" data-go="catalogo">Ver catálogo</button></div>`;
  $("fcnt").textContent=ids.length;$("fcnt").hidden=!ids.length;$("fcount").textContent=ids.length?`(${ids.length})`:"";$("fclr").hidden=!ids.length;
}
$("fitems").onclick=e=>{
  if(e.target.closest("[data-close]")){open(false);return}
  const g=e.target.closest("[data-go]");if(g){open(false);location.hash="#"+g.dataset.go;return}
  const a=e.target.closest("[data-fadd]");if(a){addCart(a.dataset.fadd+"|");return}
  const r=e.target.closest("[data-frm]");if(r)toggleFav(r.dataset.frm);
};
$("fclr").onclick=()=>{fav.clear();saveFav();syncFavBtns();toast("Favoritos vaciados")};

/* Cajones (carrito y favoritos) */
function open(w){["drawer","fdrawer"].forEach(d=>$(d).classList.toggle("open",d==w));$("veil").classList.toggle("open",!!w)}
$("openCart").onclick=()=>open("drawer");$("openFav").onclick=()=>open("fdrawer");
$("closeCart").onclick=$("closeFav").onclick=$("veil").onclick=$("keep").onclick=$("fkeep").onclick=()=>open(false);
document.onkeydown=e=>{if(e.key=="Escape")open(false)};

/* Clics en tarjetas (catálogo, inicio y similares) */
function onCards(e){
  const f=e.target.closest("[data-fav]");if(f){toggleFav(f.dataset.fav);return}
  const b=e.target.closest("button[data-add]");if(b)addCart(b.dataset.add+"|",1,b.closest(".p").querySelector("img"));
}
$("grid").onclick=$("best").onclick=onCards;

/* ============ PÁGINA DE PRODUCTO ============ */
let cur={id:null,vi:-1,q:1};
function renderProduct(id){
  const p=byId[id];if(!p){location.replace("#catalogo");return false}
  cur={id,vi:-1,q:1};document.title=p.n+" – Cositas";
  const thumbs=p.g.length>1?`<div class="thumbs" id="pthumbs" role="group" aria-label="Más fotos">${p.g.map((g,i)=>`<button data-img="${g}" aria-pressed="${i==0}" aria-label="Foto ${i+1}"><img src="${g}" alt=""></button>`).join("")}</div>`:"";
  const designs=p.v?`<h3 class="dt">Elige tu diseño <small id="dsel">(aún no elegiste)</small></h3><div class="designs" id="designs" role="group" aria-label="Diseños disponibles">${p.v.map((v,i)=>`<button class="dsg" data-v="${i}" aria-pressed="false"><span class="dz"><img src="${v.img}" alt="" loading="lazy" style="--z:${p.z||1}"></span><span>${v.n}</span></button>`).join("")}</div>`:"";
  const sim=P.filter(x=>x.id!=id).sort((a,b)=>((a.c==p.c?0:1)-(b.c==p.c?0:1))||Math.abs(a.p-p.p)-Math.abs(b.p-p.p)).slice(0,4);
  $("pcont").innerHTML=`<nav class="crumbs" aria-label="Ruta"><a href="#catalogo" data-cat="Todos">Catálogo</a><span aria-hidden="true">›</span><a href="#catalogo" data-cat="${p.c}">${p.c}</a><span aria-hidden="true">›</span><b>${p.n}</b></nav>
  <div class="pd"><div class="gal"><div class="main"><img id="pmain" src="${p.img}" alt="${p.n}"></div>${thumbs}</div>
  <div class="info"><span class="tag">${p.c}</span><h2>${p.n}</h2><div class="price big">${fmt(p.p)} <small>c/u</small></div><p class="long">${p.l}</p>${designs}
  <div class="buy"><div class="qty big"><button data-q="-" aria-label="Menos">−</button><span id="pq" aria-live="polite">1</span><button data-q="+" aria-label="Más">+</button></div><button class="add big" id="pbuy" ${p.v?'aria-disabled="true"':""}>${p.v?"Elige un diseño":"Agregar al carrito"}</button>${favBtn(id,"favlg",`<span class="ft">${fav.has(id)?"En favoritos":"Guardar en favoritos"}</span>`)}</div>
  <a class="askwa" id="pask" href="#" target="_blank" rel="noopener"><svg class="sv" aria-hidden="true"><use href="#i-chat"/></svg> Preguntar por este producto</a></div></div>
  <h2 class="hi" style="margin-top:40px"><span class="bd2"><svg class="sv" aria-hidden="true"><use href="#i-sparkles"/></svg></span> Productos similares</h2><div class="grid" id="sim">${sim.map(card).join("")}</div>`;
  $("pask").href=WA+"?text="+encodeURIComponent("Hola Cositas, quiero preguntar por: "+p.n);
  return true;
}
function selectDesign(i){
  const p=byId[cur.id],v=p.v[i];cur.vi=i;
  $("pmain").src=v.img;$("pmain").alt=p.n+" – "+v.n;
  document.querySelectorAll("#designs .dsg").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.v==i));
  document.querySelectorAll("#pthumbs button").forEach(b=>b.setAttribute("aria-pressed",false));
  $("dsel").textContent="("+v.n+")";$("pbuy").removeAttribute("aria-disabled");$("pbuy").textContent="Agregar al carrito";
}
$("pcont").onclick=e=>{
  const t=e.target.closest("#pthumbs button");if(t){$("pmain").src=t.dataset.img;document.querySelectorAll("#pthumbs button").forEach(b=>b.setAttribute("aria-pressed",b==t));return}
  const d=e.target.closest(".dsg");if(d){selectDesign(+d.dataset.v);return}
  const q=e.target.closest("[data-q]");if(q){cur.q=Math.min(99,Math.max(1,cur.q+(q.dataset.q=="+"?1:-1)));$("pq").textContent=cur.q;return}
  if(e.target.closest("#pbuy")){
    const p=byId[cur.id];
    if(p.v&&cur.vi<0){toast("Elige un diseño primero");const ds=$("designs");ds.scrollIntoView({behavior:RM?"auto":"smooth",block:"center"});if(!RM)ds.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300});return}
    addCart(keyOf(cur.id,cur.vi),cur.q,$("pmain"));return
  }
  onCards(e);
};

/* ============ ANIMACIONES ============ */
let tt;function toast(m,undo){const t=$("toast");t.textContent=m;if(undo){const b=document.createElement("button");b.textContent="Deshacer";b.onclick=()=>{undo();t.classList.remove("show")};t.appendChild(b)}t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),undo?4500:1800)}
function bump(){const b=$("openCart");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump")}
function fly(imEl,src){const im=imEl.getBoundingClientRect(),c=$("openCart").getBoundingClientRect();if(RM){bump();return}const w=Math.min(im.width,160),dx=(im.width-w)/2,f=document.createElement("img");f.src=src;f.className="fly";Object.assign(f.style,{left:im.left+dx+"px",top:im.top+"px",width:w+"px",height:w+"px"});document.body.appendChild(f);f.animate([{transform:"none",opacity:1},{transform:`translate(${c.left-im.left-dx+10}px,${c.top-im.top}px) scale(.08) rotate(200deg)`,opacity:.4}],{duration:700,easing:"cubic-bezier(.5,-.2,.8,.6)"}).onfinish=()=>{f.remove();bump()}}
const st=$("star");
st.onclick=()=>{if(RM)return;st.animate([{transform:"rotate(0)"},{transform:"rotate(360deg) scale(1.15)"},{transform:"rotate(720deg)"}],{duration:900,easing:"ease-in-out"});const r=st.getBoundingClientRect();for(let i=0;i<12;i++){const s=document.createElement("span");s.className="bs";s.textContent="★";s.style.left=r.left+r.width/2+"px";s.style.top=r.top+r.height/2+"px";document.body.appendChild(s);const a=i/12*6.28,d=90+Math.random()*80;s.animate([{transform:"translate(0,0)",opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) rotate(200deg)`,opacity:0}],{duration:900,easing:"ease-out"}).onfinish=()=>s.remove()}};

/* ============ NAVEGACIÓN ============ */
const TABS=["inicio","catalogo","producto","como","nosotros","contacto"];
function go(){
  let [id,arg]=location.hash.slice(1).split("/");if(id=="equipo")id="nosotros";if(!TABS.includes(id))id="inicio";
  if(id=="producto"){if(!renderProduct(decodeURIComponent(arg||"")))return}
  else document.title="Cositas – No son solo cosas, son Cositas";
  TABS.forEach(t=>$(t).classList.toggle("on",t==id));
  const nv=id=="producto"?"catalogo":id;document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("on",a.hash=="#"+nv));
  scrollTo({top:0,behavior:RM?"auto":"smooth"});
}
addEventListener("hashchange",go);
$("cform").onsubmit=e=>{e.preventDefault();window.open(WA+"?text="+encodeURIComponent(`Hola Cositas, soy ${$("cfn").value.trim()}. ${$("cfm").value}: ${$("cfx").value.trim()}`),"_blank","noopener")};

render();drawCart();drawFav();go();
