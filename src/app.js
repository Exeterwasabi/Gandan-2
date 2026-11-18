/**
 * RX ARCHIVE — 機動戰士鋼彈檔案館 (Vanilla JavaScript ES Module)
 * 不依賴任何前端框架，可直接於靜態伺服器與 GitHub Pages 運行。
 */

const MOBILE_SUITS = [
  {
    id: 'rx-78-2',
    code: 'RX-78-2',
    name: '初代鋼彈',
    enName: 'Gundam',
    era: 'uc',
    eraLabel: '宇宙世紀 0079',
    faction: 'federation',
    factionLabel: '地球聯邦軍',
    pilot: '阿姆羅·雷',
    image: './src/assets/images/hero_rx78_hangar_1794977707549.jpg',
    summary:
      'V 作戰計畫下誕生的近戰格鬥試作機，首次在機動戰士上實現攜帶式光束步槍與學習型電腦系統。',
    height: 18.0,
    weightEmpty: 43.4,
    weightMax: 60.0,
    generatorKw: 1380,
    thrustKg: 55500,
    armorScore: 76,
    mobilityScore: 74,
    armorMaterial: '月神鈦合金 (Luna Titanium)',
    manufacturer: '地球聯邦軍（Side 7 研發）',
    weapons: [
      {
        name: 'XBR-M-79-07G 光束步槍',
        desc: '搭載能源電容技術，具備相當於戰艦主砲級別的單發貫穿火力。',
      },
      {
        name: '光束軍刀 × 2',
        desc: '收納於背包雙側，利用 I-Field 約束高熱米諾夫斯基電漿體進行白刃戰。',
      },
      {
        name: '頭部 60mm 火神砲 × 2',
        desc: '近距離牽制與飛彈攔截用實彈武裝。',
      },
      {
        name: '超絕火箭砲 & 月神鈦專用盾牌',
        desc: '380mm 實彈火箭筒搭配高強度防禦盾，對應宇宙空間多目標作戰。',
      },
    ],
    engineeringNote:
      '採用核心戰機系統（Core Block System）確保戰術資料與駕駛員生還率；後期加裝磁氣覆膜技術大幅提升關節追蹤反應速度，以跟上新人類駕駛員的極限操作。',
  },
  {
    id: 'ms-06s',
    code: 'MS-06S',
    name: '夏亞專用薩克 II',
    enName: 'Char’s Zaku II Commander Type',
    era: 'uc',
    eraLabel: '宇宙世紀 0079',
    faction: 'zeon',
    factionLabel: '吉翁公國軍',
    pilot: '夏亞·阿茲納布爾',
    image: './src/assets/images/ms_zaku_char_1794977708549.jpg',
    summary:
      '於 MS-06F 基礎上解除推進出力限制的指揮官專用機，以紅色塗裝與三倍推進加速效能聞名於魯姆戰役。',
    height: 17.5,
    weightEmpty: 56.2,
    weightMax: 74.5,
    generatorKw: 976,
    thrustKg: 51600,
    armorScore: 62,
    mobilityScore: 81,
    armorMaterial: '超高張力鋼 (Super Hard Steel Alloy)',
    manufacturer: '吉翁尼克公司 (Zeonic)',
    weapons: [
      {
        name: '120mm 薩克機槍',
        desc: '採用百發圓盤彈鼓供彈，泛用性極高的標準實彈武器。',
      },
      {
        name: '280mm 薩克火箭砲',
        desc: '專為對艦攻擊設計的大口徑實彈兵器，曾於魯姆會戰重創聯邦艦隊。',
      },
      {
        name: '電熱斧 (Heat Hawk)',
        desc: '透過發電機供電使斧刃白熱化，進行近距離裝甲切斷。',
      },
      {
        name: '右肩撞角護盾 & 左肩棘刺裝甲',
        desc: '兼顧防禦彈道與近距突擊衝撞的經典吉翁系裝甲配置。',
      },
    ],
    engineeringNote:
      '雖然推進劑消耗量提升且極限速度受限於機體強度，但在實戰中透過推進器微調與指揮官專用天線強化通訊，成為吉翁王牌駕駛員的象徵性機體。',
  },
  {
    id: 'rx-93',
    code: 'RX-93',
    name: 'ν 鋼彈',
    enName: 'Nu Gundam',
    era: 'uc',
    eraLabel: '宇宙世紀 0093',
    faction: 'federation',
    factionLabel: '朗德貝爾隊',
    pilot: '阿姆羅·雷',
    image: './src/assets/images/ms_nu_gundam_1794977708141.jpg',
    summary:
      '阿姆羅·雷親自參與基礎設計的最終決戰用機體，融合精神感應框架與可摺疊式獨立發電翼狀感應砲。',
    height: 22.0,
    weightEmpty: 27.9,
    weightMax: 63.0,
    generatorKw: 2980,
    thrustKg: 97800,
    armorScore: 88,
    mobilityScore: 93,
    armorMaterial: '鋼彈尼姆合金 (Gundarium Alloy)',
    manufacturer: '阿納海姆電子公司 (馮·布勞恩工廠)',
    weapons: [
      {
        name: '翼狀感應砲 (Fin Funnel) × 6',
        desc: '內建小型核融合爐的獨立遠程光束兵器，並可展開構成全方位 I-Field 防禦光束屏障。',
      },
      {
        name: '專用高出力光束步槍',
        desc: '可切換連射與高出力狙擊模式，單發威力大幅超越過往聯邦制式光束槍。',
      },
      {
        name: '新超絕火箭砲',
        desc: '掛載於背包中央，具備有線遙控引爆機能的戰術奇襲實彈兵器。',
      },
      {
        name: '光束加農盾牌',
        desc: '整合光束加農砲與四枚飛彈的高機能複合護盾。',
      },
    ],
    engineeringNote:
      '駕駛艙周圍導入極機密的精神感應框架，徹底消除腦波傳導延遲；在阿克西斯墜落事件中展現出超越物理極限的精神共鳴現象。',
  },
  {
    id: 'rx-0',
    code: 'RX-0',
    name: '獨角獸鋼彈',
    enName: 'Unicorn Gundam',
    era: 'uc',
    eraLabel: '宇宙世紀 0096',
    faction: 'federation',
    factionLabel: '畢斯特財團 · 聯邦',
    pilot: '巴納吉·林克斯',
    image: './src/assets/images/ms_unicorn_destroy_1794977709873.jpg',
    summary:
      'UC 計畫核心試作機，全機骨架皆以精神感應框架鑄造；啟動 NT-D 系統後裝甲展開變形為毀滅模式。',
    height: 21.7,
    weightEmpty: 23.7,
    weightMax: 42.7,
    generatorKw: 3480,
    thrustKg: 142600,
    armorScore: 95,
    mobilityScore: 98,
    armorMaterial: '鋼彈尼姆合金 + 全精神感應框架',
    manufacturer: '阿納海姆電子公司 (格拉納達工廠)',
    weapons: [
      {
        name: '光束麥格農 (Beam Magnum)',
        desc: '單發消耗一整組能源彈匣的超高出力步槍，擦過目標即可造成機體癱瘓。',
      },
      {
        name: '光束拐 (Beam Tonfa) × 2',
        desc: '前臂內藏光束軍刀，毀滅模式下可直接翻轉使用進行高速格鬥。',
      },
      {
        name: '精神感應護盾 (I-Field 內建)',
        desc: '變形展開後形成 X 型框架發光面，兼具遠距離防禦與腦波反射機能。',
      },
      {
        name: '超絕火箭砲 (散彈對應)',
        desc: '可裝填一般榴彈與高密度散彈，支援長距離牽制火力。',
      },
    ],
    engineeringNote:
      'NT-D（Newtype Destroyer）系統可強行接管敵方精神感應兵器之控制權；當駕駛員精神波長達成高度同步時，機體推進力與裝甲響應將進入極限覺醒狀態。',
  },
  {
    id: 'zgmf-x10a',
    code: 'ZGMF-X10A',
    name: '自由鋼彈',
    enName: 'Freedom Gundam',
    era: 'ce',
    eraLabel: '宇宙紀元 C.E. 71',
    faction: 'zeon',
    factionLabel: '三艦同盟（獨立勢力）',
    pilot: '煌·大和',
    image: './src/assets/images/ms_freedom_wing_1794977709898.jpg',
    summary:
      '札夫特秘密開發的核動力機體，搭載反中子干擾器與相轉移裝甲，能以高機動空戰姿態同時鎖定多目標。',
    height: 18.03,
    weightEmpty: 71.5,
    weightMax: 71.5,
    generatorKw: 8826,
    thrustKg: 527000,
    armorScore: 92,
    mobilityScore: 96,
    armorMaterial: '相轉移裝甲 (Phase Shift Armor)',
    manufacturer: '札夫特統合設計局',
    weapons: [
      {
        name: '鯨式等離子收束光束砲 × 2',
        desc: '收納於背部翼展系統中，可於全砲門展開時進行高出力遠距齊射。',
      },
      {
        name: '旗魚式電磁軌道砲 × 2',
        desc: '腰部折疊式實彈軌道砲，具備不耗費過多光束電能的高速貫穿能力。',
      },
      {
        name: '狼式光束步槍',
        desc: '高連射性標準光束武器，可與腰際光束軍刀形成近中距連攜。',
      },
      {
        name: '高機動主動空氣動力翼',
        desc: '具備大氣圈內超音速巡航與瞬時姿態控制的高推力飛翼。',
      },
    ],
    engineeringNote:
      '反中子干擾器使核融合爐得以無限運作，讓相轉移裝甲與全砲門齊射（HiMAT 模式）不再受電池續航力限制，徹底改變戰場制空權的平衡。',
  },
];

const CORE_SYSTEMS = {
  reactor: {
    code: 'TECH-01',
    title: '米諾夫斯基超小型核融合爐',
    summary:
      '利用氦-3 與氘進行潔淨核融合，同時藉由米諾夫斯基粒子晶格的「I-Field」效應將高熱電漿約束於微型爐心內。此技術徹底解決了傳統機動兵器體積龐大、無法小型化的難題，亦同步造成長距離雷達失效，迫使戰場回歸目視距離的機動戰士格鬥戰。',
    specs: [
      { label: '反應燃料', value: '氦-3 + 氘 (He-3 / D)' },
      { label: '核心約束機制', value: 'I-Field 粒子晶格場' },
      { label: '副產效應', value: '廣域電磁波與雷達干擾' },
    ],
    schematicLabel: 'FIG. A1 — I-FIELD MAGNETIC CONTAINMENT LATTICE',
    svg: `
      <svg viewBox="0 0 240 130" width="220" height="120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <circle cx="120" cy="65" r="46" stroke-dasharray="4 3" opacity="0.55" />
        <circle cx="120" cy="65" r="30" stroke="#C82333" stroke-width="1.8" />
        <circle cx="120" cy="65" r="12" fill="#C82333" fill-opacity="0.25" stroke="#F5F6F8" />
        <path d="M24 65H74M166 65H216M120 12V35M120 95V118" opacity="0.7" />
        <rect x="44" y="53" width="20" height="24" rx="2" />
        <rect x="176" y="53" width="20" height="24" rx="2" />
      </svg>
    `,
  },
  psychoframe: {
    code: 'TECH-02',
    title: '精神感應框架 (Psycho-Frame)',
    summary:
      '將具備腦波感應機能的微型精神感應晶片以奈米級尺寸鑄入機體構造金屬中，使整座機體骨架化為大型感應器。相較早期的塞可繆系統（Psycommu），精神感應框架不僅大幅縮減重量，更令駕駛員的直覺思考幾乎零延遲地轉換為機體動作與遠距感應砲操作。',
    specs: [
      { label: '材料工藝', value: '金屬基質嵌合晶片矩陣' },
      { label: '訊號延遲', value: '近乎零延遲腦波直連' },
      { label: '代表搭載機', value: 'RX-93 ν 鋼彈 / RX-0 獨角獸' },
    ],
    schematicLabel: 'FIG. A2 — PSYCHO-WAVE RESONANCE MATRIX',
    svg: `
      <svg viewBox="0 0 240 130" width="220" height="120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <polygon points="120,16 172,46 172,84 120,114 68,84 68,46" stroke="#D99B26" stroke-width="1.8" />
        <polygon points="120,34 152,52 152,78 120,96 88,78 88,52" opacity="0.65" />
        <path d="M120 16V114M68 46L172 84M172 46L68 84" opacity="0.45" />
        <circle cx="120" cy="65" r="7" fill="#D99B26" />
      </svg>
    `,
  },
  phaseshift: {
    code: 'TECH-03',
    title: '相轉移裝甲 (Phase Shift Armor)',
    summary:
      '透過持續向特殊複合裝甲板通入特定電壓電流，使其分子排列與物理剛性產生相變。通電狀態下裝甲外觀會從灰色轉為高彩度塗裝，幾乎能完全抵禦實體砲彈與飛彈衝擊；然而高耗電特性通常需配合核動力與反中子干擾器方可發揮最大持久戰力。',
    specs: [
      { label: '防禦強項', value: '實體彈道與高爆破片完全免疫' },
      { label: '能源條件', value: '需高電壓持續供電維持相態' },
      { label: '代表搭載機', value: 'ZGMF-X10A 自由鋼彈' },
    ],
    schematicLabel: 'FIG. A3 — VOLTAGE-INDUCED ARMOR PHASE TRANSITION',
    svg: `
      <svg viewBox="0 0 240 130" width="220" height="120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <rect x="44" y="26" width="152" height="78" rx="4" opacity="0.35" />
        <path d="M58 46H182M58 65H182M58 84H182" stroke="#60A5FA" stroke-width="2" />
        <path d="M32 65L54 55V75L32 65Z" fill="#C82333" stroke="none" />
        <path d="M208 65L186 55V75L208 65Z" fill="#60A5FA" stroke="none" />
      </svg>
    `,
  },
  beamfunnel: {
    code: 'TECH-04',
    title: '光束兵器與感應砲系統',
    summary:
      '捨棄傳統火藥彈頭，改以能源電容（E-CAP）預先壓縮米諾夫斯基粒子為縮退狀態，扣下扳機後僅需少量電力即可觸發高能量粒子束射出。後期發展出的翼狀感應砲（Fin Funnel）更整合微型核融合爐，實現立體全方位攻防一體作戰。',
    specs: [
      { label: '能量媒介', value: '米諾夫斯基高能粒子縮退體' },
      { label: '防禦衍生', value: 'I-Field 立體光束遮斷力場' },
      { label: '代表搭載機', value: 'RX-78-2 / RX-93 ν 鋼彈' },
    ],
    schematicLabel: 'FIG. A4 — E-CAP & FIN FUNNEL CONVERGENCE ARRAY',
    svg: `
      <svg viewBox="0 0 240 130" width="220" height="120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <path d="M40 32L95 65L40 98" stroke="#60A5FA" stroke-width="1.6" />
        <line x1="95" y1="65" x2="210" y2="65" stroke="#C82333" stroke-width="3" />
        <rect x="78" y="54" width="34" height="22" rx="2" fill="#171E2A" />
        <circle cx="176" cy="30" r="8" opacity="0.7" />
        <circle cx="176" cy="100" r="8" opacity="0.7" />
        <path d="M176 38L198 65L176 92" stroke-dasharray="3 3" opacity="0.6" />
      </svg>
    `,
  },
};

const TIMELINE_EVENTS = [
  {
    year: 'U.C. 0079.01',
    eraGroup: 'uc-early',
    title: '一年戰爭爆發與魯姆會戰',
    desc: '吉翁公國投入量產型薩克 II，夏亞·阿茲納布爾駕駛紅色 MS-06S 展現壓倒性機動戰術，奠定機動戰士取代傳統太空戰艦的戰爭新形態。',
    unitId: 'ms-06s',
    unitLabel: '檢視 MS-06S 檔案',
  },
  {
    year: 'U.C. 0079.09',
    eraGroup: 'uc-early',
    title: 'Side 7 遇襲與 RX-78-2 初代鋼彈實戰啟動',
    desc: '地球聯邦軍 V 作戰計畫主力機 RX-78-2 由阿姆羅·雷首次啟動，憑藉月神鈦裝甲與攜帶式光束步槍扭轉戰場火力天平。',
    unitId: 'rx-78-2',
    unitLabel: '檢視 RX-78-2 檔案',
  },
  {
    year: 'U.C. 0093.03',
    eraGroup: 'uc-early',
    title: '第二次新吉翁抗爭與阿克西斯奇蹟',
    desc: '配備獨立發電翼狀感應砲與精神感應框架的 RX-93 ν 鋼彈投入隆德貝爾隊，成功阻止小行星阿克西斯墜落地球。',
    unitId: 'rx-93',
    unitLabel: '檢視 RX-93 檔案',
  },
  {
    year: 'U.C. 0096.04',
    eraGroup: 'uc-late',
    title: '拉普拉斯之亂與全精神感應機誕生',
    desc: '全機採用精神感應框架結構的 RX-0 獨角獸鋼彈於工業七號啟動，展現 NT-D 毀滅模式與超越時代的粒子干涉現象。',
    unitId: 'rx-0',
    unitLabel: '檢視 RX-0 檔案',
  },
  {
    year: 'C.E. 71.05',
    eraGroup: 'ce',
    title: '反中子干擾器實用化與自由鋼彈出擊',
    desc: '搭載核動力引擎與相轉移裝甲的 ZGMF-X10A 自由鋼彈投入戰線，以高機動飛翼與全砲門齊射主導空戰制空權。',
    unitId: 'zgmf-x10a',
    unitLabel: '檢視 ZGMF-X10A 檔案',
  },
];

// ---------------------------------------------------------------------------
// Application State
// ---------------------------------------------------------------------------
const state = {
  filter: 'all',
  search: '',
  compareA: 'rx-78-2',
  compareB: 'rx-93',
  activeSystem: 'reactor',
  timelineEra: 'all',
  modalUnitId: null,
  modalTab: 'overview',
  lastFocusedElement: null,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getUnitById(id) {
  return MOBILE_SUITS.find((u) => u.id === id) || MOBILE_SUITS[0];
}

function attachImageFallbacks(root = document) {
  const images = root.querySelectorAll('.image-shell img');
  images.forEach((img) => {
    if (img.dataset.boundFallback) return;
    img.dataset.boundFallback = 'true';
    img.addEventListener('error', () => {
      const shell = img.closest('.image-shell');
      if (shell) shell.classList.add('is-error');
    });
  });
}

// ---------------------------------------------------------------------------
// 01. Unit Catalog Rendering & Filtering
// ---------------------------------------------------------------------------
function renderUnitCatalog() {
  const grid = document.getElementById('unit-grid');
  const emptyEl = document.getElementById('unit-empty');
  const query = state.search.trim().toLowerCase();

  const filtered = MOBILE_SUITS.filter((unit) => {
    const matchesFilter =
      state.filter === 'all' ||
      unit.faction === state.filter ||
      unit.era === state.filter;

    if (!matchesFilter) return false;
    if (!query) return true;

    const haystack = `${unit.code} ${unit.name} ${unit.enName} ${unit.pilot} ${unit.factionLabel} ${unit.eraLabel}`.toLowerCase();
    return haystack.includes(query);
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  grid.innerHTML = filtered
    .map(
      (unit) => `
      <article class="unit-card">
        <div class="image-shell unit-card-media">
          <img
            src="${unit.image}"
            alt="${unit.code} ${unit.name} 機體寫真"
            referrerpolicy="no-referrer"
            loading="lazy"
          />
          <div class="image-fallback" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M32 8L42 18V30L50 38V50H14V38L22 30V18L32 8Z" />
            </svg>
            <span>${unit.code}</span>
          </div>
        </div>

        <div class="unit-card-body">
          <p class="meta-line">
            <span>${unit.eraLabel}</span>
            <span aria-hidden="true">·</span>
            <span>${unit.factionLabel}</span>
            <span aria-hidden="true">·</span>
            <span>${unit.pilot}</span>
          </p>

          <h3 class="unit-card-title">
            <span class="unit-card-code">${unit.code}</span>${unit.name}
          </h3>

          <p class="unit-card-summary">${unit.summary}</p>

          <dl class="unit-card-specs">
            <div>
              <dt class="spec-mini-label">發電機出力</dt>
              <dd class="spec-mini-val tabular-nums">${unit.generatorKw.toLocaleString()} kW</dd>
            </div>
            <div>
              <dt class="spec-mini-label">機體全高</dt>
              <dd class="spec-mini-val tabular-nums">${unit.height.toFixed(1)} m</dd>
            </div>
          </dl>

          <div class="unit-card-actions">
            <button
              type="button"
              class="btn btn-secondary btn-sm unit-card-btn"
              data-open-dossier="${unit.id}"
            >
              檢視詳細檔案
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  attachImageFallbacks(grid);
}

// ---------------------------------------------------------------------------
// 02. Side-by-Side Spec Comparator
// ---------------------------------------------------------------------------
function initCompareSelectors() {
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  const optionsHtml = MOBILE_SUITS.map(
    (u) => `<option value="${u.id}">${u.code} — ${u.name} (${u.eraLabel})</option>`
  ).join('');

  selectA.innerHTML = optionsHtml;
  selectB.innerHTML = optionsHtml;
  selectA.value = state.compareA;
  selectB.value = state.compareB;
}

function renderComparisonBoard() {
  const unitA = getUnitById(state.compareA);
  const unitB = getUnitById(state.compareB);
  const board = document.getElementById('compare-board');

  const metrics = [
    {
      label: '發電機出力',
      valA: unitA.generatorKw,
      valB: unitB.generatorKw,
      unit: 'kW',
      max: 9000,
    },
    {
      label: '總推力輸出',
      valA: unitA.thrustKg,
      valB: unitB.thrustKg,
      unit: 'kg',
      max: 550000,
    },
    {
      label: '機體全高',
      valA: unitA.height,
      valB: unitB.height,
      unit: 'm',
      max: 24,
      decimals: 1,
    },
    {
      label: '綜合裝甲防禦指數',
      valA: unitA.armorScore,
      valB: unitB.armorScore,
      unit: 'pt',
      max: 100,
    },
    {
      label: '空戰與宇宙機動力',
      valA: unitA.mobilityScore,
      valB: unitB.mobilityScore,
      unit: 'pt',
      max: 100,
    },
  ];

  const rowsHtml = metrics
    .map((m) => {
      const ratioA = Math.min(1, Math.max(0.05, m.valA / m.max));
      const ratioB = Math.min(1, Math.max(0.05, m.valB / m.max));
      const diff = m.valB - m.valA;
      const formattedA = m.decimals ? m.valA.toFixed(m.decimals) : m.valA.toLocaleString();
      const formattedB = m.decimals ? m.valB.toFixed(m.decimals) : m.valB.toLocaleString();
      const sign = diff > 0 ? '+' : '';
      const formattedDiff = m.decimals
        ? `${sign}${diff.toFixed(m.decimals)} ${m.unit}`
        : `${sign}${diff.toLocaleString()} ${m.unit}`;

      return `
        <div class="compare-metric-row">
          <div class="metric-title">${m.label}</div>
          <div class="metric-bars">
            <div class="bar-track-wrap">
              <span class="bar-unit-tag tabular-nums">A</span>
              <div class="bar-track">
                <div class="bar-fill bar-fill-a" style="transform: scaleX(${ratioA})"></div>
              </div>
              <span class="bar-value tabular-nums">${formattedA} ${m.unit}</span>
            </div>
            <div class="bar-track-wrap">
              <span class="bar-unit-tag tabular-nums">B</span>
              <div class="bar-track">
                <div class="bar-fill bar-fill-b" style="transform: scaleX(${ratioB})"></div>
              </div>
              <span class="bar-value tabular-nums">${formattedB} ${m.unit}</span>
            </div>
          </div>
          <div class="metric-delta tabular-nums">B 相對 A：${formattedDiff}</div>
        </div>
      `;
    })
    .join('');

  const powerRatio = (unitB.generatorKw / unitA.generatorKw).toFixed(2);

  board.innerHTML = `
    <div class="compare-preview-row">
      <div class="compare-unit-head">
        <div class="compare-thumb image-shell">
          <img src="${unitA.image}" alt="${unitA.code} ${unitA.name}" referrerpolicy="no-referrer" />
          <div class="image-fallback" aria-hidden="true"><span>${unitA.code}</span></div>
        </div>
        <div>
          <p class="meta-line"><span>機體 A</span><span aria-hidden="true">·</span><span>${unitA.eraLabel}</span></p>
          <h3 class="compare-unit-name">${unitA.code} ${unitA.name}</h3>
          <p class="meta-line">${unitA.armorMaterial}</p>
        </div>
      </div>

      <div class="compare-unit-head">
        <div class="compare-thumb image-shell">
          <img src="${unitB.image}" alt="${unitB.code} ${unitB.name}" referrerpolicy="no-referrer" />
          <div class="image-fallback" aria-hidden="true"><span>${unitB.code}</span></div>
        </div>
        <div>
          <p class="meta-line"><span>機體 B</span><span aria-hidden="true">·</span><span>${unitB.eraLabel}</span></p>
          <h3 class="compare-unit-name">${unitB.code} ${unitB.name}</h3>
          <p class="meta-line">${unitB.armorMaterial}</p>
        </div>
      </div>
    </div>

    <div class="compare-metrics">${rowsHtml}</div>

    <div class="compare-summary">
      技術對照摘要：${unitB.code} ${unitB.name} 之核融合爐出力為 ${unitA.code} ${unitA.name} 的
      <strong class="tabular-nums">${powerRatio}×</strong>；在裝甲配置上，前者採用「${unitB.armorMaterial}」，後者則為「${unitA.armorMaterial}」。
    </div>
  `;

  attachImageFallbacks(board);
}

// ---------------------------------------------------------------------------
// 03. Core Systems Detail Panel
// ---------------------------------------------------------------------------
function renderSystemDetail() {
  const sys = CORE_SYSTEMS[state.activeSystem] || CORE_SYSTEMS.reactor;
  const panel = document.getElementById('system-detail-panel');

  panel.innerHTML = `
    <div class="system-detail-top">
      <div>
        <p class="meta-line"><span>核心技術系統</span><span aria-hidden="true">·</span><span class="tabular-nums">${sys.code}</span></p>
        <h3 class="system-detail-title">${sys.title}</h3>
        <p class="system-detail-desc">${sys.summary}</p>
      </div>
      <div class="system-schematic-box">
        ${sys.svg}
        <div class="system-schematic-caption tabular-nums">${sys.schematicLabel}</div>
      </div>
    </div>

    <dl class="system-specs-grid">
      ${sys.specs
        .map(
          (item) => `
        <div class="system-spec-cell">
          <dt>${item.label}</dt>
          <dd>${item.value}</dd>
        </div>
      `
        )
        .join('')}
    </dl>
  `;
}

// ---------------------------------------------------------------------------
// 04. Timeline Explorer
// ---------------------------------------------------------------------------
function renderTimeline() {
  const list = document.getElementById('timeline-list');
  const events = TIMELINE_EVENTS.filter(
    (ev) => state.timelineEra === 'all' || ev.eraGroup === state.timelineEra
  );

  list.innerHTML = events
    .map(
      (ev) => `
      <li class="timeline-item">
        <div class="timeline-year tabular-nums">${ev.year}</div>
        <div>
          <h3 class="timeline-event-title">${ev.title}</h3>
          <p class="timeline-event-desc">${ev.desc}</p>
        </div>
        <div>
          <button type="button" class="btn btn-secondary btn-sm" data-open-dossier="${ev.unitId}">
            ${ev.unitLabel}
          </button>
        </div>
      </li>
    `
    )
    .join('');
}

// ---------------------------------------------------------------------------
// Dossier Modal
// ---------------------------------------------------------------------------
function renderModalBody() {
  if (!state.modalUnitId) return;
  const unit = getUnitById(state.modalUnitId);
  const content = document.getElementById('modal-tab-content');

  if (state.modalTab === 'overview') {
    content.innerHTML = `
      <p>${unit.summary}</p>
      <dl class="dossier-dl">
        <div><dt>所屬陣營</dt><dd>${unit.factionLabel}</dd></div>
        <div><dt>主要駕駛員</dt><dd>${unit.pilot}</dd></div>
        <div><dt>機體全高</dt><dd class="tabular-nums">${unit.height.toFixed(2)} m</dd></div>
        <div><dt>本體 / 全備重量</dt><dd class="tabular-nums">${unit.weightEmpty} t / ${unit.weightMax} t</dd></div>
        <div><dt>發電機出力</dt><dd class="tabular-nums">${unit.generatorKw.toLocaleString()} kW</dd></div>
        <div><dt>推進總推力</dt><dd class="tabular-nums">${unit.thrustKg.toLocaleString()} kg</dd></div>
        <div><dt>裝甲材質</dt><dd>${unit.armorMaterial}</dd></div>
        <div><dt>製造單位</dt><dd>${unit.manufacturer}</dd></div>
      </dl>
    `;
  } else if (state.modalTab === 'weapons') {
    content.innerHTML = `
      <ul class="weapon-list">
        ${unit.weapons
          .map(
            (w) => `
          <li class="weapon-item">
            <div class="weapon-item-name">${w.name}</div>
            <div class="weapon-item-desc">${w.desc}</div>
          </li>
        `
          )
          .join('')}
      </ul>
    `;
  } else {
    content.innerHTML = `
      <p>${unit.engineeringNote}</p>
      <dl class="dossier-dl">
        <div><dt>開發機構</dt><dd>${unit.manufacturer}</dd></div>
        <div><dt>服役紀元</dt><dd>${unit.eraLabel}</dd></div>
        <div><dt>綜合裝甲評級</dt><dd class="tabular-nums">${unit.armorScore} / 100</dd></div>
        <div><dt>機動反應評級</dt><dd class="tabular-nums">${unit.mobilityScore} / 100</dd></div>
      </dl>
    `;
  }
}

function openDossierModal(unitId) {
  const unit = getUnitById(unitId);
  state.lastFocusedElement = document.activeElement;
  state.modalUnitId = unit.id;
  state.modalTab = 'overview';

  const modal = document.getElementById('dossier-modal');
  const metaEl = document.getElementById('modal-unit-meta');
  const imgShell = document.getElementById('modal-image-shell');
  const imgEl = document.getElementById('modal-unit-img');

  imgShell.classList.remove('is-error');
  imgEl.src = unit.image;
  imgEl.alt = `${unit.code} ${unit.name} 官方工程檔案寫真`;

  metaEl.innerHTML = `
    <span class="tabular-nums">${unit.code}</span>
    <span aria-hidden="true">·</span>
    <span>${unit.eraLabel}</span>
    <span aria-hidden="true">·</span>
    <span>${unit.factionLabel}</span>
  `;

  document.getElementById('modal-unit-title').textContent = `${unit.code} ${unit.name}`;
  document.getElementById('modal-unit-subtitle').textContent = `${unit.enName} — 駕駛員：${unit.pilot}`;
  document.getElementById('modal-image-caption').textContent = `圖檔編號 ${unit.code} · 裝甲材質：${unit.armorMaterial}`;

  document.querySelectorAll('.modal-tab').forEach((btn) => {
    const active = btn.dataset.modalTab === 'overview';
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  renderModalBody();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close-btn').focus();
}

function closeDossierModal() {
  const modal = document.getElementById('dossier-modal');
  modal.hidden = true;
  document.body.style.overflow = '';
  state.modalUnitId = null;

  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
    state.lastFocusedElement.focus();
  }
}

// ---------------------------------------------------------------------------
// Event Wiring
// ---------------------------------------------------------------------------
function bindEvents() {
  // Catalog filter tabs
  document.querySelectorAll('.filter-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach((tab) => {
        const active = tab === btn;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      renderUnitCatalog();
    });
  });

  // Catalog search input
  const searchInput = document.getElementById('unit-search');
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderUnitCatalog();
  });

  // Reset filters
  document.getElementById('reset-filters-btn').addEventListener('click', () => {
    state.filter = 'all';
    state.search = '';
    searchInput.value = '';
    document.querySelectorAll('.filter-tab').forEach((tab) => {
      const active = tab.dataset.filter === 'all';
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    renderUnitCatalog();
  });

  // Delegate open-dossier clicks (from unit cards & timeline)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-dossier]');
    if (trigger) {
      openDossierModal(trigger.dataset.openDossier);
    }
  });

  // Compare selectors & swap
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  selectA.addEventListener('change', (e) => {
    state.compareA = e.target.value;
    renderComparisonBoard();
  });
  selectB.addEventListener('change', (e) => {
    state.compareB = e.target.value;
    renderComparisonBoard();
  });
  document.getElementById('swap-compare-btn').addEventListener('click', () => {
    const prevA = state.compareA;
    state.compareA = state.compareB;
    state.compareB = prevA;
    selectA.value = state.compareA;
    selectB.value = state.compareB;
    renderComparisonBoard();
  });

  // Systems tabs
  document.querySelectorAll('.system-nav-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeSystem = btn.dataset.system;
      document.querySelectorAll('.system-nav-item').forEach((item) => {
        const active = item === btn;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      renderSystemDetail();
    });
  });

  // Timeline era buttons
  document.querySelectorAll('.era-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.timelineEra = btn.dataset.era;
      document.querySelectorAll('.era-btn').forEach((item) => {
        item.classList.toggle('is-active', item === btn);
      });
      renderTimeline();
    });
  });

  // Modal controls
  document.getElementById('modal-close-btn').addEventListener('click', closeDossierModal);
  document.getElementById('dossier-modal').addEventListener('click', (e) => {
    if (e.target.id === 'dossier-modal') {
      closeDossierModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('dossier-modal').hidden) {
      closeDossierModal();
    }
  });

  document.querySelectorAll('.modal-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.modalTab = btn.dataset.modalTab;
      document.querySelectorAll('.modal-tab').forEach((tab) => {
        const active = tab === btn;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      renderModalBody();
    });
  });

  document.getElementById('modal-set-a-btn').addEventListener('click', () => {
    if (!state.modalUnitId) return;
    state.compareA = state.modalUnitId;
    document.getElementById('compare-select-a').value = state.compareA;
    renderComparisonBoard();
    closeDossierModal();
    document.getElementById('comparison').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('modal-set-b-btn').addEventListener('click', () => {
    if (!state.modalUnitId) return;
    state.compareB = state.modalUnitId;
    document.getElementById('compare-select-b').value = state.compareB;
    renderComparisonBoard();
    closeDossierModal();
    document.getElementById('comparison').scrollIntoView({ behavior: 'smooth' });
  });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
function init() {
  attachImageFallbacks(document);
  initCompareSelectors();
  renderUnitCatalog();
  renderComparisonBoard();
  renderSystemDetail();
  renderTimeline();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
