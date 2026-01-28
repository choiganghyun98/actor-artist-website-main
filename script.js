const buttons=document.querySelectorAll('nav button');
const sections=document.querySelectorAll('.section');


buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.target;
    sections.forEach(sec=>sec.classList.remove('active'));
    buttons.forEach(b=>b.classList.remove('is-active'));
    const next=document.getElementById(target);
    if(next) next.classList.add('active');
    btn.classList.add('is-active');
  });
});

window.addEventListener('load',()=>{const r=document.querySelector('.main-reveal');if(r) setTimeout(()=>r.classList.add('is-revealed'),80);});