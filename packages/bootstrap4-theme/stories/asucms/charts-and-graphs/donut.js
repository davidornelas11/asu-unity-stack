export const initDonut = () => {
  const charts = document.getElementsByClassName('chart-container');
  let library = document.createElement('script');
  library.src =
    'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js';
  library.integrity =
    'sha512-VMsZqo0ar06BMtg0tPsdgRADvl0kDHpTbugCBBrL55KmucH6hP9zWdLIWY//OTfMnzz6xWQRxQqsUFefwHuHyg==';
  library.crossOrigin = 'anonymous';
  charts?.forEach((chart) => chart.appendChild(library));

  const GRAPH_PERCENTAGE_COMPLETE = 50;
  document.getElementById('percentage-display').innerHTML =
    GRAPH_PERCENTAGE_COMPLETE + '%';
  window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('uds-donut');

    const config = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [GRAPH_PERCENTAGE_COMPLETE, 100 - GRAPH_PERCENTAGE_COMPLETE],
            backgroundColor: ['#ffc627', '#fafafa'],
          },
        ],
      },
      options: {
        cutout: '70%',
        //responsive: false, // remove if want static size
        tooltips: { enabled: false },
        events: [],
        //maintainAspectRatio: false, // remove if want static size
      },
    };

    const myChart = new Chart(ctx, config);
  });
};
