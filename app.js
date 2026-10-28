const resources = [
  {id:"physics-solids",subject:"Physics",type:"Worksheet",title:"Mechanical Properties of Solids",description:"Practice stress, strain, elasticity and Young's modulus with numerical questions.",chapter:"Mechanical Properties of Solids",icon:"↗",level:"Practice",url:"resources/physics-mechanical-properties-of-solids.html"},
  {id:"physics-units",subject:"Physics",type:"Revision",title:"Units & Measurements",description:"A quick revision starter for dimensions, significant figures and measurement errors.",chapter:"Units and Measurements",icon:"⌁",level:"Revision",url:"resources/physics-units-measurements.html"},
  {id:"chem-structure",subject:"Chemistry",type:"Notes",title:"Structure of Atom",description:"Organise the core ideas, atomic models and important terms in one place.",chapter:"Structure of Atom",icon:"⚗",level:"Chapter notes"},
  {id:"math-sets",subject:"Mathematics",type:"Worksheet",title:"Sets — Practice Sheet",description:"Build confidence with set notation, operations, intervals and Venn diagrams.",chapter:"Sets",icon:"∑",level:"Practice"},
  {id:"bio-cell",subject:"Biology",type:"Notes",title:"The Living World & Cell",description:"A starting point for definitions, key concepts and quick chapter revision.",chapter:"The Living World / Cell",icon:"❋",level:"Chapter notes"},
  {id:"english-writing",subject:"English",type:"Revision",title:"Writing Skills Revision",description:"A concise study starter for planning clear, structured school responses.",chapter:"Writing Skills",icon:"Aa",level:"Revision"}
];
const iconClass = subject => ({Physics:"physics",Chemistry:"chemistry",Mathematics:"mathematics",Biology:"biology",English:"english"}[subject] || "physics");
const grid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const count = document.getElementById("resourceCount");
const empty = document.getElementById("emptyState");
let activeSubject = "All";
function renderResources(){
  const term = searchInput.value.trim().toLowerCase();
  const filtered = resources.filter(item => {
    const matchesSubject = activeSubject === "All" || item.subject === activeSubject;
    const matchesType = typeFilter.value === "All" || item.type === typeFilter.value;
    const haystack = [item.title,item.subject,item.type,item.description,item.chapter].join(" ").toLowerCase();
    return matchesSubject && matchesType && haystack.includes(term);
  });
  grid.innerHTML = filtered.map((item,index) => `
    <article class="resource-card" style="animation-delay:${index*45}ms">
      <div class="card-top"><span class="resource-icon ${iconClass(item.subject)}">${item.icon}</span><span class="type-tag">${item.type}</span></div>
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p>
      <div class="card-meta"><span class="card-subject">${escapeHtml(item.subject)} · Class 11</span>${item.url ? `<a class="card-link" href="${item.url}">Open resource <span>↗</span></a>` : `<span class="card-link" title="Study material coming soon">Coming soon</span>`}</div>
    </article>`).join("");
  count.textContent = `${filtered.length} resource${filtered.length===1?"":"s"}`;
  grid.hidden = filtered.length === 0;
  empty.hidden = filtered.length !== 0;
}
function escapeHtml(value){return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
document.getElementById("subjectFilters").addEventListener("click",event=>{
  const button=event.target.closest("[data-subject]"); if(!button)return;
  activeSubject=button.dataset.subject;
  document.querySelectorAll("[data-subject]").forEach(el=>el.classList.toggle("selected",el===button));
  renderResources();
});
document.querySelectorAll("[data-pick-subject]").forEach(button=>button.addEventListener("click",()=>{
  activeSubject=button.dataset.pickSubject;
  document.querySelectorAll("[data-subject]").forEach(el=>el.classList.toggle("selected",el.dataset.subject===activeSubject));
  renderResources();
  document.getElementById("resources").scrollIntoView({behavior:"smooth"});
}));
searchInput.addEventListener("input",renderResources);
typeFilter.addEventListener("change",renderResources);
document.getElementById("clearFilters").addEventListener("click",()=>{
  searchInput.value="";typeFilter.value="All";activeSubject="All";
  document.querySelectorAll("[data-subject]").forEach(el=>el.classList.toggle("selected",el.dataset.subject==="All"));
  renderResources();
});
const menuToggle=document.getElementById("menuToggle");
menuToggle.addEventListener("click",()=>{
  const nav=document.querySelector(".top-nav");
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".top-nav a").forEach(link=>link.addEventListener("click",()=>{
  document.querySelector(".top-nav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));
document.addEventListener("keydown",event=>{
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){
    event.preventDefault();searchInput.focus();
  }
});
renderResources();