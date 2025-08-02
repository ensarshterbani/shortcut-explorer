// Windows Keyboard Shortcut Explorer
// Main JavaScript file

// Global shortcuts data (included directly to avoid CORS issues)
let shortcutsData = {
  "general": [
    {
      "keys": "Ctrl+C",
      "description": "Copy selected item to clipboard",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+X",
      "description": "Cut selected item to clipboard",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+V",
      "description": "Paste item from clipboard",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Z",
      "description": "Undo last action",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Y",
      "description": "Redo last action",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+A",
      "description": "Select all items",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+S",
      "description": "Save current document",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+O",
      "description": "Open file or document",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+P",
      "description": "Print current document",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+F",
      "description": "Find text in document",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+H",
      "description": "Find and replace text",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+G",
      "description": "Go to line or page",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+N",
      "description": "Create new document or window",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+W",
      "description": "Close current window or tab",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Q",
      "description": "Quit application",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+T",
      "description": "Open new tab",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Tab",
      "description": "Switch between tabs",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Shift+Tab",
      "description": "Switch between tabs (reverse)",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Shift+T",
      "description": "Reopen closed tab",
      "context": "Universal"
    },
    {
      "keys": "Ctrl+Shift+Esc",
      "description": "Open Task Manager directly",
      "context": "System"
    },
    {
      "keys": "Ctrl+Alt+Delete",
      "description": "Open security options screen",
      "context": "System"
    }
  ],
  "navigation": [
    {
      "keys": "Win+E",
      "description": "Open File Explorer",
      "context": "Desktop"
    },
    {
      "keys": "Win+D",
      "description": "Show/hide desktop",
      "context": "Desktop"
    },
    {
      "keys": "Win+L",
      "description": "Lock computer",
      "context": "System"
    },
    {
      "keys": "Win+R",
      "description": "Open Run dialog",
      "context": "System"
    },
    {
      "keys": "Win+I",
      "description": "Open Settings",
      "context": "System"
    },
    {
      "keys": "Win+X",
      "description": "Open Quick Link menu",
      "context": "System"
    },
    {
      "keys": "Win+Tab",
      "description": "Open Task View",
      "context": "System"
    },
    {
      "keys": "Win+Shift+S",
      "description": "Take screenshot with Snipping Tool",
      "context": "System"
    },
    {
      "keys": "Win+Period",
      "description": "Open emoji panel",
      "context": "Universal"
    },
    {
      "keys": "Win+Plus",
      "description": "Open Magnifier and zoom in",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Minus",
      "description": "Open Magnifier and zoom out",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Esc",
      "description": "Close Magnifier",
      "context": "Accessibility"
    },
    {
      "keys": "Win+U",
      "description": "Open Ease of Access Center",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Space",
      "description": "Switch input language",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Space",
      "description": "Switch input language (reverse)",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Left",
      "description": "Move window to left monitor",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Right",
      "description": "Move window to right monitor",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Up",
      "description": "Maximize window vertically",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Down",
      "description": "Restore/minimize window",
      "context": "System"
    },
    {
      "keys": "Win+Left",
      "description": "Snap window to left",
      "context": "System"
    },
    {
      "keys": "Win+Right",
      "description": "Snap window to right",
      "context": "System"
    },
    {
      "keys": "Win+Up",
      "description": "Maximize window",
      "context": "System"
    },
    {
      "keys": "Win+Down",
      "description": "Minimize window",
      "context": "System"
    },
    {
      "keys": "Win+Home",
      "description": "Minimize all windows except active",
      "context": "System"
    },
    {
      "keys": "Win+Shift+Home",
      "description": "Restore all windows",
      "context": "System"
    },
    {
      "keys": "Win+Shift+M",
      "description": "Restore minimized windows",
      "context": "System"
    },
    {
      "keys": "Win+Comma",
      "description": "Peek at desktop",
      "context": "System"
    },
    {
      "keys": "Win+Alt+D",
      "description": "Show/hide desktop calendar",
      "context": "System"
    },
    {
      "keys": "Win+Alt+T",
      "description": "Show/hide taskbar",
      "context": "System"
    },
    {
      "keys": "Win+Alt+Enter",
      "description": "Open System Properties",
      "context": "System"
    },
    {
      "keys": "Win+Alt+R",
      "description": "Record game clip",
      "context": "Gaming"
    },
    {
      "keys": "Win+Alt+G",
      "description": "Record last 30 seconds",
      "context": "Gaming"
    },
    {
      "keys": "Win+Alt+B",
      "description": "Toggle HDR",
      "context": "Gaming"
    },
    {
      "keys": "Win+Alt+PrtScn",
      "description": "Save screenshot",
      "context": "Gaming"
    },
    {
      "keys": "Win+G",
      "description": "Open Game Bar",
      "context": "Gaming"
    },
    {
      "keys": "Win+Ctrl+F",
      "description": "Search for PCs",
      "context": "System"
    },
    {
      "keys": "Win+Ctrl+Q",
      "description": "Open Quick Assist",
      "context": "System"
    },
    {
      "keys": "Win+Ctrl+Shift+B",
      "description": "Restart graphics driver",
      "context": "System"
    },
    {
      "keys": "Win+Ctrl+Shift+O",
      "description": "Open on-screen keyboard",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+C",
      "description": "Turn on color filters",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+S",
      "description": "Turn on high contrast",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+T",
      "description": "Turn on sticky keys",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+N",
      "description": "Turn on toggle keys",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+F",
      "description": "Turn on filter keys",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+M",
      "description": "Turn on mouse keys",
      "context": "Accessibility"
    },
    {
      "keys": "Win+Ctrl+Shift+J",
      "description": "Turn on narrator",
      "context": "Accessibility"
    }
  ],
  "system": [
    {
      "keys": "Alt+F4",
      "description": "Close active window",
      "context": "System"
    },
    {
      "keys": "Alt+Tab",
      "description": "Switch between open apps",
      "context": "System"
    },
    {
      "keys": "Alt+Shift+Tab",
      "description": "Switch between open apps (reverse)",
      "context": "System"
    },
    {
      "keys": "Ctrl+Alt+Tab",
      "description": "Switch between open apps (with arrow keys)",
      "context": "System"
    },
    {
      "keys": "Alt+Esc",
      "description": "Cycle through windows in order",
      "context": "System"
    },
    {
      "keys": "Alt+Space",
      "description": "Open window menu",
      "context": "System"
    },
    {
      "keys": "Alt+Enter",
      "description": "View properties of selected item",
      "context": "System"
    },
    {
      "keys": "Alt+Backspace",
      "description": "Undo",
      "context": "System"
    },
    {
      "keys": "Alt+Home",
      "description": "Go to home page",
      "context": "Browser"
    },
    {
      "keys": "Alt+Left",
      "description": "Go back",
      "context": "Browser"
    },
    {
      "keys": "Alt+Right",
      "description": "Go forward",
      "context": "Browser"
    },
    {
      "keys": "Alt+Up",
      "description": "Go up one level",
      "context": "File Explorer"
    },
    {
      "keys": "Alt+Down",
      "description": "Go down one level",
      "context": "File Explorer"
    },
    {
      "keys": "Alt+Page Up",
      "description": "Page up",
      "context": "Universal"
    },
    {
      "keys": "Alt+Page Down",
      "description": "Page down",
      "context": "Universal"
    },
    {
      "keys": "Alt+Insert",
      "description": "Insert",
      "context": "Universal"
    },
    {
      "keys": "Alt+Delete",
      "description": "Delete",
      "context": "Universal"
    },
    {
      "keys": "Alt+End",
      "description": "End",
      "context": "Universal"
    },
    {
      "keys": "Alt+Home",
      "description": "Home",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Left",
      "description": "Select text left",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Right",
      "description": "Select text right",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Up",
      "description": "Select text up",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Down",
      "description": "Select text down",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Home",
      "description": "Select to beginning of line",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+End",
      "description": "Select to end of line",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Page Up",
      "description": "Select to beginning of page",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Page Down",
      "description": "Select to end of page",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Insert",
      "description": "Paste",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Delete",
      "description": "Cut",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Backspace",
      "description": "Redo",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Enter",
      "description": "New line",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Space",
      "description": "Non-breaking space",
      "context": "Universal"
    },
    {
      "keys": "Alt+Shift+Esc",
      "description": "Switch to previous app",
      "context": "System"
    },
    {
      "keys": "Alt+Shift+F4",
      "description": "Close all windows",
      "context": "System"
    }
  ],
  "file-explorer": [
    {
      "keys": "F2",
      "description": "Rename selected item",
      "context": "File Explorer"
    },
    {
      "keys": "F5",
      "description": "Refresh current view",
      "context": "File Explorer"
    },
    {
      "keys": "F6",
      "description": "Switch between panes",
      "context": "File Explorer"
    },
    {
      "keys": "F10",
      "description": "Activate menu bar",
      "context": "File Explorer"
    },
    {
      "keys": "F11",
      "description": "Toggle full screen",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+F10",
      "description": "Open context menu",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+Delete",
      "description": "Delete item permanently (bypass Recycle Bin)",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+F2",
      "description": "Rename with extension",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+F5",
      "description": "Refresh and update",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+F6",
      "description": "Switch between panes (reverse)",
      "context": "File Explorer"
    },
    {
      "keys": "Shift+F11",
      "description": "Toggle full screen (reverse)",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+N",
      "description": "Create new folder",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+E",
      "description": "Expand all folders in navigation pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+6",
      "description": "Collapse all folders in navigation pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+1",
      "description": "Switch to list view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+2",
      "description": "Switch to details view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+3",
      "description": "Switch to small icons view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+4",
      "description": "Switch to medium icons view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+5",
      "description": "Switch to large icons view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+7",
      "description": "Switch to extra large icons view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+8",
      "description": "Switch to tiles view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+9",
      "description": "Switch to content view",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+0",
      "description": "Switch to preview pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+A",
      "description": "Select all files",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+B",
      "description": "Show/hide favorites bar",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+D",
      "description": "Show/hide details pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+F",
      "description": "Search for files",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+G",
      "description": "Go to folder",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+H",
      "description": "Show/hide hidden files",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+I",
      "description": "Show/hide items",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+J",
      "description": "Show/hide navigation pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+K",
      "description": "Show/hide preview pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+L",
      "description": "Show/hide library pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+M",
      "description": "Show/hide menu bar",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+O",
      "description": "Open folder in new window",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+P",
      "description": "Show/hide preview pane",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+Q",
      "description": "Show/hide quick access",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+R",
      "description": "Refresh",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+S",
      "description": "Save as",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+T",
      "description": "Show/hide toolbar",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+U",
      "description": "Show/hide status bar",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+W",
      "description": "Close window",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+X",
      "description": "Cut to clipboard",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+Y",
      "description": "Redo",
      "context": "File Explorer"
    },
    {
      "keys": "Ctrl+Shift+Z",
      "description": "Redo",
      "context": "File Explorer"
    }
  ],
  "browser": [
    {
      "keys": "Ctrl+Shift+Delete",
      "description": "Clear browsing data",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+O",
      "description": "Open bookmarks manager",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+P",
      "description": "Open private/incognito window",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+R",
      "description": "Hard refresh (clear cache)",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+S",
      "description": "Save page as",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+W",
      "description": "Close all tabs",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+J",
      "description": "Open developer tools",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+I",
      "description": "Open developer tools",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+C",
      "description": "Inspect element",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+M",
      "description": "Toggle device toolbar",
      "context": "Browser"
    },
    {
      "keys": "Ctrl+Shift+K",
      "description": "Open console",
      "context": "Browser"
    }
  ],
  "office": [
    {
      "keys": "Ctrl+Shift+V",
      "description": "Paste as plain text",
      "context": "Office"
    },
    {
      "keys": "Ctrl+Shift+X",
      "description": "Cut to clipboard",
      "context": "Office"
    },
    {
      "keys": "Ctrl+Shift+Y",
      "description": "Redo",
      "context": "Office"
    },
    {
      "keys": "Ctrl+Shift+Z",
      "description": "Redo",
      "context": "Office"
    }
  ]
};

// Global variables
let currentSearch = '';

// DOM elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const resultsSection = document.getElementById('resultsSection');
const welcomeMessage = document.getElementById('welcomeMessage');
const shortcutsContainer = document.getElementById('shortcutsContainer');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading overlay
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 1000);

    // Set up event listeners
    setupEventListeners();
    
    // Populate shortcuts
    populateShortcuts();
    
    // Set up category filters
    setupCategoryFilters();
}

function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', handleKeyDown);
    
    // Clear search button
    clearSearchBtn.addEventListener('click', clearSearch);
}

function handleSearch() {
    const query = searchInput.value.trim();
    currentSearch = query;
    
    if (query.length > 0) {
        clearSearchBtn.classList.add('visible');
        searchShortcuts(query);
    } else {
        clearSearchBtn.classList.remove('visible');
        showWelcomeMessage();
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchShortcuts(query);
        }
    }
}

function searchShortcuts(query) {
    const normalizedQuery = normalizeKeyCombination(query);
    const results = [];
    
    // Search through all shortcuts
    Object.values(shortcutsData).flat().forEach(shortcut => {
        const normalizedShortcut = normalizeKeyCombination(shortcut.keys);
        const description = shortcut.description.toLowerCase();
        const context = shortcut.context.toLowerCase();
        
        // Search by key combination, description, or context
        if (normalizedShortcut.includes(normalizedQuery) || 
            description.includes(query.toLowerCase()) ||
            context.includes(query.toLowerCase())) {
            results.push(shortcut);
        }
    });
    
    displaySearchResults(results, query);
}

function normalizeKeyCombination(combination) {
    return combination
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\+/g, '+');
}

function displaySearchResults(results, query) {
    const normalizedQuery = normalizeKeyCombination(query);
    
    if (results.length > 0) {
        // Found matching shortcuts
        const resultsHtml = results.map(shortcut => `
            <div class="search-result">
                <div class="result-header">
                    <i class="fas fa-keyboard result-icon"></i>
                    <div class="result-title">${shortcut.keys}</div>
                </div>
                <div class="result-description">${shortcut.description}</div>
                <div class="result-context">Context: ${shortcut.context}</div>
            </div>
        `).join('');
        
        resultsSection.innerHTML = `
            <div class="results-container">
                <h3 style="margin-bottom: 20px; color: #333;">
                    <i class="fas fa-search"></i> 
                    Found ${results.length} shortcut${results.length !== 1 ? 's' : ''} for "${query}"
                </h3>
                ${resultsHtml}
            </div>
        `;
    } else {
        // No matching shortcuts found - show customization guide
        const isKeyCombo = /[a-zA-Z]/.test(query) && /[+CtrlAltShiftWin]/.test(query);
        
        if (isKeyCombo) {
            // It's a key combination that's free to use
            resultsSection.innerHTML = `
                <div class="results-container">
                    <div class="search-result free">
                        <div class="result-header">
                            <i class="fas fa-check-circle result-icon"></i>
                            <div class="result-title">🎉 Good news! This key combination is free to use</div>
                        </div>
                        <div class="result-description">
                            The combination <strong>"${query}"</strong> isn't used by default in Windows. 
                            You're free to use it for custom shortcuts or automation!
                        </div>
                        <div class="customization-guide">
                            <h4><i class="fas fa-tools"></i> How to Customize This Shortcut:</h4>
                            <div class="guide-steps">
                                <div class="guide-step">
                                    <span class="step-number">1</span>
                                    <div class="step-content">
                                        <strong>Using PowerToys (Recommended):</strong>
                                        <ul>
                                            <li>Download and install Microsoft PowerToys from GitHub</li>
                                            <li>Open PowerToys Settings → Keyboard Manager</li>
                                            <li>Click "Remap a key" or "Remap a shortcut"</li>
                                            <li>Set "${query}" to trigger your desired action</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="guide-step">
                                    <span class="step-number">2</span>
                                    <div class="step-content">
                                        <strong>Using AutoHotkey:</strong>
                                        <ul>
                                            <li>Install AutoHotkey from autohotkey.com</li>
                                            <li>Create a .ahk script file</li>
                                            <li>Add: <code>${query.replace(/\+/g, ' & ')}::</code></li>
                                            <li>Write your custom action after the double colon</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="guide-step">
                                    <span class="step-number">3</span>
                                    <div class="step-content">
                                        <strong>Using Windows Built-in Options:</strong>
                                        <ul>
                                            <li><strong>For Programs:</strong> Right-click program shortcut → Properties → Shortcut key</li>
                                            <li><strong>For File Explorer:</strong> View → Options → Change folder and search options</li>
                                            <li><strong>For Accessibility:</strong> Settings → Ease of Access → Keyboard</li>
                                            <li><strong>For Input Language:</strong> Settings → Time & Language → Language → Advanced keyboard settings</li>
                                            <li>Note: Windows has very limited built-in customization options</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // It's an operation/action that wasn't found
            resultsSection.innerHTML = `
                <div class="results-container">
                    <div class="search-result free">
                        <div class="result-header">
                            <i class="fas fa-question-circle result-icon"></i>
                            <div class="result-title">No built-in shortcut found for "${query}"</div>
                        </div>
                        <div class="result-description">
                            Windows doesn't have a built-in shortcut for this operation, but you can create one!
                        </div>
                        <div class="customization-guide">
                            <h4><i class="fas fa-tools"></i> How to Create a Custom Shortcut:</h4>
                            <div class="guide-steps">
                                <div class="guide-step">
                                    <span class="step-number">1</span>
                                    <div class="step-content">
                                        <strong>Choose a Key Combination:</strong>
                                        <ul>
                                            <li>Pick an unused combination like Ctrl+Alt+[letter]</li>
                                            <li>Or use Win+[letter] combinations</li>
                                            <li>Avoid conflicts with existing shortcuts</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="guide-step">
                                    <span class="step-number">2</span>
                                    <div class="step-content">
                                        <strong>Using PowerToys Keyboard Manager:</strong>
                                        <ul>
                                            <li>Download Microsoft PowerToys from GitHub</li>
                                            <li>Open PowerToys Settings → Keyboard Manager</li>
                                            <li>Click "Remap a shortcut"</li>
                                            <li>Set your chosen key combo to run a program or script</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="guide-step">
                                    <span class="step-number">3</span>
                                    <div class="step-content">
                                        <strong>Using AutoHotkey Scripts:</strong>
                                        <ul>
                                            <li>Install AutoHotkey from autohotkey.com</li>
                                            <li>Create a .ahk script file</li>
                                            <li>Write: <code>^!a::Run, "your-program.exe"</code></li>
                                            <li>Replace with your desired action</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="guide-step">
                                    <span class="step-number">4</span>
                                    <div class="step-content">
                                        <strong>Using Windows Shortcuts:</strong>
                                        <ul>
                                            <li>Right-click on a program → Create shortcut</li>
                                            <li>Right-click the shortcut → Properties</li>
                                            <li>Click in "Shortcut key" field</li>
                                            <li>Press your desired key combination</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

function showWelcomeMessage() {
    resultsSection.innerHTML = `
        <div class="results-container">
            <div class="welcome-message">
                <div class="welcome-content">
                    <i class="fas fa-lightbulb"></i>
                    <h2>Welcome to Windows Keyboard Shortcut Explorer!</h2>
                    <p>Start typing a key combination or operation in the search bar above to discover Windows shortcuts.</p>
                    <div class="quick-tips">
                        <h3>Quick Tips:</h3>
                        <ul>
                            <li>Type key combinations like "Ctrl+C" or "Win+L"</li>
                            <li>Search for operations like "copy", "paste", "lock computer"</li>
                            <li>Browse categories below to explore all shortcuts</li>
                            <li>Available combinations are marked as "Free to use"</li>
                            <li>Get customization instructions for unused shortcuts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.remove('visible');
    showWelcomeMessage();
}

function populateShortcuts() {
    let allShortcuts = [];
    
    Object.entries(shortcutsData).forEach(([category, shortcuts]) => {
        shortcuts.forEach(shortcut => {
            allShortcuts.push({
                ...shortcut,
                category: category
            });
        });
    });
    
    displayShortcuts(allShortcuts);
}

function displayShortcuts(shortcuts) {
    const shortcutsHtml = shortcuts.map(shortcut => `
        <div class="shortcut-card" data-category="${shortcut.category}">
            <div class="shortcut-keys">${shortcut.keys}</div>
            <div class="shortcut-description">${shortcut.description}</div>
            <div class="shortcut-context">${shortcut.context}</div>
        </div>
    `).join('');
    
    shortcutsContainer.innerHTML = shortcutsHtml;
}

function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter shortcuts
            const category = button.dataset.category;
            filterShortcuts(category);
        });
    });
}

function filterShortcuts(category) {
    const shortcutCards = document.querySelectorAll('.shortcut-card');
    
    shortcutCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
} 