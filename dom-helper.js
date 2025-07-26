/**
 * DOM Helper - Centralized DOM element access and manipulation utility
 * Eliminates repetitive getElementById calls and provides consistent UI patterns
 */
class DOMHelper {
    static cache = new Map();
    
    /**
     * Get element by ID with caching
     * @param {string} id - Element ID
     * @returns {HTMLElement|null} The element or null if not found
     */
    static get(id) {
        if (!this.cache.has(id)) {
            const element = document.getElementById(id);
            this.cache.set(id, element);
        }
        return this.cache.get(id);
    }
    
    /**
     * Clear the element cache (useful for dynamic content)
     */
    static clearCache() {
        this.cache.clear();
    }
    
    /**
     * Toggle a CSS class on an element
     * @param {string} elementId - Element ID
     * @param {string} className - CSS class name
     * @param {boolean|null} condition - Force add/remove if boolean, toggle if null
     */
    static toggleClass(elementId, className, condition = null) {
        const element = this.get(elementId);
        if (!element) return;
        
        if (condition === null) {
            element.classList.toggle(className);
        } else {
            element.classList.toggle(className, condition);
        }
    }
    
    /**
     * Add CSS class to an element
     * @param {string} elementId - Element ID
     * @param {string} className - CSS class name
     */
    static addClass(elementId, className) {
        const element = this.get(elementId);
        if (element) element.classList.add(className);
    }
    
    /**
     * Remove CSS class from an element
     * @param {string} elementId - Element ID
     * @param {string} className - CSS class name
     */
    static removeClass(elementId, className) {
        const element = this.get(elementId);
        if (element) element.classList.remove(className);
    }
    
    /**
     * Show or hide an element using the 'hidden' class
     * @param {string} elementId - Element ID
     * @param {boolean} show - True to show, false to hide
     */
    static showHide(elementId, show) {
        this.toggleClass(elementId, 'hidden', !show);
    }
    
    /**
     * Activate or deactivate an element using the 'active' class
     * @param {string} elementId - Element ID
     * @param {boolean} active - True to activate, false to deactivate
     */
    static activate(elementId, active = true) {
        this.toggleClass(elementId, 'active', active);
    }
    
    /**
     * Set element visibility using the 'visible' class
     * @param {string} elementId - Element ID
     * @param {boolean} visible - True to make visible, false to hide
     */
    static setVisible(elementId, visible = true) {
        this.toggleClass(elementId, 'visible', visible);
    }
    
    /**
     * Set text content of an element
     * @param {string} elementId - Element ID
     * @param {string} text - Text content to set
     */
    static setText(elementId, text) {
        const element = this.get(elementId);
        if (element) element.textContent = text;
    }
    
    /**
     * Set value of an input element
     * @param {string} elementId - Element ID
     * @param {string} value - Value to set
     */
    static setValue(elementId, value) {
        const element = this.get(elementId);
        if (element) element.value = value;
    }
    
    /**
     * Set checked state of a checkbox
     * @param {string} elementId - Element ID
     * @param {boolean} checked - Checked state
     */
    static setChecked(elementId, checked) {
        const element = this.get(elementId);
        if (element) element.checked = checked;
    }
    
    /**
     * Set src attribute of an element (typically img)
     * @param {string} elementId - Element ID
     * @param {string} src - Source URL
     */
    static setSrc(elementId, src) {
        const element = this.get(elementId);
        if (element) element.src = src;
    }
    
    /**
     * Add event listener to an element
     * @param {string} elementId - Element ID
     * @param {string} event - Event type
     * @param {Function} handler - Event handler function
     * @param {Object} options - Event listener options
     */
    static addEventListener(elementId, event, handler, options = {}) {
        const element = this.get(elementId);
        if (element) element.addEventListener(event, handler, options);
    }
    
    /**
     * Remove event listener from an element
     * @param {string} elementId - Element ID
     * @param {string} event - Event type
     * @param {Function} handler - Event handler function
     */
    static removeEventListener(elementId, event, handler) {
        const element = this.get(elementId);
        if (element) element.removeEventListener(event, handler);
    }
    
    /**
     * Check if element contains a CSS class
     * @param {string} elementId - Element ID
     * @param {string} className - CSS class name
     * @returns {boolean} True if element contains class
     */
    static hasClass(elementId, className) {
        const element = this.get(elementId);
        return element ? element.classList.contains(className) : false;
    }
}