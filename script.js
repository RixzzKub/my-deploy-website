// Simple interactive JS: theme toggle, form demo, small animations
document.addEventListener('DOMContentLoaded', ()=> {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle (simple switch between two palettes)
  const themeBtn = document.getElementById('themeToggle');
  let dark = true;
  themeBtn.addEventListener('click', () => {
    if(dark){
      document.documentElement.style.setProperty('--bg','#f7f9fc');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--muted','#516377');
      document.documentElement.style.setProperty('--accent','#6b21a8');
      document.documentElement.style.setProperty('--glass','rgba(2,6,23,0.04)');
      themeBtn.textContent = 'Mode Terang';
    } else {
      document.documentElement.style.setProperty('--bg','#0f1724');
      document.documentElement.style.setProperty('--card','#0b1220');
      document.documentElement.style.setProperty('--muted','#98a0b3');
      document.documentElement.style.setProperty('--accent','#7c5cff');
      document.documentElement.style.setProperty('--glass','rgba(255,255,255,0.04)');
      themeBtn.textContent = 'Mode Gelap';
    }
    dark = !dark;
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  });

  // fake form submit
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Mengirim...';
    setTimeout(()=>{
      btn.textContent = 'Terkirim ✓';
      form.reset();
      setTimeout(()=>{
        btn.disabled = false;
        btn.textContent = 'Kirim';
      }, 1500);
    }, 900);
  });
});