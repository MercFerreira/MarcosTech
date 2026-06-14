// ============================================
// MARCOS TECH — Main JS
// ============================================

// ── Data ──
const ARTICLES = [
  {
    id: 1,
    title: "O que é um Computador? Guia Completo para Iniciantes",
    excerpt: "Descubra como os computadores funcionam, desde os componentes físicos até o software. Um guia essencial para quem está começando.",
    category: "Fundamentos",
    tag: "fundamentos",
    tagColor: "",
    icon: "🖥️",
    readTime: "8 min",
    date: "10 Jun 2025",
    views: "12.4k",
    featured: true,
    popular: true,
    rank: 1,
    gradient: "linear-gradient(135deg,#0d1a3a,#0a1628)"
  },
  {
    id: 2,
    title: "Sistema Binário: A Linguagem que os Computadores Falam",
    excerpt: "Entenda como tudo — textos, imagens e sons — se transforma em zeros e uns dentro de um computador.",
    category: "Fundamentos",
    tag: "fundamentos",
    tagColor: "",
    icon: "🔢",
    readTime: "6 min",
    date: "8 Jun 2025",
    views: "9.1k",
    popular: true,
    rank: 2,
    gradient: "linear-gradient(135deg,#0a1628,#061020)"
  },
  {
    id: 3,
    title: "Comandos Essenciais do Linux: Do ls ao grep",
    excerpt: "Aprenda os 30 comandos Linux mais usados no dia a dia de qualquer profissional de TI, com exemplos práticos.",
    category: "Linux",
    tag: "linux",
    tagColor: "green",
    icon: "🐧",
    readTime: "12 min",
    date: "5 Jun 2025",
    views: "18.7k",
    popular: true,
    rank: 3,
    gradient: "linear-gradient(135deg,#0a1a0a,#051005)"
  },
  {
    id: 4,
    title: "Como Criar Senhas Realmente Seguras em 2025",
    excerpt: "Técnicas modernas para proteger suas contas. O que os hackers sabem sobre senhas — e como você pode se defender.",
    category: "Segurança",
    tag: "segurança",
    tagColor: "rose",
    icon: "🔐",
    readTime: "7 min",
    date: "3 Jun 2025",
    views: "21.3k",
    popular: true,
    rank: 4,
    gradient: "linear-gradient(135deg,#1a0a0a,#200510)"
  },
  {
    id: 5,
    title: "HTML do Zero: Construa sua Primeira Página Web",
    excerpt: "Do primeiro <html> ao deploy. Um tutorial completo e prático para iniciantes em desenvolvimento web.",
    category: "Dev Web",
    tag: "devweb",
    tagColor: "amber",
    icon: "🌐",
    readTime: "15 min",
    date: "1 Jun 2025",
    views: "15.2k",
    popular: true,
    rank: 5,
    gradient: "linear-gradient(135deg,#1a1200,#110d00)"
  },
  {
    id: 6,
    title: "O que é IP, DNS e DHCP? Redes explicadas de forma simples",
    excerpt: "Entenda como a internet sabe para onde mandar cada pacote de dados. O guia definitivo de protocolos para iniciantes.",
    category: "Redes",
    tag: "redes",
    tagColor: "teal",
    icon: "🌍",
    readTime: "10 min",
    date: "28 Mai 2025",
    views: "8.9k",
    gradient: "linear-gradient(135deg,#001a1a,#001010)"
  },
  {
    id: 7,
    title: "Git e GitHub: Controle de Versão para Iniciantes",
    excerpt: "Aprenda a usar Git e GitHub para versionar projetos, colaborar em equipe e nunca mais perder código.",
    category: "Git",
    tag: "git",
    tagColor: "violet",
    icon: "🌿",
    readTime: "11 min",
    date: "25 Mai 2025",
    views: "14.6k",
    gradient: "linear-gradient(135deg,#0f0a1a,#0a0515)"
  },
  {
    id: 8,
    title: "Inteligência Artificial Explicada: Do Básico ao ChatGPT",
    excerpt: "Como funcionam as IAs modernas? Machine learning, redes neurais e Large Language Models em linguagem acessível.",
    category: "IA",
    tag: "ia",
    tagColor: "violet",
    icon: "🤖",
    readTime: "14 min",
    date: "20 Mai 2025",
    views: "25.8k",
    gradient: "linear-gradient(135deg,#0d0a1a,#07051a)"
  },
  {
    id: 9,
    title: "CSS Grid e Flexbox: Layouts Modernos sem Mistério",
    excerpt: "Domine as duas ferramentas mais poderosas do CSS moderno. Exemplos visuais e casos de uso reais.",
    category: "Dev Web",
    tag: "devweb",
    tagColor: "amber",
    icon: "🎨",
    readTime: "9 min",
    date: "15 Mai 2025",
    views: "11.5k",
    gradient: "linear-gradient(135deg,#1a1000,#150c00)"
  },
  {
    id: 10,
    title: "Memória RAM: Tudo que Você Precisa Saber",
    excerpt: "O que é RAM, como ela afeta a performance, DDR4 vs DDR5, e quanto você realmente precisa para cada uso.",
    category: "Hardware",
    tag: "hardware",
    tagColor: "",
    icon: "💾",
    readTime: "8 min",
    date: "10 Mai 2025",
    views: "7.3k",
    gradient: "linear-gradient(135deg,#0a0d1a,#060810)"
  },
  {
    id: 11,
    title: "Phishing: Como Reconhecer e Evitar Golpes Online",
    excerpt: "Os ataques de phishing ficaram muito mais sofisticados. Aprenda a identificar emails, links e sites falsos.",
    category: "Segurança",
    tag: "segurança",
    tagColor: "rose",
    icon: "🎣",
    readTime: "6 min",
    date: "5 Mai 2025",
    views: "13.1k",
    gradient: "linear-gradient(135deg,#1a0508,#12030605)"
  },
  {
    id: 12,
    title: "Banco de Dados SQL: Primeiros Passos com PostgreSQL",
    excerpt: "Aprenda os fundamentos do SQL com exemplos práticos. CREATE, SELECT, JOIN e muito mais explicados do zero.",
    category: "Banco de Dados",
    tag: "bd",
    tagColor: "green",
    icon: "🗄️",
    readTime: "13 min",
    date: "1 Mai 2025",
    views: "9.8k",
    gradient: "linear-gradient(135deg,#051a08,#031005)"
  }
];

const CATEGORIES = [
  { name: "Fundamentos da Computação", icon: "💡", count: 8, color: "#3b82f6", glow: "rgba(59,130,246,0.15)", bg: "rgba(59,130,246,0.08)", tag: "fundamentos" },
  { name: "Informática Básica",        icon: "⌨️", count: 6, color: "#06b6d4", glow: "rgba(6,182,212,0.15)",  bg: "rgba(6,182,212,0.08)",  tag: "informatica" },
  { name: "Hardware",                  icon: "🔧", count: 7, color: "#8b5cf6", glow: "rgba(139,92,246,0.15)",bg: "rgba(139,92,246,0.08)",  tag: "hardware" },
  { name: "Sistemas Operacionais",     icon: "🖥️", count: 5, color: "#10b981", glow: "rgba(16,185,129,0.15)",bg: "rgba(16,185,129,0.08)",  tag: "so" },
  { name: "Linux",                     icon: "🐧", count: 12,color: "#10b981", glow: "rgba(16,185,129,0.15)",bg: "rgba(16,185,129,0.08)",  tag: "linux" },
  { name: "Redes de Computadores",     icon: "🌍", count: 9, color: "#06b6d4", glow: "rgba(6,182,212,0.15)",  bg: "rgba(6,182,212,0.08)",  tag: "redes" },
  { name: "Segurança da Informação",   icon: "🔐", count: 10,color: "#f43f5e", glow: "rgba(244,63,94,0.15)",  bg: "rgba(244,63,94,0.08)",  tag: "segurança" },
  { name: "Desenvolvimento Web",       icon: "🌐", count: 15,color: "#f59e0b", glow: "rgba(245,158,11,0.15)", bg: "rgba(245,158,11,0.08)", tag: "devweb" },
  { name: "Programação",               icon: "💻", count: 18,color: "#3b82f6", glow: "rgba(59,130,246,0.15)", bg: "rgba(59,130,246,0.08)", tag: "prog" },
  { name: "Git e GitHub",              icon: "🌿", count: 5, color: "#8b5cf6", glow: "rgba(139,92,246,0.15)", bg: "rgba(139,92,246,0.08)", tag: "git" },
  { name: "Inteligência Artificial",   icon: "🤖", count: 8, color: "#8b5cf6", glow: "rgba(139,92,246,0.15)", bg: "rgba(139,92,246,0.08)", tag: "ia" },
  { name: "Banco de Dados",            icon: "🗄️", count: 7, color: "#10b981", glow: "rgba(16,185,129,0.15)", bg: "rgba(16,185,129,0.08)", tag: "bd" },
  { name: "Carreira em TI",            icon: "🚀", count: 6, color: "#f59e0b", glow: "rgba(245,158,11,0.15)", bg: "rgba(245,158,11,0.08)", tag: "carreira" },
  { name: "Projetos Práticos",         icon: "🛠️", count: 4, color: "#f43f5e", glow: "rgba(244,63,94,0.15)",  bg: "rgba(244,63,94,0.08)",  tag: "projetos" }
];

const START_HERE = [
  { num: "01", title: "O que é um Computador?", desc: "Entenda o básico sobre hardware, software e como tudo se conecta." },
  { num: "02", title: "Sistema Binário",         desc: "A linguagem fundamental de toda tecnologia digital." },
  { num: "03", title: "Como a Internet Funciona",desc: "IP, DNS, HTTP — o caminho dos dados explicado de forma simples." },
  { num: "04", title: "Primeiros Passos no Linux",desc: "O terminal não é assustador. Aprenda os comandos essenciais." },
  { num: "05", title: "HTML e CSS do Zero",       desc: "Crie sua primeira página web do absoluto início." },
  { num: "06", title: "Segurança Digital Básica", desc: "Proteja-se online com práticas simples e eficazes." }
];

// ── Theme ──
const getTheme = () => localStorage.getItem('mt-theme') || 'dark';
const setTheme = (t) => {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('mt-theme', t);
  document.getElementById('themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
};

// ── Terminal typewriter ──
const PHRASES = [
  "aprenda tecnologia de verdade.",
  "domine o Linux.",
  "entenda como a internet funciona.",
  "crie seus primeiros projetos web.",
  "proteja-se no mundo digital.",
  "comece sua carreira em TI."
];
let phraseIdx = 0, charIdx = 0, deleting = false;
function typeTerminal() {
  const el = document.getElementById('terminalText');
  if (!el) return;
  const phrase = PHRASES[phraseIdx];
  if (!deleting) {
    el.textContent = phrase.substring(0, ++charIdx);
    if (charIdx === phrase.length) { deleting = true; setTimeout(typeTerminal, 2200); return; }
  } else {
    el.textContent = phrase.substring(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % PHRASES.length; }
  }
  setTimeout(typeTerminal, deleting ? 40 : 65);
}

// ── Render categories ──
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" style="--card-color:${c.color};--card-glow:${c.glow};--card-bg:${c.bg}"
         onclick="filterByCategory('${c.tag}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} artigos</div>
      <div class="cat-arrow">Ver artigos →</div>
    </div>
  `).join('');
}

// ── Render articles ──
function renderArticles(list = ARTICLES, containerId = 'articlesGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = `<div style="color:var(--text-muted);font-size:.9rem;padding:40px 0">Nenhum artigo encontrado.</div>`;
    return;
  }
  grid.innerHTML = list.map(a => `
    <div class="article-card" onclick="openArticle(${a.id})">
      <div class="article-thumb" style="background:${a.gradient || 'var(--bg-elevated)'}">
        <span style="font-size:3rem;position:relative;z-index:1">${a.icon}</span>
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span class="tag ${a.tagColor}">${a.category}</span>
          <span class="read-time">⏱ ${a.readTime}</span>
        </div>
        <div class="article-title">${a.title}</div>
        <div class="article-excerpt">${a.excerpt}</div>
        <div class="article-footer">
          <div class="author">
            <div class="author-avatar">M</div>
            Marcos Tech
          </div>
          <span>${a.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Render featured ──
function renderFeatured() {
  const wrap = document.getElementById('featuredWrap');
  if (!wrap) return;
  const feat = ARTICLES[0];
  const sidebar = ARTICLES.slice(1, 4);
  const codeBg = `&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;Computação&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Olá Mundo!&lt;/h1&gt;\n    &lt;p&gt;if (cpu &gt; 0) {&lt;/p&gt;\n    &lt;p&gt;  learn();&lt;/p&gt;\n    &lt;p&gt;}&lt;/p&gt;\n  &lt;/body&gt;\n&lt;/html&gt;`;
  wrap.innerHTML = `
    <div class="featured-grid">
      <div class="featured-card" onclick="openArticle(${feat.id})">
        <div class="featured-thumb" style="background:${feat.gradient}">
          <div class="code-bg">${codeBg}</div>
          <div class="thumb-icon">${feat.icon}</div>
        </div>
        <div class="featured-body">
          <div class="featured-label"><span class="star">⭐</span> Artigo em Destaque</div>
          <h2>${feat.title}</h2>
          <p>${feat.excerpt}</p>
          <div class="article-footer" style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
            <div class="author"><div class="author-avatar">M</div>Marcos Tech</div>
            <span>⏱ ${feat.readTime} · ${feat.date}</span>
          </div>
        </div>
      </div>
      <div class="featured-sidebar">
        ${sidebar.map(a => `
          <div class="sidebar-card" onclick="openArticle(${a.id})">
            <div class="sidebar-thumb" style="background:${a.gradient}">${a.icon}</div>
            <div class="sidebar-info">
              <span class="tag ${a.tagColor}">${a.category}</span>
              <h3>${a.title}</h3>
              <div class="meta">⏱ ${a.readTime} · ${a.date}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// ── Render popular ──
function renderPopular() {
  const list = document.getElementById('popularList');
  if (!list) return;
  const popular = ARTICLES.filter(a => a.popular).slice(0, 5);
  list.innerHTML = popular.map((a, i) => `
    <div class="popular-item" onclick="openArticle(${a.id})">
      <div class="popular-rank">0${i + 1}</div>
      <div class="popular-icon">${a.icon}</div>
      <div class="popular-info">
        <h3>${a.title}</h3>
        <p>${a.category} · ⏱ ${a.readTime}</p>
      </div>
      <div class="popular-views">${a.views} views</div>
    </div>
  `).join('');
}

// ── Render start here ──
function renderStartHere() {
  const grid = document.getElementById('startHereGrid');
  if (!grid) return;
  grid.innerHTML = START_HERE.map(s => `
    <div class="start-card" onclick="showToast('Abrindo: ${s.title}')">
      <div class="start-num">${s.num}</div>
      <div class="start-info">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');
}

// ── Filter ──
let activeFilter = 'todos';
function filterByCategory(tag) {
  activeFilter = tag;
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === tag);
  });
  const filtered = tag === 'todos' ? ARTICLES : ARTICLES.filter(a => a.tag === tag);
  renderArticles(filtered);
  // Scroll to articles
  document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Search ──
function setupSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  const open = () => { overlay.classList.add('open'); input.focus(); renderSearchResults(''); };
  const close = () => overlay.classList.remove('open');

  document.getElementById('searchTrigger')?.addEventListener('click', open);
  document.getElementById('searchTriggerMobile')?.addEventListener('click', open);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
    if (e.key === 'Escape') close();
  });

  input.addEventListener('input', () => renderSearchResults(input.value));

  function renderSearchResults(q) {
    const found = q.trim() === ''
      ? ARTICLES.slice(0, 6)
      : ARTICLES.filter(a =>
          a.title.toLowerCase().includes(q.toLowerCase()) ||
          a.category.toLowerCase().includes(q.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(q.toLowerCase())
        );
    if (found.length === 0) {
      results.innerHTML = `<div class="search-empty">Nenhum resultado para "<strong>${q}</strong>"</div>`;
      return;
    }
    results.innerHTML = found.map(a => `
      <div class="search-result-item" onclick="openArticle(${a.id}); close()">
        <div class="res-icon">${a.icon}</div>
        <div class="res-info">
          <h4>${a.title}</h4>
          <p>${a.category} · ⏱ ${a.readTime}</p>
        </div>
      </div>
    `).join('');
  }
}

// ── Article page ──
function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;

  const main = document.getElementById('mainPage');
  const articlePage = document.getElementById('articlePage');

  articlePage.innerHTML = buildArticlePage(a);
  main.classList.add('hidden');
  articlePage.classList.remove('hidden');
  window.scrollTo(0, 0);
  setupProgressBar();
  setupShareButtons(a);
}

function buildArticlePage(a) {
  const related = ARTICLES.filter(x => x.tag === a.tag && x.id !== a.id).slice(0, 3);
  const content = generateArticleContent(a);
  return `
    <div class="read-progress" id="readProgress"></div>
    <div class="article-hero">
      <div class="container">
        <div class="article-hero-inner">
          <button onclick="closePage()" style="display:flex;align-items:center;gap:6px;color:var(--text-muted);font-size:.85rem;font-weight:600;padding:6px 0;margin-bottom:24px;background:none;border:none;cursor:pointer;transition:.2s" onmouseover="this.style.color='var(--blue-bright)'" onmouseout="this.style.color='var(--text-muted)'">
            ← Voltar ao início
          </button>
          <span class="tag ${a.tagColor}">${a.category}</span>
          <h1>${a.title}</h1>
          <div class="article-hero-meta">
            <div style="display:flex;align-items:center;gap:6px">
              <div class="author-avatar">M</div>
              <strong>Marcos Tech</strong>
            </div>
            <span class="sep">·</span>
            <span>${a.date}</span>
            <span class="sep">·</span>
            <span>⏱ ${a.readTime} de leitura</span>
            <span class="sep">·</span>
            <span>👁 ${a.views} visualizações</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="reading-layout" style="padding-top:48px;padding-bottom:0">
        <div>
          <div class="article-content" style="padding-top:0;padding-bottom:0">${content}</div>
          <div class="share-bar" id="shareBar">
            <span>Compartilhar:</span>
            <button class="share-btn" title="Copiar link" onclick="copyLink()">🔗</button>
            <button class="share-btn" title="Twitter/X" onclick="shareTwitter('${a.title}')">𝕏</button>
            <button class="share-btn" title="LinkedIn" onclick="shareLinkedIn()">in</button>
            <button class="share-btn" title="WhatsApp" onclick="shareWhatsApp('${a.title}')">📱</button>
          </div>
        </div>
        <div>
          <div class="toc">
            <h4>Neste artigo</h4>
            <ul id="tocList"></ul>
          </div>
        </div>
      </div>
    </div>
    ${related.length > 0 ? `
    <div class="related-section">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="section-label">Continue aprendendo</div>
            <div class="section-title">Artigos Relacionados</div>
          </div>
        </div>
        <div class="articles-grid">${related.map(r => `
          <div class="article-card" onclick="openArticle(${r.id})">
            <div class="article-thumb" style="background:${r.gradient}">${r.icon}</div>
            <div class="article-body">
              <div class="article-meta">
                <span class="tag ${r.tagColor}">${r.category}</span>
                <span class="read-time">⏱ ${r.readTime}</span>
              </div>
              <div class="article-title">${r.title}</div>
              <div class="article-excerpt">${r.excerpt}</div>
            </div>
          </div>
        `).join('')}</div>
      </div>
    </div>` : ''}`;
}

function generateArticleContent(a) {
  const contents = {
    1: `
      <div class="callout"><span class="callout-icon">💡</span>Este artigo faz parte da série <strong>Fundamentos da Computação</strong> — ideal para quem está começando do zero.</div>
      <p>Um computador é uma máquina eletrônica capaz de receber, processar, armazenar e transmitir informações. Parece simples, mas por trás dessa definição existe um universo de componentes trabalhando juntos em perfeita sincronia.</p>
      <h2 id="o-que-e">O que é um computador, afinal?</h2>
      <p>A palavra <em>computador</em> vem do latim <em>computare</em>, que significa calcular. E de fato, tudo que um computador faz se resume a operações matemáticas extremamente rápidas — bilhões por segundo.</p>
      <p>Mas diferente das calculadoras simples, os computadores são <strong>programáveis</strong>: você pode instruí-los a executar qualquer tarefa através de software.</p>
      <h2 id="componentes">Componentes principais</h2>
      <p>Todo computador — seja um desktop, laptop ou smartphone — possui os mesmos componentes fundamentais:</p>
      <ul>
        <li><strong>CPU (Processador)</strong> — O "cérebro" que executa as instruções</li>
        <li><strong>RAM (Memória)</strong> — Armazenamento temporário e rápido</li>
        <li><strong>Armazenamento</strong> — HD ou SSD para dados permanentes</li>
        <li><strong>Placa-mãe</strong> — Conecta todos os componentes</li>
        <li><strong>GPU</strong> — Processa gráficos e cálculos paralelos</li>
      </ul>
      <h2 id="hardware-software">Hardware vs Software</h2>
      <p>Hardware é tudo que você pode tocar fisicamente: processador, memória, teclado, monitor. Software é tudo que roda no hardware: sistema operacional, aplicativos, jogos.</p>
      <div class="callout"><span class="callout-icon">🧠</span>Uma analogia útil: hardware é o <em>corpo</em> do computador, e software é a <em>mente</em>. Sem um, o outro não funciona.</div>
      <h2 id="como-funciona">Como tudo funciona junto</h2>
      <p>Quando você clica duas vezes em um arquivo, uma série de eventos acontece em milissegundos:</p>
      <ol>
        <li>O sistema operacional detecta o clique</li>
        <li>Localiza o arquivo no armazenamento</li>
        <li>Carrega os dados na RAM</li>
        <li>A CPU processa as instruções do programa</li>
        <li>O resultado é exibido no monitor</li>
      </ol>
      <pre><code>// Pseudocódigo simplificado do processo:
click_detectado → SO → armazenamento → RAM → CPU → monitor</code></pre>
      <h2 id="proximos-passos">Próximos passos</h2>
      <p>Agora que você entende o básico, explore os próximos artigos: sistema binário (como os dados são representados internamente), e como a CPU realmente executa instruções.</p>`,

    3: `
      <div class="callout"><span class="callout-icon">🐧</span>Este guia cobre os comandos mais usados no dia a dia. Todos testados em Ubuntu, Debian e derivados.</div>
      <p>O terminal Linux parece intimidador no começo — mas depois que você aprende os comandos básicos, se torna a ferramenta mais poderosa do seu arsenal.</p>
      <h2 id="navegacao">Navegação e arquivos</h2>
      <p>Os comandos de navegação são os primeiros que você precisa dominar:</p>
      <pre><code># Ver onde você está
pwd

# Listar arquivos e pastas
ls
ls -la    # Com detalhes e arquivos ocultos

# Navegar entre diretórios
cd /home/usuario
cd ..     # Pasta acima
cd ~      # Pasta home</code></pre>
      <h2 id="arquivos">Manipulação de arquivos</h2>
      <pre><code># Criar, copiar, mover e remover
touch arquivo.txt          # Criar arquivo vazio
mkdir pasta                # Criar diretório
cp origem.txt destino.txt  # Copiar
mv arquivo.txt /outra/pasta # Mover/renomear
rm arquivo.txt             # Remover
rm -rf pasta/              # Remover pasta (cuidado!)</code></pre>
      <div class="callout"><span class="callout-icon">⚠️</span><strong>Cuidado com rm -rf:</strong> este comando remove arquivos permanentemente, sem lixeira. Sempre verifique o caminho antes de executar.</div>
      <h2 id="texto">Visualizar e editar texto</h2>
      <pre><code># Exibir conteúdo
cat arquivo.txt
less arquivo.txt   # Com paginação
head -n 10 arquivo # Primeiras 10 linhas
tail -f log.txt    # Acompanhar em tempo real

# Buscar dentro de arquivos
grep "erro" arquivo.log
grep -r "função" ./projeto/  # Busca recursiva</code></pre>
      <h2 id="sistema">Informações do sistema</h2>
      <pre><code>top          # Monitor de processos em tempo real
htop         # Versão melhorada (instale com apt)
df -h        # Uso de disco
free -h      # Uso de memória
uname -a     # Informações do kernel</code></pre>`,

    default: `
      <div class="callout"><span class="callout-icon">📖</span>Artigo completo disponível em breve. Este é um preview do conteúdo.</div>
      <p>${a.excerpt}</p>
      <h2 id="introducao">Introdução</h2>
      <p>Este artigo aborda o tema <strong>${a.title}</strong> de forma prática e acessível, pensado para estudantes e profissionais de TI que querem entender de verdade como as coisas funcionam.</p>
      <h2 id="conceitos">Conceitos fundamentais</h2>
      <p>Antes de mergulhar nos detalhes técnicos, é importante estabelecer uma base sólida de conceitos. Compreender o "porquê" é tão importante quanto o "como".</p>
      <p>Os conceitos abordados neste artigo fazem parte do currículo de <strong>${a.category}</strong>, uma área essencial para qualquer profissional de tecnologia em 2025.</p>
      <h2 id="pratica">Aplicação prática</h2>
      <p>Teoria sem prática não leva longe. Por isso, cada conceito apresentado aqui vem acompanhado de exemplos reais e exercícios que você pode fazer agora mesmo.</p>
      <pre><code># Exemplo de código relacionado ao tema
# Execute isso no seu ambiente de prática
echo "Aprendendo ${a.category} com Marcos Tech"</code></pre>
      <h2 id="conclusao">Conclusão</h2>
      <p>Continue explorando o blog para aprofundar seus conhecimentos. A tecnologia é uma jornada contínua, e cada artigo é um passo nessa direção.</p>`
  };

  const content = contents[a.id] || contents.default;

  // Auto-generate TOC after render
  setTimeout(() => {
    const tocList = document.getElementById('tocList');
    if (!tocList) return;
    const headings = document.querySelectorAll('.article-content h2');
    tocList.innerHTML = [...headings].map(h => `
      <li><a href="#${h.id}" onclick="scrollToHeading('${h.id}')">${h.textContent}</a></li>
    `).join('');
  }, 100);

  return content;
}

function scrollToHeading(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePage() {
  document.getElementById('mainPage').classList.remove('hidden');
  document.getElementById('articlePage').classList.add('hidden');
  window.scrollTo(0, 0);
}

// ── Progress bar ──
function setupProgressBar() {
  const bar = document.getElementById('readProgress');
  if (!bar) return;
  window.onscroll = () => {
    const el = document.documentElement;
    const scrolled = el.scrollTop;
    const total = el.scrollHeight - el.clientHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  };
}

// ── Share ──
function setupShareButtons() {}
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copiado!'));
}
function shareTwitter(title) {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' — Marcos Tech')}&url=${encodeURIComponent(window.location.href)}`);
}
function shareLinkedIn() {
  window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
}
function shareWhatsApp(title) {
  window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + window.location.href)}`);
}

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Newsletter ──
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterInput');
  if (input.value.includes('@')) {
    showToast('📬 Inscrição realizada! Em breve chegará novidades.');
    input.value = '';
  } else {
    showToast('⚠️ Digite um e-mail válido.');
  }
}

// ── Filter buttons ──
function setupFilterBtns() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  const filters = [
    { label: 'Todos', tag: 'todos' },
    { label: 'Fundamentos', tag: 'fundamentos' },
    { label: 'Linux', tag: 'linux' },
    { label: 'Dev Web', tag: 'devweb' },
    { label: 'Segurança', tag: 'segurança' },
    { label: 'Redes', tag: 'redes' },
    { label: 'Git', tag: 'git' },
    { label: 'IA', tag: 'ia' },
    { label: 'Hardware', tag: 'hardware' },
    { label: 'Banco de Dados', tag: 'bd' }
  ];
  bar.innerHTML = filters.map(f => `
    <button class="filter-btn ${f.tag === 'todos' ? 'active' : ''}" data-filter="${f.tag}"
      onclick="filterByCategory('${f.tag}')">${f.label}</button>
  `).join('');
}

// ── Intersection observer for animations ──
function setupAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.category-card, .article-card, .start-card, .sidebar-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    obs.observe(el);
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getTheme());

  renderCategories();
  renderFeatured();
  renderArticles();
  renderPopular();
  renderStartHere();
  setupSearch();
  setupFilterBtns();

  setTimeout(typeTerminal, 500);
  setTimeout(setupAnimations, 200);

  document.getElementById('themeBtn').addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
  });
  document.getElementById('mobileClose')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});
