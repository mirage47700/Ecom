'use strict';

/* ── Default Data ──────────────────────────────────────────────────────────── */
const LS_KEY = 'ecom_research_v1';

const DEFAULT_DATA = [
  {
    id: 'washable-rugs-2026',
    productName: 'Washable Rugs',
    niche: 'Home Decor',
    date: '2026-02-28',
    trends: { y5: 'stable', m12: 'growing', d90: 'stable' },
    keywords: [
      { kw: 'Washable rug',          searches: 110000, cpcHigh: null, cpcLow: null, cpcAvg: 2.59, price100: 259.00 },
      { kw: 'Ruggable rugs',         searches: 74000,  cpcHigh: null, cpcLow: null, cpcAvg: 1.85, price100: 185.00 },
      { kw: 'Washable area rugs',    searches: 22000,  cpcHigh: null, cpcLow: null, cpcAvg: 2.11, price100: 210.50 },
      { kw: 'Washable runner rugs',  searches: 12100,  cpcHigh: null, cpcLow: null, cpcAvg: 2.04, price100: 203.50 },
      { kw: 'Machine washable rugs', searches: 40500,  cpcHigh: null, cpcLow: null, cpcAvg: 2.00, price100: 199.50 },
    ],
    competitors: [
      { name: 'incrediblerugsanddecor.com', productUrl: 'https://incrediblerugsanddecor.com/products/karastan-marash-ankara-beige-area-rug', bestSellingUrl: '', visitors: 90000 },
      { name: 'cosyhomeer.com',             productUrl: 'https://cosyhomeer.com/products/frame-non-skid-washable-kitchen-rugs',             bestSellingUrl: 'https://cosyhomeer.com/collections/all?sort_by=best-selling',    visitors: 10000 },
      { name: 'lorenacanals.us',            productUrl: 'https://lorenacanals.us/collections/washable-rugs-home',                          bestSellingUrl: 'https://lorenacanals.us/collections/all?sort_by=best-selling',   visitors: 50000 },
      { name: 'tumbleliving.com',           productUrl: 'https://www.tumbleliving.com/collections/bestsellers',                            bestSellingUrl: 'https://www.tumbleliving.com/collections/all?sort_by=best-selling', visitors: 750000 },
      { name: 'ruggable.com',               productUrl: 'https://ruggable.com/products/desert-sumac-rug',                                  bestSellingUrl: 'https://ruggable.com/collections/all-rugs',                      visitors: 4300000 },
    ],
    catalog: [
      { product: 'Washable Area Rug 5×7',          source: 'ruggable.com',               supplierUrl: '' },
      { product: 'Washable Runner Rug 2×7',         source: 'ruggable.com',               supplierUrl: '' },
      { product: 'Machine Washable Kitchen Rug',    source: 'cosyhomeer.com',             supplierUrl: '' },
      { product: 'Washable Kids Play Rug',          source: 'lorenacanals.us',            supplierUrl: '' },
      { product: 'Washable Boho Area Rug',          source: 'tumbleliving.com',           supplierUrl: '' },
      { product: 'Washable Outdoor Rug 4×6',        source: 'tumbleliving.com',           supplierUrl: '' },
      { product: 'Anti-Slip Washable Bath Rug',     source: 'cosyhomeer.com',             supplierUrl: '' },
      { product: 'Washable Moroccan Rug',           source: 'incrediblerugsanddecor.com', supplierUrl: '' },
    ],
    decision: 'go',
    notes: '',
  },
  {
    id: 'sconce-lights-2026',
    productName: 'Sconce Light / Wall Lights',
    niche: 'Home Lighting',
    date: '2026-02-28',
    trends: { y5: 'stable', m12: 'stable', d90: 'stable' },
    keywords: [
      { kw: 'Sconce light',         searches: 27100, cpcHigh: 2.45, cpcLow: 0.48, cpcAvg: 1.47, price100: 146.50 },
      { kw: 'Wall lights',          searches: 22200, cpcHigh: 2.07, cpcLow: 0.33, cpcAvg: 1.20, price100: 120.00 },
      { kw: 'Outdoor wall lights',  searches: 22200, cpcHigh: 3.25, cpcLow: 0.46, cpcAvg: 1.86, price100: 185.50 },
      { kw: 'Exterior wall lights', searches: 22200, cpcHigh: 3.25, cpcLow: 0.46, cpcAvg: 1.86, price100: 185.50 },
      { kw: 'Wall lamp outdoor',    searches: 22200, cpcHigh: 3.25, cpcLow: 0.46, cpcAvg: 1.86, price100: 185.50 },
    ],
    competitors: [
      { name: 'interiormoderna.com', productUrl: 'https://interiormoderna.com/products/solstice-sconce',                      bestSellingUrl: 'https://interiormoderna.com/collections/all?sort_by=best-selling', visitors: 39000 },
      { name: 'vinlighting.com',     productUrl: 'https://vinlighting.com/products/eveline-double-wall-sconce',              bestSellingUrl: 'https://vinlighting.com/collections/all?sort_by=best-selling',     visitors: 33000 },
      { name: 'dazuma.us',           productUrl: 'https://dazuma.us/products/nordic-minimalist-led-wall-sconces-waterproof', bestSellingUrl: 'https://dazuma.us/collections/all?sort_by=best-selling',           visitors: 200000 },
      { name: 'orvanihome.com',      productUrl: 'https://orvanihome.com/products/rondel-wall-sconce',                       bestSellingUrl: 'https://orvanihome.com/collections/all?sort_by=best-selling',      visitors: 20000 },
      { name: 'docos.us',            productUrl: 'https://docos.us/products/carlyle-wall-lamp',                              bestSellingUrl: 'https://docos.us/collections/all?sort_by=best-selling',            visitors: 190000 },
    ],
    catalog: [
      { product: 'Nordic Waterproof LED Wall Sconce', source: 'dazuma.us',      supplierUrl: '' },
      { product: 'Modern Double Wall Sconce',         source: 'vinlighting.com', supplierUrl: '' },
      { product: 'Outdoor Brushed Gold Wall Lamp',    source: 'docos.us',        supplierUrl: '' },
    ],
    decision: 'pending',
    notes: '',
  },
];

/* ── State ─────────────────────────────────────────────────────────────────── */
let data = [];

function loadData() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    data = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch {
    data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData() {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

/* ── Utilities ─────────────────────────────────────────────────────────────── */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtNum(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return new Intl.NumberFormat('fr-FR').format(n);
}

function fmtMoney(n) {
  if (n === null || n === undefined || isNaN(n) || n === 0 && n !== 0) return '—';
  if (n === null) return '—';
  return '$' + parseFloat(n).toFixed(2);
}

function trendIcon(t)  { return { growing: '📈', stable: '➡️', declining: '📉' }[t] || '➡️'; }
function trendClass(t) { return t === 'growing' ? 'growing' : t === 'declining' ? 'declining' : 'stable'; }
function trendLabel(t) { return { growing: 'Growing', stable: 'Stable', declining: 'Declining' }[t] || 'Stable'; }

function decBadge(d) {
  const map = {
    go:      `<span class="dec-badge go">✅ GO</span>`,
    nogo:    `<span class="dec-badge nogo">❌ NO-GO</span>`,
    pending: `<span class="dec-badge pending">⏳ Pending</span>`,
  };
  return map[d] || map.pending;
}

function totalSearches(kws) { return kws.reduce((s, k) => s + (k.searches || 0), 0); }

function avgCpc(kws) {
  const valid = kws.filter(k => k.cpcAvg);
  return valid.length ? valid.reduce((s, k) => s + k.cpcAvg, 0) / valid.length : null;
}

function maxVisitors(comps) {
  return comps.length ? Math.max(...comps.map(c => c.visitors || 0)) : 0;
}

/* ── Render Cards ──────────────────────────────────────────────────────────── */
function renderCards() {
  const grid  = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  count.textContent = data.length;

  if (!data.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Aucun produit analysé</h3>
        <p>Commence par ajouter ta première recherche produit.</p>
        <button class="btn btn-primary" onclick="openFormModal()">＋ Nouvelle Recherche</button>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(renderCard).join('');
}

function renderCard(r) {
  const total    = totalSearches(r.keywords);
  const cpc      = avgCpc(r.keywords);
  const topVis   = maxVisitors(r.competitors);
  const topKw    = r.keywords[0];
  const catCount = (r.catalog || []).length;

  return `
  <div class="prod-card" onclick="openDetailModal('${r.id}')">
    <div class="prod-card-strip ${r.decision}"></div>
    <div class="prod-card-body">
      <div class="prod-card-top">
        <div>
          <div class="prod-name">${esc(r.productName)}</div>
          ${r.niche ? `<span class="prod-niche">${esc(r.niche)}</span>` : ''}
        </div>
        ${decBadge(r.decision)}
      </div>

      <div class="trends-row">
        <div class="trend-pill ${trendClass(r.trends.y5)}">${trendIcon(r.trends.y5)} 5ans</div>
        <div class="trend-pill ${trendClass(r.trends.m12)}">${trendIcon(r.trends.m12)} 12mo</div>
        <div class="trend-pill ${trendClass(r.trends.d90)}">${trendIcon(r.trends.d90)} 90j</div>
      </div>

      <div class="prod-stats">
        <div class="stat">
          <div class="stat-label">Searches/mo</div>
          <div class="stat-value">${fmtNum(total)}</div>
        </div>
        <div class="stat">
          <div class="stat-label">CPC Moyen</div>
          <div class="stat-value">${cpc !== null ? fmtMoney(cpc) : '—'}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Top concurrent</div>
          <div class="stat-value sm">${fmtNum(topVis)} vis.</div>
        </div>
        <div class="stat">
          <div class="stat-label">Catalogue produits</div>
          <div class="stat-value">${catCount ? catCount + ' produits' : '—'}</div>
        </div>
      </div>

      <div class="prod-date">📅 ${r.date || '—'}</div>
    </div>

    <div class="prod-card-actions" onclick="event.stopPropagation()">
      <button class="btn btn-sm btn-ghost" onclick="openDetailModal('${r.id}')">👁 Voir</button>
      <button class="btn btn-sm btn-ghost" onclick="openFormModal('${r.id}')">✏️ Modifier</button>
      <button class="btn btn-sm btn-danger" onclick="deleteResearch('${r.id}')">🗑</button>
    </div>
  </div>`;
}

/* ── Detail Modal ──────────────────────────────────────────────────────────── */
function openDetailModal(id) {
  const r = data.find(d => d.id === id);
  if (!r) return;
  document.getElementById('detailContent').innerHTML = buildDetail(r);
  openModal('detailModal');
}

function buildDetail(r) {
  const kwRows = r.keywords.map((k, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${esc(k.kw)}</strong></td>
      <td>${fmtNum(k.searches)}</td>
      <td>${k.cpcHigh !== null ? fmtMoney(k.cpcHigh) : '—'}</td>
      <td>${k.cpcLow  !== null ? fmtMoney(k.cpcLow)  : '—'}</td>
      <td class="cpc-avg">${fmtMoney(k.cpcAvg)}</td>
      <td class="price-100">${fmtMoney(k.price100)}</td>
    </tr>`).join('');

  const compRows = r.competitors.map((c, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${esc(c.name)}</strong></td>
      <td>${c.productUrl    ? `<a href="${esc(c.productUrl)}"    target="_blank" rel="noopener">Voir produit ↗</a>`    : '—'}</td>
      <td>${c.bestSellingUrl ? `<a href="${esc(c.bestSellingUrl)}" target="_blank" rel="noopener">Best-selling ↗</a>` : '—'}</td>
      <td><span class="visitors-big">${fmtNum(c.visitors)}</span></td>
    </tr>`).join('');

  return `
  <div class="detail-hdr">
    <div>
      <div class="detail-title">${esc(r.productName)}</div>
      <div class="detail-meta">
        ${r.niche ? `<span class="prod-niche">${esc(r.niche)}</span>` : ''}
        ${decBadge(r.decision)}
        <span style="font-size:12px;color:var(--muted)">📅 ${r.date || '—'}</span>
      </div>
    </div>
    <button class="btn btn-sm btn-ghost" onclick="closeModal('detailModal');openFormModal('${r.id}')">✏️ Modifier</button>
  </div>

  <div class="detail-step">
    <div class="detail-step-title">Steps 3-4 · Google Trends (Timing)</div>
    <div class="trends-row">
      <div class="trend-pill ${trendClass(r.trends.y5)}">${trendIcon(r.trends.y5)} 5 ans — ${trendLabel(r.trends.y5)}</div>
      <div class="trend-pill ${trendClass(r.trends.m12)}">${trendIcon(r.trends.m12)} 12 mois — ${trendLabel(r.trends.m12)}</div>
      <div class="trend-pill ${trendClass(r.trends.d90)}">${trendIcon(r.trends.d90)} 90 jours — ${trendLabel(r.trends.d90)}</div>
    </div>
  </div>

  <div class="detail-step">
    <div class="detail-step-title">Step 5 · Google Keyword Planner</div>
    <table class="detail-table">
      <thead>
        <tr>
          <th>#</th><th>Keyword</th><th>Searches/mo</th>
          <th>CPC High</th><th>CPC Low</th><th>CPC Avg</th><th>Prix / 100 visitors</th>
        </tr>
      </thead>
      <tbody>${kwRows}</tbody>
    </table>
  </div>

  <div class="detail-step">
    <div class="detail-step-title">Step 6 · Concurrents Shopify</div>
    <table class="detail-table">
      <thead>
        <tr><th>#</th><th>Concurrent</th><th>Produit</th><th>Best-selling</th><th>Visitors/mo</th></tr>
      </thead>
      <tbody>${compRows}</tbody>
    </table>
  </div>

  ${(r.catalog || []).length ? `
  <div class="detail-step">
    <div class="detail-step-title">Step 7 · Catalogue Produits à sourcer</div>
    <table class="detail-table">
      <thead>
        <tr><th>#</th><th>Produit</th><th>Source (concurrent)</th><th>Supplier (AliExpress / Alibaba)</th></tr>
      </thead>
      <tbody>${(r.catalog).map((p, i) => `
        <tr>
          <td>${i + 1}</td>
          <td><strong>${esc(p.product)}</strong></td>
          <td>${esc(p.source) || '—'}</td>
          <td>${p.supplierUrl ? `<a href="${esc(p.supplierUrl)}" target="_blank" rel="noopener">Voir supplier ↗</a>` : '<span style="color:var(--muted)">À renseigner</span>'}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>` : ''}

  ${r.notes ? `
  <div class="detail-step">
    <div class="detail-step-title">Notes</div>
    <p style="font-size:14px;color:var(--text);white-space:pre-wrap">${esc(r.notes)}</p>
  </div>` : ''}`;
}

/* ── Form ──────────────────────────────────────────────────────────────────── */
function buildFormRows() {
  let kw = '';
  for (let i = 0; i < 5; i++) {
    kw += `<tr>
      <td class="rn">${i + 1}</td>
      <td><input type="text"   id="kw-${i}"       placeholder="Keyword..."></td>
      <td><input type="number" id="searches-${i}" placeholder="0"    min="0"></td>
      <td><input type="number" id="cpcH-${i}"     placeholder="—"    min="0" step="0.01"></td>
      <td><input type="number" id="cpcL-${i}"     placeholder="—"    min="0" step="0.01"></td>
      <td><input type="number" id="cpcA-${i}"     placeholder="0.00" min="0" step="0.01"></td>
      <td><input type="number" id="price-${i}"    placeholder="0.00" min="0" step="0.01"></td>
    </tr>`;
  }
  document.getElementById('kwBody').innerHTML = kw;

  let comp = '';
  for (let i = 0; i < 5; i++) {
    comp += `<tr>
      <td class="rn">${i + 1}</td>
      <td><input type="text"   id="cname-${i}" placeholder="example.com"></td>
      <td><input type="url"    id="cprod-${i}" placeholder="https://..."></td>
      <td><input type="url"    id="cbest-${i}" placeholder="https://.../collections/all?sort_by=best-selling"></td>
      <td><input type="number" id="cvis-${i}"  placeholder="0" min="0"></td>
    </tr>`;
  }
  document.getElementById('compBody').innerHTML = comp;

  let cat = '';
  for (let i = 0; i < 10; i++) {
    cat += `<tr>
      <td class="rn">${i + 1}</td>
      <td><input type="text" id="cat-prod-${i}" placeholder="Nom du produit..."></td>
      <td><input type="text" id="cat-src-${i}"  placeholder="concurrent.com"></td>
      <td><input type="url"  id="cat-url-${i}"  placeholder="https://aliexpress.com/..."></td>
    </tr>`;
  }
  document.getElementById('catalogBody').innerHTML = cat;
}

function openFormModal(id) {
  buildFormRows();
  document.getElementById('researchForm').reset();

  if (id) {
    const r = data.find(d => d.id === id);
    if (!r) return;
    document.getElementById('formTitle').textContent = '✏️ Modifier la Recherche';
    document.getElementById('f-id').value    = r.id;
    document.getElementById('f-name').value  = r.productName;
    document.getElementById('f-niche').value = r.niche || '';
    document.getElementById('f-date').value  = r.date  || '';
    document.getElementById('f-y5').value    = r.trends.y5;
    document.getElementById('f-m12').value   = r.trends.m12;
    document.getElementById('f-d90').value   = r.trends.d90;
    document.getElementById('f-notes').value = r.notes || '';

    r.keywords.forEach((k, i) => {
      if (i >= 5) return;
      document.getElementById(`kw-${i}`).value       = k.kw || '';
      document.getElementById(`searches-${i}`).value = k.searches || '';
      document.getElementById(`cpcH-${i}`).value     = k.cpcHigh  !== null ? k.cpcHigh  : '';
      document.getElementById(`cpcL-${i}`).value     = k.cpcLow   !== null ? k.cpcLow   : '';
      document.getElementById(`cpcA-${i}`).value     = k.cpcAvg   !== null ? k.cpcAvg   : '';
      document.getElementById(`price-${i}`).value    = k.price100 !== null ? k.price100 : '';
    });

    r.competitors.forEach((c, i) => {
      if (i >= 5) return;
      document.getElementById(`cname-${i}`).value = c.name         || '';
      document.getElementById(`cprod-${i}`).value = c.productUrl   || '';
      document.getElementById(`cbest-${i}`).value = c.bestSellingUrl || '';
      document.getElementById(`cvis-${i}`).value  = c.visitors     || '';
    });

    (r.catalog || []).forEach((p, i) => {
      if (i >= 10) return;
      document.getElementById(`cat-prod-${i}`).value = p.product     || '';
      document.getElementById(`cat-src-${i}`).value  = p.source      || '';
      document.getElementById(`cat-url-${i}`).value  = p.supplierUrl || '';
    });

    const radio = document.querySelector(`input[name="decision"][value="${r.decision}"]`);
    if (radio) radio.checked = true;
  } else {
    document.getElementById('formTitle').textContent = '＋ Nouvelle Recherche Produit';
    document.getElementById('f-id').value   = '';
    document.getElementById('f-date').value = new Date().toISOString().split('T')[0];
  }

  openModal('formModal');
}

function saveResearch(e) {
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  if (!name) { document.getElementById('f-name').focus(); return; }

  const keywords = [];
  for (let i = 0; i < 5; i++) {
    const kw = document.getElementById(`kw-${i}`).value.trim();
    if (!kw) continue;
    const parseOrNull = id => {
      const v = parseFloat(document.getElementById(id).value);
      return isNaN(v) ? null : v;
    };
    keywords.push({
      kw,
      searches: parseInt(document.getElementById(`searches-${i}`).value) || 0,
      cpcHigh:  parseOrNull(`cpcH-${i}`),
      cpcLow:   parseOrNull(`cpcL-${i}`),
      cpcAvg:   parseOrNull(`cpcA-${i}`),
      price100: parseOrNull(`price-${i}`),
    });
  }

  const competitors = [];
  for (let i = 0; i < 5; i++) {
    const nm   = document.getElementById(`cname-${i}`).value.trim();
    const prod = document.getElementById(`cprod-${i}`).value.trim();
    if (!nm && !prod) continue;
    competitors.push({
      name:          nm,
      productUrl:    prod,
      bestSellingUrl: document.getElementById(`cbest-${i}`).value.trim(),
      visitors:      parseInt(document.getElementById(`cvis-${i}`).value) || 0,
    });
  }

  const catalog = [];
  for (let i = 0; i < 10; i++) {
    const prod = document.getElementById(`cat-prod-${i}`).value.trim();
    if (!prod) continue;
    catalog.push({
      product:     prod,
      source:      document.getElementById(`cat-src-${i}`).value.trim(),
      supplierUrl: document.getElementById(`cat-url-${i}`).value.trim(),
    });
  }

  const id = document.getElementById('f-id').value;
  const research = {
    id: id || uid(),
    productName: name,
    niche: document.getElementById('f-niche').value.trim(),
    date:  document.getElementById('f-date').value,
    trends: {
      y5:  document.getElementById('f-y5').value,
      m12: document.getElementById('f-m12').value,
      d90: document.getElementById('f-d90').value,
    },
    keywords,
    competitors,
    catalog,
    decision: document.querySelector('input[name="decision"]:checked')?.value || 'pending',
    notes: document.getElementById('f-notes').value.trim(),
  };

  if (id) {
    const idx = data.findIndex(d => d.id === id);
    if (idx !== -1) data[idx] = research;
  } else {
    data.push(research);
  }

  saveData();
  renderCards();
  closeModal('formModal');
}

function deleteResearch(id) {
  if (!confirm('Supprimer cette analyse produit ?')) return;
  data = data.filter(d => d.id !== id);
  saveData();
  renderCards();
}

/* ── Modals ────────────────────────────────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal('formModal');
    closeModal('detailModal');
  }
});

/* ── N8n Launch ────────────────────────────────────────────────────────────── */
const LS_N8N_URL     = 'ecom_n8n_url';
const DEFAULT_N8N_URL = 'http://localhost:5678/webhook/ecom-research';

function initLaunch() {
  const urlEl = document.getElementById('launch-url');
  urlEl.value = localStorage.getItem(LS_N8N_URL) || DEFAULT_N8N_URL;
  urlEl.addEventListener('change', () => {
    localStorage.setItem(LS_N8N_URL, urlEl.value.trim());
  });
}

async function launchResearch() {
  const niche  = document.getElementById('launch-niche').value.trim();
  const url    = document.getElementById('launch-url').value.trim();
  const btn    = document.getElementById('launch-btn');
  const status = document.getElementById('launch-status');

  if (!niche) { document.getElementById('launch-niche').focus(); return; }
  if (!url)   { document.getElementById('launch-url').focus();   return; }

  btn.disabled    = true;
  btn.textContent = '⏳ Envoi...';
  status.className   = 'launch-status';
  status.textContent = '';

  try {
    const res = await fetch(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ niche }),
    });

    if (res.ok) {
      status.className   = 'launch-status status-ok';
      status.textContent = `✅ Recherche lancée pour "${niche}" — n8n traite la demande en arrière-plan.`;
      document.getElementById('launch-niche').value = '';
      localStorage.setItem(LS_N8N_URL, url);
    } else {
      status.className   = 'launch-status status-err';
      status.textContent = `❌ Erreur ${res.status} — Vérifiez que n8n est actif et que le workflow est activé.`;
    }
  } catch (err) {
    status.className   = 'launch-status status-err';
    status.textContent = `❌ Impossible de contacter n8n (${err.message}) — vérifiez que n8n tourne sur ${url}`;
  } finally {
    btn.disabled    = false;
    btn.textContent = '🚀 Lancer';
  }
}

/* ── Step 1 Prompt ─────────────────────────────────────────────────────────── */
function buildPrompt(niche) {
  const n = niche || '[votre niche]';
  return `Tu es un expert en e-commerce dropshipping spécialisé en product research pour Google Ads.

Niche à analyser : ${n}

Génère exactement 10 produits evergreen data-driven. CRITÈRES OBLIGATOIRES :
- Produits physiques (non digitaux, non alimentaires)
- Demande stable ou croissante depuis minimum 5 ans
- Forte intention d'achat (buyer intent keywords)
- Volume de recherche estimé > 10 000 / mois sur Google
- Facilement sourcable sur AliExpress ou Alibaba
- Aucune marque déposée (produits génériques uniquement)

Réponds UNIQUEMENT avec du JSON valide, sans markdown, sans explication. Format exact :
{"products":[{"name":"nom en anglais","category":"sous-catégorie","main_keyword":"keyword principal","keywords":["kw1","kw2","kw3","kw4","kw5"],"buyer_intent":"description courte","competition":"low|medium|high","aliexpress_query":"terme de recherche AliExpress","evergreen_reason":"explication courte"}]}`;
}

function refreshPrompt() {
  const niche = document.getElementById('step1-niche').value.trim();
  document.getElementById('step1-prompt').value = buildPrompt(niche);
}

function copyPrompt() {
  const el = document.getElementById('step1-prompt');
  el.select();
  navigator.clipboard.writeText(el.value).catch(() => {
    document.execCommand('copy');
  });
  const btn = event.currentTarget;
  const orig = btn.textContent;
  btn.textContent = '✅ Copié !';
  setTimeout(() => { btn.textContent = orig; }, 1800);
}

/* ── Import IA ─────────────────────────────────────────────────────────────── */
function importAiProducts() {
  const raw    = document.getElementById('import-json').value.trim();
  const btn    = document.getElementById('import-btn');
  const status = document.getElementById('import-status');

  status.className   = 'launch-status';
  status.textContent = '';

  let products;
  try {
    const parsed = JSON.parse(raw);
    products = parsed.products || parsed;
    if (!Array.isArray(products) || !products.length) throw new Error('Aucun produit trouvé dans le JSON.');
  } catch (err) {
    status.className   = 'launch-status status-err';
    status.textContent = `❌ JSON invalide — ${err.message}`;
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  let added = 0;

  products.forEach(p => {
    const name = p.name || p.productName;
    if (!name) return;
    // Éviter les doublons par nom
    if (data.find(d => d.productName.toLowerCase() === name.toLowerCase())) return;

    const niche = (p.category || '').split('>')[0].trim() || p.niche || '';
    const kws   = (p.keywords || []).map(kw => ({ kw, searches: 0, cpcHigh: null, cpcLow: null, cpcAvg: null, price100: null }));

    data.push({
      id:          uid(),
      productName: name,
      niche,
      date:        today,
      trends:      { y5: 'stable', m12: 'stable', d90: 'stable' },
      keywords:    kws.length ? kws : [{ kw: p.main_keyword || '', searches: 0, cpcHigh: null, cpcLow: null, cpcAvg: null, price100: null }],
      competitors: [],
      catalog:     [],
      decision:    'pending',
      notes:       [p.buyer_intent, p.evergreen_reason, p.aliexpress_query ? `AliExpress: ${p.aliexpress_query}` : ''].filter(Boolean).join('\n'),
    });
    added++;
  });

  if (!added) {
    status.className   = 'launch-status status-err';
    status.textContent = '❌ Aucun produit importé — tous existent déjà ou le JSON est vide.';
    return;
  }

  saveData();
  renderCards();
  document.getElementById('import-json').value = '';
  status.className   = 'launch-status status-ok';
  status.textContent = `✅ ${added} produit(s) importé(s) en statut "En attente" — complétez les steps 3-8 pour chacun.`;
}

/* ── Init ──────────────────────────────────────────────────────────────────── */
loadData();
renderCards();
initLaunch();
refreshPrompt();
