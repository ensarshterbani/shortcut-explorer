# Windows Keyboard Shortcut Explorer 🎹

A comprehensive web application that helps users discover Windows keyboard shortcuts and find available key combinations for custom automation.

## ✨ Features

### 🔍 **Searchable Shortcut Database**
- **70+ Windows shortcuts** organized by categories
- **Real-time search** by key combination or description
- **Context-aware** shortcuts (File Explorer, Browser, Office, etc.)

### 🎯 **Smart Key Combination Detection**
- **Live key capture** - press any combination to see if it's used
- **Friendly feedback** when combinations are available for custom use
- **Visual indicators** for used vs. free combinations

### 📱 **Modern, Responsive Design**
- **Clean, intuitive interface** with smooth animations
- **Mobile-friendly** responsive layout
- **Beautiful gradient design** with modern CSS

### 🗂️ **Organized Categories**
- **General** - Universal shortcuts (Ctrl+C, Ctrl+V, etc.)
- **Navigation** - Windows navigation (Win+E, Win+L, etc.)
- **System** - System management (Ctrl+Shift+Esc, Alt+F4, etc.)
- **Task Switching** - App switching and virtual desktops
- **File Explorer** - File management shortcuts
- **Browser** - Web browser shortcuts
- **Office** - Microsoft Office shortcuts

## 🚀 Quick Start

1. **Open `index.html`** in any modern web browser
2. **Start searching** by typing key combinations like "Ctrl+C" or "Win+L"
3. **Use key capture** by clicking "Toggle Key Capture" and pressing keys
4. **Browse categories** using the filter buttons below

## 📁 Project Structure

```
Windows keyboard shortcuts/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── shortcuts.json      # Shortcuts database
└── README.md          # This file
```

## 🎮 How to Use

### **Search Mode**
- Type any key combination in the search bar
- Results show matching shortcuts or "free to use" status
- Supports partial matches and description searches

### **Key Capture Mode**
1. Click "Toggle Key Capture" button
2. Press any key combination on your keyboard
3. See real-time feedback about the combination
4. Click "Stop Capture" when done

### **Browse Mode**
- Use category filters to explore shortcuts by type
- Click on any shortcut card to see details
- All shortcuts are organized by context and functionality

## 🛠️ Technical Details

### **Frontend Technologies**
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks, pure functionality
- **Font Awesome** - Icons for better UX

### **Key Features**
- **Async JSON loading** with fallback support
- **Real-time key detection** using JavaScript events
- **Responsive grid layout** for all screen sizes
- **Smooth animations** and transitions
- **Accessibility-friendly** design

### **Browser Compatibility**
- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎯 Use Cases

### **For Power Users**
- Discover new Windows shortcuts
- Find available combinations for custom automation
- Learn context-specific shortcuts

### **For Developers**
- Check if key combinations are free for custom tools
- Reference Windows shortcut standards
- Plan keyboard shortcuts for applications

### **For Gamers**
- Find unused combinations for game macros
- Avoid conflicts with Windows shortcuts
- Optimize gaming setup

### **For Automation Enthusiasts**
- Identify available combinations for AutoHotkey
- Plan PowerToys custom shortcuts
- Design keyboard automation workflows

## 🔧 Customization

### **Adding New Shortcuts**
Edit `shortcuts.json` to add new shortcuts:

```json
{
  "category-name": [
    {
      "keys": "Ctrl+Shift+New",
      "description": "Description of what it does",
      "context": "Application or context"
    }
  ]
}
```

### **Modifying Styles**
- Edit `style.css` for visual changes
- Update color schemes in CSS variables
- Modify animations and transitions

### **Extending Functionality**
- Add new categories in `script.js`
- Implement additional search features
- Add export/import functionality

## 🐛 Troubleshooting

### **Shortcuts Not Loading**
- Ensure `shortcuts.json` is in the same directory
- Check browser console for errors
- Try refreshing the page

### **Key Capture Not Working**
- Make sure JavaScript is enabled
- Check if browser blocks key events
- Try clicking the page first to focus

### **Search Not Working**
- Clear browser cache
- Check for typos in search terms
- Ensure proper key combination format

## 🤝 Contributing

Feel free to contribute by:
- Adding new shortcuts to `shortcuts.json`
- Improving the UI/UX
- Adding new features
- Fixing bugs or issues

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Windows documentation** for shortcut references
- **Font Awesome** for beautiful icons
- **Google Fonts** for the Inter font family
- **CSS Grid and Flexbox** for responsive layouts

---

**Made with ❤️ for Windows power users, developers, and automation enthusiasts!** 
