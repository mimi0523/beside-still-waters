// 文章頁底部共用 CTA——所有文章共用同一份文字，改這裡就會套用到全部文章
document.getElementById('article-cta').innerHTML = `
  <h2>讀到這裡，有什麼被觸動嗎？</h2>
  <p>如果你有什麼想問的，或想找人聊聊、一起討論，歡迎跟我預約一次談話。</p>
  <a href="../index.html#cta-final" style="display:inline-block; padding:0.9rem 2rem; border-radius:9999px; background:var(--brand-yellow); color:var(--ink); font-weight:700; font-size:1rem; text-decoration:none; box-shadow:var(--shadow-brand);">預約一次談話 →</a>
`;
