import { Chart } from 'chart.js';

function getColor (isActive, alpha = 1) {
  return isActive
    ? `rgba(54, 162, 235, ${alpha})`
    : `rgba(255, 99, 132, ${alpha})`;
}

function getLabel (el, i, data) {
  const date = new Date();
  date.setHours(date.getHours() - data.length + i);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  // Change type of returned value to date
  return date;
}

export function createChart (container, data, isActive) {
  const ctx = container.getContext('2d');
  const borderColor = getColor(isActive);
  const backgroundColor = getColor(isActive, 0.5);
  const labels = data.map(getLabel)
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          // Add label for item
          label: 'Loading',
          data: data,
          // Remove extra indents
          borderWidth: 1,
          borderColor,
          backgroundColor
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      // Format `scales`
      scales: {
        xAxes: [{
          // Refactor `xAxes`
          type: 'time',
          time: {
            displayFormats: {
              quarter: 'hA'
            }
          },
          ticks: {
            stepSize: 1
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart;
}
