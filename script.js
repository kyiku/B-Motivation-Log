document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const dateLabel = document.querySelector('label[for="date"]');
    
    if (!dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }

    dateLabel.addEventListener('click', function() {
        dateInput.focus();
        dateInput.click(); // カレンダーを開く
    });

    dateInput.addEventListener('click', function() {
        dateInput.showPicker(); // カレンダーを開く
    });

    fetchLogs();
});

document.getElementById('health-log-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const condition = document.getElementById('condition').value;
    const motivation = document.getElementById('motivation').value;
    const notes = document.getElementById('notes').value;
    
    const entry = document.createElement('li');
    entry.innerHTML = `<strong>${date}</strong> - 体調: ${condition}, モチベーション: ${motivation}<br>${notes}`;
    
    document.getElementById('entries-list').appendChild(entry);
    
    // フォームをリセット
    document.getElementById('health-log-form').reset();
    
    // グラフデータに追加
    addDataToChart(date, condition, motivation);

    // データベースに保存
    saveLog(date, condition, motivation, notes);
});

const healthData = {
    labels: [],
    datasets: [{
        label: '体調',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }, {
        label: 'モチベーション',
        data: [],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const ctx = document.getElementById('healthChart').getContext('2d');
const healthChart = new Chart(ctx, {
    type: 'line',
    data: healthData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        const conditions = ['悪い', '普通', '良い'];
                        return conditions[value];
                    }
                }
            }
        }
    }
});

function addDataToChart(date, condition, motivation) {
    const conditionValues = {
        '悪い': 0,
        '普通': 1,
        '良い': 2
    };
    
    const motivationValues = {
        '低い': 0,
        '普通': 1,
        '高い': 2
    };
    
    healthData.labels.push(date);
    healthData.datasets[0].data.push(conditionValues[condition]);
    healthData.datasets[1].data.push(motivationValues[motivation]);
    healthChart.update();
}

function saveLog(date, condition, motivation, notes) {
    fetch('/api/logs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, condition, motivation, notes })
    });
}

function fetchLogs() {
    fetch('/api/logs')
        .then(response => response.json())
        .then(data => {
            data.forEach(log => {
                const entry = document.createElement('li');
                entry.innerHTML = `<strong>${log.date}</strong> - 体調: ${log.condition}, モチベーション: ${log.motivation}<br>${log.notes}`;
                document.getElementById('entries-list').appendChild(entry);
                addDataToChart(log.date, log.condition, log.motivation);
            });
        });
}
