# MSJ Blog Development Guide
## 马诗剑博客开发指南

**Version:** 1.0  
**Last Updated:** 2025-10-07  
**Author:** MSJ Development Team

---

## 📋 Table of Contents | 目录

1. [Overview | 概述](#overview)
2. [Design Principles | 设计原则](#design-principles)
3. [Technical Stack | 技术栈](#technical-stack)
4. [File Structure | 文件结构](#file-structure)
5. [Styling Guidelines | 样式指南](#styling-guidelines)
6. [Component Standards | 组件标准](#component-standards)
7. [Bilingual Support | 双语支持](#bilingual-support)
8. [Card System | 卡片系统](#card-system)
9. [Search Functionality | 搜索功能](#search-functionality)
10. [Best Practices | 最佳实践](#best-practices)
11. [Testing Checklist | 测试清单](#testing-checklist)

---

## Overview | 概述

The MSJ Blog is a modern, bilingual blog platform featuring Apple-inspired UI design with glassmorphism effects. It showcases technical articles about AI, machine learning, and software development.

MSJ博客是一个现代化的双语博客平台，采用Apple风格的UI设计和玻璃态效果。展示关于AI、机器学习和软件开发的技术文章。

### Key Features | 核心功能

- ✅ Bilingual support (English/Chinese) | 双语支持（英文/中文）
- ✅ Apple UI design aesthetic | Apple UI设计美学
- ✅ White card design on dark background | 深色背景上的白色卡片设计
- ✅ Real-time search functionality | 实时搜索功能
- ✅ Date-based sorting (newest first) | 基于日期排序（最新优先）
- ✅ Load more pagination | 加载更多分页
- ✅ Responsive design | 响应式设计
- ✅ Smooth animations and transitions | 流畅的动画和过渡效果

---

## Design Principles | 设计原则

### 1. Apple UI Design Philosophy | Apple UI设计理念

Follow Apple's design principles:
遵循Apple的设计原则：

- **Clarity | 清晰度**: Use clear typography and ample white space
- **Deference | 尊重内容**: Let content be the focus
- **Depth | 深度**: Use subtle shadows and layers to create hierarchy

### 2. Color Palette | 调色板

```css
/* Background Colors */
--bg-primary: #000;                    /* Main background */
--bg-card: rgba(255, 255, 255, 0.95);  /* Card background */

/* Text Colors */
--text-primary: #1d1d1f;               /* Main text on white */
--text-secondary: rgba(0, 0, 0, 0.65); /* Secondary text */
--text-tertiary: rgba(0, 0, 0, 0.45);  /* Tertiary text */
--text-on-dark: #fff;                  /* Text on dark background */

/* Accent Colors */
--accent-blue: #0071e3;                /* Apple blue for links */
--accent-blue-hover: #0077ed;          /* Hover state */

/* Border Colors */
--border-light: rgba(0, 0, 0, 0.06);   /* Light borders */
--border-medium: rgba(0, 0, 0, 0.08);  /* Medium borders */
```

### 3. Typography | 字体排版

```css
/* Font Family */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

/* Font Sizes */
--font-title: 2.5rem;      /* Page title */
--font-card-title: 1.4rem; /* Card title */
--font-body: 0.95rem;      /* Body text */
--font-small: 0.8rem;      /* Small text */
```

---

## Technical Stack | 技术栈

### Core Technologies | 核心技术

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No frameworks required
- **LocalStorage**: For language preference persistence

### Browser Support | 浏览器支持

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## File Structure | 文件结构

```
blogg/
├── msj-blog.html           # Main blog page
├── DEVELOPMENT_GUIDE.md    # This file
└── assets/                 # (Future) Images and resources
    ├── images/
    └── icons/
```

---

## Styling Guidelines | 样式指南

### 1. Card Design | 卡片设计

Cards must follow this structure:
卡片必须遵循以下结构：

```html
<article class="blog-card" onclick="openArticle(ID)">
    <div class="card-cover">
        <div class="card-cover-gradient gradient-X"></div>
    </div>
    <div class="card-content">
        <span class="card-category">
            <span data-lang="en">Category EN</span>
            <span data-lang="zh" style="display: none;">分类中文</span>
        </span>
        <h2 class="card-title">
            <span data-lang="en">Title EN</span>
            <span data-lang="zh" style="display: none;">标题中文</span>
        </h2>
        <p class="card-excerpt">
            <span data-lang="en">Excerpt EN</span>
            <span data-lang="zh" style="display: none;">摘要中文</span>
        </p>
        <div class="card-meta">
            <span class="card-date">YYYY-MM-DD</span>
            <span class="read-more">
                <span data-lang="en">Read more</span>
                <span data-lang="zh" style="display: none;">阅读更多</span>
                <span class="read-more-arrow">→</span>
            </span>
        </div>
    </div>
</article>
```

### 2. Gradient Schemes | 渐变方案

12 unique three-color gradients are available:
提供12种独特的三色渐变：

```css
.gradient-1 { background: linear-gradient(135deg, #FF5E62, #FF9966, #FFD166); }
.gradient-2 { background: linear-gradient(135deg, #06FFA5, #00D9FF, #5B86E5); }
.gradient-3 { background: linear-gradient(135deg, #FF0099, #493240, #FF5E62); }
.gradient-4 { background: linear-gradient(135deg, #00F260, #0575E6, #764BA2); }
.gradient-5 { background: linear-gradient(135deg, #F093FB, #F5576C, #FFD166); }
.gradient-6 { background: linear-gradient(135deg, #4FACFE, #00F2FE, #43E97B); }
.gradient-7 { background: linear-gradient(135deg, #A8EDEA, #FED6E3, #FFB88C); }
.gradient-8 { background: linear-gradient(135deg, #FF9A8B, #FF6A88, #FF99AC); }
.gradient-9 { background: linear-gradient(135deg, #667EEA, #764BA2, #F093FB); }
.gradient-10 { background: linear-gradient(135deg, #FEE140, #FA709A, #FF6B9D); }
.gradient-11 { background: linear-gradient(135deg, #30CFD0, #330867, #A8EDEA); }
.gradient-12 { background: linear-gradient(135deg, #FFD89B, #19547B, #A8EDEA); }
```

### 3. Spacing System | 间距系统

Use consistent spacing:
使用一致的间距：

```css
--spacing-xs: 5px;
--spacing-sm: 10px;
--spacing-md: 20px;
--spacing-lg: 30px;
--spacing-xl: 40px;
--spacing-xxl: 60px;
```

### 4. Border Radius | 圆角

```css
--radius-sm: 15px;   /* Small elements */
--radius-md: 20px;   /* Cards */
--radius-lg: 25px;   /* Search box */
--radius-xl: 30px;   /* Buttons */
```

---

## Component Standards | 组件标准

### 1. Navigation Bar | 导航栏

**Requirements | 要求:**
- Fixed position at top
- Glassmorphism effect with backdrop-filter
- MSJ gradient logo
- Language switcher on the right
- Active state indicator for current page

**Code Example:**
```html
<nav class="navbar">
    <a href="msj-home.html" class="logo">
        <div class="logo-text">MSJ</div>
    </a>
    <div class="nav-links">
        <!-- Navigation links -->
    </div>
    <div class="language-switcher">
        <button class="lang-btn active" onclick="switchLanguage('en')">EN</button>
        <button class="lang-btn" onclick="switchLanguage('zh')">中文</button>
    </div>
</nav>
```

### 2. Search Box | 搜索框

**Requirements | 要求:**
- White background with subtle shadow
- Search icon on the left
- Blue focus state
- Bilingual placeholder
- Real-time search on input

**Code Example:**
```html
<div class="search-container">
    <div class="search-wrapper">
        <span class="search-icon">🔍</span>
        <input 
            type="text" 
            class="search-box" 
            id="searchBox"
            placeholder="Search articles..."
            data-placeholder-en="Search articles..."
            data-placeholder-zh="搜索文章..."
            oninput="searchArticles()"
        >
    </div>
</div>
```

### 3. Load More Button | 加载更多按钮

**Requirements | 要求:**
- Dark glassmorphism style (NOT white)
- Gradient background with blur
- White text
- Smooth hover animation
- Auto-hide when no more content

**Code Example:**
```html
<div class="load-more-container">
    <a href="#" class="load-more-btn" onclick="loadMore(event)">
        <span data-lang="en">Load More Articles</span>
        <span data-lang="zh" style="display: none;">加载更多文章</span>
    </a>
</div>
```

---

## Bilingual Support | 双语支持

### Implementation Pattern | 实现模式

All text content must use the `data-lang` attribute pattern:
所有文本内容必须使用 `data-lang` 属性模式：

```html
<element>
    <span data-lang="en">English Text</span>
    <span data-lang="zh" style="display: none;">中文文本</span>
</element>
```

### Language Switching Function | 语言切换函数

```javascript
function switchLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // Update all translatable elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'inline' : 'none';
    });
    
    // Update search placeholder
    updateSearchPlaceholder(lang);
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}
```

### Language Persistence | 语言持久化

Always load saved language preference on page load:
始终在页面加载时加载保存的语言偏好：

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    // Apply saved language...
});
```

---

## Card System | 卡片系统

### Date Format | 日期格式

**Standard:** YYYY-MM-DD (e.g., 2024-06-20)

### Sorting Logic | 排序逻辑

Cards are automatically sorted by date (newest first) on page load:
卡片在页面加载时自动按日期排序（最新优先）：

```javascript
function sortCardsByDate() {
    const blogGrid = document.getElementById('blogGrid');
    const cards = Array.from(blogGrid.querySelectorAll('.blog-card'));
    
    // Sort by date (newest to oldest)
    cards.sort((a, b) => {
        const dateA = new Date(a.querySelector('.card-date').textContent);
        const dateB = new Date(b.querySelector('.card-date').textContent);
        return dateB - dateA; // Descending order
    });
    
    // Re-insert sorted cards
    cards.forEach(card => blogGrid.appendChild(card));
    
    // Show first 6 cards, hide the rest
    cards.forEach((card, index) => {
        if (index < 6) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
```

### Adding New Cards | 添加新卡片

**Steps | 步骤:**

1. Choose an unused gradient (gradient-1 to gradient-12)
2. Add card HTML following the standard structure
3. Use proper date format (YYYY-MM-DD)
4. Provide both English and Chinese content
5. The card will be automatically sorted by date

**Example:**
```html
<article class="blog-card" onclick="openArticle(13)">
    <div class="card-cover">
        <div class="card-cover-gradient gradient-1"></div>
    </div>
    <div class="card-content">
        <span class="card-category">
            <span data-lang="en">New Category</span>
            <span data-lang="zh" style="display: none;">新分类</span>
        </span>
        <h2 class="card-title">
            <span data-lang="en">New Article Title</span>
            <span data-lang="zh" style="display: none;">新文章标题</span>
        </h2>
        <p class="card-excerpt">
            <span data-lang="en">Article description in English.</span>
            <span data-lang="zh" style="display: none;">文章描述中文。</span>
        </p>
        <div class="card-meta">
            <span class="card-date">2024-12-01</span>
            <span class="read-more">
                <span data-lang="en">Read more</span>
                <span data-lang="zh" style="display: none;">阅读更多</span>
                <span class="read-more-arrow">→</span>
            </span>
        </div>
    </div>
</article>
```

---

## Search Functionality | 搜索功能

### Search Algorithm | 搜索算法

The search function searches across:
搜索功能搜索范围：

- Card titles | 卡片标题
- Card excerpts | 卡片摘要
- Card categories | 卡片分类

```javascript
function searchArticles() {
    const searchBox = document.getElementById('searchBox');
    const searchTerm = searchBox.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.card-excerpt').textContent.toLowerCase();
        const category = card.querySelector('.card-category').textContent.toLowerCase();
        
        const matches = title.includes(searchTerm) || 
                       excerpt.includes(searchTerm) || 
                       category.includes(searchTerm);
        
        card.style.display = (searchTerm === '' || matches) ? '' : 'none';
    });
}
```

### Search Behavior | 搜索行为

- Real-time search (on input)
- Case-insensitive
- Searches in current language
- Hides "Load More" button during search
- Shows "No results" message when appropriate

---

## Best Practices | 最佳实践

### 1. Performance | 性能

- ✅ Use CSS transforms for animations (not position/margin)
- ✅ Minimize DOM manipulations
- ✅ Use event delegation where possible
- ✅ Optimize images (if added in future)

### 2. Accessibility | 可访问性

- ✅ Use semantic HTML elements
- ✅ Provide proper ARIA labels
- ✅ Ensure keyboard navigation works
- ✅ Maintain sufficient color contrast

### 3. Code Organization | 代码组织

- ✅ Keep CSS organized by component
- ✅ Use consistent naming conventions
- ✅ Comment complex logic
- ✅ Group related functions together

### 4. Responsive Design | 响应式设计

**Breakpoints | 断点:**
```css
/* Desktop: Default styles */

/* Tablet */
@media (max-width: 1024px) {
    /* Adjust grid columns */
}

/* Mobile */
@media (max-width: 768px) {
    /* Single column layout */
    /* Hide navigation links */
}

/* Small Mobile */
@media (max-width: 480px) {
    /* Reduce font sizes */
    /* Adjust spacing */
}
```

---

## Testing Checklist | 测试清单

### Before Deployment | 部署前检查

- [ ] Test language switching (EN ↔ 中文)
- [ ] Verify all cards display correctly
- [ ] Test search functionality
- [ ] Verify date sorting (newest first)
- [ ] Test "Load More" button
- [ ] Check responsive design on mobile
- [ ] Test on different browsers
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Test with JavaScript disabled (graceful degradation)

### Visual Checks | 视觉检查

- [ ] Card hover effects work smoothly
- [ ] Gradients display correctly
- [ ] Text is readable on all backgrounds
- [ ] Spacing is consistent
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts on load

### Functionality Checks | 功能检查

- [ ] Language preference persists on reload
- [ ] Search clears properly
- [ ] Cards sort by date correctly
- [ ] Load More reveals hidden cards
- [ ] No console errors
- [ ] LocalStorage works correctly

---

## Common Issues & Solutions | 常见问题与解决方案

### Issue 1: Cards not sorting correctly
**Solution:** Ensure date format is YYYY-MM-DD in `.card-date` element

### Issue 2: Language not persisting
**Solution:** Check localStorage is enabled and `switchLanguage()` saves preference

### Issue 3: Search not working
**Solution:** Verify `searchArticles()` is called on input event

### Issue 4: Gradients not showing
**Solution:** Check gradient class names (gradient-1 to gradient-12)

### Issue 5: Load More button not hiding
**Solution:** Ensure `hidden` class is applied when no more cards

---

## Version History | 版本历史

### v1.0 (2025-10-07)
- Initial release
- 12 blog cards (6 PEFT + 6 Diffusers)
- Bilingual support (EN/中文)
- Search functionality
- Date-based sorting
- Load More pagination
- Apple UI design with white cards

---

## Contact & Support | 联系与支持

For questions or issues, please contact:
如有问题，请联系：

- **Developer:** MSJ Development Team
- **Email:** [Your Email]
- **GitHub:** [Your GitHub]

---

## License | 许可证

This development guide is part of the MSJ Blog project.
本开发指南是MSJ博客项目的一部分。

---

**Remember:** Consistency is key. Always follow these guidelines to maintain a cohesive user experience.
**记住：** 一致性是关键。始终遵循这些指南以保持一致的用户体验。
