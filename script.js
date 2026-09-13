function goBack(){if(window.history.length>1){window.history.back()}else{window.location.href='../'}}

document.querySelector('.menu-button')?.addEventListener('click',()=>{
  const nav=document.querySelector('.desktop-nav');
  nav?.classList.toggle('mobile-open');
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth',block:'start'});
    document.querySelector('.desktop-nav')?.classList.remove('mobile-open');
  }
}));

// Pexels-only editorial imagery. Refined, fashion-led, and intentionally balanced across women, men and mixed professional scenes.
const safeImages={
  '.arch-image':'https://images.pexels.com/photos/26903320/pexels-photo-26903320.jpeg?auto=compress&cs=tinysrgb&w=1400',
  '.image-one':'https://images.pexels.com/photos/15399447/pexels-photo-15399447.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '.image-two':'https://images.pexels.com/photos/7679563/pexels-photo-7679563.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.image-three':'https://images.pexels.com/photos/9198191/pexels-photo-9198191.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.panel-image':'https://images.pexels.com/photos/6077545/pexels-photo-6077545.jpeg?auto=compress&cs=tinysrgb&w=1400',
  '.story-one':'https://images.pexels.com/photos/9198191/pexels-photo-9198191.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.story-two':'https://images.pexels.com/photos/4355400/pexels-photo-4355400.jpeg?auto=compress&cs=tinysrgb&w=1000',
  '.story-three':'https://images.pexels.com/photos/15834478/pexels-photo-15834478.jpeg?auto=compress&cs=tinysrgb&w=1000'
};
Object.entries(safeImages).forEach(([selector,url])=>document.querySelectorAll(selector).forEach(el=>{el.style.backgroundImage=`url("${url}")`}));

// Mobile-first corrections: keep every section inside the viewport and make the navigation usable on phones.
const mobileStyle=document.createElement('style');
mobileStyle.textContent=`
html,body{max-width:100%;overflow-x:hidden}
img,svg,video,iframe{max-width:100%;height:auto}
@media (max-width:760px){
  .announcement{font-size:8px;letter-spacing:.14em;padding:8px 12px;white-space:nowrap;overflow:hidden}
  .site-header{height:72px;padding:0 18px;gap:12px}
  .brand{gap:8px;flex-shrink:0}.brand-name{font-size:17px}.brand-mark{font-size:8px}
  .header-actions{margin-left:auto;gap:12px}.header-actions .back-button{display:none}
  .nav-cta{font-size:8px;letter-spacing:.09em;white-space:nowrap}.nav-cta span{font-size:12px}
  .menu-button{display:block;color:var(--espresso);padding:6px;line-height:1}
  .desktop-nav{display:none;position:absolute;left:0;right:0;top:72px;margin:0;padding:14px 18px 20px;background:var(--ivory);border-bottom:1px solid var(--line);box-shadow:0 14px 30px rgba(36,25,19,.08);flex-direction:column;gap:0}
  .desktop-nav.mobile-open{display:flex}.desktop-nav a{font-size:10px;padding:14px 0;border-bottom:1px solid var(--line)}.desktop-nav a:after{display:none}
  .hero{min-height:auto;padding:48px 20px 54px;display:flex;flex-direction:column;gap:34px}
  .hero-copy{padding:0}.hero h1{font-size:clamp(48px,15vw,72px);margin:18px 0 24px;line-height:.9}.hero-lede{font-size:15px;line-height:1.6}.hero-actions{flex-wrap:wrap;gap:18px;margin-top:28px}
  .hero-art{min-height:420px;width:100%}.arch-image{width:min(82vw,360px);height:420px;border-radius:180px 180px 0 0}.gold-disc{width:68px;height:68px;right:2%;bottom:5%}.editorial-stamp{left:18px;top:22px;font-size:21px}.hero-caption{right:17px;bottom:18px;font-size:7px}.hero-index{display:none}
  .section-grid{display:block;padding:72px 20px}.section-label{margin-bottom:28px}.display{font-size:clamp(40px,12vw,58px);margin-bottom:26px}.body-copy{font-size:16px;line-height:1.65}.manifesto-note{margin-top:34px}
  .opportunities{padding:72px 20px}.section-heading{display:block;margin-bottom:34px}.section-heading h2,.edit-header h2{font-size:clamp(48px,13vw,66px);margin-top:14px}.section-heading>.text-link{display:inline-block;margin-top:24px}
  .opportunity-grid{grid-template-columns:1fr;gap:48px}.job-image{height:380px}.job-meta{gap:12px}.job-meta span:last-child{text-align:right}.job-card h3{font-size:25px}
  .employer-panel{grid-template-columns:1fr;min-height:0}.panel-image{height:420px}.panel-copy{padding:68px 20px}.panel-copy h2{font-size:clamp(46px,12vw,64px)}.panel-copy p{font-size:15px}.feature-list{margin:24px 0 30px}
  .edit-section{padding:72px 20px}.edit-header{display:block;margin-bottom:38px}.edit-header p{margin-top:24px}.story-grid{grid-template-columns:1fr;gap:48px}.story-image{height:360px}
  .flowmingo-bridge{padding:72px 20px;display:block}.bridge-number{font-size:72px;margin-bottom:18px}.bridge-copy h2{font-size:clamp(48px,13vw,68px)}.bridge-copy p{font-size:15px}.button{max-width:100%;white-space:normal}
  .transparency{padding:72px 20px}.transparency h2{font-size:clamp(44px,12vw,62px)}.transparency p{font-size:15px}
  footer{padding:58px 20px 22px}.footer-top{display:block;padding-bottom:42px}.footer-brand strong{font-size:34px}.footer-brand p{margin-top:20px}.footer-links{grid-template-columns:1fr 1fr;gap:38px 28px;margin-top:42px}.footer-links div:last-child{grid-column:1/-1}.footer-bottom{display:flex;flex-direction:column;gap:10px;line-height:1.5}
  .inner-hero{min-height:auto;padding:72px 20px 64px;display:block}.inner-hero h1{font-size:clamp(52px,14vw,72px);max-width:none}.inner-hero p{font-size:16px;line-height:1.65}.inner-number{display:none}.page-section{padding-top:72px;padding-bottom:72px}.page-cta{padding:72px 20px}.page-cta h2{font-size:clamp(48px,13vw,68px)}
  .employer-page-section,.about-principles{display:block;padding:72px 20px}.employer-copy h2,.about-principles h2{font-size:clamp(46px,12vw,64px)}
}
@media (max-width:390px){
  .nav-cta{font-size:7px}.hero{padding-left:16px;padding-right:16px}.opportunities,.edit-section,.section-grid,.transparency,.panel-copy,.flowmingo-bridge,.inner-hero,.page-cta,.employer-page-section,.about-principles{padding-left:16px;padding-right:16px}.job-image,.story-image{height:330px}.footer-links{grid-template-columns:1fr}
}
`;
document.head.appendChild(mobileStyle);
