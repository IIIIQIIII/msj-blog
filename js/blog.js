// 博客功能已静态化，无需动态加载
// 保留 BlogManager 类以防未来使用，但 init 已简化
class BlogManager {
    constructor() {
        // posts 和 currentPost 不再需要
        this.init();
    }
    
    init() {
        // 无需加载 JSON 或渲染列表，静态 HTML 已处理
        console.log('Static blog system initialized');
    }
    
    // 保留方法以防扩展，但 showBlogList 等不再需要
    renderBlogList() {
        // 静态列表，无需动态渲染
    }
    
    renderBlogDetail(postId) {
        // 静态页面，无需动态详情
    }
    
    showBlogList() {
        // 静态页面，无需切换
    }
    
    setupBlogEventListeners() {
        // 无需动态事件，链接直接导航
    }
}

// 初始化
let blogManager;
document.addEventListener('DOMContentLoaded', function() {
    blogManager = new BlogManager();
});
