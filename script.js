/**
 * ESSA Safety Culture Wall of Recognition
 * Interactive functionality for navigation, tab management, and quarter filtering
 */

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

    // Initialize event listeners
    initializeYearSelection(yearBtns);
    initializeTabSelection(tabBtns);
    initializeQuarterFiltering(quarterBtns);
    initializeLetterNavigation(letterLinks);
    initializeSmoothScrolling();
    initializeIntersectionObserver(letterLinks);

    // Set initial state
    setActiveTab("recognition");
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
});
