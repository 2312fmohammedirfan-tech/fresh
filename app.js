// ============================================================
//  FreshFruits — Premium App Logic
// ============================================================

const PRODUCTS = [
  {
    id: 1, name: 'Alphonso Mango', emoji: '🥭', category: 'tropical', organic: true,
    price: 199, unit: 'kg', stock: 40, rating: 4.9, ratingCount: 312,
    freshness: 92, image: 'images/fruit_mango.png',
    desc: 'The king of mangoes — rich, creamy, and fragrant. Hand-picked from Ratnagiri farms.',
    nutrition: { cal: 60, vit: 'C, A', fiber: '1.6g', sugar: '14g' },
    benefits: 'Boosts immunity, great for skin, rich in antioxidants.',
    hot: true, tags: ['immunity', 'energy', 'skin']
  },
  {
    id: 2, name: 'Farm Strawberries', emoji: '🍓', category: 'berries', organic: true,
    price: 149, unit: '250g', stock: 60, rating: 4.8, ratingCount: 245,
    freshness: 88, image: 'images/fruit_strawberry.png',
    desc: 'Plump, sweet-tart strawberries bursting with flavour, fresh from Mahabaleshwar.',
    nutrition: { cal: 32, vit: 'C', fiber: '2g', sugar: '7g' },
    benefits: 'Excellent for heart health, full of Vitamin C.',
    newArrival: true, tags: ['heart', 'immunity', 'weightloss']
  },
  {
    id: 3, name: 'Seedless Watermelon', emoji: '🍉', category: 'seasonal', organic: false,
    price: 89, unit: 'kg', stock: 80, rating: 4.7, ratingCount: 189,
    freshness: 95, image: 'images/fruit_watermelon.png',
    desc: 'Super hydrating and refreshing. Perfect for summer days. Seedless variety.',
    nutrition: { cal: 30, vit: 'A, C', fiber: '0.4g', sugar: '9g' },
    benefits: 'Excellent hydration, great for muscles and skin.',
    hot: false, tags: ['energy', 'skin']
  },
  {
    id: 4, name: 'Black Seedless Grapes', emoji: '🍇', category: 'seasonal', organic: true,
    price: 129, unit: '500g', stock: 35, rating: 4.6, ratingCount: 156,
    freshness: 85, image: 'images/fruit_grapes.png',
    desc: 'Naturally sweet and juicy black grapes packed with resveratrol and antioxidants.',
    nutrition: { cal: 69, vit: 'K, C', fiber: '0.9g', sugar: '15g' },
    benefits: 'Great for heart health and memory function.',
    newArrival: false, tags: ['heart', 'energy']
  },
  {
    id: 5, name: 'Golden Pineapple', emoji: '🍍', category: 'tropical', organic: false,
    price: 79, unit: 'piece', stock: 25, rating: 4.5, ratingCount: 98,
    freshness: 90, image: 'images/fruit_pineapple.png',
    desc: 'Sweet, tangy golden pineapple — fresh, enzyme-rich, and incredibly juicy.',
    nutrition: { cal: 50, vit: 'C, B6', fiber: '1.4g', sugar: '10g' },
    benefits: 'Aids digestion, anti-inflammatory, boosts immunity.',
    tags: ['digestion', 'immunity', 'energy']
  },
  {
    id: 6, name: 'Navel Oranges', emoji: '🍊', category: 'citrus', organic: true,
    price: 109, unit: 'kg', stock: 70, rating: 4.7, ratingCount: 203,
    freshness: 94, image: null,
    desc: 'Juicy, seedless Nagpur navel oranges bursting with Vitamin C. Easy to peel.',
    nutrition: { cal: 47, vit: 'C, B1', fiber: '2.4g', sugar: '9g' },
    benefits: 'Immunity supercharger, lowers blood pressure.',
    organic: true, tags: ['immunity', 'heart', 'energy']
  },
  {
    id: 7, name: 'Blueberries', emoji: '🫐', category: 'berries', organic: true,
    price: 299, unit: '150g', stock: 20, rating: 4.9, ratingCount: 178,
    freshness: 87, image: null,
    desc: 'Premium imported blueberries — antioxidant powerhouses, great for brain health.',
    nutrition: { cal: 57, vit: 'C, K', fiber: '2.4g', sugar: '10g' },
    benefits: 'Brain health, memory, powerful antioxidants.',
    hot: true, tags: ['immunity', 'energy', 'heart']
  },
  {
    id: 8, name: 'Dragon Fruit', emoji: '🐲', category: 'tropical', organic: false,
    price: 249, unit: 'piece', stock: 15, rating: 4.4, ratingCount: 67,
    freshness: 91, image: null,
    desc: 'Exotic pink dragon fruit with sweet white flesh — rich in prebiotics and iron.',
    nutrition: { cal: 60, vit: 'C, E', fiber: '3g', sugar: '8g' },
    benefits: 'Gut health, boosts iron levels, great for skin.',
    newArrival: true, tags: ['digestion', 'skin', 'immunity']
  },
  {
    id: 9, name: 'Pomegranate', emoji: '🍑', category: 'seasonal', organic: true,
    price: 169, unit: 'kg', stock: 45, rating: 4.8, ratingCount: 214,
    freshness: 89, image: null,
    desc: 'Ruby-red pomegranate arils bursting with flavour. Certified organic from Solapur.',
    nutrition: { cal: 83, vit: 'C, K', fiber: '3.4g', sugar: '14g' },
    benefits: 'Heart health, reduces inflammation, hormone balance.',
    tags: ['heart', 'immunity', 'energy']
  },
  {
    id: 10, name: 'Kiwi Fruit', emoji: '🥝', category: 'tropical', organic: false,
    price: 189, unit: '4 pcs', stock: 30, rating: 4.6, ratingCount: 132,
    freshness: 86, image: null,
    desc: 'Tangy-sweet green kiwis packed with twice the Vitamin C of oranges.',
    nutrition: { cal: 61, vit: 'C, K, E', fiber: '3g', sugar: '9g' },
    benefits: 'Sleep improvement, immunity, digestive health.',
    tags: ['immunity', 'digestion', 'energy']
  },
  {
    id: 11, name: 'Red Apple (Shimla)', emoji: '🍎', category: 'seasonal', organic: true,
    price: 219, unit: 'kg', stock: 55, rating: 4.7, ratingCount: 267,
    freshness: 93, image: null,
    desc: 'Crunchy, sweet Shimla apples — the classic "apple a day" experience.',
    nutrition: { cal: 52, vit: 'C, K', fiber: '2.4g', sugar: '10g' },
    benefits: 'Weight management, gut health, heart health.',
    tags: ['weightloss', 'digestion', 'heart']
  },
  {
    id: 12, name: 'Lemon (Kagzi)', emoji: '🍋', category: 'citrus', organic: false,
    price: 49, unit: 'dozen', stock: 100, rating: 4.5, ratingCount: 89,
    freshness: 97, image: null,
    desc: 'Thin-skinned, highly juicy Kagzi lemons — maximum juice, minimum effort.',
    nutrition: { cal: 29, vit: 'C', fiber: '2.8g', sugar: '2g' },
    benefits: 'Detox, digestion, Vitamin C boost.',
    tags: ['weightloss', 'digestion', 'immunity']
  }
];

const SUBSCRIPTIONS = [
  {
    name: 'Starter Box', icon: '🌱', price: 299, period: '/week',
    desc: 'Perfect for individuals. 3-4 fruit varieties each week.',
    features: ['3-4 seasonal fruits', '2–3 kg total', 'Once a week delivery', 'Freshness guarantee', 'Cancel anytime']
  },
  {
    name: 'Family Fresh', icon: '🏡', price: 599, period: '/week', popular: true,
    desc: 'Great for families of 4. 6-8 varieties, handpicked for the season.',
    features: ['6-8 fruit varieties', '5–7 kg total', 'Twice a week delivery', 'Priority freshness', '10% discount always', 'Free delivery']
  },
  {
    name: 'Wellness Pro', icon: '💪', price: 999, period: '/week',
    desc: 'Curated by nutritionists. Premium exotic + seasonal mix.',
    features: ['10+ premium varieties', '8–10 kg total', 'Tri-weekly delivery', 'AI nutrition report', 'Personal nutritionist', 'Free express delivery', 'Exotic fruits included']
  }
];

const TESTIMONIALS = [
  { name: 'Priya S.', role: 'Home Chef, Mumbai', stars: 5, text: 'The mangoes are absolutely divine! I\'ve never tasted Alphonso this fresh outside of Ratnagiri. FreshFruits has become a weekly staple in our home.' },
  { name: 'Rahul M.', role: 'Fitness Trainer, Pune', stars: 5, text: 'I love the AI recommendations! Every week I get fruits perfectly matched to my training goals. The freshness scores are spot on — no more guessing.' },
  { name: 'Anjali K.', role: 'Software Engineer, Bengaluru', stars: 5, text: 'Same day delivery is real! Ordered at 9 AM, got fresh strawberries by 6 PM. The packaging is eco-friendly too. Highly recommend!' },
  { name: 'Vikram P.', role: 'Doctor, Chennai', stars: 5, text: 'As a doctor, I appreciate how they lab-certify for pesticide residue. The organic certification is genuine. This is the gold standard in fruit delivery.' }
];

const DEMO_USERS = {
  'admin@fruit.com': { pass: 'admin123', name: 'Admin', role: 'admin' },
  'user@fruit.com':  { pass: 'user123',  name: 'Alex',  role: 'user' }
};

// ===================== APP STATE =====================
const app = {
  cart: JSON.parse(localStorage.getItem('ff_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ff_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('ff_user') || 'null'),
  orders: JSON.parse(localStorage.getItem('ff_orders') || '[]'),
  currentView: 'home',
  filteredProducts: [...PRODUCTS],
  activeCategory: 'all',
  activeOrganic: false,
  menuOpen: false,
  kpiRefreshTimer: null,

  // ===== SEED BASE VALUES (simulate existing business) =====
  SEED: {
    revenue: 124500,
    orders:  348,
    users:   1209,
    rating:  4.9
  },

  // ========== INIT ==========
  async init() {
    // Check for OAuth token in URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, "/"); // Clean URL
      this.toast('✅ Logged in successfully with Google!');
    }

    // Try fetching profile if we have a token (either new from Google, or existing)
    if (localStorage.getItem('token')) {
      try {
        const user = await api.getProfile();
        this.user = user;
        localStorage.setItem('ff_user', JSON.stringify(user));
        // Optionally store the avatar if returned
        if (user.avatar) {
          localStorage.setItem('avatar', user.avatar);
        }
      } catch (err) {
        console.error('Invalid token, logging out', err);
        this.logout();
      }
    } else {
      // Check legacy ff_user if no token but session still exists (fallback)
      const stored = localStorage.getItem('ff_user');
      if (stored) this.user = JSON.parse(stored);
    }

    this.requestNotificationPermission();
    this.renderNav();
    
    // Fetch products from API and map to UI format
    const fetchedProducts = await api.getProducts();
    if (fetchedProducts && fetchedProducts.length > 0) {
      const mapped = fetchedProducts.map(p => ({
        id:          p._id,
        name:        p.name,
        emoji:       p.emoji || '🍎',
        category:    p.category,
        organic:     p.isOrganic,
        price:       p.price,
        unit:        'kg',
        stock:       p.stock,
        rating:      p.rating || 4.5,
        ratingCount: p.numReviews || 0,
        freshness:   p.freshnessScore || 90,
        image:       p.image || null,
        images:      p.images || [],
        desc:        p.description || '',
        nutrition:   { cal: 0, vit: '-', fiber: '-', sugar: '-' },
        benefits:    '',
        tags:        []
      }));
      // Replace global PRODUCTS with fetched data
      PRODUCTS.length = 0;
      mapped.forEach(p => PRODUCTS.push(p));
      this.filteredProducts = [...PRODUCTS];
    }

    this.renderBestSellers();
    this.renderDailyPick();
    this.renderTestimonials();
    this.renderProducts();
    this.fetchWishlist();
    this.renderSubscriptions();
    this.updateCartUI();
    this.initReveal();
    this.initNavScroll();
    this.startKPIAutoRefresh();
    this.applyContactToFooter(JSON.parse(localStorage.getItem('ff_contact') || '{}'));
    // Auto-show views based on hash
    const hash = location.hash.replace('#', '');
    if (hash && ['home','products','recommend','subscriptions','about'].includes(hash)) {
      this.showView(hash);
    }
  },

  // ========== KPI AUTO-REFRESH (every second for countdown, full render every 30s) ==========
  startKPIAutoRefresh() {
    let tick = 0;
    this.kpiRefreshTimer = setInterval(() => {
      const adminView = document.getElementById('admin-view');
      if (!adminView || adminView.classList.contains('hidden')) return;
      tick++;
      // Full render every 30s (tick 30, 60, 90…)
      if (tick % 30 === 0) {
        this.renderAdminTables();
      } else {
        // Just update countdown + progress bar every second cheaply
        const now = new Date();
        const midnight = new Date(now); midnight.setHours(0,0,0,0);
        const secsElapsed  = (now - midnight) / 1000;
        const secsLeft     = 86400 - secsElapsed;
        const hLeft = Math.floor(secsLeft / 3600);
        const mLeft = Math.floor((secsLeft % 3600) / 60);
        const sLeft = Math.floor(secsLeft % 60);
        const cdEl  = document.getElementById('kpi-countdown');
        if (cdEl) cdEl.textContent = `Resets in ${String(hLeft).padStart(2,'0')}:${String(mLeft).padStart(2,'0')}:${String(sLeft).padStart(2,'0')}`;
        const pct   = Math.round((secsElapsed / 86400) * 100);
        const fill  = document.getElementById('day-progress-fill');
        const pctEl = document.getElementById('day-progress-pct');
        if (fill)  fill.style.width  = pct + '%';
        if (pctEl) pctEl.textContent = pct + '%';
      }
    }, 1000);
  },

  refreshKPIs(manual = false) {
    this.renderAdminTables();
    if (manual) this.toast('📊 Dashboard refreshed!');
  },

  // Animated number counter
  animateCount(elId, targetVal, isRupee = false, duration = 800) {
    const el = document.getElementById(elId);
    if (!el) return;
    const card = el.closest('.kpi-card');
    if (card) { card.classList.add('updating'); setTimeout(() => card.classList.remove('updating'), 600); }
    const start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(start + (targetVal - start) * ease);
      el.textContent = isRupee
        ? `\u20b9${current.toLocaleString('en-IN')}`
        : current.toLocaleString('en-IN');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  // ========== NAVIGATION ==========
  showView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    const el = document.getElementById(`${view}-view`);
    if (el) {
      el.classList.remove('hidden');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
    }
    this.currentView = view;
    // sync nav links
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.view === view);
    });
    this.closeAll();
    // Side-effects per view
    if (view === 'admin') {
      this.renderAdminTables();
      this.loadContact();
      this.renderCustomerTable();
    }
  },

  navTo(view, el) {
    event.preventDefault();
    this.showView(view);
  },

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const links = document.getElementById('nav-links');
    links.classList.toggle('open', this.menuOpen);
  },

  initNavScroll() {
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    });
  },

  filterCategory(cat, el) {
    this.activeCategory = cat;
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    this.showView('products');
    this.filterProducts(cat);
  },

  filterOrganic(el) {
    this.activeOrganic = !this.activeOrganic;
    el.classList.toggle('active', this.activeOrganic);
    this.showView('products');
    this.applyProductFilters();
  },

  filterProducts(cat, el) {
    this.activeCategory = cat;
    if (el) {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
    }
    this.applyProductFilters();
  },

  sortProducts(val) {
    this.applySortAndRender(val);
  },

  applyProductFilters() {
    let p = [...PRODUCTS];
    if (this.activeCategory !== 'all') {
      p = p.filter(x => x.category === this.activeCategory);
    }
    if (this.activeOrganic) {
      p = p.filter(x => x.organic);
    }
    const sortVal = document.getElementById('sort-select')?.value || 'default';
    this.filteredProducts = p;
    this.applySortAndRender(sortVal);
  },

  applySortAndRender(val) {
    let p = [...this.filteredProducts];
    if (val === 'price-asc')   p.sort((a,b) => a.price - b.price);
    if (val === 'price-desc')  p.sort((a,b) => b.price - a.price);
    if (val === 'freshness')   p.sort((a,b) => b.freshness - a.freshness);
    if (val === 'rating')      p.sort((a,b) => b.rating - a.rating);
    this.renderGrid(p, 'products-grid');
  },

  // ========== RENDER PRODUCTS ==========
  renderProducts() {
    this.filteredProducts = [...PRODUCTS];
    this.renderGrid(PRODUCTS, 'products-grid');
  },

  renderBestSellers() {
    const top = [...PRODUCTS].sort((a,b) => b.ratingCount - a.ratingCount).slice(0, 4);
    this.renderGrid(top, 'best-sellers-grid');
  },

  renderGrid(products, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    if (products.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:4rem 0">
        <div style="font-size:3rem;margin-bottom:1rem">🍽️</div>
        <p>No fruits found. Try a different filter.</p>
      </div>`;
      return;
    }
    grid.innerHTML = products.map(p => this.productCardHTML(p)).join('');
  },

  productCardHTML(p) {
    const freshClass = p.freshness >= 85 ? 'high' : p.freshness >= 65 ? 'mid' : 'low';
    const isWishlisted = this.wishlist.includes(p.id);
    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="product-thumb" loading="lazy" />`
      : `<div class="product-emoji-thumb">${p.emoji}</div>`;
    const badges = [
      p.organic   ? `<span class="badge badge-organic">🌿 Organic</span>` : '',
      p.hot       ? `<span class="badge badge-hot">🔥 Hot</span>` : '',
      p.newArrival? `<span class="badge badge-new">✨ New</span>` : ''
    ].join('');
    return `
    <div class="product-card" onclick="app.openProduct(${p.id})">
      <div style="position:relative;overflow:hidden;">
        ${imgHTML}
        <div class="product-badges">${badges}</div>
        <button class="wishlist-btn ${isWishlisted ? 'wishlisted' : ''}"
          onclick="event.stopPropagation();app.toggleWishlist(${p.id},this)"
          title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
        >${isWishlisted ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.emoji} ${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-meta">
          <div class="product-price">₹${p.price} <small>/ ${p.unit}</small></div>
          <div class="product-rating">⭐ ${p.rating} (${p.ratingCount})</div>
        </div>
        <div class="freshness-bar">
          <div class="freshness-label"><span>Freshness</span><span>${p.freshness}/100</span></div>
          <div class="freshness-track"><div class="freshness-fill ${freshClass}" style="width:${p.freshness}%"></div></div>
        </div>
        <div class="product-actions" onclick="event.stopPropagation()">
          <button class="add-to-cart-btn" onclick="app.addToCart(${p.id})">🛒 Add to Cart</button>
          <button class="quick-view-btn" onclick="app.openProduct(${p.id})" title="Quick View">👁️</button>
        </div>
      </div>
    </div>`;
  },

  renderDailyPick() {
    const p = PRODUCTS.reduce((a,b) => b.freshness > a.freshness ? b : a);
    const box = document.getElementById('daily-pick-box');
    if (!box) return;
    box.innerHTML = `
    <div class="daily-pick glass-card">
      <div class="daily-pick-emoji">${p.emoji}</div>
      <div class="daily-pick-info">
        <h3>${p.name} <span class="badge badge-new" style="font-size:0.75rem">Today's Pick</span></h3>
        <p>${p.desc}</p>
        <div class="daily-pick-nutrition">
          <div class="nut-item"><div class="nut-val">${p.nutrition.cal}</div><div class="nut-lbl">kcal/100g</div></div>
          <div class="nut-item"><div class="nut-val">${p.nutrition.fiber}</div><div class="nut-lbl">Fiber</div></div>
          <div class="nut-item"><div class="nut-val">Vit ${p.nutrition.vit}</div><div class="nut-lbl">Vitamins</div></div>
          <div class="nut-item"><div class="nut-val">${p.freshness}/100</div><div class="nut-lbl">Freshness</div></div>
        </div>
        <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
          <div class="product-price" style="font-size:1.5rem">₹${p.price} <small style="font-size:0.8rem;color:var(--text-muted)">/ ${p.unit}</small></div>
          <button class="btn-primary" onclick="app.addToCart(${p.id})">🛒 Add to Cart</button>
        </div>
      </div>
    </div>`;
  },

  renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <div class="avatar">${t.name[0]}</div>
        <div class="stars">${'★'.repeat(t.stars)}</div>
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-user">${t.name}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>`).join('');
  },

  renderSubscriptions() {
    const grid = document.getElementById('subscription-grid');
    if (!grid) return;
    grid.innerHTML = SUBSCRIPTIONS.map(s => `
    <div class="sub-card ${s.popular ? 'popular' : ''}">
      ${s.popular ? `<div class="sub-popular-badge">⭐ Most Popular</div>` : ''}
      <div class="sub-icon">${s.icon}</div>
      <div class="sub-name">${s.name}</div>
      <div class="sub-price">₹${s.price}<small>${s.period}</small></div>
      <div class="sub-desc">${s.desc}</div>
      <ul class="sub-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <button class="btn-primary btn-block" onclick="app.subscribe('${s.name}')">Subscribe Now</button>
    </div>`).join('');
  },

  // ========== PRODUCT MODAL ==========
  openProduct(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const modal = document.getElementById('product-modal');
    const freshClass = p.freshness >= 85 ? 'high' : p.freshness >= 65 ? 'mid' : 'low';
    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:300px;object-fit:cover;border-radius:12px" />`
      : `<div style="font-size:9rem;display:flex;align-items:center;justify-content:center;height:280px">${p.emoji}</div>`;

    document.getElementById('product-modal-content').innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-img-wrap">${imgHTML}</div>
      <div>
        <div class="product-badges" style="position:static;flex-direction:row;margin-bottom:1rem">
          ${p.organic ? `<span class="badge badge-organic">🌿 Organic</span>` : ''}
          ${p.hot ? `<span class="badge badge-hot">🔥 Hot</span>` : ''}
        </div>
        <div class="pd-name">${p.emoji} ${p.name}</div>
        <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:0.75rem">⭐ ${p.rating} · ${p.ratingCount} reviews · ${p.stock} kg in stock</div>
        <div class="pd-price">₹${p.price} <small style="font-size:0.9rem;font-weight:400;color:var(--text-muted)">/ ${p.unit}</small></div>
        <div class="freshness-bar" style="margin-bottom:1.5rem">
          <div class="freshness-label"><span>🌟 Freshness Score</span><span>${p.freshness}/100</span></div>
          <div class="freshness-track"><div class="freshness-fill ${freshClass}" style="width:${p.freshness}%"></div></div>
        </div>
        <div class="pd-desc">${p.desc}</div>
        <div style="background:rgba(16,217,122,0.06);border:1px solid rgba(16,217,122,0.15);border-radius:12px;padding:1rem;margin-bottom:1.5rem">
          <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);margin-bottom:0.75rem">Nutrition per 100g</div>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap">
            <div class="nut-item"><div class="nut-val">${p.nutrition.cal} kcal</div><div class="nut-lbl">Calories</div></div>
            <div class="nut-item"><div class="nut-val">${p.nutrition.fiber}</div><div class="nut-lbl">Fiber</div></div>
            <div class="nut-item"><div class="nut-val">${p.nutrition.sugar}</div><div class="nut-lbl">Sugar</div></div>
            <div class="nut-item"><div class="nut-val">Vit ${p.nutrition.vit}</div><div class="nut-lbl">Vitamins</div></div>
          </div>
        </div>
        <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem">💡 ${p.benefits}</div>
        <div class="pd-qty-row">
          <button class="pd-qty-btn" onclick="app.pdQty(-1)">−</button>
          <span class="pd-qty-num" id="pd-qty">1</span>
          <button class="pd-qty-btn" onclick="app.pdQty(1)">+</button>
          <span style="color:var(--text-muted);font-size:0.85rem">× ₹${p.price}</span>
        </div>
        <div style="display:flex;gap:0.75rem">
          <button class="btn-primary" style="flex:1" onclick="app.addToCartQty(${p.id})">🛒 Add to Cart</button>
          <button class="wishlist-btn" style="position:static;width:auto;height:auto;border-radius:12px;padding:0 1rem;font-size:1rem"
            onclick="app.toggleWishlist(${p.id},this)">${this.wishlist.includes(p.id) ? '❤️' : '🤍'}</button>
        </div>
      </div>
    </div>`;
    modal.classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
  },

  _pdQtyVal: 1,
  pdQty(delta) {
    this._pdQtyVal = Math.max(1, (this._pdQtyVal || 1) + delta);
    const el = document.getElementById('pd-qty');
    if (el) el.textContent = this._pdQtyVal;
  },

  addToCartQty(id) {
    const qty = this._pdQtyVal || 1;
    for (let i = 0; i < qty; i++) this.addToCart(id, true);
    this._pdQtyVal = 1;
    this.closeProductModal();
    this.toast(`Added ${qty} × to cart 🛒`);
  },

  closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
  },

  // ========== CART ==========
  addToCart(id, silent = false) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = this.cart.find(x => x.id === id);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ id, qty: 1 });
    }
    this.saveCart();
    this.updateCartUI();
    if (!silent) this.toast(`${p.emoji} ${p.name} added to cart!`);
  },

  removeFromCart(id) {
    this.cart = this.cart.filter(x => x.id !== id);
    this.saveCart();
    this.updateCartUI();
  },

  clearCart() {
    if (this.cart.length === 0) return;
    if (!confirm('Are you sure you want to clear your cart?')) return;
    this.cart = [];
    this.saveCart();
    this.updateCartUI();
    this.toast('🗑️ Cart cleared!');
  },

  changeQty(id, delta) {
    const item = this.cart.find(x => x.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    this.saveCart();
    this.updateCartUI();
  },

  saveCart() {
    localStorage.setItem('ff_cart', JSON.stringify(this.cart));
  },

  updateCartUI() {
    const count = this.cart.reduce((s, x) => s + x.qty, 0);
    document.getElementById('cart-count').textContent = count;

    const content = document.getElementById('cart-content');
    if (!content) return;

    if (this.cart.length === 0) {
      content.innerHTML = `<div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Add some fresh fruits to get started!</p>
        <button class="btn-primary" onclick="app.showView('products');app.toggleCart()">Shop Now →</button>
      </div>`;
      document.getElementById('cart-total').textContent = '₹0';
      return;
    }

    const itemsHTML = this.cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `<div class="cart-item">
        <div class="cart-item-icon">${p.emoji}</div>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="cart-item-price">₹${p.price * item.qty} <small style="color:var(--text-muted);font-weight:400">/ ${item.qty} ${item.qty > 1 ? 'units' : 'unit'}</small></div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="app.changeQty(${p.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="app.changeQty(${p.id},1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="app.removeFromCart(${p.id})" title="Remove">🗑️</button>
      </div>`;
    }).join('');

    content.innerHTML = itemsHTML;
    const total = this.cart.reduce((s, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    document.getElementById('cart-total').textContent = `₹${total}`;
  },

  toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    const isOpen = sidebar.classList.contains('active');
    if (isOpen) {
      sidebar.classList.remove('active');
      overlay.classList.add('hidden');
    } else {
      sidebar.classList.add('active');
      overlay.classList.remove('hidden');
    }
  },

  checkout() {
    if (!this.user) {
      this.toast('Please login to checkout', 'info');
      this.toggleCart();
      setTimeout(() => this.showModal('login'), 400);
      return;
    }
    if (this.cart.length === 0) {
      this.toast('Your cart is empty!', 'error');
      return;
    }
    const total = this.cart.reduce((s, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    document.getElementById('payment-amount').textContent = `Total: ₹${total} (${this.cart.reduce((s,x) => s+x.qty, 0)} items)`;
    this.toggleCart();
    document.getElementById('payment-modal').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
  },

  async processPayment(method) {
    const total = this.cart.reduce((s, item) => {
      const p = this.filteredProducts.find(x => x.id === item.id) || PRODUCTS.find(x => x.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    
    // Map cart to backend orderItems schema
    const orderItems = this.cart.map(item => {
      const p = this.filteredProducts.find(x => x.id === item.id) || PRODUCTS.find(x => x.id === item.id);
      return {
        name: p.name,
        qty: item.qty,
        image: p.image,
        price: p.price,
        product: p._id || p.id // use mongo id if available
      };
    });

    const orderData = {
      orderItems,
      shippingAddress: { address: 'User Address', city: 'City', postalCode: '000000' }, // Hardcoded for demo
      paymentMethod: method,
      itemsPrice: total,
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: total
    };

    try {
      const createdOrder = await api.placeOrder(orderData);
      this.orders.push(createdOrder);
      localStorage.setItem('ff_orders', JSON.stringify(this.orders)); // Keep local cache for now
      
      if (method === 'razorpay') {
        const rpOrder = await api.createRazorpayOrder(total);
        const options = {
          key: 'dummy_id', // Will be replaced by env in real prod
          amount: rpOrder.amount,
          currency: rpOrder.currency,
          name: 'S-M Fruits',
          description: 'Premium Fruits Order',
          order_id: rpOrder.id,
          handler: async (response) => {
            await api.verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: createdOrder._id
            });
            this.cart = []; this.saveCart(); this.updateCartUI(); this.closePaymentModal();
            this.toast(`🎉 Payment Successful! Order #${createdOrder._id} placed.`, 'info');
            this.sendPushNotification('Payment Successful', `Order #${createdOrder._id} placed. You'll receive updates shortly!`);
          },
          prefill: {
            name: this.user ? this.user.name : 'Guest',
            email: this.user ? this.user.email : 'guest@example.com'
          },
          theme: { color: '#004730' }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
        return;
      }

      this.cart = [];
      this.saveCart();
      this.updateCartUI();
      this.closePaymentModal();
      this.toast(`🎉 Order placed! Paying via ${method}. You'll receive a WhatsApp update.`, 'info');
      this.sendPushNotification('Order Placed!', `Your ${method} order has been confirmed. Freshness is on the way!`);
    } catch (err) {
      console.error(err);
      this.toast('Failed to place order on server (Database might not be connected). Falling back to local storage...', 'warning');
      
      // Fallback
      const fallbackOrder = {
        id: 'ORD-' + Date.now(),
        date: new Date().toLocaleDateString('en-IN'),
        items: [...this.cart],
        total, method, status: 'placed',
        user: this.user ? this.user.name : 'Guest'
      };
      this.orders.push(fallbackOrder);
      localStorage.setItem('ff_orders', JSON.stringify(this.orders));
      this.cart = []; this.saveCart(); this.updateCartUI(); this.closePaymentModal();
    }
  },

  // ========== QR / BANK TRANSFER FLOW ==========
  currentPendingMethod: null,
  
  showQRModal(method) {
    this.currentPendingMethod = method;
    this.closePaymentModal();
    
    const ct = JSON.parse(localStorage.getItem('ff_contact') || '{}');
    const total = this.cart.reduce((s, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);

    const upiID   = ct.upi || 'freshfruits@upi';
    const upiName = ct.name || 'FreshFruits';
    
    // Generate UPI URI
    // Format: upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&cu=INR
    const upiUri = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(upiName)}&am=${total}&cu=INR`;
    
    // Set QR image using a free generator API
    document.getElementById('qr-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;
    
    // Fill Bank Details
    document.getElementById('qr-payment-amount').textContent = `Pay: ₹${total}`;
    document.getElementById('qr-bank-name').textContent = ct.bank || 'State Bank of India';
    document.getElementById('qr-bank-ac').textContent   = ct.account || '32104567890';
    document.getElementById('qr-bank-ifsc').textContent = ct.ifsc || 'SBIN0001234';
    document.getElementById('qr-bank-upi').textContent  = upiID;

    // Show modal
    document.getElementById('qr-modal').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
  },

  closeQRModal() {
    document.getElementById('qr-modal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    this.currentPendingMethod = null;
  },

  confirmQRPayment() {
    const method = this.currentPendingMethod || 'UPI Transfer';
    this.closeQRModal();
    this.processPayment(method);
    this.toast('🎉 Payment Confirmed! Processing your order.', 'info');
  },


  closePaymentModal() {
    document.getElementById('payment-modal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
  },

  // ========== WISHLIST ==========
  async fetchWishlist() {
    const authHeader = api.getAuthHeader();
    if (!authHeader.Authorization) return;
    try {
      const res = await fetch('http://localhost:5000/api/users/wishlist', {
        headers: authHeader
      });
      if (res.ok) {
        this.wishlist = await res.json();
        localStorage.setItem('ff_wishlist', JSON.stringify(this.wishlist));
        this.renderProducts(); // Re-render to update heart icons
      }
    } catch (err) {
      console.error('Failed to fetch wishlist', err);
    }
  },

  async toggleWishlist(id, btn) {
    const authHeader = api.getAuthHeader();
    if (!authHeader.Authorization) {
      this.toast('Please login to add to wishlist');
      this.switchView('auth-view');
      return;
    }

    const p = PRODUCTS.find(x => x.id === id);
    try {
      const res = await fetch('http://localhost:5000/api/users/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader
        },
        body: JSON.stringify({ productId: id })
      });
      
      if (res.ok) {
        const data = await res.json();
        this.wishlist = data.wishlist;
        localStorage.setItem('ff_wishlist', JSON.stringify(this.wishlist));
        
        const isWishlisted = this.wishlist.includes(id);
        if (btn) {
          btn.textContent = isWishlisted ? '❤️' : '🤍';
          isWishlisted ? btn.classList.add('wishlisted') : btn.classList.remove('wishlisted');
        }
        this.toast(`${p.emoji} ${isWishlisted ? 'Added to' : 'Removed from'} wishlist`);
        this.renderWishlist();
      }
    } catch (err) {
      console.error('Error toggling wishlist', err);
    }
  },

  renderWishlist() {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    const items = PRODUCTS.filter(p => this.wishlist.includes(p.id));
    if (items.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem 0">
        <div style="font-size:3rem">🤍</div><p style="margin-top:1rem">No items in wishlist yet.</p>
      </div>`;
    } else {
      grid.innerHTML = items.map(p => this.productCardHTML(p)).join('');
    }
  },

  // ========== AUTH ==========
  showModal(mode) {
    // Modal replaced by dedicated login page
    window.location.href = '/login.html';
  },

  closeModal() {
    // No-op: modal replaced by dedicated login page
  },

  switchAuth(mode) {
    // No-op: modal replaced by dedicated login page
  },

  async login() {
    const email = document.getElementById('login-email').value.trim();
    const pass  = document.getElementById('login-pass').value;

    if (!email || !pass) {
      this.toast('Please enter email and password', 'error');
      return;
    }

    try {
      const user = await api.login(email, pass);
      this.user = user;
      localStorage.setItem('ff_user', JSON.stringify(this.user));
      this.renderNav();
      this.closeModal();
      this.toast(`Welcome back, ${user.name}! 🍎`);
      this.fetchWishlist();
    } catch (err) {
      this.toast('Invalid email or password ❌', 'error');
    }
  },

  async signup() {
    const fname = document.getElementById('su-fname').value.trim();
    const lname = document.getElementById('su-lname').value.trim();
    const email = document.getElementById('su-email').value.trim();
    const pass  = document.getElementById('su-pass').value;

    if (!fname || !email || pass.length < 6) {
      this.toast('Please fill all fields (min 6 char password)', 'error');
      return;
    }

    const name = fname + (lname ? ' ' + lname : '');

    try {
      const user = await api.register(name, email, pass);
      this.user = user;
      localStorage.setItem('ff_user', JSON.stringify(this.user));
      this.renderNav();
      this.closeModal();
      this.toast(`Welcome to S-M Fruits, ${fname}! 🎉`);
      this.fetchWishlist();
    } catch (err) {
      this.toast('Registration failed. Email might already exist.', 'error');
    }
  },

  logout() {
    this.user = null;
    localStorage.removeItem('ff_user');
    this.renderNav();
    this.showView('home');
    this.toast('Logged out. See you soon! 👋');
  },

  renderNav() {
    const authLinks = document.getElementById('auth-links');
    const userProfile = document.getElementById('user-profile');
    const adminBtn = document.getElementById('admin-panel-btn');
    const avatar = document.getElementById('user-avatar-btn');

    if (this.user) {
      authLinks.classList.add('hidden');
      userProfile.classList.remove('hidden');
      if (avatar) avatar.textContent = this.user.name[0].toUpperCase();
      if (adminBtn) adminBtn.classList.toggle('hidden', this.user.role !== 'admin');
    } else {
      authLinks.classList.remove('hidden');
      userProfile.classList.add('hidden');
    }
  },

  // ========== PROFILE ==========
  switchTab(tab, el) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    const content = document.getElementById(`tab-${tab}`);
    if (content) content.classList.remove('hidden');
    if (tab === 'orders') this.renderOrders();
    if (tab === 'wishlist') this.renderWishlist();
  },

  renderOrders() {
    const list = document.getElementById('orders-list');
    if (!list) return;
    if (this.orders.length === 0) {
      list.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:4rem 0">
        <div style="font-size:3rem">📦</div>
        <p style="margin-top:1rem">No orders yet. Start shopping!</p>
        <button class="btn-primary" style="margin-top:1rem" onclick="app.showView('products')">Shop Now →</button>
      </div>`;
      return;
    }
    list.innerHTML = [...this.orders].reverse().map(o => `
    <div class="order-card glass-card">
      <div class="order-info">
        <h4>${o.id}</h4>
        <p>${o.date} · ${o.items.length} items · ${o.method}</p>
      </div>
      <div style="text-align:right">
        <div style="font-size:1.1rem;font-weight:700;color:var(--secondary);margin-bottom:0.4rem">₹${o.total}</div>
        <span class="order-status status-${o.status}">${o.status}</span>
      </div>
    </div>`).join('');
  },

  saveProfile() {
    this.toast('Profile saved! ✅');
  },

  // ========== ADMIN ==========
  // ========== PRODUCT IMAGE MANAGEMENT ==========
  _apImages: [],      // array of { file, dataUrl, isPrimary }
  _apEditId: null,    // set when editing an existing product

  openAddProduct() {
    this._apImages = [];
    this._apEditId = null;
    document.getElementById('ap-modal-title').textContent = '➕ Add New Product';
    document.getElementById('ap-save-btn').textContent = '💾 Save Product';
    // Reset all fields
    ['ap-name','ap-price','ap-stock','ap-emoji','ap-desc'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('ap-organic').checked = false;
    document.getElementById('ap-cat').value = 'tropical';
    this._renderImageGrid();
    document.getElementById('add-product-modal').classList.remove('hidden');
  },

  closeAddProduct() {
    document.getElementById('add-product-modal').classList.add('hidden');
    this._apImages = [];
    this._apEditId = null;
  },

  // Handle drag-and-drop
  handleImageDrop(e) {
    e.preventDefault();
    const zone = document.getElementById('ap-drop-zone');
    zone.style.background = 'var(--card)';
    zone.style.borderStyle = 'dashed';
    const files = Array.from(e.dataTransfer.files);
    this._processImageFiles(files);
  },

  // Handle file input change
  handleImageFileSelect(e) {
    const files = Array.from(e.target.files);
    this._processImageFiles(files);
    e.target.value = ''; // reset so same file can be re-added
  },

  // Compress + validate + add to _apImages[]
  _processImageFiles(files) {
    const ALLOWED = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const MAX_MB = 5;
    const MAX_IMGS = 10;
    let added = 0;

    for (const file of files) {
      if (this._apImages.length >= MAX_IMGS) {
        this.toast(`Max ${MAX_IMGS} images allowed`, 'error'); break;
      }
      if (!ALLOWED.includes(file.type)) {
        this.toast(`❌ ${file.name}: Only JPG, PNG, WebP allowed`, 'error'); continue;
      }
      if (file.size > MAX_MB * 1024 * 1024) {
        this.toast(`❌ ${file.name}: File too large (max ${MAX_MB}MB)`, 'error'); continue;
      }
      // Compress using Canvas
      this._compressImage(file, 800, 0.82).then(({ dataUrl, blob }) => {
        const isPrimary = this._apImages.length === 0;
        this._apImages.push({ file: blob ? new File([blob], file.name, { type: file.type }) : file, dataUrl, isPrimary });
        this._renderImageGrid();
      });
      added++;
    }
    if (added > 0) this.toast(`📸 ${added} image(s) added`, 'info');
  },

  // Canvas-based image compression
  _compressImage(file, maxDim, quality) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          canvas.toBlob(blob => {
            resolve({ dataUrl: canvas.toDataURL(file.type, quality), blob });
          }, file.type, quality);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  },

  // Set an image as primary
  _setPrimary(index) {
    this._apImages = this._apImages.map((img, i) => ({ ...img, isPrimary: i === index }));
    this._renderImageGrid();
  },

  // Remove an image
  _removeImage(index) {
    this._apImages.splice(index, 1);
    if (this._apImages.length > 0 && !this._apImages.some(i => i.isPrimary)) {
      this._apImages[0].isPrimary = true;
    }
    this._renderImageGrid();
  },

  // Render the image preview grid
  _renderImageGrid() {
    const grid = document.getElementById('ap-image-grid');
    const count = document.getElementById('ap-image-count');
    if (!grid) return;
    if (this._apImages.length === 0) {
      grid.innerHTML = '';
      if (count) count.textContent = 'No images selected';
      return;
    }
    if (count) count.textContent = `${this._apImages.length} image(s) selected — click ⭐ to set cover`;
    grid.innerHTML = this._apImages.map((img, i) => `
      <div style="position:relative;border-radius:10px;overflow:hidden;border:3px solid ${img.isPrimary ? 'var(--primary)' : 'var(--border)'};aspect-ratio:1;background:#f5f5f5;cursor:pointer" title="${img.isPrimary ? '✅ Cover image' : 'Click ⭐ to set as cover'}">
        <img src="${img.dataUrl}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
        ${img.isPrimary ? '<div style="position:absolute;top:4px;left:4px;background:var(--primary);color:#fff;border-radius:6px;padding:1px 6px;font-size:0.7rem;font-weight:700">COVER</div>' : ''}
        <div style="position:absolute;bottom:0;left:0;right:0;display:flex;gap:2px;padding:4px;background:rgba(0,0,0,0.55)">
          ${!img.isPrimary ? `<button onclick="app._setPrimary(${i})" style="flex:1;border:none;background:rgba(255,255,255,0.2);color:#fff;border-radius:4px;padding:2px;cursor:pointer;font-size:0.7rem" title="Set as cover">⭐</button>` : ''}
          <button onclick="app._removeImage(${i})" style="flex:1;border:none;background:rgba(255,0,0,0.5);color:#fff;border-radius:4px;padding:2px;cursor:pointer;font-size:0.7rem" title="Delete">🗑️</button>
        </div>
      </div>
    `).join('');
  },

  async saveProduct() {
    const name     = document.getElementById('ap-name').value.trim();
    const price    = document.getElementById('ap-price').value;
    const stock    = document.getElementById('ap-stock').value;
    const cat      = document.getElementById('ap-cat').value;
    const emoji    = document.getElementById('ap-emoji').value.trim() || '🍎';
    const desc     = document.getElementById('ap-desc').value.trim();
    const organic  = document.getElementById('ap-organic').checked;

    if (!name || !price || !stock || !desc) {
      this.toast('Please fill all required fields', 'error'); return;
    }

    const btn = document.getElementById('ap-save-btn');
    btn.disabled = true;
    btn.textContent = '⏳ Saving...';

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('stock', stock);
      formData.append('category', cat);
      formData.append('emoji', emoji);
      formData.append('description', desc);
      formData.append('isOrganic', organic.toString());

      // Append compressed image files
      let primaryIndex = 0;
      this._apImages.forEach((img, i) => {
        if (img.isPrimary) primaryIndex = i;
        formData.append('images', img.file);
      });
      formData.append('primaryIndex', primaryIndex.toString());

      const token = localStorage.getItem('token');
      const url  = this._apEditId
        ? `http://localhost:5000/api/products/${this._apEditId}`
        : 'http://localhost:5000/api/products';
      const method = this._apEditId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Save failed');
      }

      const saved = await res.json();

      if (!this._apEditId) {
        // Also push to local PRODUCTS array so it shows up immediately
        PRODUCTS.push({
          id: saved._id,
          name: saved.name,
          emoji: saved.emoji || '🍎',
          category: saved.category,
          organic: saved.isOrganic,
          price: saved.price,
          unit: 'kg',
          stock: saved.stock,
          rating: 0,
          ratingCount: 0,
          freshness: 100,
          image: saved.image,
          images: saved.images,
          desc: saved.description,
          nutrition: { cal: 0, vit: '-', fiber: '-', sugar: '-' },
          benefits: '', tags: []
        });
      }

      this.closeAddProduct();
      this.renderAdminTables();
      this.renderProducts();
      this.toast(`✅ ${name} ${this._apEditId ? 'updated' : 'added'} successfully!`);
    } catch (err) {
      this.toast(`❌ ${err.message}`, 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = '💾 Save Product';
    }
  },



  async renderAdminTables() {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch('http://localhost:5000/api/admin/dashboard', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch stats');
      
      const stats = await res.json();

      this.animateCount('kpi-revenue', stats.totalRevenue, true, 900);
      this.animateCount('kpi-orders',  stats.totalOrders,  false, 900);
      this.animateCount('kpi-users',   stats.registeredUsers, false, 900);
      
      const rEl = document.getElementById('kpi-rating');
      if (rEl) rEl.textContent = stats.avgRating || '4.4';
      
      const pEl = document.getElementById('kpi-products');
      if (pEl) pEl.textContent = stats.totalProducts;
      
      const bEl = document.getElementById('kpi-bills');
      if (bEl) bEl.textContent = stats.totalOrders;

      const setDelta  = (id, txt) => { const e = document.getElementById(id); if (e) e.textContent = txt; };
      setDelta('kpi-revenue-delta', `Real-time data`);
      setDelta('kpi-orders-delta',  `Live from database`);
      setDelta('kpi-users-delta',   `Registered users`);
    } catch (err) {
      console.error('Error fetching admin stats:', err);
    }
    // 24-hour progress bar
    const now        = new Date();
    const midnight   = new Date(now); midnight.setHours(0,0,0,0);
    const secsSinceMidnight = (now - midnight) / 1000;          // 0 – 86400
    const dayFraction       = secsSinceMidnight / 86400;        // 0.0 – 1.0
    const pct = Math.round(dayFraction * 100);
    const fill = document.getElementById('day-progress-fill');
    const pctEl = document.getElementById('day-progress-pct');
    if (fill)  fill.style.width  = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';

    // Countdown to midnight reset
    const secsLeft     = 86400 - secsSinceMidnight;
    const hLeft  = Math.floor(secsLeft / 3600);
    const mLeft  = Math.floor((secsLeft % 3600) / 60);
    const sLeft  = Math.floor(secsLeft % 60);
    const cdEl   = document.getElementById('kpi-countdown');
    if (cdEl) cdEl.textContent = `Resets in ${String(hLeft).padStart(2,'0')}:${String(mLeft).padStart(2,'0')}:${String(sLeft).padStart(2,'0')}`;

    // Timestamp
    const tsEl = document.getElementById('kpi-last-updated');
    if (tsEl) tsEl.textContent = `Updated: ${now.toLocaleTimeString('en-IN')}`;


    // ---- Products Table ----
    const pt = document.getElementById('admin-products-table');
    if (pt) {
      pt.innerHTML = `<thead><tr>
        <th>Fruit</th><th>Category</th><th>Price</th><th>Stock</th><th>Freshness</th><th>Organic</th><th>Actions</th>
      </tr></thead>
      <tbody>${PRODUCTS.map(p => `<tr>
        <td>${p.emoji} ${p.name}</td>
        <td style="text-transform:capitalize">${p.category}</td>
        <td>₹${p.price}/${p.unit}</td>
        <td class="${p.stock < 20 ? 'low-stock' : ''}">${p.stock} ${p.stock < 20 ? '⚠️ Low' : ''}</td>
        <td>
          <div class="freshness-track" style="width:80px;display:inline-block">
            <div class="freshness-fill ${p.freshness>=85?'high':p.freshness>=65?'mid':'low'}" style="width:${p.freshness}%;height:6px;border-radius:4px"></div>
          </div>
          <span style="font-size:0.8rem;margin-left:0.4rem">${p.freshness}</span>
        </td>
        <td>${p.organic ? '🌿 Yes' : '—'}</td>
        <td><button class="btn-sm btn-danger" onclick="app.deleteProduct(${p.id})">Delete</button></td>
      </tr>`).join('')}</tbody>`;
    }

    // ---- Orders Table ----
    const ot = document.getElementById('admin-orders-table');
    if (ot) {
      if (this.orders.length === 0) {
        ot.innerHTML = `<thead><tr><th>Order ID</th><th>Date</th><th>Customer</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody><tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:2rem">No orders yet</td></tr></tbody>`;
      } else {
        ot.innerHTML = `<thead><tr>
          <th>Order ID</th><th>Date</th><th>Customer</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Actions</th>
        </tr></thead>
        <tbody>${[...this.orders].reverse().map(o => `<tr>
          <td style="font-family:monospace;font-size:0.8rem">${o.id}</td>
          <td>${o.date}</td>
          <td>${o.user || (this.user ? this.user.name : 'Guest')}</td>
          <td>${o.items.reduce((s,i)=>s+i.qty,0)} items</td>
          <td style="color:var(--secondary);font-weight:700">₹${o.total.toLocaleString('en-IN')}</td>
          <td>${o.method}</td>
          <td><span class="order-status status-${o.status}">${o.status}</span></td>
          <td>
            <button class="btn-sm btn-primary" onclick="app.printBill('${o.id}')">🧾 Bill</button>
            ${o.status !== 'delivered' ? `<button class="btn-sm btn-ghost" style="margin-left:0.3rem" onclick="app.markDelivered('${o.id}')">✓ Deliver</button>` : ''}
          </td>
        </tr>`).join('')}</tbody>`;
      }
    }

    // ---- Bills Table ----
    const bt = document.getElementById('admin-bills-table');
    if (bt) {
      if (this.orders.length === 0) {
        bt.innerHTML = `<thead><tr><th>Bill No.</th><th>Order ID</th><th>Date</th><th>Customer</th><th>Items</th><th>Subtotal</th><th>GST (5%)</th><th>Grand Total</th><th>Actions</th></tr></thead>
        <tbody><tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:2rem">No bills yet. Bills are generated automatically when an order is placed.</td></tr></tbody>`;
      } else {
        bt.innerHTML = `<thead><tr>
          <th>Bill No.</th><th>Order ID</th><th>Date</th><th>Customer</th><th>Items</th><th>Subtotal</th><th>GST (5%)</th><th>Grand Total</th><th>Actions</th>
        </tr></thead>
        <tbody>${[...this.orders].reverse().map((o, i) => {
          const subtotal = o.total;
          const gst = Math.round(subtotal * 0.05);
          const grand = subtotal + gst;
          const billNo = `BILL-${String(this.orders.length - i).padStart(4,'0')}`;
          return `<tr>
            <td style="font-weight:700;color:var(--primary)">${billNo}</td>
            <td style="font-family:monospace;font-size:0.78rem">${o.id}</td>
            <td>${o.date}</td>
            <td>${o.user || (this.user ? this.user.name : 'Guest')}</td>
            <td>${o.items.reduce((s,i)=>s+i.qty,0)} items</td>
            <td>₹${subtotal.toLocaleString('en-IN')}</td>
            <td style="color:var(--secondary)">₹${gst.toLocaleString('en-IN')}</td>
            <td style="color:var(--primary);font-weight:800">₹${grand.toLocaleString('en-IN')}</td>
            <td style="display:flex;gap:0.4rem;flex-wrap:wrap">
              <button class="btn-sm btn-primary" onclick="app.generatePDF('${o.id}')">📄 PDF</button>
              <button class="btn-sm btn-ghost" onclick="app.printBill('${o.id}')">🖨️</button>
            </td>
          </tr>`;
        }).join('')}</tbody>`;
      }
    }
  },

  markDelivered(orderId) {
    const o = this.orders.find(x => x.id === orderId);
    if (o) {
      o.status = 'delivered';
      localStorage.setItem('ff_orders', JSON.stringify(this.orders));
      this.renderAdminTables();
      this.toast(`✅ Order ${orderId} marked as delivered!`);
    }
  },

  printBill(orderId) {
    const o = this.orders.find(x => x.id === orderId);
    if (!o) return;
    const subtotal = o.total;
    const gst = Math.round(subtotal * 0.05);
    const grand = subtotal + gst;
    const billNo = `BILL-${String(this.orders.indexOf(o) + 1).padStart(4,'0')}`;
    const customer = o.user || (this.user ? this.user.name : 'Guest');

    const rows = o.items.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `<tr>
        <td>${p.emoji} ${p.name}</td>
        <td style="text-align:center">${item.qty} ${p.unit}</td>
        <td style="text-align:right">₹${p.price}</td>
        <td style="text-align:right">₹${p.price * item.qty}</td>
      </tr>`;
    }).join('');

    const win = window.open('', '_blank', 'width=700,height=800');
    win.document.write(`<!DOCTYPE html><html><head>
      <title>Invoice ${billNo}</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; background: #fff; color: #111; padding: 40px; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
        .brand { font-size: 1.6rem; font-weight: 800; color: #059669; }
        .brand small { display: block; font-size: 0.85rem; font-weight: 400; color: #666; }
        .bill-meta { text-align: right; font-size: 0.9rem; color: #555; }
        .bill-meta strong { font-size: 1.2rem; color: #111; }
        table { width: 100%; border-collapse: collapse; margin: 24px 0; }
        th { background: #f0fdf4; padding: 10px 14px; text-align: left; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; color: #059669; border-bottom: 2px solid #d1fae5; }
        td { padding: 10px 14px; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; }
        .totals { margin-left: auto; width: 300px; }
        .totals tr td { border: none; padding: 6px 14px; }
        .totals tr:last-child td { font-size: 1.1rem; font-weight: 800; color: #059669; border-top: 2px solid #d1fae5; padding-top: 12px; }
        .footer { margin-top: 40px; text-align: center; font-size: 0.85rem; color: #999; border-top: 1px solid #e5e7eb; padding-top: 20px; }
        .customer-box { background: #f0fdf4; border: 1px solid #d1fae5; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
        .customer-box h4 { margin: 0 0 4px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: #059669; }
        @media print { body { padding: 20px; } }
      </style>
    </head><body>
      <div class="header">
        <div>
          <div class="brand">🍎 FreshFruits<small>Premium Organic Fruits</small></div>
          <div style="font-size:0.82rem;color:#888;margin-top:6px">📍 Bengaluru, India &nbsp;•&nbsp; 📞 +91 98765 43210</div>
        </div>
        <div class="bill-meta">
          <strong>TAX INVOICE</strong><br/>
          Bill No: <b>${billNo}</b><br/>
          Order: ${o.id}<br/>
          Date: ${o.date}<br/>
          Payment: ${o.method}
        </div>
      </div>
      <div class="customer-box">
        <h4>Billed To</h4>
        <b>${customer}</b>
      </div>
      <table>
        <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Amount</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <table class="totals">
        <tr><td>Subtotal</td><td style="text-align:right">₹${subtotal.toLocaleString('en-IN')}</td></tr>
        <tr><td>GST @ 5%</td><td style="text-align:right">₹${gst.toLocaleString('en-IN')}</td></tr>
        <tr><td><b>Grand Total</b></td><td style="text-align:right"><b>₹${grand.toLocaleString('en-IN')}</b></td></tr>
      </table>
      <div class="footer">
        Thank you for shopping with FreshFruits! 🍎<br/>
        www.freshfruits.in &nbsp;•&nbsp; hello@freshfruits.in
      </div>
      <script>window.onload=()=>window.print();<\/script>
    </body></html>`);
    win.document.close();
  },

  printAllBills() {
    if (this.orders.length === 0) { this.toast('No bills to print', 'error'); return; }
    this.orders.forEach(o => this.printBill(o.id));
  },

  // ========== CONTACT MANAGEMENT ==========
  CT_FIELDS: ['name','phone','whatsapp','email','hours','delivery','address','about',
              'website','instagram','facebook','twitter','youtube','maps',
              'upi','gst','bank','account','ifsc','minorder','freedel','tax','currency'],

  switchContactTab(tab, el) {
    document.querySelectorAll('.ctab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.ctab-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById(`ctab-${tab}`);
    if (target) target.classList.remove('hidden');
    if (el) el.classList.add('active');
  },

  loadContact() {
    const ct = JSON.parse(localStorage.getItem('ff_contact') || '{}');
    this.CT_FIELDS.forEach(f => {
      const el = document.getElementById(`ct-${f}`);
      if (el && ct[f] !== undefined) el.value = ct[f];
    });
    if (Object.keys(ct).length > 0) this.renderContactPreview(ct);
  },

  saveContact() {
    const ct = {};
    this.CT_FIELDS.forEach(f => {
      const el = document.getElementById(`ct-${f}`);
      if (el) ct[f] = el.value.trim();
    });
    localStorage.setItem('ff_contact', JSON.stringify(ct));
    this.renderContactPreview(ct);
    this.applyContactToFooter(ct);
    this.toast('✅ Contact info saved & applied to site!');
  },

  resetContact() {
    if (!confirm('Reset all contact info to defaults?')) return;
    this.CT_FIELDS.forEach(f => {
      const el = document.getElementById(`ct-${f}`);
      if (el) el.value = '';
    });
    localStorage.removeItem('ff_contact');
    const content = document.getElementById('contact-preview-content');
    if (content) content.innerHTML = `<p style="color:var(--text-muted);font-size:0.85rem">Fill in the fields above and click Save & Apply to see a preview.</p>`;
    this.toast('↺ Contact info reset.');
  },

  renderContactPreview(ct) {
    const content = document.getElementById('contact-preview-content');
    if (!content) return;
    const rows = [
      ['🏪', 'Store Name',    ct.name],
      ['📞', 'Phone',         ct.phone],
      ['💬', 'WhatsApp',      ct.whatsapp],
      ['📧', 'Email',         ct.email],
      ['🌐', 'Website',       ct.website],
      ['🕗', 'Working Hours', ct.hours],
      ['🚚', 'Delivery',      ct.delivery],
      ['📍', 'Address',       ct.address],
      ['📸', 'Instagram',     ct.instagram],
      ['👍', 'Facebook',      ct.facebook],
      ['🏷️', 'GST No.',       ct.gst],
      ['💰', 'Min Order',     ct.minorder ? `₹${ct.minorder}` : ''],
      ['🚀', 'Free Delivery', ct.freedel  ? `Above ₹${ct.freedel}` : ''],
      ['🔖', 'Tax Rate',      ct.tax      ? `${ct.tax}%` : ''],
    ].filter(r => r[2]);
    content.innerHTML = rows.length
      ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:0.4rem">
          ${rows.map(([icon, label, val]) =>
            `<div class="contact-preview-item"><strong>${icon} ${label}</strong><span>${val}</span></div>`
          ).join('')}
        </div>`
      : `<p style="color:var(--text-muted);font-size:0.85rem">No data saved yet.</p>`;
  },

  applyContactToFooter(ct) {
    document.querySelectorAll('.footer-col').forEach(col => {
      if (col.querySelector('h4')?.textContent?.includes('Contact')) {
        const phone   = ct.phone   || '+91 98765 43210';
        const email   = ct.email   || 'hello@freshfruits.in';
        const address = ct.address || 'Bengaluru, India';
        const hours   = ct.hours   || 'Mon–Sat: 7 AM – 8 PM';
        col.innerHTML = `<h4>Contact</h4>
          <p>📞 ${phone}</p>
          <p>📧 ${email}</p>
          <p>📍 ${address}</p>
          <p>🕗 ${hours}</p>
          ${ct.whatsapp ? `<p>💬 WA: ${ct.whatsapp}</p>` : ''}`;
      }
    });
  },

  // ========== CUSTOMER MANAGEMENT ==========
  getCustomers() {
    let stored = JSON.parse(localStorage.getItem('ff_customers') || 'null');
    // Seed admin if first time
    if (!stored) {
      stored = [
        { id:'C008', name:'Admin User', email:'admin@fruit.com', phone:'+91 99999 00000', role:'admin', address:'MG Road, Bengaluru', joined:'01/01/2026', orders:0, spent:0 }
      ];
      localStorage.setItem('ff_customers', JSON.stringify(stored));
    }
    // Auto-remove the old demo customers if they still exist
    if (stored.find(c => c.id === 'C001')) {
      stored = stored.filter(c => !['C001','C002','C003','C004','C005','C006','C007'].includes(c.id));
      localStorage.setItem('ff_customers', JSON.stringify(stored));
    }
    return stored;
  },

  renderCustomerTable(list) {
    const tbody = document.getElementById('admin-customers-table');
    const stats = document.getElementById('customer-stats-row');
    if (!tbody) return;
    const customers = list || this.getCustomers();

    // Stats row
    if (stats) {
      const total  = customers.length;
      const admins = customers.filter(c => c.role === 'admin').length;
      const totalSpent = customers.reduce((s, c) => s + (c.spent || 0), 0);
      const totalOrds  = customers.reduce((s, c) => s + (c.orders || 0), 0);
      stats.innerHTML = `
        <div class="cust-stat">👥 <strong>${total}</strong> Total Customers</div>
        <div class="cust-stat">🛒 <strong>${totalOrds}</strong> Orders Placed</div>
        <div class="cust-stat">💰 <strong>₹${totalSpent.toLocaleString('en-IN')}</strong> Total Spent</div>
        <div class="cust-stat">🛡️ <strong>${admins}</strong> Admin Users</div>
      `;
    }

    if (customers.length === 0) {
      tbody.innerHTML = `<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Joined</th><th>Orders</th><th>Spent</th><th>Actions</th></tr></thead>
        <tbody><tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:2rem">No customers found</td></tr></tbody>`;
      return;
    }

    tbody.innerHTML = `<thead><tr>
      <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Joined</th><th>Orders</th><th>Spent</th><th>Actions</th>
    </tr></thead>
    <tbody>${customers.map(c => `<tr>
      <td style="font-family:monospace;font-size:0.78rem;color:var(--text-muted)">${c.id}</td>
      <td>
        <div style="display:flex;align-items:center;gap:0.6rem">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.85rem;flex-shrink:0">
            ${(c.name||'?')[0].toUpperCase()}
          </div>
          <div>
            <div style="font-weight:600;font-size:0.9rem">${c.name}</div>
            <div style="font-size:0.75rem;color:var(--text-muted)">${c.address||'—'}</div>
          </div>
        </div>
      </td>
      <td style="font-size:0.85rem">${c.email}</td>
      <td style="font-size:0.85rem">${c.phone||'—'}</td>
      <td><span class="role-badge role-${c.role}">${c.role==='admin'?'👑 Admin':'🛒 Customer'}</span></td>
      <td style="font-size:0.82rem;color:var(--text-muted)">${c.joined||'—'}</td>
      <td style="text-align:center;font-weight:700">${c.orders||0}</td>
      <td style="color:var(--secondary);font-weight:700">₹${(c.spent||0).toLocaleString('en-IN')}</td>
      <td>
        <div style="display:flex;gap:0.35rem;flex-wrap:wrap">
          <button class="btn-sm btn-primary" onclick="app.openEditCustomer('${c.id}')">✏️ Edit</button>
          <button class="btn-sm btn-danger"  onclick="app.deleteCustomer('${c.id}')">🗑️</button>
        </div>
      </td>
    </tr>`).join('')}</tbody>`;
  },

  filterCustomers(query) {
    const customers = this.getCustomers();
    const q = query.toLowerCase();
    const filtered = q
      ? customers.filter(c =>
          (c.name||'').toLowerCase().includes(q) ||
          (c.email||'').toLowerCase().includes(q) ||
          (c.phone||'').toLowerCase().includes(q) ||
          (c.id||'').toLowerCase().includes(q)
        )
      : customers;
    this.renderCustomerTable(filtered);
  },

  openEditCustomer(id) {
    const customers = this.getCustomers();
    const c = customers.find(x => x.id === id);
    if (!c) return;
    document.getElementById('ec-id').value      = c.id;
    document.getElementById('ec-name').value    = c.name    || '';
    document.getElementById('ec-email').value   = c.email   || '';
    document.getElementById('ec-phone').value   = c.phone   || '';
    document.getElementById('ec-role').value    = c.role    || 'user';
    document.getElementById('ec-address').value = c.address || '';
    const modal = document.getElementById('edit-customer-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  closeEditCustomer() {
    const modal = document.getElementById('edit-customer-modal');
    if (modal) modal.classList.add('hidden');
  },

  saveEditCustomer() {
    const id = document.getElementById('ec-id').value;
    const customers = this.getCustomers();
    const idx = customers.findIndex(c => c.id === id);
    if (idx === -1) return;
    customers[idx].name    = document.getElementById('ec-name').value.trim();
    customers[idx].email   = document.getElementById('ec-email').value.trim();
    customers[idx].phone   = document.getElementById('ec-phone').value.trim();
    customers[idx].role    = document.getElementById('ec-role').value;
    customers[idx].address = document.getElementById('ec-address').value.trim();
    localStorage.setItem('ff_customers', JSON.stringify(customers));
    this.closeEditCustomer();
    this.renderCustomerTable();
    this.toast(`✅ Customer ${customers[idx].name} updated!`);
  },

  deleteCustomer(id) {
    if (!confirm('Delete this customer? This cannot be undone.')) return;
    let customers = this.getCustomers();
    customers = customers.filter(c => c.id !== id);
    localStorage.setItem('ff_customers', JSON.stringify(customers));
    this.closeEditCustomer();
    this.renderCustomerTable();
    this.toast('🗑️ Customer deleted.');
  },

  exportCustomersPDF() {
    if (typeof window.jspdf === 'undefined' && typeof jspdf === 'undefined') {
      this.toast('PDF library loading... try again', 'info'); return;
    }
    const { jsPDF } = window.jspdf || jspdf;
    const doc = new jsPDF({ unit:'mm', format:'a4' });
    const customers = this.getCustomers();
    const W = 210, margin = 15;
    const now = new Date();

    // Header
    doc.setFillColor(5,150,105); doc.rect(0,0,W,32,'F');
    doc.setTextColor(255,255,255);
    doc.setFontSize(16); doc.setFont('helvetica','bold');
    doc.text('FreshFruits — Customer Report', margin, 13);
    doc.setFontSize(8); doc.setFont('helvetica','normal');
    doc.text(`Generated: ${now.toLocaleString('en-IN')} · Total Customers: ${customers.length}`, margin, 21);
    doc.text(`Total Orders: ${customers.reduce((s,c)=>s+(c.orders||0),0)} · Total Revenue: Rs.${customers.reduce((s,c)=>s+(c.spent||0),0).toLocaleString('en-IN')}`, margin, 27);

    // Table
    let y = 42;
    const headers = ['ID','Name','Email','Phone','Role','Joined','Orders','Spent'];
    const widths  = [14,34,42,28,18,18,14,18];
    doc.setFillColor(240,253,244); doc.setDrawColor(167,243,208);
    doc.rect(margin, y, W-margin*2, 9, 'FD');
    doc.setTextColor(5,150,105); doc.setFontSize(7); doc.setFont('helvetica','bold');
    let px = margin+2;
    headers.forEach((h,i) => { doc.text(h, px, y+6); px += widths[i]; });
    y += 10;

    doc.setFont('helvetica','normal'); doc.setTextColor(30,41,59); doc.setFontSize(7);
    customers.forEach((c, idx) => {
      if (y > 270) { doc.addPage(); y = 20; }
      if (idx % 2 === 0) { doc.setFillColor(248,250,252); doc.rect(margin, y-3, W-margin*2, 9, 'F'); }
      px = margin+2;
      const row = [c.id, c.name, c.email, c.phone||'—', c.role, c.joined||'—', String(c.orders||0), `Rs.${(c.spent||0).toLocaleString('en-IN')}`];
      row.forEach((val, i) => { doc.text(String(val).substring(0,24), px, y+2); px += widths[i]; });
      doc.setDrawColor(229,231,235); doc.line(margin, y+5, W-margin, y+5);
      y += 9;
    });

    // Footer
    doc.setFillColor(5,150,105); doc.rect(0,287,W,10,'F');
    doc.setTextColor(255,255,255); doc.setFontSize(7);
    doc.text('FreshFruits | Confidential Customer Data', W/2, 293, {align:'center'});

    doc.save(`FreshFruits_Customers_${now.toLocaleDateString('en-IN').replace(/\//g,'-')}.pdf`);
    this.toast('📄 Customers PDF exported!');
  },



  // ========== DASHBOARD PDF EXPORT ==========
  exportDashboardPDF() {
    if (typeof window.jspdf === 'undefined' && typeof jspdf === 'undefined') {
      this.toast('PDF library loading... try again in a moment', 'info');
      return;
    }
    const { jsPDF } = window.jspdf || jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const now = new Date();
    const W = 210, margin = 15;

    // ---- Header ----
    doc.setFillColor(5, 150, 105);
    doc.rect(0, 0, W, 38, 'F');
    doc.setTextColor(255,255,255);
    doc.setFontSize(20); doc.setFont('helvetica','bold');
    doc.text('FreshFruits — Admin Dashboard Report', margin, 16);
    doc.setFontSize(9); doc.setFont('helvetica','normal');
    doc.text(`Generated: ${now.toLocaleString('en-IN')}`, margin, 24);
    doc.text(`Period: Today (${now.toLocaleDateString('en-IN')})`, margin, 30);

    // ---- KPI Section ----
    let y = 48;
    doc.setTextColor(30,41,59); doc.setFontSize(13); doc.setFont('helvetica','bold');
    doc.text('Key Performance Indicators', margin, y); y += 8;

    // KPI boxes (2×3 grid)
    const midnight = new Date(now); midnight.setHours(0,0,0,0);
    const frac = Math.pow((now - midnight) / 1000 / 86400, 0.6);
    const kpis = [
      { icon: 'Revenue',  val: `Rs.${Math.floor((this.SEED.revenue + this.orders.reduce((s,o)=>s+(o.total||0),0)) * frac).toLocaleString('en-IN')}`, col:[16,185,129] },
      { icon: 'Orders',   val: Math.floor((this.SEED.orders  + this.orders.length) * frac), col:[245,158,11] },
      { icon: 'Users',    val: Math.floor(this.SEED.users * frac).toLocaleString('en-IN'), col:[99,102,241] },
      { icon: 'Rating',   val: (this.SEED.rating * frac).toFixed(1) + ' / 5', col:[239,68,68] },
      { icon: 'Products', val: PRODUCTS.length, col:[14,165,233] },
      { icon: 'Bills',    val: Math.floor((this.SEED.orders + this.orders.length) * frac), col:[168,85,247] }
    ];
    const boxW = (W - margin*2 - 10) / 3;
    const boxH = 22;
    kpis.forEach((k, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const bx = margin + col * (boxW + 5);
      const by = y + row * (boxH + 5);
      doc.setFillColor(...k.col.map(c => Math.floor(c * 0.15 + 240)));
      doc.setDrawColor(...k.col);
      doc.roundedRect(bx, by, boxW, boxH, 3, 3, 'FD');
      doc.setTextColor(...k.col); doc.setFontSize(7.5); doc.setFont('helvetica','bold');
      doc.text(k.icon.toUpperCase(), bx+4, by+7);
      doc.setFontSize(13); doc.setFont('helvetica','bold');
      doc.text(String(k.val), bx+4, by+17);
    });
    y += 2 * (boxH + 5) + 12;

    // ---- Progress bar ----
    const pct = Math.round(frac * 100);
    doc.setTextColor(30,41,59); doc.setFontSize(10); doc.setFont('helvetica','bold');
    doc.text(`Today's Progress: ${pct}% of daily target reached`, margin, y); y += 6;
    doc.setFillColor(220,252,231); doc.rect(margin, y, W-margin*2, 6, 'F');
    doc.setFillColor(5,150,105); doc.rect(margin, y, (W-margin*2) * frac, 6, 'F');
    y += 12;

    // ---- Products Table ----
    doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(30,41,59);
    doc.text('Product Inventory', margin, y); y += 7;
    doc.setFillColor(240,253,244); doc.setDrawColor(167,243,208);
    doc.rect(margin, y, W-margin*2, 8, 'FD');
    doc.setFontSize(7.5); doc.setFont('helvetica','bold'); doc.setTextColor(5,150,105);
    const ph = ['Product', 'Category', 'Price', 'Stock', 'Freshness', 'Organic'];
    const pw = [55, 28, 22, 20, 25, 20];
    let px = margin + 2;
    ph.forEach((h, i) => { doc.text(h, px, y+5.5); px += pw[i]; });
    y += 9;
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(30,41,59);
    PRODUCTS.slice(0, 12).forEach((p, idx) => {
      if (idx % 2 === 0) { doc.setFillColor(248,250,252); doc.rect(margin, y-3, W-margin*2, 8, 'F'); }
      px = margin + 2;
      const cells = [p.name, p.category, `Rs.${p.price}`, `${p.stock}kg`, `${p.freshness}/100`, p.organic ? 'Yes' : 'No'];
      cells.forEach((c, i) => { doc.text(String(c).substring(0,20), px, y+2); px += pw[i]; });
      doc.setDrawColor(229,231,235); doc.line(margin, y+4, W-margin, y+4);
      y += 8;
    });
    y += 6;

    // ---- Orders Summary ----
    if (this.orders.length > 0) {
      doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(30,41,59);
      doc.text('Recent Orders', margin, y); y += 7;
      doc.setFillColor(240,253,244); doc.setDrawColor(167,243,208);
      doc.rect(margin, y, W-margin*2, 8, 'FD');
      doc.setFontSize(7.5); doc.setFont('helvetica','bold'); doc.setTextColor(5,150,105);
      const oh = ['Order ID','Date','Customer','Items','Total','Status'];
      const ow = [35, 22, 30, 16, 22, 22];
      px = margin + 2;
      oh.forEach((h,i) => { doc.text(h, px, y+5.5); px += ow[i]; });
      y += 9;
      doc.setFont('helvetica','normal'); doc.setTextColor(30,41,59);
      [...this.orders].reverse().slice(0,8).forEach((o, idx) => {
        if (idx % 2 === 0) { doc.setFillColor(248,250,252); doc.rect(margin, y-3, W-margin*2, 8, 'F'); }
        px = margin + 2;
        const cells = [o.id.slice(-10), o.date, o.user||'Guest', o.items.reduce((s,i)=>s+i.qty,0), `Rs.${o.total}`, o.status];
        cells.forEach((c, i) => { doc.text(String(c).substring(0,18), px, y+2); px += ow[i]; });
        doc.setDrawColor(229,231,235); doc.line(margin, y+4, W-margin, y+4);
        y += 8;
      });
    }

    // ---- Footer ----
    const ct = JSON.parse(localStorage.getItem('ff_contact') || '{}');
    doc.setFillColor(5,150,105); doc.rect(0, 287, W, 10, 'F');
    doc.setTextColor(255,255,255); doc.setFontSize(7.5); doc.setFont('helvetica','normal');
    doc.text(`${ct.name||'FreshFruits'}  |  ${ct.email||'hello@freshfruits.in'}  |  ${ct.phone||'+91 98765 43210'}  |  Confidential`, W/2, 293, {align:'center'});

    doc.save(`FreshFruits_Dashboard_${now.toLocaleDateString('en-IN').replace(/\//g,'-')}.pdf`);
    this.toast('📊 Dashboard PDF exported!');
  },



  deleteProduct(id) {
    const idx = PRODUCTS.findIndex(p => p.id === id);
    if (idx !== -1) PRODUCTS.splice(idx, 1);
    this.renderAdminTables();
    this.renderProducts();
    this.toast('Product removed.');
  },

  // ========== AI RECOMMENDATIONS ==========
  getRecommendations() {
    const goal = document.getElementById('rec-goal').value;
    const taste = document.getElementById('rec-taste').value;
    const noTags = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(i => i.value);

    let results = [...PRODUCTS];
    if (goal) results = results.filter(p => p.tags && p.tags.includes(goal));
    if (taste === 'sweet') results = results.filter(p => ['tropical','berries','seasonal'].includes(p.category));
    if (taste === 'tangy') results = results.filter(p => p.category === 'citrus' || p.category === 'berries');
    if (noTags.includes('no-citrus')) results = results.filter(p => p.category !== 'citrus');
    if (noTags.includes('no-tropical')) results = results.filter(p => p.category !== 'tropical');
    if (noTags.includes('organic-only')) results = results.filter(p => p.organic);

    if (results.length === 0) results = [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 4);
    this.renderGrid(results, 'recommendations-grid');

    const grid = document.getElementById('recommendations-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.toast(`🤖 Found ${results.length} fruits perfect for you!`);
  },

  // ========== SEARCH ==========
  toggleSearch() {
    const bar = document.getElementById('search-bar');
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
      document.getElementById('search-input').focus();
    }
  },
  closeSearch() {
    document.getElementById('search-bar').classList.add('hidden');
    document.getElementById('search-results').innerHTML = '';
  },
  liveSearch(q) {
    const results = document.getElementById('search-results');
    if (!q.trim()) { results.innerHTML = ''; return; }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.category.toLowerCase().includes(q.toLowerCase()) ||
      p.desc.toLowerCase().includes(q.toLowerCase())
    );
    if (matches.length === 0) {
      results.innerHTML = `<div class="search-result-item" style="color:var(--text-muted)">No results for "${q}"</div>`;
      return;
    }
    results.innerHTML = matches.map(p =>
      `<div class="search-result-item" onclick="app.closeSearch();app.openProduct(${p.id})">
        ${p.emoji} ${p.name} — ₹${p.price}/${p.unit}
      </div>`
    ).join('');
  },

  // ========== VOICE SEARCH ==========
  startVoice() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      this.toast('Voice search not supported on this browser', 'error');
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new SR();
    r.lang = 'en-IN';
    r.onstart = () => this.toast('🎙️ Listening...', 'info');
    r.onresult = e => {
      const q = e.results[0][0].transcript;
      this.toggleSearch();
      document.getElementById('search-input').value = q;
      this.liveSearch(q);
    };
    r.onerror = () => this.toast('Could not hear you. Try again.', 'error');
    r.start();
  },

  // ========== SUBSCRIBE ==========
  subscribe(planName) {
    if (!this.user) {
      this.toast('Please login to subscribe', 'info');
      this.showModal('login');
      return;
    }
    const name = planName || '';
    if (name) {
      this.toast(`✅ Subscribed to ${name}! First box ships tomorrow 📦`);
    } else {
      const email = document.getElementById('newsletter-email')?.value?.trim();
      if (!email || !email.includes('@')) {
        this.toast('Enter a valid email address', 'error');
        return;
      }
      this.toast(`📬 Subscribed! Check ${email} for your 10% off coupon.`);
    }
  },

  // ========== HELPERS ==========
  closeAll() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('payment-modal').classList.add('hidden');
    document.getElementById('add-product-modal').classList.add('hidden');
    if (this.menuOpen) {
      this.menuOpen = false;
      document.getElementById('nav-links').classList.remove('open');
    }
  },

  // ========== NOTIFICATIONS ==========
  requestNotificationPermission() {
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  },

  sendPushNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/assets/logo.png' // assuming this exists, or it'll just fallback
      });
    }
  },

  toast(msg, type = '') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.classList.add('exit');
      setTimeout(() => t.remove(), 400);
    }, 3200);
  },

  initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('active');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};

// ===================== BOOT =====================
document.addEventListener('DOMContentLoaded', () => {
  app.init();

  // Render admin tables when admin view becomes active
  const adminView = document.getElementById('admin-view');
  const viewObserver = new MutationObserver(() => {
    if (!adminView.classList.contains('hidden')) {
      app.renderAdminTables();
    }
  });
  viewObserver.observe(adminView, { attributes: true, attributeFilter: ['class'] });
});
