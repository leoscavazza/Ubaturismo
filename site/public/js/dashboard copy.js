const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                '#020e4b',
                '#083b14',
                '#ffcc55ff'
            ],
            hoverOffset: 4
        },]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


// const myChartEvento = document.getElementById(`myChartCanvasEvento`);
const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [80, 200, 100],
            backgroundColor: [
                '#020e4b',
                '#083b14',
                '#ffcc55ff'
            ],
            hoverOffset: 4
        },]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

