"use client";

import { useState } from "react";

type Language = "pt" | "en";

const profileLinks = {
  github: "https://github.com/JoaoMorais-stack",
  linkedin: "https://www.linkedin.com/in/joaomorais-infosec/",
  email: "mailto:vitor.infosec@gmail.com",
};

const copy = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: [
      ["sobre", "Sobre"],
      ["seguranca", "Segurança"],
      ["laboratorios", "Laboratórios"],
      ["projetos", "Projetos"],
      ["trajetoria", "Trajetória"],
      ["contato", "Contato"],
    ],
    menu: "Abrir menu",
    closeMenu: "Fechar menu",
    brandAlt: "MoraisSec, Pentest e Red Team",
    eyebrow: "Segurança ofensiva em formação",
    name: "João Morais",
    headline: "Pentest & Red Team | Segurança Ofensiva | Python e Automação",
    intro:
      "Construo minha carreira em segurança ofensiva combinando estudo técnico, prática em laboratórios autorizados e desenvolvimento de ferramentas próprias.",
    primaryCta: "Ver prática ofensiva",
    secondaryCta: "Falar comigo",
    status: [
      ["Base", "São Paulo, Brasil"],
      ["Foco", "Pentest e Red Team"],
      ["Prática", "Labs autorizados"],
    ],
    terminal: "authorized-lab --scope web --document-evidence",
    aboutKicker: "Sobre",
    aboutTitle: "Disciplina operacional aplicada à segurança.",
    aboutBody: [
      "Sou Cabo da Força Aérea Brasileira e atuo no Hospital de Força Aérea de São Paulo (HFASP). Minha rotina profissional exige responsabilidade, organização de processos, atenção a dados e consistência na execução.",
      "Fora das atribuições operacionais e administrativas, desenvolvo soluções para reduzir tarefas repetitivas, organizar informações e diminuir erros manuais. Uso essa experiência de engenharia como apoio ao meu objetivo central: tornar-me um pentester de alto nível.",
    ],
    aboutAsideTitle: "Posicionamento profissional",
    aboutAside:
      "Profissional em formação em Segurança da Informação, com foco absoluto em Pentest, Red Team e segurança ofensiva. Programação e automação são competências complementares para investigar, testar e documentar melhor.",
    focusKicker: "Áreas de interesse",
    focusTitle: "O caminho técnico que estou construindo.",
    focusIntro:
      "A seção separa com clareza conhecimento demonstrado, prática atual e objetivos de carreira.",
    focusAreas: [
      {
        number: "01",
        title: "Segurança de aplicações web",
        status: "Estudo e prática em laboratório",
        body: "HTTP, interceptação de tráfego, reconhecimento, enumeração e análise de classes de vulnerabilidades alinhadas ao OWASP Top 10.",
      },
      {
        number: "02",
        title: "Pentest e Red Team",
        status: "Objetivo profissional",
        body: "Evolução para avaliações completas, exploração, pós-exploração, ambientes corporativos e operações autorizadas de Red Team.",
      },
      {
        number: "03",
        title: "Windows, Linux e Active Directory",
        status: "Trilha de aprofundamento",
        body: "Preparação progressiva para enumeração, movimentação em redes, escalada de privilégios e ambientes corporativos.",
      },
      {
        number: "04",
        title: "Relatórios e evidências",
        status: "Competência em desenvolvimento",
        body: "Documentação reproduzível, organização de evidências e comunicação técnica voltada a risco, impacto e correção.",
      },
    ],
    labsKicker: "Prática ofensiva",
    labsTitle: "Estudo contínuo em ambientes autorizados.",
    labsBody:
      "Resolvo laboratórios e acompanho trilhas de Pentest em plataformas próprias para treinamento. O trabalho é educacional, ético e restrito a ambientes autorizados.",
    platforms: [
      ["Solyd", "Curso de Pentest e prática orientada"],
      ["TryHackMe", "Trilhas e laboratórios práticos"],
      ["Hack The Box", "Máquinas e desafios autorizados"],
    ],
    vaultTitle: "RedTeamVault",
    vaultStatus: "Base de conhecimento em evolução",
    vaultBody:
      "Cofre técnico no Obsidian para consolidar metodologia, fundamentos de redes e HTTP, segurança web, reconhecimento, enumeração e notas de ferramentas.",
    vaultTopics: [
      "OWASP Top 10",
      "XSS, SQLi, IDOR, LFI e RCE",
      "Burp Suite e OWASP ZAP",
      "Subfinder, HTTPX e Nuclei",
      "Linux, DNS, TCP/IP e OSI",
    ],
    vaultNote:
      "Write-ups e relatórios sanitizados serão publicados somente após conclusão e revisão ética.",
    projectsKicker: "Projetos reais",
    projectsTitle: "Programação como vantagem operacional.",
    projectsIntro:
      "Projetos selecionados pelo código existente, maturidade e capacidade de demonstrar resolução de problemas. Soluções sensíveis aparecem apenas por meio de versões sanitizadas.",
    projects: [
      {
        title: "AGHUse Bot / Clinical Automation Demo",
        label: "Case real + demonstração pública",
        body: "Automação criada para consolidar informações operacionais, aplicar regras de negócio e sincronizar dados entre um sistema hospitalar e planilhas. A versão pública usa cenários totalmente fictícios e persistência local.",
        proof: "Python, PySide6, Selenium, openpyxl, Beautiful Soup e SQLite",
        href: "https://github.com/JoaoMorais-stack/clinical-nutrition-automation-demo",
        featured: true,
      },
      {
        title: "Mandarin Learning App",
        label: "Aplicação mobile",
        body: "Produto educacional local-first para estudo estruturado de mandarim, com conteúdo, exercícios, persistência e arquitetura preparada para sincronização.",
        proof: "React Native, Expo, TypeScript, Supabase e SQL",
        href: "https://github.com/JoaoMorais-stack/mandarin-learning-app",
      },
      {
        title: "Shift Schedule Generator",
        label: "Regras e otimização operacional",
        body: "Gerador de escalas com rotação, impedimentos, férias, feriados, ajustes manuais, consultas e persistência local.",
        proof: "Python, SQLite, HTML, CSS e JavaScript",
        href: "https://github.com/JoaoMorais-stack/shift-schedule-generator",
      },
      {
        title: "Ebinex Platform",
        label: "Engenharia full stack",
        body: "Simulação fictícia de paper trading com regras determinísticas, persistência local, validação, limites de segurança e testes automatizados.",
        proof: "Node.js, JavaScript, Canvas, JSON e testes nativos",
        href: "https://github.com/JoaoMorais-stack/ebinex-platform",
      },
      {
        title: "Workforce Management Demo",
        label: "Aplicação web local",
        body: "Diretório operacional fictício com capacidade semanal, ausências planejadas, filtros, API JSON e banco de dados local.",
        proof: "Python, SQLite, HTML, CSS e JavaScript",
        href: "https://github.com/JoaoMorais-stack/workforce-management-demo",
      },
      {
        title: "Student Portal Automation Demo",
        label: "Automação defensiva",
        body: "Reconstrução segura de um fluxo acadêmico repetitivo contra um portal mock local, com validações que bloqueiam alvos externos.",
        proof: "Python, HTTP local, urllib, JavaScript e unittest",
        href: "https://github.com/JoaoMorais-stack/student-portal-automation-demo",
      },
    ],
    viewRepo: "Ver repositório",
    privateNote: "Sem dados reais, credenciais ou integrações institucionais",
    techKicker: "Tecnologias comprovadas",
    techTitle: "Ferramentas agrupadas pela finalidade.",
    techGroups: [
      {
        title: "Segurança ofensiva — estudos e labs",
        items: ["Burp Suite", "OWASP ZAP", "Nuclei", "SQLMap", "Wfuzz", "Subfinder", "HTTPX", "Kali Linux"],
      },
      {
        title: "Programação e software",
        items: ["Python", "TypeScript", "JavaScript", "React Native", "Expo", "Node.js", "HTML", "CSS", "Git"],
      },
      {
        title: "Automação e dados",
        items: ["Selenium", "openpyxl", "PySide6", "PyAutoGUI", "Beautiful Soup", "SQLite", "Supabase", "SQL"],
      },
    ],
    journeyKicker: "Trajetória",
    journeyTitle: "Da operação à segurança ofensiva.",
    journey: [
      {
        period: "2022 — atual",
        title: "Força Aérea Brasileira | HFASP",
        body: "Atuação como Cabo em ambiente hospitalar, com responsabilidades operacionais e administrativas, controle de informações e organização de processos.",
      },
      {
        period: "Em andamento",
        title: "Tecnólogo em Cyber Segurança",
        body: "Faculdade Anhanguera, 2º semestre. Conclusão prevista para o 1º semestre de 2028, como parte da preparação para atuar em cibersegurança.",
      },
      {
        period: "Prática atual",
        title: "Pentest em ambientes autorizados",
        body: "Curso na Solyd, trilhas e laboratórios no TryHackMe e Hack The Box, além da organização técnica do RedTeamVault.",
      },
      {
        period: "Próximo objetivo",
        title: "Atuação profissional em Pentest",
        body: "Consolidar metodologia, ampliar projetos de segurança documentados e avançar para avaliações web, redes e ambientes corporativos.",
      },
    ],
    certKicker: "Formação e certificações",
    certTitle: "Progresso apresentado sem atalhos.",
    educationLabel: "Formação acadêmica",
    educationTitle: "Tecnólogo em Cyber Segurança",
    educationMeta: "Faculdade Anhanguera | 2º semestre",
    educationDate: "Conclusão prevista: 1º semestre de 2028",
    prepLabel: "Em preparação",
    certs: [
      ["eJPT", "Preparação técnica e laboratórios"],
      ["OSCP", "Objetivo avançado em preparação"],
    ],
    certNote:
      "Nenhuma das certificações acima é apresentada como concluída. O status será atualizado após aprovação oficial.",
    contactKicker: "Contato",
    contactTitle: "Vamos conversar sobre segurança ofensiva.",
    contactBody:
      "Busco oportunidades de aprendizado e atuação em Pentest, Red Team e desenvolvimento de ferramentas para segurança.",
    emailLabel: "Enviar e-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Currículos",
    cvPt: "Baixar em português",
    cvEn: "Baixar em inglês",
    footer: "MoraisSec — Pentest, Red Team e Segurança Ofensiva",
    rights: "Portfólio profissional de João Morais.",
  },
  en: {
    skip: "Skip to content",
    nav: [
      ["sobre", "About"],
      ["seguranca", "Security"],
      ["laboratorios", "Labs"],
      ["projetos", "Projects"],
      ["trajetoria", "Journey"],
      ["contato", "Contact"],
    ],
    menu: "Open menu",
    closeMenu: "Close menu",
    brandAlt: "MoraisSec, Pentest and Red Team",
    eyebrow: "Offensive security professional in training",
    name: "João Morais",
    headline: "Aspiring Pentester | Offensive Security & Red Team | Python Automation",
    intro:
      "I am building a career in offensive security through structured study, hands-on practice in authorized labs, and the development of purpose-built tools.",
    primaryCta: "Explore offensive practice",
    secondaryCta: "Contact me",
    status: [
      ["Based in", "São Paulo, Brazil"],
      ["Focus", "Pentest and Red Team"],
      ["Practice", "Authorized labs"],
    ],
    terminal: "authorized-lab --scope web --document-evidence",
    aboutKicker: "About",
    aboutTitle: "Operational discipline applied to security.",
    aboutBody: [
      "I serve as a Corporal in the Brazilian Air Force at the São Paulo Air Force Hospital (HFASP). My professional routine requires accountability, process organization, careful data handling, and consistent execution.",
      "Alongside my operational and administrative duties, I build solutions that reduce repetitive work, organize information, and limit manual errors. I use that engineering experience to support my primary goal: becoming a highly capable penetration tester.",
    ],
    aboutAsideTitle: "Professional positioning",
    aboutAside:
      "An information security professional in training with a clear focus on penetration testing, Red Team operations, and offensive security. Programming and automation are supporting skills used to investigate, test, and document more effectively.",
    focusKicker: "Areas of interest",
    focusTitle: "The technical path I am building.",
    focusIntro:
      "This section clearly separates demonstrated knowledge, current practice, and long-term career goals.",
    focusAreas: [
      {
        number: "01",
        title: "Web application security",
        status: "Study and lab practice",
        body: "HTTP, traffic interception, reconnaissance, enumeration, and analysis of vulnerability classes aligned with the OWASP Top 10.",
      },
      {
        number: "02",
        title: "Pentest and Red Team",
        status: "Career objective",
        body: "Progressing toward complete assessments, exploitation, post-exploitation, corporate environments, and authorized Red Team operations.",
      },
      {
        number: "03",
        title: "Windows, Linux, and Active Directory",
        status: "Development track",
        body: "Building toward enumeration, network movement, privilege escalation, and assessments in corporate environments.",
      },
      {
        number: "04",
        title: "Reporting and evidence",
        status: "Skill in development",
        body: "Reproducible documentation, evidence organization, and technical communication focused on risk, impact, and remediation.",
      },
    ],
    labsKicker: "Offensive practice",
    labsTitle: "Continuous learning in authorized environments.",
    labsBody:
      "I solve labs and follow penetration-testing learning paths on platforms designed for training. All activity is educational, ethical, and restricted to authorized environments.",
    platforms: [
      ["Solyd", "Pentest coursework and guided practice"],
      ["TryHackMe", "Learning paths and hands-on labs"],
      ["Hack The Box", "Authorized machines and challenges"],
    ],
    vaultTitle: "RedTeamVault",
    vaultStatus: "Evolving knowledge base",
    vaultBody:
      "An Obsidian knowledge base used to consolidate methodology, network and HTTP fundamentals, web security, reconnaissance, enumeration, and tool notes.",
    vaultTopics: [
      "OWASP Top 10",
      "XSS, SQLi, IDOR, LFI, and RCE",
      "Burp Suite and OWASP ZAP",
      "Subfinder, HTTPX, and Nuclei",
      "Linux, DNS, TCP/IP, and OSI",
    ],
    vaultNote:
      "Sanitized write-ups and reports will be published only after completion and ethical review.",
    projectsKicker: "Real projects",
    projectsTitle: "Programming as an operational advantage.",
    projectsIntro:
      "Projects were selected based on existing code, maturity, and their ability to demonstrate problem solving. Sensitive solutions are represented only through sanitized versions.",
    projects: [
      {
        title: "AGHUse Bot / Clinical Automation Demo",
        label: "Real case + public demonstration",
        body: "Automation built to consolidate operational information, apply business rules, and synchronize data between a hospital system and spreadsheets. The public version uses fully synthetic scenarios and local persistence.",
        proof: "Python, PySide6, Selenium, openpyxl, Beautiful Soup, and SQLite",
        href: "https://github.com/JoaoMorais-stack/clinical-nutrition-automation-demo",
        featured: true,
      },
      {
        title: "Mandarin Learning App",
        label: "Mobile application",
        body: "A local-first educational product for structured Mandarin study, with content, exercises, persistence, and an architecture prepared for synchronization.",
        proof: "React Native, Expo, TypeScript, Supabase, and SQL",
        href: "https://github.com/JoaoMorais-stack/mandarin-learning-app",
      },
      {
        title: "Shift Schedule Generator",
        label: "Rules and operational optimization",
        body: "A scheduling system with rotation, availability constraints, leave, holidays, manual adjustments, reporting, and local persistence.",
        proof: "Python, SQLite, HTML, CSS, and JavaScript",
        href: "https://github.com/JoaoMorais-stack/shift-schedule-generator",
      },
      {
        title: "Ebinex Platform",
        label: "Full-stack engineering",
        body: "A fictional paper-trading simulation with deterministic rules, local persistence, validation, security boundaries, and automated tests.",
        proof: "Node.js, JavaScript, Canvas, JSON, and native tests",
        href: "https://github.com/JoaoMorais-stack/ebinex-platform",
      },
      {
        title: "Workforce Management Demo",
        label: "Local web application",
        body: "A fictional operations directory with weekly capacity, planned leave, filters, a JSON API, and local database persistence.",
        proof: "Python, SQLite, HTML, CSS, and JavaScript",
        href: "https://github.com/JoaoMorais-stack/workforce-management-demo",
      },
      {
        title: "Student Portal Automation Demo",
        label: "Defensive automation",
        body: "A safe reconstruction of a repetitive academic workflow against a local mock portal, with validations that block external targets.",
        proof: "Python, local HTTP, urllib, JavaScript, and unittest",
        href: "https://github.com/JoaoMorais-stack/student-portal-automation-demo",
      },
    ],
    viewRepo: "View repository",
    privateNote: "No real data, credentials, or institutional integrations",
    techKicker: "Verified technologies",
    techTitle: "Tools grouped by purpose.",
    techGroups: [
      {
        title: "Offensive security — study and labs",
        items: ["Burp Suite", "OWASP ZAP", "Nuclei", "SQLMap", "Wfuzz", "Subfinder", "HTTPX", "Kali Linux"],
      },
      {
        title: "Programming and software",
        items: ["Python", "TypeScript", "JavaScript", "React Native", "Expo", "Node.js", "HTML", "CSS", "Git"],
      },
      {
        title: "Automation and data",
        items: ["Selenium", "openpyxl", "PySide6", "PyAutoGUI", "Beautiful Soup", "SQLite", "Supabase", "SQL"],
      },
    ],
    journeyKicker: "Journey",
    journeyTitle: "From operations to offensive security.",
    journey: [
      {
        period: "2022 — present",
        title: "Brazilian Air Force | HFASP",
        body: "Serving as a Corporal in a hospital environment, with operational and administrative responsibilities, information control, and process organization.",
      },
      {
        period: "In progress",
        title: "Technology degree in Cybersecurity",
        body: "Anhanguera College, second semester. Expected completion in the first half of 2028 as part of my preparation for a cybersecurity career.",
      },
      {
        period: "Current practice",
        title: "Pentest in authorized environments",
        body: "Solyd coursework, TryHackMe and Hack The Box labs, supported by the technical organization of RedTeamVault.",
      },
      {
        period: "Next objective",
        title: "Professional penetration testing",
        body: "Consolidate methodology, expand documented security projects, and progress toward web, network, and corporate-environment assessments.",
      },
    ],
    certKicker: "Education and certifications",
    certTitle: "Progress presented without shortcuts.",
    educationLabel: "Academic education",
    educationTitle: "Technology degree in Cybersecurity",
    educationMeta: "Anhanguera College | Second semester",
    educationDate: "Expected completion: first half of 2028",
    prepLabel: "In preparation",
    certs: [
      ["eJPT", "Technical preparation and labs"],
      ["OSCP", "Advanced certification objective in preparation"],
    ],
    certNote:
      "Neither certification is presented as completed. The status will be updated only after official approval.",
    contactKicker: "Contact",
    contactTitle: "Let’s talk about offensive security.",
    contactBody:
      "I am open to learning and work opportunities in penetration testing, Red Team operations, and security-tool development.",
    emailLabel: "Send an email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Résumés",
    cvPt: "Download Portuguese version",
    cvEn: "Download English version",
    footer: "MoraisSec — Pentest, Red Team, and Offensive Security",
    rights: "Professional portfolio of João Morais.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = copy[language];

  const switchLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
    setMenuOpen(false);
  };

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        {content.skip}
      </a>

      <header className="site-header">
        <a className="wordmark" href="#topo" aria-label="MoraisSec">
          <span className="wordmark-mark">M</span>
          <span>MoraisSec</span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Principal">
          {content.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language selection">
            <button
              type="button"
              className={language === "pt" ? "is-active" : ""}
              onClick={() => switchLanguage("pt")}
              aria-pressed={language === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              className={language === "en" ? "is-active" : ""}
              onClick={() => switchLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? content.closeMenu : content.menu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="topo" aria-labelledby="hero-title">
        <div className="hero-logo" role="img" aria-label={content.brandAlt} />
        <div className="hero-inner" id="conteudo">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.name}</h1>
          <p className="hero-headline">{content.headline}</p>
          <p className="hero-intro">{content.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#laboratorios">
              {content.primaryCta}<span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#contato">
              {content.secondaryCta}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="terminal-line" aria-label="Authorized laboratory focus">
            <span aria-hidden="true">$</span> {content.terminal}
          </div>
        </div>
        <div className="hero-status">
          {content.status.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-about" id="sobre">
        <div className="section-inner about-grid">
          <div>
            <p className="section-kicker">{content.aboutKicker}</p>
            <h2>{content.aboutTitle}</h2>
          </div>
          <div className="about-copy">
            {content.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="positioning-note">
            <span>{content.aboutAsideTitle}</span>
            <p>{content.aboutAside}</p>
          </aside>
        </div>
      </section>

      <section className="section section-focus" id="seguranca">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">{content.focusKicker}</p>
              <h2>{content.focusTitle}</h2>
            </div>
            <p>{content.focusIntro}</p>
          </div>
          <div className="focus-grid">
            {content.focusAreas.map((area) => (
              <article className="focus-item" key={area.number}>
                <span className="focus-number">{area.number}</span>
                <p className="item-status">{area.status}</p>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-labs" id="laboratorios">
        <div className="section-inner labs-grid">
          <div className="labs-lead">
            <p className="section-kicker">{content.labsKicker}</p>
            <h2>{content.labsTitle}</h2>
            <p>{content.labsBody}</p>
            <div className="platform-list">
              {content.platforms.map(([name, description]) => (
                <div key={name}>
                  <strong>{name}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
          <article className="vault-panel">
            <div className="vault-heading">
              <span className="vault-prompt">~/notes/security</span>
              <span className="live-dot">{content.vaultStatus}</span>
            </div>
            <h3>{content.vaultTitle}</h3>
            <p>{content.vaultBody}</p>
            <ul>
              {content.vaultTopics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <p className="vault-note">{content.vaultNote}</p>
          </article>
        </div>
      </section>

      <section className="section section-projects" id="projetos">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">{content.projectsKicker}</p>
              <h2>{content.projectsTitle}</h2>
            </div>
            <p>{content.projectsIntro}</p>
          </div>
          <div className="projects-grid">
            {content.projects.map((project, index) => (
              <article className={"featured" in project && project.featured ? "project-card is-featured" : "project-card"} key={project.title}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-content">
                  <p className="item-status">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className="project-proof">{project.proof}</div>
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {content.viewRepo}<span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="privacy-line"><span aria-hidden="true">●</span>{content.privateNote}</p>
        </div>
      </section>

      <section className="section section-tech" aria-labelledby="tech-title">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">{content.techKicker}</p>
              <h2 id="tech-title">{content.techTitle}</h2>
            </div>
          </div>
          <div className="tech-grid">
            {content.techGroups.map((group) => (
              <div className="tech-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tech-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-journey" id="trajetoria">
        <div className="section-inner journey-layout">
          <div className="journey-heading">
            <p className="section-kicker">{content.journeyKicker}</p>
            <h2>{content.journeyTitle}</h2>
          </div>
          <div className="timeline">
            {content.journey.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-certs">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">{content.certKicker}</p>
              <h2>{content.certTitle}</h2>
            </div>
          </div>
          <div className="credentials-grid">
            <article className="credential-block">
              <p className="item-status">{content.educationLabel}</p>
              <h3>{content.educationTitle}</h3>
              <p>{content.educationMeta}</p>
              <strong>{content.educationDate}</strong>
            </article>
            <div className="certification-block">
              <p className="item-status">{content.prepLabel}</p>
              {content.certs.map(([name, status]) => (
                <div className="cert-row" key={name}>
                  <strong>{name}</strong>
                  <span>{status}</span>
                </div>
              ))}
              <p className="cert-note">{content.certNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contato">
        <div className="section-inner contact-grid">
          <div>
            <p className="section-kicker">{content.contactKicker}</p>
            <h2>{content.contactTitle}</h2>
            <p>{content.contactBody}</p>
          </div>
          <div className="contact-links">
            <a className="contact-primary" href={profileLinks.email}>
              <span>{content.emailLabel}</span>
              <strong>vitor.infosec@gmail.com</strong>
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              {content.linkedinLabel}<span aria-hidden="true">↗</span>
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              {content.githubLabel}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="cv-downloads">
            <span>{content.cvLabel}</span>
            <a href="/curriculo-joao-morais-pt.docx" download>{content.cvPt}<span aria-hidden="true">↓</span></a>
            <a href="/resume-joao-morais-en.docx" download>{content.cvEn}<span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <span>{content.footer}</span>
          <span>© {new Date().getFullYear()} {content.rights}</span>
        </div>
      </footer>
    </main>
  );
}
