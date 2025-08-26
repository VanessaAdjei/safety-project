/**
 * ESSA Safety Culture Wall of Recognition
 * Interactive functionality for navigation, view management, and quarter filtering
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Initialize the application
    initApplication();
    
    function initApplication() {
        // Get DOM elements
        const yearBtns = document.querySelectorAll('.year-btn');
        const viewBtns = document.querySelectorAll('.view-btn');
        const quarterBtns = document.querySelectorAll('.quarter-btn');
        const recognitionSection = document.getElementById('recognition-section');
        const grassrootsSection = document.getElementById('grassroots-section');
        const letterLinks = document.querySelectorAll('.letter-link');
        
        // Initialize event listeners
        initializeYearSelection(yearBtns);
        initializeViewSelection(viewBtns, recognitionSection, grassrootsSection);
        initializeQuarterFiltering(quarterBtns);
        initializeLetterNavigation(letterLinks);
        initializeSmoothScrolling();
        initializeIntersectionObserver(letterLinks);
        
        // Set initial state
        setActiveSection('recognition');
    }
    
    /**
     * Initialize year selection functionality
     */
    function initializeYearSelection(yearBtns) {
        yearBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedYear = this.getAttribute('data-year');
                updateYearSelection(yearBtns, this);
                updateYearContent(selectedYear);
            });
        });
    }
    
    /**
     * Initialize view selection functionality
     */
    function initializeViewSelection(viewBtns, recognitionSection, grassrootsSection) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedView = this.getAttribute('data-view');
                updateViewSelection(viewBtns, this);
                updateView(selectedView, recognitionSection, grassrootsSection);
            });
        });
    }
    
    /**
     * Initialize quarter filtering functionality
     */
    function initializeQuarterFiltering(quarterBtns) {
        quarterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedQuarter = this.getAttribute('data-quarter');
                updateQuarterSelection(quarterBtns, this);
                filterByQuarter(selectedQuarter);
            });
        });
    }
    
    /**
     * Initialize letter navigation functionality
     */
    function initializeLetterNavigation(letterLinks) {
        letterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                navigateToLetter(targetId, this);
            });
        });
    }
    
    /**
     * Initialize smooth scrolling for internal links
     */
    function initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const letterId = entry.target.id;
                    updateActiveLetter(letterLinks, letterId);
                }
            });
        }, observerOptions);

        // Observe all letter sections
        document.querySelectorAll('.letter-section').forEach(section => {
            observer.observe(section);
        });
    }
    
    /**
     * Update year selection state
     */
    function updateYearSelection(yearBtns, activeBtn) {
        yearBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    /**
     * Update view selection state
     */
    function updateViewSelection(viewBtns, activeBtn) {
        viewBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    /**
     * Update quarter selection state
     */
    function updateQuarterSelection(quarterBtns, activeBtn) {
        quarterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
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
     * Update view between recognition and grassroots
     */
    function updateView(view, recognitionSection, grassrootsSection) {
        if (view === 'grassroots') {
            recognitionSection.style.display = 'none';
            grassrootsSection.style.display = 'block';
            setActiveSection('grassroots');
        } else {
            recognitionSection.style.display = 'block';
            grassrootsSection.style.display = 'none';
            setActiveSection('recognition');
        }
    }
    
    /**
     * Filter cards by quarter
     */
    function filterByQuarter(quarter) {
        const cards = document.querySelectorAll('.card');
        const letterSections = document.querySelectorAll('.letter-section');
        
        cards.forEach(card => {
            const cardQuarters = card.getAttribute('data-quarters');
            
            if (quarter === 'all' || cardQuarters.includes(quarter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Hide empty letter sections
        letterSections.forEach(section => {
            const visibleCards = section.querySelectorAll('.card:not(.hidden)');
            if (visibleCards.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
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
        const filterLabel = document.querySelector('.filter-label');
        if (filterLabel) {
            if (quarter === 'all') {
                filterLabel.textContent = 'Filter by Quarter:';
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
                behavior: 'smooth',
                block: 'start'
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
        letterLink.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
        
        setTimeout(() => {
            letterLink.style.background = originalBackground || '';
        }, 1000);
    }
    
    /**
     * Update active letter in navigation
     */
    function updateActiveLetter(letterLinks, letterId) {
        letterLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`a[href="#${letterId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    /**
     * Set active section for analytics/tracking
     */
    function setActiveSection(section) {
        // Update page title for better UX
        const baseTitle = 'ESSA Safety Culture Wall of Recognition';
        if (section === 'grassroots') {
            document.title = `${baseTitle} - Grassroots Team`;
        } else {
            document.title = baseTitle;
        }
        
        // Log section change
        console.log(`Active section: ${section}`);
    }
    
    /**
     * Add keyboard navigation support
     */
    document.addEventListener('keydown', function(e) {
        // Escape key to close any open modals or return to main view
        if (e.key === 'Escape') {
            const grassrootsSection = document.getElementById('grassroots-section');
            const recognitionSection = document.getElementById('recognition-section');
            
            if (grassrootsSection.style.display === 'block') {
                // Return to recognition view
                document.querySelector('[data-view="all"]').click();
            }
        }
        
        // Number keys for quarter selection
        if (e.key >= '1' && e.key <= '4') {
            const quarterBtns = document.querySelectorAll('.quarter-btn');
            const quarterMap = { '1': 'Q1', '2': 'Q2', '3': 'Q3', '4': 'Q4' };
            const targetQuarter = quarterMap[e.key];
            
            if (targetQuarter) {
                const targetBtn = document.querySelector(`[data-quarter="${targetQuarter}"]`);
                if (targetBtn) {
                    targetBtn.click();
                }
            }
        }
        
        // 'A' key for "All Quarters"
        if (e.key.toLowerCase() === 'a') {
            const allBtn = document.querySelector('[data-quarter="all"]');
            if (allBtn) {
                allBtn.click();
            }
        }
    });
    
    /**
     * Add print functionality
     */
    window.addEventListener('beforeprint', function() {
        // Hide navigation elements for print
        const elementsToHide = document.querySelectorAll('.letter-nav, .year-selector, .view-options, .quarter-filter');
        elementsToHide.forEach(el => el.style.display = 'none');
    });
    
    window.addEventListener('afterprint', function() {
        // Restore navigation elements after print
        const elementsToHide = document.querySelectorAll('.letter-nav, .year-selector, .view-options, .quarter-filter');
        elementsToHide.forEach(el => el.style.display = 'block');
    });
    
    // Add active state styling for letter links
    const style = document.createElement('style');
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
