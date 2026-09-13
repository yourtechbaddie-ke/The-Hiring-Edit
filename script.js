function goBack(){if(window.history.length>1){window.history.back()}else{window.location.href='../'}}

document.querySelector('.menu-button')?.addEventListener('click',()=>{const nav=document.querySelector('.desktop-nav');nav?.classList.toggle('mobile-open')});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('.desktop-nav')?.classList.remove('mobile-open')}}));