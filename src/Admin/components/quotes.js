import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './ViewsquoteStyles.css'; // Import the CSS file

function Viewsquote() {
  const [statistics, setStatistics] = useState(null);
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Fetch statistics data from backend API
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getquoteviews'); // Adjust the endpoint accordingly
        console.log('Statistics data:', response.data); // Log response data for debugging
        setStatistics(response.data); // Set statistics state with the fetched data
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  useEffect(() => {
    if (statistics) {
      if (chartInstanceRef.current) {
        // If a Chart instance exists, destroy it before rendering the new chart
        chartInstanceRef.current.destroy();
      }
      console.log("1");
      renderChart();
    }
  }, [statistics]); // Re-render the chart when statistics change

  const renderChart = () => {
    const ctx = canvasRef.current;
    if (ctx) {
      const newChartInstance = new Chart(ctx, {
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
              type: 'linear',
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Views'
              }
            }
          }
        }
      });
      chartInstanceRef.current = newChartInstance; // Save the new Chart instance
    } else {
      console.error('Canvas element not found');
    }
  };

  return (
    <div className="page-containerquo">
      <div className="menuquo">
        <NavigationMenu />
      </div>
      <div className="contentquo">
        <h2>Insurance quote Views Statistics</h2>
        <canvas ref={canvasRef} id="myChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
}

export default Viewsquote;
