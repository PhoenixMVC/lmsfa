
// ---- نمونه دیتای سبد خرید (فیک) ----
// در پروژه واقعی، این را از localStorage یا API یا session بگیر.
const cart = [
  { id: 1, title: "دوره پایتون", qty: 1, price: 450000, thumb: "img/course.png" },
];

// تبدیل عدد به تومان (فارسی ساده)
function formatToman(n) {
  return n.toLocaleString('fa-IR') + " تومان";
}

function calcTotal(items) {
  return items.reduce((sum, it) => sum + it.price * it.qty, 0);
}

function renderCart(items) {
  const countEl = document.getElementById("cart-count");
  const contentEl = document.getElementById("cart-dropdown-content");

  const totalQty = items.reduce((sum, it) => sum + it.qty, 0);
  countEl.textContent = totalQty;

  if (!items || items.length === 0) {
    contentEl.innerHTML = `
          <div class="text-center py-2">
            <div style="font-size:14px; color:#6c757d; margin-bottom:8px;">سبد خرید شما خالی است</div>
            <a href="#" class="btn btn-sm btn-primary">شروع خرید</a>
          </div>
        `;
    return;
  }

  const total = calcTotal(items);

  contentEl.innerHTML = `
        <div>
          ${items.map(item => `
            <div class="cart-item-row">
              <img class="cart-thumb" src="${item.thumb}" alt="${item.title}">
              <div style="min-width:0; flex:1">
                <p class="cart-item-title">${item.title}</p>
                <p class="cart-item-meta">
                  ${formatToman(item.price)} × ${item.qty}
                </p>
              </div>
              <div style="font-weight:700; font-size:12px;">
                ${formatToman(item.price * item.qty)}
              </div>
            </div>
          `).join('')}

          <div class="d-flex justify-content-between align-items-center pt-2">
            <div style="font-weight:700;">مجموع</div>
            <div style="font-weight:800; color:#dc3545;">${formatToman(total)}</div>
          </div>

          <div class="d-flex gap-2 pt-3">
            <a href="cart.html" class="btn btn-sm btn-secondary btn-gray w-50">مشاهده</a>
            <a href="#" class="btn btn-sm btn-blue-bg w-50">تسویه حساب</a>
          </div>
        </div>
      `;
}

// بارگذاری اولیه
renderCart(cart);

// جلوگیری از رفتن به بالا هنگام کلیک (چون href="#")
document.querySelector('#cart-dropdown a.dropdown-toggle')
  .addEventListener('click', (e) => e.preventDefault());
