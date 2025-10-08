## 在博客页面添加新 Card 的开发指南

本指南说明如何在 `msj-blog.html` 中新增一张博客卡片（Card），包括样式、结构、链接与 SEO 结构化数据，确保新 Card 能正确排序、搜索、国际化，以及与现有风格保持一致。

### 文件与关键位置
- 页面文件：`msj-blog.html`
- 主要位置：
  - CSS 渐变文字样式：页面 `<style>` 中，`.gradient-text-*` 段落附近（搜索 `/* 12种不同的三色渐变 */` 上方的自定义类区域）
  - Card 容器：`<div class="blog-grid" id="blogGrid"> ... </div>` 内
  - 文章链接映射：页面底部 `<script>` 中的 `const articleLinks = { ... }` 与后续的赋值区（搜索 `articleLinks[13]` 类似条目）
  - SEO 结构化数据（可选）：`<head>` 内第一个 `application/ld+json` 的 `blogPost` 数组

### 添加步骤

#### 1) 可选：新增渐变文字样式（仅当需要新渐变时）
在 `<style>` 中自定义一个新的三色渐变文字样式类，例如：

```css
/* 自定义三色渐变文字（示例） */
.gradient-text-XX {
    background: linear-gradient(135deg, #FF9A8B, #FF6A88, #FF99AC);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
```

命名建议：按序号递增（如 `.gradient-text-18`、`.gradient-text-19`），并在注释中说明用途。

#### 2) 在网格中新增 Card 结构
在 `<div class="blog-grid" id="blogGrid">` 内，插入一段与现有卡片一致的结构。请保持封面黑色背景与渐变标题文字风格：

```html
<!-- 新卡片：Your Title -->
<article class="blog-card" onclick="openArticle(XX)">
    <div class="card-cover">
        <div class="card-cover-gradient card-cover-dark"></div>
        <div class="card-cover-title gradient-text-XX">Your Short Cover Title</div>
    </div>
    <div class="card-content">
        <span class="card-category">
            <span data-lang="en">Category EN</span>
            <span data-lang="zh" style="display: none;">分类 ZH</span>
        </span>
        <h2 class="card-title">
            <span data-lang="en">Full Title EN</span>
            <span data-lang="zh" style="display: none;">完整标题 ZH</span>
        </h2>
        <p class="card-excerpt">
            <span data-lang="en">A concise one-sentence excerpt in English.</span>
            <span data-lang="zh" style="display: none;">一段简洁的中文摘要，控制在一到两句话。</span>
        </p>
        <div class="card-meta">
            <!-- 使用 ISO 日期格式：YYYY-MM-DD -->
            <span class="card-date">2025-01-01</span>
            <span class="read-more">
                <span data-lang="en">Read more</span>
                <span data-lang="zh" style="display: none;">阅读更多</span>
                <span class="read-more-arrow">→</span>
            </span>
        </div>
    </div>
<!-- 可选：添加 hidden 类以默认折叠到“加载更多”后再显示 -->
</article>
```

注意：
- 封面使用 `card-cover-dark`（黑色背景），标题使用你在步骤 1 定义的 `.gradient-text-XX` 渐变文字类。
- 摘要长度需与现有卡片保持一致（1–2 句简洁描述）。
- 日期必须是 `YYYY-MM-DD`，页面脚本会依据该日期进行自动排序（新→旧）。
- 若希望卡片初始折叠，给 `<article>` 添加 `hidden` 类。

#### 3) 配置跳转链接 `articleLinks`
在 `<script>` 中的链接映射处追加一行，编号 `XX` 要与上面 `onclick="openArticle(XX)"` 的 ID 一致：

```js
// 新增卡片链接：Your Title
articleLinks[XX] = 'https://example.com/your-link';
```

所有外链都会在新标签页打开（`openArticle` 已统一处理）。

#### 4) 可选：更新 SEO 结构化数据（JSON-LD）
在 `<head>` 顶部的 `application/ld+json` 的 `blogPost` 数组中，按以下模板追加一项，以利于搜索引擎索引：

```json
{
  "@type": "BlogPosting",
  "headline": "Full Title EN",
  "alternateName": "完整标题 ZH",
  "name": "Short descriptive name",
  "description": "1-2 sentence abstract describing the article/topic.",
  "datePublished": "2025-01-01",
  "keywords": "Keyword1, Keyword2, Keyword3",
  "url": "https://example.com/your-link",
  "inLanguage": "en-US"
}
```

字段说明：
- `datePublished` 使用 `YYYY-MM-DD`；
- `inLanguage` 可根据内容主语言设置为 `en-US` 或 `zh-CN`；
- `keywords` 用逗号分隔的关键词。

### 国际化（i18n）规范
- 所有可见文本均放入双语包裹：
  - 英文：`<span data-lang="en">...</span>`
  - 中文：`<span data-lang="zh" style="display: none;">...</span>`
- 语言切换依赖现有脚本自动切换 `display`。

### 排序与显示规则
- 页面加载时会按 `.card-date` 的日期降序排序（新→旧）。
- 初始仅显示前 6 张卡片，其余带有 `hidden` 类的卡片通过“加载更多”按钮显示。

### 质量检查清单（Checklist）
- [ ] 封面使用黑色背景（`card-cover-dark`），标题使用渐变文字类（`.gradient-text-XX`）。
- [ ] 摘要文本长度与其他卡片一致（建议 1–2 句）。
- [ ] `card-date` 为 `YYYY-MM-DD`，并与文中/仓库时间一致。
- [ ] `articleLinks[XX]` 已配置正确外链。
- [ ] 若为外部链接，点击后在新标签页打开（已由脚本统一处理）。
- [ ] 双语文本均已提供（EN/中文）。
- [ ] 若需 SEO，已在 JSON-LD `blogPost` 追加条目。
- [ ] 如增加品牌图标或资源，已放在 `assets/` 并使用相对路径 `./assets/...`。

### 常见问题（FAQ）
1. 新卡片没有显示在预期位置？
   - 检查 `card-date` 是否为有效 ISO 日期；排序基于日期降序。
2. 点击卡片没有跳转？
   - 检查 `onclick="openArticle(XX)"` 的编号与 `articleLinks[XX]` 是否一致。
3. 语言切换文本没有切换？
   - 确认使用了正确的 `data-lang` 值（`en`/`zh`），并且中文元素初始有 `style="display: none;"`。
4. 摘要文字溢出或风格不一致？
   - 缩短摘要到与现有卡片一致的长度（通常 1–2 句）。

### 最小可用模板（复制即用）
将以下片段粘贴到 `blogGrid` 内，并按需替换 `XX`、文案与链接：

```html
<!-- 新卡片：Your Title -->
<article class="blog-card" onclick="openArticle(XX)">
    <div class="card-cover">
        <div class="card-cover-gradient card-cover-dark"></div>
        <div class="card-cover-title gradient-text-XX">Your Short Cover Title</div>
    </div>
    <div class="card-content">
        <span class="card-category">
            <span data-lang="en">Category EN</span>
            <span data-lang="zh" style="display: none;">分类 ZH</span>
        </span>
        <h2 class="card-title">
            <span data-lang="en">Full Title EN</span>
            <span data-lang="zh" style="display: none;">完整标题 ZH</span>
        </h2>
        <p class="card-excerpt">
            <span data-lang="en">Concise EN excerpt (1–2 sentences).</span>
            <span data-lang="zh" style="display: none;">简洁中文摘要（1–2句）。</span>
        </p>
        <div class="card-meta">
            <span class="card-date">2025-01-01</span>
            <span class="read-more">
                <span data-lang="en">Read more</span>
                <span data-lang="zh" style="display: none;">阅读更多</span>
                <span class="read-more-arrow">→</span>
            </span>
        </div>
    </div>
</article>
```

并在脚本链接映射处添加：

```js
// 新增卡片链接：Your Title
articleLinks[XX] = 'https://example.com/your-link';
```

至此，你就完成了一个新 Card 的添加。保存后直接在浏览器打开 `msj-blog.html` 进行本地预览与验证即可。


