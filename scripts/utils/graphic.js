export function graphic() {
    google.charts.load('current', {'packages':['corechart'], 'language': 'pt-br'});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        const data = google.visualization.arrayToDataTable([
            ['Linguagem', 'Bytes de código'],
            ['TypeScript', 20184],
            ['JavaScript', 1180],
            ['CSS',  516],
            ['HTML', 289]
        ]);
        
        const options = {
            backgroundColor: 'transparent',
            legend: {
                alignment: 'center',
                textStyle: {color: 'white', fontSize: 12}
            },
            colors: ['#0a8967', '#09c184', '#07f9a2'],
            pieHole: 0.6,
            pieSliceBorderColor: 'none',
            sliceVisibilityThreshold: .02,
            chartArea: {
                width: '100%',
                height: '90%',
            },
            fontName: 'Inter, sans-serif',
        };
        
        const chart = new google.visualization.PieChart(document.querySelector('.language-graphic'));
        
        chart.draw(data, options);
    }
}
