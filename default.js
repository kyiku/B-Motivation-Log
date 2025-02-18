document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // 三点リーダーの作成
    const menuButton = document.createElement('div');
    menuButton.innerHTML = ''; // 三点リーダー
    menuButton.classList.add('menu-button');
    document.body.appendChild(menuButton);

    // メニューの作成
    const menu = document.createElement('div');
    menu.classList.add('menu'); // 🔹 CSS を適用するクラス
    document.body.appendChild(menu);

    // 各ボタンを作成
    const pages = [
        { text: 'TOP', url: '../toppage.html' },
        { text: '振り返り', url: '../look-back/look-back.html' },
        { text: '日誌', url: '../diary/diary.html' },
        { text: '体調管理', url: '../physical-management-page/physical-management-page.html' }
    ];

    pages.forEach(page => {
        const button = document.createElement('button');
        button.textContent = page.text;
        button.addEventListener('click', () => window.location.href = page.url);
        menu.appendChild(button);
    });

    // メニューの表示・非表示を切り替え
    menuButton.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
});
