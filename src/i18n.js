/* i18n – vanilla, Impeccable-safe | Navy+Gold, no layout break */
const SUPPORTED = ['pt','en','es','de'];
const STORAGE_KEY = 'profile-lang';
let current = 'pt';
let dict = {};
let listeners = [];
let bound = false;

export function getLang(){ return current; }
export function getDict(){ return dict; }

function detect(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if(saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language||'pt').slice(0,2).toLowerCase();
  if(SUPPORTED.includes(nav)) return nav;
  return 'pt';
}

async function load(lang){
  try{
    const res = await fetch(`/locales/${lang}.json`, {cache:'no-store'});
    if(!res.ok) throw new Error(res.status);
    dict = await res.json();
  }catch(e){
    console.warn('[i18n] load failed', lang, e);
    dict = {};
  }
  return dict;
}

function applyStatic(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if(val==null) return;
    // heroBadge precisa preservar o dot
    if(key==='heroBadge'){
      const dot = el.querySelector('.dot');
      if(dot) el.innerHTML = dot.outerHTML + val;
      else el.textContent = val;
      return;
    }
    if(el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  });
  // CV href per-lang – todos os links .js-cv
  if(dict['cvHref']){
    document.querySelectorAll('.js-cv').forEach(a=>{
      a.setAttribute('href', dict['cvHref']);
      if(dict['cvDownload']) a.setAttribute('download', dict['cvDownload']);
    });
    // atualiza label do filename no card contato (span após strong)
    const contactFile = document.querySelector('#downloadCV-contact span:last-child');
    if(contactFile && dict['cvDownload']) contactFile.textContent = dict['cvDownload'];
  }
}

function updateHtmlLang(){
  document.documentElement.lang = current==='pt' ? 'pt-BR' : current;
}

function updateSwitcher(){
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    const active = b.dataset.lang===current;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
}

function bindSwitcher(){
  if(bound) return;
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.addEventListener('click', ()=> setLang(b.dataset.lang));
  });
  bound = true;
}

export async function setLang(lang){
  if(!SUPPORTED.includes(lang)) return;
  current = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  await load(lang);
  updateHtmlLang();
  updateSwitcher();
  applyStatic();
  listeners.forEach(fn=>{ try{fn(lang, dict);}catch(e){console.error(e);} });
}

export function onLangChange(fn){ listeners.push(fn); }
export function t(key, fallback){ return dict[key] ?? fallback ?? key; }

export async function initI18n(){
  current = detect();
  await load(current);
  updateHtmlLang();
  // bind immediately (module runs after DOM parsed – elements already exist)
  bindSwitcher();
  updateSwitcher();
  applyStatic();
  // also bind on DOMContentLoaded as safety for HMR
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', ()=>{
      bindSwitcher();
      updateSwitcher();
      applyStatic();
    });
  }
  return { lang: current, dict };
}
