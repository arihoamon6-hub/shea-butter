var IMG={"coll": "images/coll.jpg", "soap": "images/soap.jpg", "castor": "images/castor.jpg", "avo": "images/avo.jpg", "bucket": "images/bucket.jpg"};
document.querySelector(".hero").style.setProperty("--bg-img","url("+IMG.coll+")");
IMG.kg="images/kg.jpg";
IMG.g5="images/g5.webp";
var wa=function(n){return "https://wa.me/256777887252?text="+encodeURIComponent("Hello, I would like to order: "+n)};
var sz=function(p){return p.s?'<div class="sz" role="group" aria-label="Choose a size">'+p.s.map(function(s,i){return '<button type="button" aria-pressed="'+(i===0)+'">'+s+'</button>'}).join("")+'</div>':'<p class="ask">Ask us for sizes and prices.</p>'};
var P=[
{n:"Raw Shea Butter",t:"Raw butter",i:IMG.coll,m:{"500g":IMG.g5,"1kg":IMG.kg,"18kg":IMG.bucket},s:["250g","500g","1kg","18kg"],d:"Pure, unrefined shea butter from Kigumba with nothing added. Rich in vitamins A and E for skin and hair."},
{n:"Shea Body Soap",t:"Soap",i:IMG.soap,d:"Shea body soap rich in vitamins A and E. Cleans well and leaves skin soft."},
{n:"Castor Oil",t:"Oil",i:IMG.castor,s:["50ml","100ml"],d:"Pure castor oil, thick and nourishing. Often used on hair, lashes, eyebrows and dry skin."},
{n:"Avocado Oil",t:"Oil",i:IMG.avo,d:"Light, smooth oil for skin and hair. Soaks in easily without feeling heavy."}
];
var grid=document.getElementById("grid");
function draw(f){grid.innerHTML=P.filter(function(p){return f==="all"||p.t===f}).map(function(p){
return '<article class="card"><div class="pic"><img src="'+p.i+'" alt="'+p.n+'" loading="lazy"></div><div class="body"><span class="tag">'+p.t+'</span><h3>'+p.n+'</h3><p>'+p.d+'</p>'+sz(p)+'<a class="btn" target="_blank" rel="noopener" data-n="'+p.n+'" href="'+wa(p.n+(p.s?" ("+p.s[0]+")":""))+'">Order this</a></div></article>'}).join("")}
draw("all");
grid.addEventListener("click",function(e){var b=e.target.closest(".sz button");if(!b)return;var c=b.closest(".card");c.querySelectorAll(".sz button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});var a=c.querySelector("a.btn");a.href=wa(a.dataset.n+" ("+b.textContent+")");var q=P.filter(function(x){return x.n===a.dataset.n})[0],im=c.querySelector("img");if(q&&im)im.src=(q.m&&q.m[b.textContent])||q.i});
document.querySelectorAll(".tabs button").forEach(function(b){b.onclick=function(){
document.querySelectorAll(".tabs button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});draw(b.dataset.f)}});
function show(){var h=(location.hash||"#home").slice(1);if(["home","about","products","us"].indexOf(h)<0)h="home";
document.querySelectorAll(".view").forEach(function(v){v.classList.toggle("on",v.id==="v-"+h)});
document.querySelectorAll("nav a").forEach(function(a){if(a.dataset.v===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
window.scrollTo(0,0)}
window.addEventListener("hashchange",show);show();
