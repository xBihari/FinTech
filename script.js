document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body,tb=document.getElementById('theme-toggle'),ti=tb?.querySelector('.material-symbols-outlined');
  tb?.addEventListener('click',()=>{body.classList.toggle('light-mode');ti.textContent=body.classList.contains('light-mode')?'light_mode':'dark_mode'});

  const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.aos').forEach(e=>obs.observe(e));

  const co=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting&&!x.target.dataset.c){x.target.dataset.c='1';ac(x.target)}}),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(e=>co.observe(e));

  function ac(el){const t=parseInt(el.dataset.count),p=el.dataset.prefix||'',s=el.dataset.suffix||'',d=1500,st=performance.now();
    function u(n){const e=Math.min((n-st)/d,1),v=Math.floor((1-Math.pow(1-e,3))*t);el.textContent=p+v.toLocaleString()+s;if(e<1)requestAnimationFrame(u)}
    requestAnimationFrame(u)}

  const bo=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting&&!x.target.dataset.a){x.target.dataset.a='1';x.target.querySelectorAll('.bar').forEach((b,i)=>{b.style.animationDelay=i*0.1+'s'})}}),{threshold:.3});
  document.querySelectorAll('.bc').forEach(e=>bo.observe(e));

  const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting&&!x.target.dataset.a){x.target.dataset.a='1';x.target.querySelectorAll('.sd.ac,.sd.pa').forEach((d,i)=>{d.style.animationDelay=i*0.08+'s'})}}),{threshold:.5});
  document.querySelectorAll('.sr').forEach(e=>so.observe(e));

  const rb=document.getElementById('run-btn'),out=document.getElementById('po'),earn=document.getElementById('bce');
  rb?.addEventListener('click',()=>{rb.classList.add('ld');rb.disabled=true;if(out)out.textContent='> Compiling...';
    setTimeout(()=>{if(out)out.textContent='> Running bytecoin_calc.js...\n> Fetching market data...\n> Calculating yields...'},600);
    setTimeout(()=>{rb.classList.remove('ld');rb.disabled=false;if(out)out.textContent='> ✓ Execution complete\n> Portfolio yield: +14.7%\n> Next payout: 2.35 $BC';if(earn)ae(earn)},2000)});

  function ae(el){const t=247.83,d=1200,st=performance.now();
    function u(n){const e=Math.min((n-st)/d,1);el.textContent=(e*(1-Math.pow(1-e,3)>e?1-Math.pow(1-e,3):e)*t/(e||1)).toFixed(2);
      el.textContent=((1-Math.pow(1-e,3))*t).toFixed(2);if(e<1)requestAnimationFrame(u)}
    requestAnimationFrame(u)}

  document.querySelectorAll('.itb').forEach(tab=>{tab.addEventListener('click',()=>{
    document.querySelectorAll('.itb').forEach(t=>t.classList.remove('ac'));
    document.querySelectorAll('.ide-c').forEach(c=>c.style.display='none');
    tab.classList.add('ac');const tg=document.getElementById(tab.dataset.target);if(tg)tg.style.display='block'})});

  document.querySelectorAll('.dpl').forEach(p=>{p.addEventListener('click',()=>{document.querySelectorAll('.dpl').forEach(x=>x.classList.remove('ac'));p.classList.add('ac')})});

  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})});

  const hm=document.getElementById('hamburger'),nl=document.querySelector('.nav-links');
  hm?.addEventListener('click',()=>nl?.classList.toggle('mobile-open'));
});
