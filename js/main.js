// 移动菜单切换和导航功能初始化
function initMainFunctionality() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
    
    // 导航链接平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (!anchor.classList.contains('read-more') && !anchor.classList.contains('back-to-blog')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // 关闭移动菜单
                    if (navMenu) {
                        navMenu.classList.remove('show');
                    }
                    
                    // 更新活动链接
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        }
    });
    
    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 这里可以添加实际的表单提交逻辑
            // 例如发送到服务器或使用EmailJS等服务
            
            // 显示成功消息
            alert(`感谢您的消息，${name}！我会尽快回复您。`);
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 页面加载时激活首页链接
    const homeLink = document.querySelector('nav a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    // 滚动时更新活动导航链接
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

function initPagination() {
    const container = document.getElementById('blogPostsContainer');
    const posts = container.querySelectorAll('.post-card');
    const prevBtn = document.querySelector('.page-btn.prev');
    const nextBtn = document.querySelector('.page-btn.next');
    const pageInfo = document.querySelector('.page-info');
    
    if (!posts.length || !prevBtn || !nextBtn || !pageInfo) return;
    
    const postsPerPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    
    // Assign data-page to posts based on index (1-based)
    posts.forEach((post, index) => {
        const page = Math.floor(index / postsPerPage) + 1;
        post.dataset.page = page;
    });
    
    function showPage(page) {
        posts.forEach(post => {
            const postPage = parseInt(post.dataset.page);
            post.style.display = postPage === page ? 'block' : 'none';
        });
        
        // Update buttons
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
        
        // Update page info
        pageInfo.textContent = `第 ${page} 页 / 共 ${totalPages} 页`;
        
        currentPage = page;
    }
    
    // Button events
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
    
    // Initial show
    showPage(1);
}

// Initialize main functionality when called
// This will be called after components are loaded in index.html

document.addEventListener('DOMContentLoaded', () => {
    initMainFunctionality();
    initPagination();
});
