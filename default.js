document.addEventListener("DOMContentLoaded", function() {
    
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;



    // 三点リーダーとメニューの作成
    const menuButton = document.createElement('div');
    menuButton.innerHTML = '・・・'; // 三点リーダー
    menuButton.style.position = 'fixed';
    menuButton.style.top = '10px';
    menuButton.style.right = '10px';
    menuButton.style.cursor = 'pointer';
    menuButton.style.fontSize = '30px';
    document.body.appendChild(menuButton);

    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '70px'; // 三点リーダーのサイズに合わせて調整
    menu.style.right = '10px'; // 右側に配置
    menu.style.backgroundColor = '#fff';
    menu.style.border = '1px solid #ccc';
    menu.style.padding = '10px';
    menu.style.display = 'none';
    menu.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(menu);

    const topButton = document.createElement('button');
    topButton.textContent = 'TOP';
    topButton.style.display = 'block';
    topButton.style.marginBottom = '10px';
    topButton.addEventListener('click', function() {
        window.location.href = '../toppage.html';
    });
    menu.appendChild(topButton);

    const site0Button = document.createElement('button');
        site0Button.textContent = '体調管理';
        site0Button.style.display = 'block';
        site0Button.style.marginBottom = '10px';
        site0Button.addEventListener('click', function() {
            window.location.href = './physical-management-page/physical-management-page.html';
        });
        menu.appendChild(site0Button);

    const site1Button = document.createElement('button');
    site1Button.textContent = '日誌';
    site1Button.style.display = 'block';
    site1Button.style.marginBottom = '10px';
    site1Button.addEventListener('click', function() {
        window.location.href = '../diary.html';
    });
    menu.appendChild(site1Button);

    const site2Button = document.createElement('button');
    site2Button.textContent = '振り返り';
    site2Button.style.display = 'block';
    site2Button.addEventListener('click', function() {
        window.location.href = '../look-back.html';
    });
    menu.appendChild(site2Button);

    menuButton.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});