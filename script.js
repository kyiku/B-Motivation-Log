// filepath: /workspaces/B-Motivation-Log/script.js
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('health-log-form');
    const entriesList = document.getElementById('entries-list');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const motivation = document.getElementById('motivation').value;
        const notes = document.getElementById('notes').value;

        const data = {
            date,
            condition,
            motivation,
            notes
        };

        let logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        logs.push(data);
        localStorage.setItem('healthLogs', JSON.stringify(logs));

        alert('データが保存されました');
        displayLogs();
    });

    searchButton.addEventListener('click', () => {
        const searchDate = document.getElementById('search-date').value;
        const logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        const result = logs.find(log => log.date === searchDate);

        if (result) {
            searchResults.innerHTML = `
                <p>日付: ${result.date}</p>
                <p>体調: ${result.condition}</p>
                <p>モチベーション: ${result.motivation}</p>
                <p>メモ: ${result.notes}</p>
            `;
        } else {
            searchResults.innerHTML = '<p>データが見つかりませんでした。</p>';
        }
    });

    function displayLogs() {
        const logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        entriesList.innerHTML = logs.map(log => `
            <li>
                <p>日付: ${log.date}</p>
                <p>体調: ${log.condition}</p>
                <p>モチベーション: ${log.motivation}</p>
                <p>メモ: ${log.notes}</p>
            </li>
        `).join('');
    }

    displayLogs();
});

document.addEventListener('DOMContentLoaded', () => {
    const entriesList = document.getElementById('entries-list');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    // ローカルストレージからデータを取得して表示する関数
    function displayLogs() {
        const logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        entriesList.innerHTML = logs.map(log => `
            <li>
                <p>日付: ${log.date}</p>
                <p>体調: ${log.condition}</p>
                <p>モチベーション: ${log.motivation}</p>
                <p>メモ: ${log.notes}</p>
            </li>
        `).join('');
    }

    // 検索ボタンのクリックイベントリスナー
    searchButton.addEventListener('click', () => {
        const searchDate = document.getElementById('search-date').value;
        const logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        const result = logs.find(log => log.date === searchDate);

        if (result) {
            searchResults.innerHTML = `
                <p>日付: ${result.date}</p>
                <p>体調: ${result.condition}</p>
                <p>モチベーション: ${result.motivation}</p>
                <p>メモ: ${result.notes}</p>
            `;
        } else {
            searchResults.innerHTML = '<p>データが見つかりませんでした。</p>';
        }
    });

    // ページ読み込み時にログを表示
    displayLogs();
});