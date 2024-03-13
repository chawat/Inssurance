import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Dashboard() {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    // Fetch statistics data from backend API
    fetch('/api/views')
      .then(response => response.json())
      .then(data => setStatistics(data))
      .catch(error => console.error('Error fetching statistics:', error));
  }, []);

  useEffect(() => {
    if (statistics) {
      renderChart();
    }
  }, [statistics]);

  const renderChart = () => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(statistics),
        datasets: [{
          label: 'Number of Views',
          data: Object.values(statistics),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Views'
            }
          }
        }
      }
    });
  };

  return (
    <div>
      <h2>Insurance Views Statistics</h2>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
}

export default Dashboard;