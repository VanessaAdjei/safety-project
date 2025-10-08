/**
 * ESSA Safety Culture Wall of Recognition
 * Interactive functionality for navigation, tab management, quarter filtering, and translation
 */

// Translation data
const translations = {
  en: {
    // Main content
    title: "Safety Culture Excellence Wall of Recognition",
    subtitle:
      "Celebrating excellence in safety leadership and contributions across our organization",

    // Navigation tabs
    "tab-recognition": "Recognition Page",
    "tab-champions": "Safety Champions",
    "tab-grassroots": "Grassroots Team",

    // Filters
    "filter-year": "Filter by Year:",
    "filter-quarter": "Filter by Quarter:",
    "all-quarters": "All Quarters",

    // Sections
    "safety-awards": "Safety Excellence Awards",
    "safety-champions": "Safety Champions",
    "champions-subtitle":
      "All recognized safety contributors across the organization",
    "grassroots-team": "Grassroots Implementation Team",
    "grassroots-subtitle":
      "Recognizing the dedicated professionals who developed and implemented this Safety Culture Recognition Program",

    // Card content
    "recognized-action": "Recognized Safety Action:",
    "action-1":
      "Demonstrates exceptional commitment to team safety through proactive hazard identification and comprehensive safety protocols implementation.",
    "action-2":
      "Exemplifies leadership in safety through consistent emphasis on employee safety and motivational guidance for safety practices.",
    "action-3":
      "Maintains active engagement in safety culture through systematic hazard identification and comprehensive INI reporting processes.",
    "action-4":
      "Consistently demonstrates safe work practices while actively sharing safety knowledge and procedures with team members.",
    "action-5":
      "Serves as a primary safety reference, consistently emphasizing adherence to Solar standard work practices and safety guidelines.",
    "action-6":
      "Maintains continuous safety awareness and effective communication protocols during field operations.",
    "action-7":
      "Demonstrates commitment to safety through regular submission of Incident and Near-miss Investigation (INI) reports.",
    "action-8":
      "Consistently demonstrates exceptional hazard identification capabilities, proactively identifying potential safety risks before they escalate.",
    "action-9":
      "Prioritizes safety in all operations, consistently utilizing appropriate tools and procedures to maintain safe work environments.",
    "action-10":
      "Exemplifies proactive safety leadership through daily safety briefings and continuous monitoring of team safety practices during operations.",
    "action-11":
      "Demonstrated exceptional safety leadership during the Malongo Power Station upgrade project, managing multiple contractor teams while ensuring compliance with safety procedures across all work areas.",
    "action-12":
      "Demonstrates exceptional site safety awareness through systematic identification and reporting of unsafe conditions, including critical equipment maintenance issues.",
    "action-13":
      "Consistently exercises Stop Work Authority when safety standards are compromised, demonstrating unwavering commitment to safety protocols.",
    "action-14":
      "Coordinates comprehensive safety meetings with relevant topics and ensures effective communication systems for security personnel.",

    // Quarter descriptions
    "q1-desc":
      "Active participation in safety culture development, consistently identifying and reporting potential hazards through INI submissions.",
    "q2-desc-1":
      "Facilitated in-depth safety discussions during team meetings, conducted research on safe work environments, and actively shared safety knowledge with colleagues.",
    "q2-desc-2":
      "Contributes valuable insights during safety meetings, providing practical guidance for field operations and safety issue resolution.",
    "q2-desc-3":
      "Exhibits thorough pre-work site assessment capabilities, ensuring all safety conditions are verified before commencing operations.",
    "q2-desc-4":
      "Implemented and maintained effective communication infrastructure, including Walkie-Talkie systems, to enhance security team coordination and response capabilities.",

    // Grassroots team roles
    "role-lead": "Project Lead & Safety Culture Champion",
    "role-coordinator": "Safety Meeting Coordinator & Communication Specialist",
    "role-expert": "Hazard Identification Expert & Safety Advocate",
    "role-development": "Safety Culture Development & Team Engagement",
    "role-implementation":
      "Safety Program Implementation & Process Improvement",

    // Footer
    "footer-gratitude":
      "We extend our gratitude to all safety champions for your unwavering commitment to workplace safety excellence",
    "footer-program": "ESSA Safety Culture Recognition Program",
  },

  pt: {
    // Main content
    title: "Mural de Reconhecimento da Excelência em Cultura de Segurança ESSA",
    subtitle:
      "Celebrando a excelência em liderança de segurança e contribuições em toda nossa organização",

    // Navigation tabs
    "tab-recognition": "Página de Reconhecimento",
    "tab-champions": "Campeões de Segurança",
    "tab-grassroots": "Equipe de Base",

    // Filters
    "filter-year": "Filtrar por Ano:",
    "filter-quarter": "Filtrar por Trimestre:",
    "all-quarters": "Todos os Trimestres",

    // Sections
    "safety-awards": "Prêmios de Excelência em Segurança",
    "safety-champions": "Campeões de Segurança",
    "champions-subtitle":
      "Todos os colaboradores de segurança reconhecidos em toda a organização",
    "grassroots-team": "Equipe de Implementação de Base",
    "grassroots-subtitle":
      "Reconhecendo os profissionais dedicados que desenvolveram e implementaram este Programa de Reconhecimento da Cultura de Segurança",

    // Card content
    "recognized-action": "Ação de Segurança Reconhecida:",
    "action-1":
      "Demonstra comprometimento excepcional com a segurança da equipe através da identificação proativa de perigos e implementação abrangente de protocolos de segurança.",
    "action-2":
      "Exemplifica liderança em segurança através da ênfase consistente na segurança dos funcionários e orientação motivacional para práticas de segurança.",
    "action-3":
      "Mantém engajamento ativo na cultura de segurança através da identificação sistemática de perigos e processos abrangentes de relatório INI.",
    "action-4":
      "Demonstra consistentemente práticas de trabalho seguras enquanto compartilha ativamente conhecimento e procedimentos de segurança com membros da equipe.",
    "action-5":
      "Serve como referência primária de segurança, enfatizando consistentemente a aderência às práticas de trabalho padrão Solar e diretrizes de segurança.",
    "action-6":
      "Mantém consciência contínua de segurança e protocolos eficazes de comunicação durante operações de campo.",
    "action-7":
      "Demonstra comprometimento com a segurança através do envio regular de relatórios de Investigação de Incidentes e Quase-Acidentes (INI).",
    "action-8":
      "Demonstra consistentemente capacidades excepcionais de identificação de perigos, identificando proativamente riscos potenciais de segurança antes que se agravem.",
    "action-9":
      "Prioriza a segurança em todas as operações, utilizando consistentemente ferramentas e procedimentos apropriados para manter ambientes de trabalho seguros.",
    "action-10":
      "Exemplifica liderança proativa de segurança através de briefings diários de segurança e monitoramento contínuo das práticas de segurança da equipe durante operações.",
    "action-11":
      "Demonstrou liderança excepcional de segurança durante o projeto de modernização da Estação de Energia Malongo, gerenciando múltiplas equipes de contratados enquanto garantia conformidade com procedimentos de segurança em todas as áreas de trabalho.",
    "action-12":
      "Demonstra consciência excepcional de segurança do local através da identificação sistemática e relatório de condições inseguras, incluindo problemas críticos de manutenção de equipamentos.",
    "action-13":
      "Exerce consistentemente Autoridade de Parada de Trabalho quando os padrões de segurança são comprometidos, demonstrando comprometimento inabalável com protocolos de segurança.",
    "action-14":
      "Coordena reuniões abrangentes de segurança com tópicos relevantes e garante sistemas eficazes de comunicação para pessoal de segurança.",

    // Quarter descriptions
    "q1-desc":
      "Participação ativa no desenvolvimento da cultura de segurança, identificando e relatando consistentemente perigos potenciais através de submissões INI.",
    "q2-desc-1":
      "Facilitou discussões aprofundadas de segurança durante reuniões de equipe, conduziu pesquisas sobre ambientes de trabalho seguros e compartilhou ativamente conhecimento de segurança com colegas.",
    "q2-desc-2":
      "Contribui com insights valiosos durante reuniões de segurança, fornecendo orientação prática para operações de campo e resolução de problemas de segurança.",
    "q2-desc-3":
      "Exibe capacidades abrangentes de avaliação pré-trabalho do local, garantindo que todas as condições de segurança sejam verificadas antes de iniciar operações.",
    "q2-desc-4":
      "Implementou e manteve infraestrutura eficaz de comunicação, incluindo sistemas de Walkie-Talkie, para melhorar a coordenação e capacidades de resposta da equipe de segurança.",

    // Grassroots team roles
    "role-lead": "Líder do Projeto e Campeão da Cultura de Segurança",
    "role-coordinator":
      "Coordenador de Reuniões de Segurança e Especialista em Comunicação",
    "role-expert":
      "Especialista em Identificação de Perigos e Defensor de Segurança",
    "role-development":
      "Desenvolvimento da Cultura de Segurança e Engajamento da Equipe",
    "role-implementation":
      "Implementação do Programa de Segurança e Melhoria de Processos",

    // Footer
    "footer-gratitude":
      "Estendemos nossa gratidão a todos os campeões de segurança por seu comprometimento inabalável com a excelência em segurança no local de trabalho",
    "footer-program": "Programa de Reconhecimento da Cultura de Segurança ESSA",
  },
};

// Current language state
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Initialize the application
  initApplication();

  function initApplication() {
    // Get DOM elements
    const yearBtns = document.querySelectorAll(".year-btn");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const quarterBtns = document.querySelectorAll(".quarter-btn");
    const letterLinks = document.querySelectorAll(".letter-link");
    const langToggle = document.getElementById("lang-toggle");

    // Initialize event listeners
    initializeYearSelection(yearBtns);
    initializeTabSelection(tabBtns);
    initializeQuarterFiltering(quarterBtns);
    initializeLetterNavigation(letterLinks);
    initializeSmoothScrolling();
    initializeIntersectionObserver(letterLinks);
    initializeLanguageToggle(langToggle);

    // Set initial state
    setActiveTab("recognition");

    // Initialize translations
    updateLanguage();
  }

  /**
   * Initialize year selection functionality
   */
  function initializeYearSelection(yearBtns) {
    yearBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedYear = this.getAttribute("data-year");
        updateYearSelection(yearBtns, this);
        updateYearContent(selectedYear);
      });
    });
  }

  /**
   * Initialize tab selection functionality
   */
  function initializeTabSelection(tabBtns) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedTab = this.getAttribute("data-tab");
        updateTabSelection(tabBtns, this);
        switchTab(selectedTab);
      });
    });
  }

  /**
   * Initialize quarter filtering functionality
   */
  function initializeQuarterFiltering(quarterBtns) {
    quarterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedQuarter = this.getAttribute("data-quarter");
        updateQuarterSelection(quarterBtns, this);
        filterByQuarter(selectedQuarter);
      });
    });
  }

  /**
   * Initialize letter navigation functionality
   */
  function initializeLetterNavigation(letterLinks) {
    letterLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        navigateToLetter(targetId, this);
      });
    });
  }

  /**
   * Initialize smooth scrolling for internal links
   */
  function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  /**
   * Initialize intersection observer for letter sections
   */
  function initializeIntersectionObserver(letterLinks) {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-100px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letterId = entry.target.id;
          updateActiveLetter(letterLinks, letterId);
        }
      });
    }, observerOptions);

    // Observe all letter sections
    document.querySelectorAll(".letter-section").forEach((section) => {
      observer.observe(section);
    });
  }

  /**
   * Update year selection state
   */
  function updateYearSelection(yearBtns, activeBtn) {
    yearBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  /**
   * Update tab selection state
   */
  function updateTabSelection(tabBtns, activeBtn) {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  /**
   * Update quarter selection state
   */
  function updateQuarterSelection(quarterBtns, activeBtn) {
    quarterBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  /**
   * Update year content
   */
  function updateYearContent(year) {
    // Log year change for analytics/debugging
    console.log(`Year changed to: ${year}`);

    // Here you can add logic to load different data for different years
    // For now, we'll just log the change
  }

  /**
   * Switch between tabs
   */
  function switchTab(tabName) {
    console.log(`Attempting to switch to tab: ${tabName}`);

    // Hide all tab panes
    const tabPanes = document.querySelectorAll(".tab-pane");
    console.log(`Found ${tabPanes.length} tab panes`);

    tabPanes.forEach((pane) => {
      pane.classList.remove("active");
      console.log(`Removed active class from: ${pane.id}`);
    });

    // Show selected tab pane
    const selectedPane = document.getElementById(`${tabName}-tab`);
    if (selectedPane) {
      selectedPane.classList.add("active");
      console.log(`Added active class to: ${selectedPane.id}`);
    } else {
      console.error(`Tab pane not found: ${tabName}-tab`);
    }

    // Show/hide filters based on active tab
    const filterRows = document.querySelectorAll(".filter-row");
    if (tabName === "grassroots") {
      // Hide filters on Grassroots Team tab
      filterRows.forEach((row) => (row.style.display = "none"));
      console.log("Filters hidden for Grassroots Team tab");
    } else {
      // Show filters on other tabs
      filterRows.forEach((row) => (row.style.display = "flex"));
      console.log("Filters shown for other tabs");
    }

    // Show/hide alphabet navigation based on active tab
    const letterNav = document.querySelector(".letter-nav");
    if (tabName === "recognition") {
      // Show alphabet navigation only on Recognition Page tab
      letterNav.style.display = "block";
      console.log("Alphabet navigation shown for Recognition Page tab");
    } else {
      // Hide alphabet navigation on other tabs
      letterNav.style.display = "none";
      console.log("Alphabet navigation hidden for other tabs");
    }

    // Update active tab state
    setActiveTab(tabName);

    // Log tab change
    console.log(`Switched to tab: ${tabName}`);
  }

  /**
   * Filter cards by quarter
   */
  function filterByQuarter(quarter) {
    // Get all cards across all tabs
    const allCards = document.querySelectorAll(".card");
    const letterSections = document.querySelectorAll(".letter-section");

    // Get all champion names for the Safety Champions tab
    const allChampionNames = document.querySelectorAll(".champion-name");

    // Filter cards by quarter (for Recognition Page tab)
    allCards.forEach((card) => {
      const cardQuarters = card.getAttribute("data-quarters");

      if (quarter === "all" || cardQuarters.includes(quarter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    // Filter champion names by quarter (for Safety Champions tab)
    allChampionNames.forEach((championName) => {
      // Find the corresponding card to get quarter data
      const championNameText = championName.textContent.trim();
      const correspondingCard = Array.from(allCards).find(
        (card) =>
          card.querySelector("h4")?.textContent.trim() === championNameText
      );

      if (correspondingCard) {
        const cardQuarters = correspondingCard.getAttribute("data-quarters");

        if (quarter === "all" || cardQuarters.includes(quarter)) {
          championName.classList.remove("hidden");
        } else {
          championName.classList.add("hidden");
        }
      } else {
        // If no corresponding card found, show by default
        championName.classList.remove("hidden");
      }
    });

    // Hide empty letter sections (only on recognition tab)
    letterSections.forEach((section) => {
      const visibleCards = section.querySelectorAll(".card:not(.hidden)");
      if (visibleCards.length === 0) {
        section.style.display = "none";
      } else {
        section.style.display = "block";
      }
    });

    // Update active quarter display
    updateQuarterFilterDisplay(quarter);

    // Log filtering action
    console.log(`Filtered by quarter: ${quarter}`);
  }

  /**
   * Update quarter filter display
   */
  function updateQuarterFilterDisplay(quarter) {
    const filterLabel = document.querySelector(".filter-label");
    if (filterLabel) {
      if (quarter === "all") {
        filterLabel.textContent = "Filter by Quarter:";
      } else {
        filterLabel.textContent = `Showing ${quarter} Recognitions:`;
      }
    }
  }

  /**
   * Navigate to specific letter section
   */
  function navigateToLetter(targetId, letterLink) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Provide visual feedback
      highlightLetterLink(letterLink);
    }
  }

  /**
   * Highlight letter link temporarily
   */
  function highlightLetterLink(letterLink) {
    const originalBackground = letterLink.style.background;
    letterLink.style.background =
      "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)";

    setTimeout(() => {
      letterLink.style.background = originalBackground || "";
    }, 1000);
  }

  /**
   * Update active letter in navigation
   */
  function updateActiveLetter(letterLinks, letterId) {
    letterLinks.forEach((link) => link.classList.remove("active"));

    const activeLink = document.querySelector(`a[href="#${letterId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  /**
   * Set active tab for analytics/tracking
   */
  function setActiveTab(tab) {
    // Update page title for better UX
    const baseTitle = "ESSA Safety Culture Wall of Recognition";
    if (tab === "grassroots") {
      document.title = `${baseTitle} - Grassroots Team`;
    } else if (tab === "champions") {
      document.title = `${baseTitle} - Safety Champions`;
    } else {
      document.title = baseTitle;
    }

    // Log tab change
    console.log(`Active tab: ${tab}`);
  }

  /**
   * Add keyboard navigation support
   */
  document.addEventListener("keydown", function (e) {
    // Number keys for quarter selection
    if (e.key >= "1" && e.key <= "3") {
      const quarterBtns = document.querySelectorAll(".quarter-btn");
      const quarterMap = { 1: "Q1", 2: "Q2", 3: "Q3" };
      const targetQuarter = quarterMap[e.key];

      if (targetQuarter) {
        const targetBtn = document.querySelector(
          `[data-quarter="${targetQuarter}"]`
        );
        if (targetBtn) {
          targetBtn.click();
        }
      }
    }

    // 'A' key for "All Quarters"
    if (e.key.toLowerCase() === "a") {
      const allBtn = document.querySelector('[data-quarter="all"]');
      if (allBtn) {
        allBtn.click();
      }
    }

    // Tab navigation with arrow keys
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const activeTab = document.querySelector(".tab-btn.active");
      const tabBtns = document.querySelectorAll(".tab-btn");
      const currentIndex = Array.from(tabBtns).indexOf(activeTab);

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        tabBtns[currentIndex - 1].click();
      } else if (e.key === "ArrowRight" && currentIndex < tabBtns.length - 1) {
        tabBtns[currentIndex + 1].click();
      }
    }
  });

  /**
   * Add print functionality
   */
  window.addEventListener("beforeprint", function () {
    // Hide navigation elements for print
    const elementsToHide = document.querySelectorAll(
      ".letter-nav, .year-selector, .tab-navigation, .quarter-filter"
    );
    elementsToHide.forEach((el) => (el.style.display = "none"));
  });

  window.addEventListener("afterprint", function () {
    // Restore navigation elements after print
    const elementsToHide = document.querySelectorAll(
      ".letter-nav, .year-selector, .tab-navigation, .quarter-filter"
    );
    elementsToHide.forEach((el) => (el.style.display = "block"));
  });

  // Add active state styling for letter links
  const style = document.createElement("style");
  style.textContent = `
        .letter-link.active {
            background: #3182ce !important;
            color: white !important;
            border-color: #3182ce !important;
            box-shadow: 0 4px 6px rgba(49, 130, 206, 0.3) !important;
        }
    `;
  document.head.appendChild(style);

  /**
   * Initialize language toggle functionality
   */
  function initializeLanguageToggle(langToggle) {
    if (langToggle) {
      langToggle.addEventListener("click", function () {
        toggleLanguage();
      });
    }
  }

  /**
   * Toggle between English and Portuguese
   */
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    updateLanguage();
    updateLanguageToggle();
  }

  /**
   * Update language toggle button display
   */
  function updateLanguageToggle() {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      const langText = langToggle.querySelector(".lang-text");
      const langFlag = langToggle.querySelector(".lang-flag");

      if (currentLanguage === "en") {
        langText.textContent = "English";
        langFlag.textContent = "🇺🇸";
      } else {
        langText.textContent = "Português";
        langFlag.textContent = "🇵🇹";
      }
    }
  }

  /**
   * Update all translatable content
   */
  function updateLanguage() {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = translations[currentLanguage][key];

      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.value = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Update page title
    const baseTitle = translations[currentLanguage]["title"];
    document.title = baseTitle;
  }
});
