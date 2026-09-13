function goBack(){if(window.history.length>1){window.history.back()}else{window.location.href='../'}}

document.querySelector('.menu-button')?.addEventListener('click',()=>{const nav=document.querySelector('.desktop-nav');nav?.classList.toggle('mobile-open')});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('.desktop-nav')?.classList.remove('mobile-open')}}));

// Keep all editorial imagery on-brand and prevent any legacy image from appearing.
const safeImages={
  '.arch-image':'https://images.pexels.com/photos/35644501/pexels-photo-35644501.jpeg?auto=compress&cs=tinysrgb&w=1400',
  '.image-one':'https://images.pexels.com/photos/22690356/pexels-photo-22690356.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '.image-two':'https://images.pexels.com/photos/33510852/pexels-photo-33510852.jpeg?auto=compress&cs=tinysrgb&w=900',
  '.image-three':'https://images.pexels.com/photos/15399447/pexels-photo-15399447.jpeg?auto=compress&cs=tinysrgb&w=900',
  '.panel-image':'https://images.pexels.com/photos/33136967/pexels-photo-33136967.jpeg?auto=compress&cs=tinysrgb&w=1400',
  '.story-one':'https://images.pexels.com/photos/6766291/pexels-photo-6766291.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.story-two':'https://images.pexels.com/photos/9197358/pexels-photo-9197358.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.story-three':'https://images.pexels.com/photos/22690354/pexels-photo-22690354.jpeg?auto=compress&cs=tinysrgb&w=1000'
};
Object.entries(safeImages).forEach(([selector,url])=>document.querySelectorAll(selector).forEach(el=>{el.style.backgroundImage=`url("${url}")`}));