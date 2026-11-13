/* Portfolio data and behaviour. Edit PROJECTS to add or change work. */
const GH = 'https://github.com/HASHMATHALI/';

// lens: which reading lenses a project belongs to (first = primary).
const PROJECTS = [
  {
    title: 'Null Hypothesis',
    kind: 'A trading dashboard that audits its own model',
    metric: 'verdict before signal',
    lens: ['product', 'research'],
    what: 'Before showing a BUY or SELL, it backtests the model against buy-and-hold, tests whether its hit rate beats the base rate, checks calibration, and reads the split thresholds out of the random forest to detect when today\'s inputs are outside anything the model learned.',
    how: 'On five years of SPY it reports that the bundled model has not earned trust, and shows why: its price-level features drifted far outside the training range.',
    tags: ['Python', 'scikit-learn', 'Streamlit', 'Plotly', 'SciPy'],
    links: [['Code', GH + 'ai-trading-bot']],
  },
  {
    title: 'Pneumonia Detection from Chest X-Rays',
    kind: 'Diagnostic CNN with uncertainty and explanations',
    metric: '88.1% accuracy',
    lens: ['research'],
    what: 'Transfer learning on DenseNet121 for pneumonia detection, with Monte Carlo Dropout to estimate how sure each prediction is and Grad-CAM to show which regions of the X-ray drove it.',
    how: 'Built to answer two questions a clinician would ask: how confident is this, and what is it looking at.',
    tags: ['PyTorch', 'DenseNet121', 'Grad-CAM', 'MC Dropout'],
    links: [['Code', GH + 'Pneumonia-Detection-DenseNet121']],
  },
  {
    title: 'Cartograph',
    kind: 'Semantic search that knows where its map ends',
    metric: 'refuses off-map queries',
    lens: ['product', 'research'],
    what: 'Hybrid retrieval (dense vectors plus BM25, fused with reciprocal rank fusion) that places every query on a 2-D map of the corpus and labels it charted, frontier or off the map. Off-map queries are never sent to the LLM.',
    how: 'The coverage verdict is derived from the corpus itself: how far each passage sits from its own nearest neighbour.',
    tags: ['FastAPI', 'FAISS', 'sentence-transformers', 'BM25', 'Streamlit'],
    links: [['Code', GH + 'rag-semantic-search']],
  },
  {
    title: 'Predictive Maintenance – Machine Failure Prediction',
    kind: 'Failure prediction from machine sensor data',
    metric: '0.977 ROC-AUC',
    lens: ['research', 'analytics'],
    what: 'Predicts machine failure from sensor readings. Compares six model families, with SMOTE for class balance and a tuned Random Forest.',
    how: 'Evaluated on held-out real readings only, with SMOTE applied to the training split, so the score is not inflated by synthetic test rows.',
    tags: ['scikit-learn', 'XGBoost', 'SMOTE', 'Random Forest'],
    links: [['Code', GH + 'Machine-Failure-Prediction']],
  },
  {
    title: 'AI CodeLab',
    kind: 'Debugging studio with real in-browser execution',
    metric: 'live',
    lens: ['product'],
    what: 'Runs Python on WebAssembly, SQL on SQLite and JavaScript or TypeScript in a sandboxed worker, then hands the real traceback to an AI debugger that separates what was observed from what is inferred or unknown.',
    how: 'Secrets are masked before any code reaches the model; runaway code is terminated by a time limit.',
    tags: ['Next.js', 'TypeScript', 'Pyodide', 'Gemini API'],
    links: [['Live', 'https://ai-codelab.vercel.app'], ['Code', GH + 'ai-codelab']],
  },
  {
    title: 'Bias Detection in Organizational Text',
    kind: 'Measuring gender and cultural bias in language',
    metric: 'WEAT scoring',
    lens: ['research'],
    what: 'NLP system that quantifies gender and cultural bias in large-scale organizational text using Word2Vec embeddings and WEAT scoring.',
    how: 'Bias is measured as a direction in embedding space rather than by keyword lists.',
    tags: ['Python', 'Word2Vec', 'Gensim', 'WEAT', 'NLTK'],
    links: [['Code', GH + 'Bias-Detection-in-Text-Data-']],
  },
  {
    title: 'SlotSense',
    kind: 'Compliance-first warehouse re-slotting (Velocity Mart, Dataverse Hackathon)',
    metric: '33% → 100% slot compliance',
    lens: ['analytics', 'product'],
    what: 'Finds every SKU stored in a slot that breaks a rule (wrong temperature zone, over the weight limit, shared slot, fragile or heavy items on top shelves) and plans the fewest moves that remove the most risk, sized to what a shift can absorb.',
    how: 'Built on 174k order lines and 18k slots. It also flags one picker whose logged travel is half the team\'s, and states plainly which savings the data cannot support.',
    tags: ['Python', 'pandas', 'Plotly', 'Streamlit'],
    links: [['Code', GH + 'velocitymart-dashboard']],
  },
  {
    title: 'Inbox Arena',
    kind: 'An agent benchmark you can play against',
    metric: 'human vs agent',
    lens: ['product', 'research'],
    what: 'An OpenEnv email-triage environment with three graded tasks. The dashboard gives you the same inbox as the agent and scores you with the same graders, then names what each side got wrong.',
    how: 'A seeded shuffle exposes agents that rely on where urgent emails sit instead of what they say.',
    tags: ['Gymnasium', 'Pydantic', 'Streamlit', 'LLM agents'],
    links: [['Code', GH + 'openenv-email-triage']],
  },
  {
    title: 'E-Commerce Sales Analysis & Forecasting',
    kind: 'Revenue, customer behaviour and seasonality',
    metric: 'Power BI',
    lens: ['analytics'],
    what: 'Analysed transactional retail data to identify revenue trends, customer behaviour and seasonality, with interactive Power BI dashboards and forecasting models.',
    how: 'SQL for shaping, DAX for measures, Power BI for the dashboards.',
    tags: ['Power BI', 'SQL', 'DAX', 'Excel'],
    links: [['Code', GH + 'powerbi-ecommerce-dashboard']],
  },
  {
    title: 'NIFTY50 Multi-Horizon Forecasting',
    kind: 'Classical and deep time-series models compared',
    metric: '7- and 30-day horizons',
    lens: ['analytics', 'research'],
    what: 'Forecasts 10 NIFTY 50 stocks at 7- and 30-day horizons, comparing classical models and Prophet with LSTM, CNN-LSTM and Transformer networks, then backtests the networks with trading costs.',
    how: 'One notebook, same data, so the model families can be compared directly. The recorded result is a negative one: a last-price baseline beat all three neural networks, and the README lists the methodology faults behind that.',
    tags: ['Python', 'ARIMA', 'Prophet', 'LSTM'],
    links: [['Code', GH + 'nifty50-stock-forecasting']],
  },
  {
    title: 'Retinal Blood Vessel Segmentation',
    kind: 'Medical image segmentation',
    metric: 'Dice 0.57 · 5 architectures',
    lens: ['research'],
    what: 'Trains U-Net, Attention U-Net, Residual U-Net, U-Net++ and FPN to trace blood vessels in 45 retinal fundus images and compares four loss functions.',
    how: 'CLAHE contrast enhancement, then pixel-wise segmentation at 256×256 on a CPU. All five models land within noise of each other; the write-up explains why the score is well below published results.',
    tags: ['PyTorch', 'U-Net', 'OpenCV'],
    links: [['Code', GH + 'retinal-image-segmentation']],
  },
  {
    title: 'AI-Assisted Game Development',
    kind: 'Prompt engineering study',
    metric: 'prompt engineering',
    lens: ['product'],
    what: 'Explored prompt engineering by developing an interactive game with LLM-assisted code generation and iterative prompt refinement.',
    how: '',
    tags: ['Prompt Engineering', 'Python'],
    links: [],
  },
];

// lens: which lenses light a skill up.
const SKILLS = [
  ['Languages', [['Python', 'all'], ['SQL', 'analytics product'], ['Java', ''], ['JavaScript / TypeScript', 'product']]],
  ['Machine learning', [['Deep Learning (CNNs)', 'research'], ['NLP', 'research'], ['Computer Vision', 'research'], ['Bias Detection', 'research'], ['Uncertainty Quantification', 'research product'], ['Feature Engineering', 'research analytics'], ['SMOTE', 'research']]],
  ['Frameworks', [['PyTorch', 'research'], ['scikit-learn', 'research analytics product'], ['Gensim', 'research'], ['NLTK', 'research'], ['Grad-CAM', 'research'], ['OpenCV', 'research']]],
  ['Data & analytics', [['Pandas', 'analytics product'], ['NumPy', 'analytics research'], ['Power BI', 'analytics'], ['Microsoft Excel', 'analytics'], ['Matplotlib / Seaborn', 'analytics'], ['Time-Series Forecasting', 'analytics']]],
  ['Building products', [['REST APIs (FastAPI)', 'product'], ['Streamlit', 'product analytics'], ['Next.js', 'product'], ['Retrieval / RAG', 'product research'], ['HTML5 & CSS3', 'product'], ['Responsive Design', 'product']]],
  ['Foundations', [['MySQL & Database Design', 'analytics product'], ['Operating Systems', ''], ['Computer Networks', ''], ['Discrete Mathematics', ''], ['Cloud Fundamentals', 'product']]],
];

const list = document.getElementById('projects');
const skillGrid = document.getElementById('skillgrid');
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
};

function renderProjects(lens) {
  // Stable sort: matching projects first, primary-lens matches before secondary ones.
  const rank = (p) => (lens === 'all' ? 0 : p.lens[0] === lens ? 0 : p.lens.includes(lens) ? 1 : 2);
  const ordered = PROJECTS.map((p, i) => [p, i]).sort((a, b) => rank(a[0]) - rank(b[0]) || a[1] - b[1]);
  const openTitle = list.querySelector('li.open .title')?.textContent;
  list.replaceChildren();

  ordered.forEach(([p], i) => {
    const li = el('li', rank(p) === 2 ? 'dim' : '');
    const id = 'p' + i;
    const row = el('button', 'row');
    row.type = 'button';
    row.setAttribute('aria-expanded', 'false');
    row.setAttribute('aria-controls', id);
    const heading = el('span');
    heading.append(el('span', 'title', p.title), el('span', 'kind', p.kind));
    row.append(el('span', 'num', String(i + 1).padStart(2, '0')), heading, el('span', 'metric', p.metric));

    const detail = el('div', 'detail');
    detail.id = id;
    detail.append(el('p', '', p.what));
    if (p.how) detail.append(el('p', 'how', p.how));
    const tags = el('div', 'tags');
    p.tags.forEach((t) => tags.append(el('span', 'tag', t)));
    detail.append(tags);
    if (p.links.length) {
      const links = el('div', 'links');
      p.links.forEach(([label, href]) => {
        const a = el('a', '', label);
        a.href = href;
        a.rel = 'noopener';
        links.append(a);
      });
      detail.append(links);
    }

    row.addEventListener('click', () => {
      const open = li.classList.toggle('open');
      row.setAttribute('aria-expanded', String(open));
    });
    if (p.title === openTitle) {
      li.classList.add('open');
      row.setAttribute('aria-expanded', 'true');
    }
    li.append(row, detail);
    list.append(li);
  });
}

function renderSkills(lens) {
  skillGrid.replaceChildren();
  SKILLS.forEach(([group, items]) => {
    const box = el('div');
    box.append(el('h3', '', group));
    const ul = el('ul');
    items.forEach(([name, lenses]) => {
      const lit = lens !== 'all' && (lenses === 'all' || lenses.split(' ').includes(lens));
      ul.append(el('li', lit ? 'lit' : '', name));
    });
    box.append(ul);
    skillGrid.append(box);
  });
}

function setLens(lens) {
  document.querySelectorAll('.lens').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lens === lens)));
  renderProjects(lens);
  renderSkills(lens);
}

document.querySelectorAll('.lens').forEach((b) => b.addEventListener('click', () => setLens(b.dataset.lens)));

document.getElementById('theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* private mode: theme just won't persist */ }
});

document.getElementById('count').textContent = PROJECTS.length;
document.getElementById('year').textContent = new Date().getFullYear();
setLens('all');
