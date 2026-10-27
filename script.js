// ===== Dữ liệu =====
const categories = [
  { id: 'snack',  icon: '🍟', name: 'Snack giòn',   note: 'Khoai, bim bim' },
  { id: 'kho',    icon: '🥩', name: 'Đồ khô',       note: 'Bò, gà, mực' },
  { id: 'traicay',icon: '🥭', name: 'Trái cây sấy', note: 'Xoài, mít' },
  { id: 'hat',    icon: '🥜', name: 'Hạt dinh dưỡng',note: 'Điều, hạnh nhân' },
  { id: 'keo',    icon: '🍭', name: 'Kẹo ngọt',     note: 'Kẹo, thạch' },
  { id: 'banh',   icon: '🍪', name: 'Bánh quy',     note: 'Bánh, cookie' },
  { id: 'caytay', icon: '🌶️', name: 'Món cay',      note: 'Tóp mỡ, cay xé' },
  { id: 'nuoc',   icon: '🧋', name: 'Đồ uống',      note: 'Trà, nước ép' },
];

const moods = [
  { id: 'cay',      icon: '🌶️', name: 'Cay',       line: 'Cay xé lưỡi, đã cơn thèm',       color: '#ff7a5c' },
  { id: 'ngot',     icon: '🍭', name: 'Ngọt',      line: 'Ngọt lịm tim, dỗ dành tâm hồn',   color: '#ff9ebb' },
  { id: 'gion',     icon: '🍟', name: 'Giòn',      line: 'Giòn rụm, nhai nghe vui tai',     color: '#ffc933' },
  { id: 'giaikhat', icon: '🧋', name: 'Giải khát', line: 'Mát lạnh, xua tan oi bức',        color: '#7fd3f0' },
];

const products = [
  { id: 1,  name: 'Xoài sấy dẻo Cam Ranh 200g',    emoji: '🥭', cat: 'traicay', price: 59000,  old: 75000,  tag: 'Hot',      rating: 4.8, reviews: 320, mood: ['ngot'] },
  { id: 2,  name: 'Khô bò miếng vị cay 150g',      emoji: '🥩', cat: 'kho',     price: 129000, old: 160000, tag: '-20%',     rating: 4.9, reviews: 512, mood: ['cay'] },
  { id: 3,  name: 'Khoai tây chiên vị phô mai',    emoji: '🍟', cat: 'snack',   price: 25000,  old: 30000,  tag: 'Mới',      rating: 4.5, reviews: 140, mood: ['gion'] },
  { id: 4,  name: 'Hạt điều rang muối 250g',       emoji: '🥜', cat: 'hat',     price: 89000,  old: 105000, tag: 'Bán chạy', rating: 4.7, reviews: 268, mood: ['gion'] },
  { id: 5,  name: 'Kẹo dẻo trái cây hộp 300g',     emoji: '🍬', cat: 'keo',     price: 45000,  old: 55000,  tag: '-18%',     rating: 4.4, reviews: 97,  mood: ['ngot'] },
  { id: 6,  name: 'Bánh quy bơ sữa hộp thiếc',     emoji: '🍪', cat: 'banh',    price: 99000,  old: 120000, tag: 'Mới',      rating: 4.6, reviews: 184, mood: ['ngot', 'gion'] },
  { id: 7,  name: 'Tóp mỡ cháy tỏi ớt 100g',       emoji: '🌶️', cat: 'caytay',  price: 49000,  old: 62000,  tag: 'Hot',      rating: 4.8, reviews: 405, mood: ['cay', 'gion'] },
  { id: 8,  name: 'Trà đào cam sả chai 500ml',     emoji: '🍑', cat: 'nuoc',    price: 29000,  old: 35000,  tag: '-17%',     rating: 4.3, reviews: 76,  mood: ['giaikhat'] },
  { id: 9,  name: 'Bắp rang bơ caramel 120g',      emoji: '🍿', cat: 'snack',   price: 35000,  old: 42000,  tag: 'Bán chạy', rating: 4.7, reviews: 233, mood: ['ngot', 'gion'] },
  { id: 10, name: 'Mực rim me cay ngọt 100g',      emoji: '🦑', cat: 'kho',     price: 79000,  old: 95000,  tag: 'Hot',      rating: 4.6, reviews: 158, mood: ['cay', 'ngot'] },
  { id: 11, name: 'Chuối sấy giòn vị mật ong',     emoji: '🍌', cat: 'traicay', price: 39000,  old: 48000,  tag: 'Mới',      rating: 4.2, reviews: 61,  mood: ['gion', 'ngot'] },
  { id: 12, name: 'Socola hạnh nhân thanh 80g',    emoji: '🍫', cat: 'keo',     price: 55000,  old: 70000,  tag: '-21%',     rating: 4.9, reviews: 342, mood: ['ngot'] },
  { id: 13, name: 'Soda chanh dây lon 330ml',      emoji: '🥤', cat: 'nuoc',    price: 19000,  old: 25000,  tag: 'Mới',      rating: 4.4, reviews: 52,  mood: ['giaikhat'] },
  { id: 14, name: 'Nước ép dứa tươi chai 350ml',   emoji: '🍍', cat: 'nuoc',    price: 32000,  old: 38000,  tag: '-16%',     rating: 4.5, reviews: 88,  mood: ['giaikhat'] },
  { id: 15, name: 'Trà sữa trân châu đóng ly',     emoji: '🧋', cat: 'nuoc',    price: 35000,  old: 42000,  tag: 'Hot',      rating: 4.7, reviews: 210, mood: ['giaikhat', 'ngot'] },
  { id: 16, name: 'Nước dừa xiêm hộp 330ml',       emoji: '🥥', cat: 'nuoc',    price: 27000,  old: 32000,  tag: 'Mới',      rating: 4.6, reviews: 74,  mood: ['giaikhat'] },
  { id: 17, name: 'Cơm cháy chà bông sốt cay',     emoji: '🍘', cat: 'snack',   price: 42000,  old: 52000,  tag: 'Bán chạy', rating: 4.8, reviews: 301, mood: ['cay', 'gion'] },
];

// Deal chớp nhoáng: món có giá riêng + số lượng giới hạn mỗi ngày
const flashDeals = [
  { id: 201, base: 2,  price: 89000, stock: 50 },
  { id: 202, base: 7,  price: 35000, stock: 80 },
  { id: 203, base: 12, price: 39000, stock: 60 },
  { id: 204, base: 15, price: 24000, stock: 100 },
].map(d => {
  const b = products.find(p => p.id === d.base);
  return { ...b, ...d, name: b.name + ' ⚡', old: b.old, tag: 'Flash' };
});

// Combo: danh sách [id món, số lượng], giá combo cố định, giá lẻ tự tính
const combos = [
  { id: 101, theme: 'a', emoji: '🎬', name: 'Combo Xem Phim',    badge: 'Hot',            price: 99000,  desc: 'Bắp rang + snack + trà đào, đủ cho 2 người.',      items: [[9, 1], [3, 1], [8, 2]] },
  { id: 102, theme: 'b', emoji: '💼', name: 'Combo Văn Phòng',   badge: 'Bán chạy',       price: 189000, desc: '6 gói ăn vặt đủ vị cho cả tuần deadline.',          items: [[1, 1], [11, 1], [3, 2], [9, 1], [5, 1]] },
  { id: 103, theme: 'c', emoji: '🌶️', name: 'Combo Cay Xé Lưỡi', badge: 'Tiết kiệm nhất', price: 229000, desc: 'Dành cho hội ghiền cay: khô bò, tóp mỡ, mực rim.', items: [[2, 1], [7, 1], [10, 1], [8, 1]] },
];

// Voucher (mỗi đơn dùng 1 mã): pct = giảm %, ship = giảm đúng bằng phí ship phải trả
const vouchers = [
  { code: 'GIAM20',   big: '20%', tag: 'GIẢM',     title: 'Giảm 20% cho đơn từ 199.000đ', cond: 'Giảm tối đa 60.000đ',        type: 'pct',  value: 20, cap: 60000, min: 199000 },
  { code: 'WELCOM10', big: '10%', tag: 'GIẢM',     title: 'Giảm 10% – quà chào mừng',     cond: 'Tối đa 30.000đ, mọi đơn',    type: 'pct',  value: 10, cap: 30000, min: 0 },
  { code: 'FREESHIP', big: '0đ',  tag: 'FREESHIP', title: 'Miễn phí vận chuyển',          cond: 'Cho đơn từ 99.000đ',         type: 'ship', min: 99000 },
];
const VOUCHER_EXPIRE = '31/12/2026';

// Giao hàng: hỏa tốc chỉ áp dụng ở Hà Nội & TP.HCM; đơn từ 299.000đ giảm 25.000đ phí ship
const SHIP_METHODS = {
  standard: { name: 'Giao tiêu chuẩn', fee: 25000, eta: '2–4 ngày làm việc' },
  express:  { name: 'Giao hỏa tốc',    fee: 45000, eta: 'trong 2 giờ' },
};
const EXPRESS_CITIES = ['Hà Nội', 'TP. Hồ Chí Minh'];
const SHIP_PROMO_MIN = 299000, SHIP_PROMO = 25000;

// Mọi thứ có thể bỏ vào giỏ
const catalog = [...products, ...flashDeals, ...combos];
const byId = (id) => catalog.find(p => p.id == id);
combos.forEach(c => { c.old = c.items.reduce((s, [id, q]) => s + byId(id).price * q, 0); });

// ===== Tiện ích =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (n) => n.toLocaleString('vi-VN') + 'đ';
const PAGE_SIZE = 8;
let activeCat = 'all', keyword = '', sortBy = 'default', visible = PAGE_SIZE;
let activeMood = 'cay', applied = '';

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

// Đọc giỏ hàng đã lưu (bỏ qua dữ liệu hỏng hoặc món không còn tồn tại)
function loadCart() {
  const raw = read('avl_cart', {});
  if (!raw || typeof raw !== 'object') return {};
  return Object.fromEntries(Object.entries(raw).filter(([id, q]) =>
    byId(id) && Number.isInteger(q) && q > 0));
}
let cart = loadCart(); // { id: số lượng }
let savedV = (() => {
  const raw = read('avl_vouchers', []);
  return Array.isArray(raw) ? raw.filter(c => vouchers.some(v => v.code === c)) : [];
})();
const discount = (p) => (p.old - p.price) / p.old;

const stars = (r) => {
  const full = Math.round(r);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
};
const tagClass = (t) => (t === 'Mới' ? 'new' : (t === 'Hot' || t === 'Flash') ? 'hot' : '');
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');


// Ảnh món ăn riêng cho từng sản phẩm; không dùng ảnh ngẫu nhiên/trùng lặp.
const foodPhotos = {
  1: 'assets/snack-01.jpg',
  2: 'assets/snack-02.jpg',
  3: 'assets/snack-03.jpg',
  4: 'assets/snack-04.jpg',
  5: 'assets/snack-05.jpg',
  6: 'assets/snack-06.jpg',
  7: 'assets/snack-07.jpg',
  8: 'assets/snack-08.jpg',
  9: 'assets/snack-09.jpg',
  10: 'assets/snack-10.jpg',
  11: 'assets/snack-11.jpg',
  12: 'assets/snack-12.jpg',
  13: 'assets/snack-13.jpg',
  14: 'assets/snack-14.jpg',
  15: 'assets/snack-15.jpg',
  16: 'assets/snack-16.jpg',
  17: 'assets/snack-17.jpg'
};
function productPhoto(p) {
  const src = foodPhotos[p.id] || foodPhotos[3];
  return `<img src="${src}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/snack-01.jpg'">`;
}

// ===== Thẻ sản phẩm (dùng chung cho lưới chính và lưới mood) =====
function cardHTML(p) {
  return `
    <article class="card">
      <span class="card__tag ${tagClass(p.tag)}">${p.tag}</span>
      <div class="card__img">${productPhoto(p)}</div>
      <h3>${p.name}</h3>
      <div class="stars" aria-label="${p.rating} sao">${stars(p.rating)}<small>${p.rating} (${p.reviews})</small></div>
      <div class="price"><b>${fmt(p.price)}</b><s>${fmt(p.old)}</s></div>
      <button class="add" data-add="${p.id}">Thêm vào giỏ</button>
    </article>`;
}

// ===== Render danh mục & bộ lọc =====
function renderCategories() {
  $('#catGrid').innerHTML = categories.map(c => `
    <button class="cat" data-cat="${c.id}"><span>${c.icon}</span>${c.name}<small>${c.note}</small></button>`).join('');
  const chips = [{ id: 'all', name: 'Tất cả' }, ...categories];
  $('#filters').innerHTML = chips.map(c =>
    `<button class="chip ${c.id === activeCat ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>`).join('');
}

// ===== Render sản phẩm =====
function getList() {
  const list = products.filter(p =>
    (activeCat === 'all' || p.cat === activeCat) && norm(p.name).includes(norm(keyword.trim())));
  const sorters = {
    'price-asc':  (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    'discount':   (a, b) => discount(b) - discount(a),
  };
  return sorters[sortBy] ? list.sort(sorters[sortBy]) : list;
}

function renderProducts() {
  const list = getList();
  const shown = list.slice(0, visible);
  $('#productGrid').innerHTML = shown.map(cardHTML).join('');
  $('#emptyMsg').hidden = list.length > 0;
  $('#moreBtn').hidden = list.length <= visible;
  $('#moreBtn').textContent = `Xem thêm (${list.length - shown.length} món)`;
  $('#resultInfo').textContent = list.length ? `Hiển thị ${shown.length}/${list.length} món` : '';
  $$('.cat, .chip').forEach(el =>
    el.classList.toggle('active', el.dataset.cat === activeCat));
}

// Thay đổi bộ lọc/tìm kiếm/sắp xếp thì quay về trang đầu
const refresh = () => { visible = PAGE_SIZE; renderProducts(); };

// ===== Mood =====
function renderMoodTabs() {
  $('#moodTabs').innerHTML = moods.map(m => {
    const n = products.filter(p => p.mood.includes(m.id)).length;
    return `<button class="mood" style="--mc:${m.color}" data-mood="${m.id}" aria-pressed="${m.id === activeMood}">
      <span aria-hidden="true">${m.icon}</span>${m.name}<small>${m.line}</small><em>${n} món</em></button>`;
  }).join('');
}

function setMood(id) {
  activeMood = id;
  const m = moods.find(x => x.id === id);
  const list = products.filter(p => p.mood.includes(id));
  $$('.mood').forEach(b => b.setAttribute('aria-pressed', b.dataset.mood === id));
  $('#moodInfo').textContent = `${list.length} món hợp mood “${m.name}” – ${m.line.toLowerCase()}`;
  $('#moodGrid').innerHTML = list.map(cardHTML).join('');
}

// ===== Flash sale + đồng hồ đếm ngược tới hết ngày =====
function soldCount(p) {
  // Số đã bán tăng dần theo giờ trong ngày, ổn định giữa các lần tải trang
  const now = new Date();
  const frac = (now.getHours() * 60 + now.getMinutes()) / 1440;
  const jitter = ((now.getDate() * 7 + p.id) % 10) / 100;
  return Math.min(p.stock - 3, Math.floor(p.stock * (0.3 + 0.6 * frac + jitter)));
}

function renderFlash() {
  $('#flashGrid').innerHTML = flashDeals.map(p => {
    const sold = soldCount(p), left = p.stock - sold;
    return `
    <article class="card card--flash">
      <span class="card__tag hot">-${Math.round(discount(p) * 100)}%</span>
      <div class="card__img">${productPhoto(p)}</div>
      <h3>${p.name}</h3>
      <div class="price"><b>${fmt(p.price)}</b><s>${fmt(p.old)}</s></div>
      <div class="stock">
        <div class="stock__bar" role="img" aria-label="Đã bán ${sold} trên ${p.stock}"><i style="width:${Math.round(sold / p.stock * 100)}%"></i></div>
        <small>${left <= 15 ? '🔥 Sắp hết – ' : ''}Đã bán ${sold}/${p.stock}</small>
      </div>
      <button class="add" data-add="${p.id}">Mua ngay</button>
    </article>`;
  }).join('');
}

const pad = (n) => String(n).padStart(2, '0');
let flashDay = new Date().getDate();
function tickCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const s = Math.max(0, Math.ceil((end - now) / 1000));
  $('#cdH').textContent = pad(Math.floor(s / 3600));
  $('#cdM').textContent = pad(Math.floor(s % 3600 / 60));
  $('#cdS').textContent = pad(s % 60);
  if (now.getDate() !== flashDay) { flashDay = now.getDate(); renderFlash(); } // qua ngày mới thì mở deal mới
}

// ===== Combo =====
function renderCombos() {
  $('#comboGrid').innerHTML = combos.map(c => {
    const save = c.old - c.price, pct = Math.round(save / c.old * 100);
    return `
    <article class="combo combo--${c.theme}">
      <span class="combo__badge">${c.badge}</span>
      <div class="combo__emoji" aria-hidden="true">${c.emoji}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <ul>${c.items.map(([id, q]) => { const p = byId(id); return `<li>${p.emoji} ${p.name} <b>×${q}</b></li>`; }).join('')}</ul>
      <div class="combo__price"><b>${fmt(c.price)}</b><s>${fmt(c.old)}</s></div>
      <span class="combo__save">Tiết kiệm ${fmt(save)} (${pct}%)</span>
      <button class="add" data-add="${c.id}">Thêm combo vào giỏ</button>
    </article>`;
  }).join('');
}

// ===== Voucher =====
function renderVouchers() {
  $('#voucherGrid').innerHTML = vouchers.map(v => {
    const saved = savedV.includes(v.code);
    return `
    <article class="ticket">
      <div class="ticket__val"><b>${v.big}</b><small>${v.tag}</small></div>
      <div class="ticket__body">
        <h3>${v.title}</h3>
        <p>${v.cond}</p>
        <p>HSD: ${VOUCHER_EXPIRE}</p>
        <div class="ticket__row">
          <button class="ticket__code" data-copy="${v.code}" title="Bấm để sao chép mã">${v.code} 📋</button>
          ${saved
            ? `<button class="btn btn--primary btn--sm" data-use="${v.code}">Dùng ngay</button>`
            : `<button class="btn btn--ghost btn--sm" data-save="${v.code}">Lưu mã</button>`}
        </div>
      </div>
    </article>`;
  }).join('');
  $('#voucherSaved').textContent = savedV.length;
  $('#savedChips').innerHTML = savedV.length
    ? '<span>Mã đã lưu:</span>' + savedV.map(c => `<button type="button" data-apply="${c}">${c}</button>`).join('')
    : '';
}

function saveVoucher(code) {
  if (!savedV.includes(code)) { savedV.push(code); write('avl_vouchers', savedV); }
  renderVouchers();
}

// ===== Tính tiền đơn hàng =====
const orderForm = $('#orderForm');
const currentShip = () => orderForm.elements.ship.value || 'standard';

// Phí ship của một phương thức: gross = phí gốc, promo = ưu đãi đơn từ 299K, net = phải trả
function shipFor(method, sub) {
  const gross = SHIP_METHODS[method].fee;
  const promo = sub >= SHIP_PROMO_MIN ? Math.min(SHIP_PROMO, gross) : 0;
  return { gross, promo, net: gross - promo };
}

// Kiểm tra mã có dùng được với đơn hiện tại không và giảm được bao nhiêu
function evalVoucher(v, sub, shipNet) {
  if (!sub) return { ok: false, amount: 0, msg: 'Hãy thêm món vào giỏ trước nhé' };
  if (sub < v.min) return { ok: false, amount: 0, msg: `Mua thêm ${fmt(v.min - sub)} để dùng mã ${v.code}.` };
  const amount = v.type === 'ship' ? shipNet : Math.min(Math.round(sub * v.value / 100), v.cap);
  if (!amount) return { ok: true, amount: 0, msg: `Mã ${v.code} hợp lệ nhưng đơn này không còn phí ship để giảm.` };
  return { ok: true, amount, msg: '' };
}

// Tự chọn mã có lợi nhất (giảm nhiều tiền nhất). Nếu khách tự nhập mã dùng được thì giữ mã đó.
function calc() {
  const sub = total();
  const sh = sub ? shipFor(currentShip(), sub) : { gross: 0, promo: 0, net: 0 };
  const list = vouchers.map(v => ({ v, ...evalVoucher(v, sub, sh.net) }));
  const best = list.filter(x => x.ok && x.amount > 0).sort((a, b) => b.amount - a.amount)[0] || null;
  const chosen = applied ? list.find(x => x.v.code === applied) : null;
  const chosenOk = chosen && chosen.ok && chosen.amount > 0;

  const pick = chosenOk ? chosen : best;
  let msg = '', ok = false, tip = '';
  if (chosenOk) {
    ok = true;
    msg = `Đã áp dụng ${chosen.v.code}: giảm ${fmt(chosen.amount)} 🎉`;
    if (best.amount > chosen.amount)
      tip += `<span>Có mã lợi hơn:</span><button type="button" data-apply="${best.v.code}">Dùng ${best.v.code} (giảm ${fmt(best.amount)})</button>`;
  } else if (chosen) {
    msg = chosen.msg + (best ? ` Tạm dùng mã ${best.v.code} (giảm ${fmt(best.amount)}).` : '');
  } else if (best) {
    ok = true;
    msg = `Tự chọn mã có lợi nhất: ${best.v.code} – giảm ${fmt(best.amount)} 🎉`;
  }
  if (applied) tip += `<button type="button" data-clear-voucher>Bỏ chọn, tự chọn mã tốt nhất</button>`;

  // Gợi ý mã tốt hơn nếu mua thêm một chút
  const next = vouchers.filter(v => sub && sub < v.min)
    .map(v => ({ v, gap: v.min - sub, amt: evalVoucher(v, v.min, shipFor(currentShip(), v.min).net).amount }))
    .filter(x => x.amt > (pick ? pick.amount : 0))
    .sort((a, b) => a.gap - b.gap)[0];
  if (next) tip += `<span>💡 Mua thêm ${fmt(next.gap)} để mở mã ${next.v.code} (giảm ${fmt(next.amt)})</span>`;

  const disc = pick ? pick.amount : 0;
  return { sub, sh, disc, code: pick ? pick.v.code : '', ok, msg, tip, total: Math.max(0, sub + sh.net - disc) };
}

const shipPriceHTML = (x) => x.promo ? `<s>${fmt(x.gross)}</s> ${x.net ? fmt(x.net) : 'Miễn phí'}` : fmt(x.gross);

function renderSummary() {
  const s = calc();
  $('#orderSub').textContent = fmt(s.sub);
  $('#orderDiscLabel').innerHTML = s.code ? `Giảm giá <small>${s.code}</small>` : 'Giảm giá';
  $('#orderDisc').textContent = s.disc ? '-' + fmt(s.disc) : '0đ';
  $('#orderShip').innerHTML = !s.sub ? '—' : shipPriceHTML(s.sh);
  $('#orderTotal').textContent = fmt(s.total);
  $('#priceStd').innerHTML = shipPriceHTML(shipFor('standard', s.sub));
  $('#priceExp').innerHTML = shipPriceHTML(shipFor('express', s.sub));

  const hint = $('#shipHint');
  hint.textContent = !s.sub ? ''
    : s.sub < SHIP_PROMO_MIN ? `Mua thêm ${fmt(SHIP_PROMO_MIN - s.sub)} để được giảm ${fmt(SHIP_PROMO)} phí ship 🚚`
    : `Đơn từ ${fmt(SHIP_PROMO_MIN)}: đã giảm ${fmt(SHIP_PROMO)} phí ship 🎉`;
  hint.classList.toggle('ok', s.sub >= SHIP_PROMO_MIN);

  const m = $('#voucherMsg');
  m.textContent = s.msg;
  m.className = 'voucher-msg' + (s.msg ? (s.ok ? ' ok' : ' err') : '');
  $('#voucherTip').innerHTML = s.tip;
  if (s.sub) $('#err-cart').textContent = '';
}

function applyCode(raw) {
  let code = raw.trim().toUpperCase();
  if (code === 'WELCOME10') code = 'WELCOM10';
  const v = vouchers.find(x => x.code === code);
  $('#voucherInput').value = code;
  applied = v ? code : '';
  renderSummary();
  if (code && !v) {
    const m = $('#voucherMsg');
    m.textContent = `Mã “${code}” không tồn tại hoặc đã hết hạn`;
    m.className = 'voucher-msg err';
  }
}

// ===== Giỏ hàng =====
const save = () => write('avl_cart', cart);
const total = () => Object.entries(cart).reduce((s, [id, q]) => s + byId(id).price * q, 0);

function lineHTML([id, q]) {
  const p = byId(id);
  return `<div class="line">
    <div class="line__emoji">${p.emoji}</div>
    <div class="line__info"><b>${p.name}</b><span>${fmt(p.price * q)}</span></div>
    <div class="qty"><button type="button" data-dec="${id}" aria-label="Giảm">−</button><span>${q}</span><button type="button" data-inc="${id}" aria-label="Tăng">+</button></div>
    <button class="del" data-del="${id}" aria-label="Xóa ${p.name}">🗑️</button>
  </div>`;
}

function renderCart() {
  const entries = Object.entries(cart);
  const count = entries.reduce((s, [, q]) => s + q, 0);
  const html = entries.length ? entries.map(lineHTML).join('') : '<p class="noitem">Giỏ hàng đang trống 🛒<br>Thêm món ngon vào nhé!</p>';
  $('#cartCount').textContent = count;
  $('#cartItems').innerHTML = html;
  $('#orderList').innerHTML = html;
  $('#cartTotal').textContent = fmt(total());
  renderSummary();
  save();
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

const toggleCart = (open) => {
  $('#drawer').classList.toggle('open', open);
  $('#overlay').classList.toggle('show', open);
};

// ===== Sự kiện =====
document.addEventListener('click', (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.dataset.add) {
    const p = byId(t.dataset.add);
    changeQty(p.id, 1);
    const b = $('#cartCount'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
    toast(`${p.emoji} Đã thêm “${p.name}” vào giỏ`);
  }
  if (t.dataset.del) {
    const p = byId(t.dataset.del);
    delete cart[p.id]; renderCart();
    toast(`Đã xóa “${p.name}” khỏi giỏ`);
  }
  if (t.dataset.inc) changeQty(+t.dataset.inc, 1);
  if (t.dataset.dec) changeQty(+t.dataset.dec, -1);
  if (t.dataset.cat) {
    activeCat = t.dataset.cat;
    refresh();
    if (t.classList.contains('cat')) $('#san-pham').scrollIntoView({ behavior: 'smooth' });
  }
  if (t.dataset.mood) setMood(t.dataset.mood);
  if (t.dataset.save) { saveVoucher(t.dataset.save); toast(`🎟️ Đã lưu mã ${t.dataset.save} vào kho`); }
  if (t.dataset.use) {
    applyCode(t.dataset.use);
    $('#dat-hang').scrollIntoView({ behavior: 'smooth' });
    toast(`Đã chọn mã ${t.dataset.use} cho đơn hàng`);
  }
  if (t.dataset.apply) applyCode(t.dataset.apply);
  if (t.dataset.copy) {
    navigator.clipboard?.writeText(t.dataset.copy).catch(() => {});
    toast(`Đã sao chép mã ${t.dataset.copy} 🎁`);
  }
  if (t.classList.contains('acc__btn')) {
    const item = t.closest('.acc__item');
    const open = !item.classList.contains('open');
    $$('.acc__item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
    });
    if (open) { item.classList.add('open'); t.setAttribute('aria-expanded', 'true'); }
  }
  if (t.closest('.nav')) $('#nav').classList.remove('open');
});

$('#sortSelect').onchange = (e) => { sortBy = e.target.value; refresh(); };
$('#moreBtn').onclick = () => { visible += PAGE_SIZE; renderProducts(); };

$('#cartBtn').onclick = () => toggleCart(true);
$('#closeCart').onclick = $('#overlay').onclick = $('#checkoutBtn').onclick = () => toggleCart(false);
$('#menuBtn').onclick = () => $('#nav').classList.toggle('open');
$('#searchBtn').onclick = () => {
  const bar = $('#searchbar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) $('#searchInput').focus();
};
$('#searchInput').addEventListener('input', (e) => {
  keyword = e.target.value;
  refresh();
  if (keyword) $('#san-pham').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleCart(false); });

$('#applyVoucher').onclick = () => applyCode($('#voucherInput').value);
$('#voucherInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); applyCode(e.target.value); }
});

// ===== Đặt hàng & thanh toán =====
// Lưu ý demo: dữ liệu thẻ chỉ được kiểm tra ngay trên trình duyệt – không gửi đi, không ghi vào localStorage,
// và được xóa khỏi form ngay khi đặt hàng xong.
const PROVINCES = ['An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cần Thơ', 'Cao Bằng', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái']
  .sort((a, b) => a.localeCompare(b, 'vi'));
const DISTRICTS = {
  'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Hai Bà Trưng', 'Đống Đa', 'Tây Hồ', 'Cầu Giấy', 'Thanh Xuân', 'Hoàng Mai', 'Long Biên', 'Nam Từ Liêm', 'Bắc Từ Liêm', 'Hà Đông', 'Sơn Tây', 'Ba Vì', 'Chương Mỹ', 'Đan Phượng', 'Đông Anh', 'Gia Lâm', 'Hoài Đức', 'Mê Linh', 'Mỹ Đức', 'Phú Xuyên', 'Phúc Thọ', 'Quốc Oai', 'Sóc Sơn', 'Thạch Thất', 'Thanh Oai', 'Thanh Trì', 'Thường Tín', 'Ứng Hòa'],
  'TP. Hồ Chí Minh': ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8', 'Quận 10', 'Quận 11', 'Quận 12', 'Bình Tân', 'Bình Thạnh', 'Gò Vấp', 'Phú Nhuận', 'Tân Bình', 'Tân Phú', 'TP. Thủ Đức', 'Bình Chánh', 'Cần Giờ', 'Củ Chi', 'Hóc Môn', 'Nhà Bè'],
};
const PAY_NAMES = { cod: 'Thanh toán khi nhận hàng (COD)', bank: 'Chuyển khoản ngân hàng', wallet: 'Ví điện tử', card: 'Thẻ ngân hàng' };

const $id = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const digitsOnly = (s) => s.replace(/\D/g, '');
const payValue = () => orderForm.elements.pay.value;

// --- Thuật toán Luhn & nhận diện loại thẻ ---
function luhn(num) {
  let sum = 0, dbl = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let d = +num[i];
    if (dbl) { d *= 2; if (d > 9) d -= 9; }
    sum += d; dbl = !dbl;
  }
  return sum % 10 === 0;
}
function cardBrand(d) {
  if (/^4/.test(d)) return 'Visa';
  if (/^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(d)) return 'Mastercard';
  if (/^3[47]/.test(d)) return 'Amex';
  if (/^35(2[89]|[3-8]\d)/.test(d)) return 'JCB';
  return '';
}

// --- Quy tắc kiểm tra từng ô: trả về '' nếu hợp lệ, ngược lại là câu báo lỗi ---
const RULES = {
  name(v) {
    v = v.trim();
    if (!v) return 'Vui lòng nhập họ và tên';
    if (!/^[\p{L}][\p{L}\s.'’-]{1,59}$/u.test(v)) return 'Họ tên chỉ gồm chữ cái và khoảng trắng';
    if (v.split(/\s+/).length < 2) return 'Vui lòng nhập đầy đủ họ và tên';
    return '';
  },
  phone(v) {
    v = v.replace(/[\s.\-]/g, '');
    if (!v) return 'Vui lòng nhập số điện thoại';
    if (!/^(?:\+?84|0)(?:3[2-9]|5[25689]|7[06-9]|8[1-689]|9\d)\d{7}$/.test(v))
      return 'Số điện thoại di động Việt Nam không hợp lệ (VD: 0912 345 678)';
    return '';
  },
  email(v) {
    v = v.trim();
    if (!v) return 'Vui lòng nhập email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Email chưa đúng định dạng (VD: ban@email.com)';
    return '';
  },
  province: (v) => v ? '' : 'Vui lòng chọn tỉnh/thành phố',
  district(v) {
    v = v.trim();
    if (!v) return 'Vui lòng nhập quận/huyện';
    return v.length < 2 ? 'Tên quận/huyện quá ngắn' : '';
  },
  address(v) {
    v = v.trim();
    if (!v) return 'Vui lòng nhập địa chỉ nhận hàng';
    return v.length < 5 ? 'Địa chỉ quá ngắn, hãy ghi rõ số nhà và tên đường' : '';
  },
  cardno(v) {
    const d = digitsOnly(v);
    if (!d) return 'Vui lòng nhập số thẻ';
    if (/[^\d\s]/.test(v)) return 'Số thẻ chỉ gồm chữ số';
    const lenOk = cardBrand(d) === 'Amex' ? d.length === 15 : d.length >= 13 && d.length <= 19;
    if (!lenOk) return 'Số thẻ chưa đủ số chữ số';
    if (!luhn(d)) return 'Số thẻ không hợp lệ, vui lòng kiểm tra lại';
    return '';
  },
  exp(v) {
    v = v.trim();
    if (!v) return 'Vui lòng nhập hạn thẻ';
    const m = /^(\d{2})\/(\d{2})$/.exec(v);
    if (!m) return 'Nhập hạn thẻ theo dạng MM/YY';
    const mm = +m[1], yy = +m[2];
    if (mm < 1 || mm > 12) return 'Tháng hết hạn không hợp lệ (từ 01 đến 12)';
    const now = new Date(), cur = (now.getFullYear() % 100) * 12 + now.getMonth() + 1, val = yy * 12 + mm;
    if (val < cur) return 'Thẻ đã hết hạn';
    if (val > cur + 20 * 12) return 'Hạn thẻ không hợp lệ';
    return '';
  },
  cvv(v) {
    v = v.trim();
    const need = cardBrand(digitsOnly($id('co-cardno').value)) === 'Amex' ? 4 : 3;
    if (!v) return 'Vui lòng nhập CVV';
    return /^\d+$/.test(v) && v.length === need ? '' : `CVV gồm ${need} chữ số`;
  },
};
const BASE_KEYS = ['name', 'phone', 'email', 'province', 'district', 'address'];
const CARD_KEYS = ['cardno', 'exp', 'cvv'];
const activeKeys = () => payValue() === 'card' ? [...BASE_KEYS, ...CARD_KEYS] : BASE_KEYS;

function setErr(key, msg) {
  const input = $id('co-' + key);
  $id('err-' + key).textContent = msg;
  if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  return !msg;
}
const checkField = (key) => setErr(key, RULES[key]($id('co-' + key).value));

// Kiểm tra khi rời ô; đã báo lỗi rồi thì kiểm tra lại ngay khi gõ để lỗi biến mất kịp thời
[...BASE_KEYS, ...CARD_KEYS].forEach(key => {
  const input = $id('co-' + key);
  input.addEventListener('blur', () => { if (input.value || input.hasAttribute('aria-invalid')) checkField(key); });
  input.addEventListener('input', () => { if (input.hasAttribute('aria-invalid')) checkField(key); });
  input.addEventListener('change', () => { if (input.tagName === 'SELECT') checkField(key); });
});

// --- Tự định dạng số thẻ / hạn thẻ / CVV ---
$id('co-cardno').addEventListener('input', (e) => {
  const d = digitsOnly(e.target.value).slice(0, 19), brand = cardBrand(d);
  const out = brand === 'Amex'
    ? [d.slice(0, 4), d.slice(4, 10), d.slice(10, 15)].filter(Boolean).join(' ')
    : (d.match(/.{1,4}/g) || []).join(' ');
  if (e.target.value !== out) e.target.value = out;
  $id('cardBrand').textContent = brand;
  $id('co-cvv').maxLength = brand === 'Amex' ? 4 : 3;
});
$id('co-exp').addEventListener('input', (e) => {
  let d = digitsOnly(e.target.value).slice(0, 4);
  if (d.length === 1 && +d > 1) d = '0' + d;           // gõ 3 -> 03
  const out = d.length > 2 || (d.length === 2 && e.inputType !== 'deleteContentBackward') ? d.slice(0, 2) + '/' + d.slice(2) : d;
  if (e.target.value !== out) e.target.value = out;
});
$id('co-cvv').addEventListener('input', (e) => {
  const out = digitsOnly(e.target.value);
  if (e.target.value !== out) e.target.value = out;
});

// --- Tỉnh/thành, quận/huyện ---
const provinceSel = $id('co-province');
provinceSel.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>' +
  [...EXPRESS_CITIES, ...PROVINCES.filter(p => !EXPRESS_CITIES.includes(p))].map(p => `<option>${p}</option>`).join('');

provinceSel.addEventListener('change', () => {
  $id('co-district').value = '';
  setErr('district', '');
  $id('districtList').innerHTML = (DISTRICTS[provinceSel.value] || []).map(d => `<option value="${d}">`).join('');
  syncShip(true);
  renderSummary();
});

// --- Giao hàng: hỏa tốc chỉ cho HN & HCM ---
function syncShip(notify) {
  const ok = EXPRESS_CITIES.includes(provinceSel.value);
  const ex = $id('ship-express');
  ex.disabled = !ok;
  $id('expressNote').textContent = ok ? 'Giao trong khoảng 2 giờ nội thành (8:00 – 22:00)'
    : provinceSel.value ? 'Không áp dụng cho khu vực này – chỉ Hà Nội và TP. Hồ Chí Minh'
    : 'Chỉ áp dụng cho Hà Nội và TP. Hồ Chí Minh – hãy chọn tỉnh/thành trước';
  if (!ok && ex.checked) {
    $id('ship-standard').checked = true;
    if (notify) toast('Giao hỏa tốc chỉ áp dụng HN & HCM – đã chuyển sang giao tiêu chuẩn');
  }
}
orderForm.querySelectorAll('input[name=ship]').forEach(r => r.addEventListener('change', renderSummary));

// --- Thanh toán: hiện đúng khung theo phương thức ---
function syncPay() {
  const p = payValue();
  orderForm.querySelectorAll('[data-panel]').forEach(x => { x.hidden = x.dataset.panel !== p; });
  if (p !== 'card') CARD_KEYS.forEach(k => setErr(k, ''));
}
orderForm.querySelectorAll('input[name=pay]').forEach(r => r.addEventListener('change', syncPay));

// --- Mã đơn & popup thành công ---
function makeOrderCode() {
  const d = new Date(), chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const rnd = crypto.getRandomValues(new Uint8Array(5));
  const tail = [...rnd].map(n => chars[n % chars.length]).join('');
  return `AVL${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${tail}`;
}

function payGuide(o) {
  const money = `<b>${fmt(o.total)}</b>`;
  if (o.pay === 'cod') return `<ol class="modal__steps">
    <li>Bọn mình sẽ gọi xác nhận đơn qua số <b>${esc(o.phone)}</b> trong ít phút.</li>
    <li>Chuẩn bị đúng ${money} khi shipper giao hàng.</li>
    <li>Kiểm tra hàng trước, hài lòng rồi hãy thanh toán cho shipper.</li></ol>`;
  if (o.pay === 'bank') return `<ol class="modal__steps">
    <li>Mở app ngân hàng và chọn chuyển khoản nhanh.</li>
    <li>Người nhận: <b>CÔNG TY TNHH ĂN VẶT LAND</b> – Ngân hàng Demo – STK <b>0123 456 789</b> <i>(thông tin minh họa)</i>.</li>
    <li>Số tiền: ${money}.</li>
    <li>Nội dung chuyển khoản: <b>${o.code}</b> (ghi đúng mã đơn để được xác nhận nhanh).</li>
    <li>Chuyển trong vòng 24 giờ để bọn mình giữ đơn cho bạn.</li></ol>`;
  if (o.pay === 'wallet') return `<ol class="modal__steps">
    <li>Bọn mình sẽ gửi liên kết thanh toán <b>${esc(o.wallet)}</b> qua SMS và email <b>${esc(o.email)}</b>.</li>
    <li>Mở liên kết, kiểm tra mã đơn <b>${o.code}</b> và số tiền ${money}.</li>
    <li>Xác nhận bằng mật khẩu hoặc vân tay trong app ${esc(o.wallet)}.</li></ol>`;
  return `<ol class="modal__steps">
    <li>Bạn sẽ được chuyển đến cổng thanh toán an toàn của ngân hàng để xác thực (OTP/3D Secure).</li>
    <li>Kiểm tra mã đơn <b>${o.code}</b> và số tiền ${money} rồi xác nhận.</li>
    <li>Thông tin thẻ đã được xóa khỏi form và không được lưu lại.</li></ol>`;
}

function modalHTML(o) {
  const m = SHIP_METHODS[o.ship];
  const payName = PAY_NAMES[o.pay] + (o.pay === 'wallet' ? ` – ${o.wallet}` : '');
  return `
    <div class="modal__icon" aria-hidden="true">🎉</div>
    <h3 id="omTitle" tabindex="-1">Đặt hàng thành công!</h3>
    <p class="modal__lead">Cảm ơn ${esc(o.name)}, đơn của bạn đã được ghi nhận.</p>
    <div class="modal__code">
      <small>Mã đơn hàng của bạn</small>
      <b>${o.code}</b>
      <button type="button" class="btn btn--ghost btn--sm" data-copy-modal="${o.code}">Sao chép</button>
    </div>
    <dl class="modal__info">
      <div><dt>Tổng thanh toán</dt><dd>${fmt(o.total)}</dd></div>
      <div><dt>Giao đến</dt><dd>${esc(o.address)}</dd></div>
      <div><dt>Giao hàng</dt><dd>${m.name} – ${m.eta}</dd></div>
      <div><dt>Thanh toán</dt><dd>${payName}</dd></div>
    </dl>
    <h4>Hướng dẫn thanh toán</h4>
    ${payGuide(o)}
    <p class="modal__demo">Đây là bản demo: đơn hàng chỉ hiển thị trên màn hình, không gửi đi và không lưu dữ liệu thẻ.</p>
    <button type="button" class="btn btn--primary" data-close-modal>Tiếp tục mua sắm</button>`;
}

const modal = $id('orderModal');
function openModal(o) {
  $id('omBody').innerHTML = modalHTML(o);
  document.body.classList.add('modal-open');
  if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
  $id('omTitle').focus();
}
function closeModal() { if (typeof modal.close === 'function') modal.close(); else modal.removeAttribute('open'); }
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.closest('[data-close-modal]')) closeModal();
  const c = e.target.closest('[data-copy-modal]');
  if (c) {
    navigator.clipboard?.writeText(c.dataset.copyModal).catch(() => {});
    c.textContent = 'Đã chép ✓';
    setTimeout(() => { c.textContent = 'Sao chép'; }, 1800);
  }
});

// --- Mã giảm giá: bỏ chọn thủ công để quay về tự chọn ---
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-clear-voucher]')) { $id('voucherInput').value = ''; applyCode(''); }
});

// --- Đặt lại form sau khi đặt hàng ---
function resetCheckout() {
  orderForm.reset();
  [...BASE_KEYS, ...CARD_KEYS].forEach(k => setErr(k, ''));
  $id('cardBrand').textContent = '';
  $id('districtList').innerHTML = '';
  applied = ''; cart = {};
  syncShip(false); syncPay();
  renderCart();
}

// --- Gửi form ---
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let first = null;
  activeKeys().forEach(k => { if (!checkField(k) && !first) first = k; });
  const empty = !Object.keys(cart).length;
  $id('err-cart').textContent = empty ? 'Giỏ hàng đang trống – hãy chọn món trước khi đặt hàng nhé!' : '';

  if (first) {
    const input = $id('co-' + first);
    input.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    input.focus({ preventScroll: true });
    return toast('Bạn kiểm tra lại các ô báo lỗi nhé');
  }
  if (empty) return toast('Giỏ hàng đang trống, chọn món trước nhé!');

  const s = calc(), f = orderForm.elements, v = (id) => $id(id).value.trim();
  const order = {
    code: makeOrderCode(),
    total: s.total,
    name: v('co-name'), phone: v('co-phone'), email: v('co-email'),
    address: `${v('co-address')}, ${v('co-district')}, ${provinceSel.value}`,
    ship: currentShip(), pay: payValue(), wallet: f.wallet.value,
  };
  CARD_KEYS.forEach(k => { $id('co-' + k).value = ''; });   // xóa dữ liệu thẻ trước mọi thứ khác
  resetCheckout();
  openModal(order);
});

syncShip(false);
syncPay();

// ===== Đăng ký email & liên hệ =====
function setMsg(el, text, ok) { el.textContent = text; el.className = 'form-msg ' + (ok ? 'ok' : 'err'); }

$('#newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#newsEmail'), msg = $('#newsMsg');
  if (!input.checkValidity()) {
    setMsg(msg, 'Email chưa đúng định dạng, bạn kiểm tra lại nhé.', false);
    return input.focus();
  }
  saveVoucher('WELCOM10');
  e.target.reset();
  setMsg(msg, 'Cảm ơn bạn! Mã WELCOM10 (giảm 10%) đã được lưu vào kho voucher của bạn 🎁', true);
  toast('Đăng ký thành công 🎉');
});

$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target, msg = $('#contactMsg');
  const bad = [...form.querySelectorAll('input, textarea')].filter(el => !el.checkValidity());
  form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  if (bad.length) {
    bad.forEach(el => el.classList.add('invalid'));
    setMsg(msg, 'Bạn vui lòng điền đủ và đúng các ô được đánh dấu.', false);
    return bad[0].focus();
  }
  form.reset();
  setMsg(msg, 'Đã gửi! Bọn mình sẽ liên hệ lại với bạn trong vòng 24 giờ 💛', true);
  toast('Đã gửi liên hệ thành công');
});

// ===== Hiệu ứng xuất hiện khi cuộn =====
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Các khối có data-stagger: từng phần tử con hiện lần lượt, cách nhau 90ms
$$('[data-stagger]').forEach(box =>
  [...box.children].forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--d', i * 0.09 + 's'); }));

if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add('in');
    io.unobserve(el);
    // Hiện xong thì gỡ class để không đè hiệu ứng hover của phần tử
    setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); },
      800 + parseFloat(el.style.getPropertyValue('--d') || 0) * 1000);
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal').forEach(el => io.observe(el));
} else {
  $$('.reveal').forEach(el => el.classList.remove('reveal'));
}

// Số liệu chạy từ 0 lên giá trị thật khi cuộn tới
function countUp(el) {
  const end = +el.dataset.count, dec = +el.dataset.dec || 0, suffix = el.dataset.suffix || '';
  const show = (v) => { el.textContent = v.toLocaleString('vi-VN', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix; };
  const t0 = performance.now(), dur = 1600;
  const step = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    show(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
if ('IntersectionObserver' in window && !reduceMotion) {
  const cio = new IntersectionObserver((entries) => entries.forEach(en => {
    if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); }
  }), { threshold: 0.6 });
  $$('[data-count]').forEach(el => { el.textContent = '0'; cio.observe(el); });
}

// ===== Menu tự sáng đúng mục khi cuộn =====
// Mỗi section có thể khai báo data-nav để thuộc về một mục menu (VD: "Danh mục" thuộc "Sản phẩm")
const navLinks = $$('.nav a');
const spySections = $$('main > section[id], footer[id]');
let spyTicking = false;

function updateSpy() {
  spyTicking = false;
  const y = window.scrollY;
  const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
  let current = spySections[0];
  for (const s of spySections) {
    if (s.getBoundingClientRect().top <= 140) current = s;
  }
  if (atBottom) current = spySections[spySections.length - 1];
  const target = current.dataset.nav || '#' + current.id;
  navLinks.forEach(a => {
    const on = a.getAttribute('href') === target;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  $('#toTop').classList.toggle('show', y > 700);
}
const onScroll = () => { if (!spyTicking) { spyTicking = true; requestAnimationFrame(updateSpy); } };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
$('#toTop').onclick = () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

// ===== Khởi tạo =====
renderCategories();
renderMoodTabs();
setMood(activeMood);
renderProducts();
renderFlash();
renderCombos();
renderVouchers();
renderCart();
tickCountdown();
setInterval(tickCountdown, 500);
setInterval(renderFlash, 60000); // cập nhật số đã bán mỗi phút
updateSpy();
