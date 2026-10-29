import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: '01', name: 'AgriChain-Sat', kind: 'CLIMATE × WEB3', title: 'A drought signal with two sources of truth.',
    description: 'A parametric crop-insurance prototype that checks ground soil sensors against NASA MODIS vegetation data before a smart contract can pay out.',
    stack: ['Smart contracts', 'Hardhat', 'Django', 'MQTT'], theme: 'agri', link: 'mailto:tanishqa.chopade@gmail.com?subject=AgriChain-Sat%20project', visual: 'field',
  },
  {
    id: '02', name: 'SheetTrack', kind: 'DEVELOPER TOOLS', title: 'Git thinking, inside a spreadsheet.',
    description: 'An immutable commit graph and cell-level diff engine for Google Sheets. Redis locks keep concurrent edits from stepping on each other.',
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'Gemini'], theme: 'sheet', link: 'https://github.com/tanishqachopade/sheet-track', visual: 'graph',
  },
  {
    id: '03', name: 'Credit risk, in context', kind: 'DATA × FINANCE', title: 'See how a shock changes the risk.',
    description: 'A credit-risk early-warning system comparing Logistic Regression, XGBoost and Altman Z-score, with SHAP explanations and financial stress scenarios.',
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI'], theme: 'credit', link: 'mailto:tanishqa.chopade@gmail.com?subject=Credit%20risk%20project', visual: 'risk',
  },
  {
    id: '04', name: 'Mini Search Engine', kind: 'INFORMATION RETRIEVAL', title: 'Make every result earn its place.',
    description: 'A scientific-paper search engine with several ranking strategies, thread-safe caching, relevance feedback and an evaluation harness.',
    stack: ['Python', 'Flask', 'SQLite', 'TF-IDF'], theme: 'search', link: 'mailto:tanishqa.chopade@gmail.com?subject=Search%20engine%20project', visual: 'search',
  },
];

const experience = [
  { date: 'ENGINEERING', role: 'Engineering Intern', place: 'MedMarvel · MedVirtuoso', detail: 'Built a clinical platform adopted across healthcare institutions. Designed multi-institution access controls and large DICOM/PET transfer pipelines.' },
  { date: 'LEADERSHIP', role: 'Head of Web & App', place: 'COEP College', detail: 'Lead a team building a large event platform, including QR ticketing with offline verification.' },
  { date: 'STARTUP ECOSYSTEM', role: 'Project Management Lead', place: 'Bhaukaldaar · COEP Incubation Cell', detail: 'Evaluated startup applications across seven sectors and supported founder mentorship with Eaton India professionals.' },
];

function ProjectVisual({ type }) {
  if (type === 'field') return <div className="field-art" aria-label="Abstract field and satellite illustration"><div className="sun"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="satellite">✳</div><div className="field-lines"/><div className="sensor sensor-a"/><div className="sensor sensor-b"/><span className="art-note">GROUND + ORBIT<br/>TWO SIGNALS / ONE DECISION</span></div>;
  if (type === 'graph') return <div className="graph-art" aria-label="Illustration of version history"><span className="graph-label">COMMIT HISTORY / 07</span><svg viewBox="0 0 440 220" role="img" aria-label="A branching commit graph"><path d="M80 32V186M80 86H200V140H320V186M200 32V86M320 86V140"/><g><circle cx="80" cy="32"/><circle cx="200" cy="32"/><circle cx="80" cy="86"/><circle cx="200" cy="86"/><circle cx="320" cy="86"/><circle cx="200" cy="140"/><circle cx="320" cy="140"/><circle cx="80" cy="186"/><circle cx="320" cy="186"/></g></svg><div className="commit-chip">✓ &nbsp; immutable · 4f82ae</div><div className="sheet-cells"><i/><i/><i/><i/><i/><i/></div></div>;
  if (type === 'risk') return <div className="risk-art" aria-label="Illustrative company risk dashboard"><div className="risk-top"><span>PORTFOLIO STRESS TEST</span><span>SCENARIO 03</span></div><div className="risk-score"><span>PD · 12 MONTHS</span><b>08.4<small>%</small></b><i>↓ 2.1 pts · base case</i></div><div className="bars"><span style={{height:'36%'}}/><span style={{height:'48%'}}/><span style={{height:'42%'}}/><span style={{height:'62%'}}/><span style={{height:'55%'}}/><span style={{height:'78%'}}/><span style={{height:'70%'}}/><span style={{height:'92%'}}/><span style={{height:'83%'}}/><span style={{height:'100%'}}/></div><div className="risk-foot"><span>REVENUE SHOCK −10%</span><span>SHAP EXPLANATION ↗</span></div></div>;
  return <div className="search-art" aria-label="Search ranking illustration"><div className="search-query">⌕ &nbsp; climate risk in agriculture</div><div className="result"><b>01</b><div><strong>Measuring drought resilience</strong><small>cosine similarity · 0.94</small></div><span>↗</span></div><div className="result faded"><b>02</b><div><strong>Satellite signals & crop yield</strong><small>BM25 · 0.82</small></div><span>↗</span></div><div className="result faint"><b>03</b><div><strong>Soil moisture under pressure</strong><small>TF-IDF · 0.76</small></div><span>↗</span></div><span className="search-foot">RANK · CACHE · EVALUATE</span></div>;
}

function ProjectCard({ project }) {
  return <article className={`project-card ${project.theme}`}>
    <div className="project-info"><div className="project-eyebrow"><span>{project.id} / {project.kind}</span><a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={19}/></a></div><h3>{project.name}</h3><h4>{project.title}</h4><p>{project.description}</p><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
    <ProjectVisual type={project.visual}/>
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar"><a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">t<span>.</span></span><span>TANISHQA CHOPADE<br/><small>ENGINEER · BUILDER · CURIOUS MIND</small></span></a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button><nav className={menuOpen ? 'nav-open' : ''}><a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a></nav></header>

    <main id="home">
      <section className="hero page-wrap"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> AVAILABLE FOR THE NEXT BIG QUESTION</p><h1>I build things<br/>that <em>make sense.</em></h1><p className="hero-lede">I’m Tanishqa — a computer science student drawn to the spaces where software meets the real world: climate, finance, healthcare and everything in between.</p><div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDown size={15}/></a><a className="text-link" href="mailto:tanishqa.chopade@gmail.com">Get in touch <ArrowUpRight size={15}/></a></div><div className="hero-meta"><span>PUNE, INDIA · IST</span><span>18° 31′ N &nbsp; 73° 51′ E</span></div></div><div className="hero-art" aria-label="Abstract illustration of interconnected ideas"><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-orbit orbit-c"/><div className="hero-core">TC<span>✳</span></div><div className="orbit-label label-code">&lt;/&gt;<small>BUILD</small></div><div className="orbit-label label-data">↗<small>LEARN</small></div><div className="orbit-label label-earth">◉<small>IMPACT</small></div><span className="art-caption">A LITTLE BIT OF<br/>EVERYTHING, ON PURPOSE.</span></div><span className="hero-index">PORTFOLIO / 2025—26</span></section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>SOFTWARE ENGINEERING</span><i>✳</i><span>CLIMATE TECH</span><i>✳</i><span>FINANCIAL SYSTEMS</span><i>✳</i><span>WEB3</span><i>✳</i><span>HEALTHCARE</span><i>✳</i><span>SOFTWARE ENGINEERING</span><i>✳</i><span>CLIMATE TECH</span><i>✳</i><span>FINANCIAL SYSTEMS</span><i>✳</i><span>WEB3</span><i>✳</i><span>HEALTHCARE</span><i>✳</i></div></section>

      <section id="work" className="work-section page-wrap"><div className="section-heading"><div><p className="eyebrow">01 — SELECTED WORK</p><h2>Good questions.<br/><em>Built into things.</em></h2></div><p className="section-intro">I like problems with more than one layer. A few things I’ve made while figuring them out.</p></div><div className="projects">{projects.map(project => <ProjectCard key={project.id} project={project}/>)}</div></section>

      <section id="about" className="about-section"><div className="about-inner page-wrap"><div className="about-label"><p className="eyebrow">02 — A BIT ABOUT ME</p><span className="about-doodle">✳</span></div><div className="about-copy"><h2>Curious by training.<br/><em>Multidisciplinary by choice.</em></h2><p>I study Computer Science at COEP Technological University, with a minor in Banking, Financial Services & Insurance and a concurrent degree in English Literature.</p><p>Somewhere between distributed systems, a well-told story and a Taekwondo sparring round, I realised I like understanding how different worlds work — and building useful things at their edges.</p><div className="about-facts"><div><span>01 / STUDYING</span><b>Computer Science<br/>+ BFSI + English Literature</b></div><div><span>02 / OUTSIDE CODE</span><b>Published fiction writer<br/>and Taekwondo black belt</b></div></div></div></div></section>

      <section id="experience" className="experience-section page-wrap"><div className="section-heading exp-heading"><div><p className="eyebrow">03 — EXPERIENCE</p><h2>Learn by <em>doing.</em></h2></div><p className="section-intro">Different rooms, different stakes. Same instinct to get involved and make something better.</p></div><div className="timeline">{experience.map((item, i) => <article className="timeline-row" key={item.role}><span className="timeline-number">0{i+1}</span><span className="timeline-date">{item.date}</span><div><h3>{item.role}</h3><span className="timeline-place">{item.place}</span><p>{item.detail}</p></div><span className="timeline-dot"/></article>)}</div><div className="upcoming-strip"><span className="live-dot"/> NEXT UP</div><div className="upcoming"><p><b>HILTI TECHNOLOGY</b><span>Summer internship · Data Analytics & Software Development</span></p><p><b>CRISIL · S&P GLOBAL</b><span>Winter internship · AI</span></p></div></section>

      <section className="skills-section"><div className="skills-inner page-wrap"><p className="eyebrow">04 — TOOLS I REACH FOR</p><div className="skill-groups"><div><span>01 / BUILD</span><p>TypeScript · JavaScript · Python · React · Next.js · Node.js · Django · FastAPI</p></div><div><span>02 / STORE & SHIP</span><p>PostgreSQL · Redis · Prisma · Docker · SQLite · REST APIs · Git</p></div><div><span>03 / EXPLORE</span><p>Smart contracts · Hardhat · XGBoost · SHAP · Pandas · NumPy · scikit-learn</p></div></div></div></section>

      <footer id="contact" className="contact-section"><div className="contact-inner page-wrap"><p className="eyebrow">05 — YOUR TURN</p><h2>Have a problem<br/>worth <em>solving?</em></h2><p className="contact-copy">I’m always up for thoughtful work, good questions and meeting people who care about what they’re building.</p><a className="contact-mail" href="mailto:tanishqa.chopade@gmail.com">tanishqa.chopade@gmail.com <ArrowUpRight size={21}/></a><div className="contact-bottom"><a className="brand footer-brand" href="#home"><span className="brand-mark">t<span>.</span></span><span>TANISHQA CHOPADE<br/><small>MADE WITH CURIOSITY, IN PUNE.</small></span></a><div className="socials"><a href="https://github.com/tanishqachopade" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="mailto:tanishqa.chopade@gmail.com" aria-label="Email"><Mail size={18}/></a><a href="https://www.linkedin.com/in/tanishqa-chopade-781973331/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div><span className="copyright">© 2025—26 · BUILT WITH INTENTION</span></div></div></footer>
    </main>
  </>;
}

export default App;
