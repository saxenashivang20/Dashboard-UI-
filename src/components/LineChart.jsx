import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';

const MyChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const initialData = JSON.parse(localStorage.getItem('data')).lineGraph;
  console.log(initialData);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // destroy previous chart instance
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: initialData.labels,
        datasets: [
          {
            data: initialData.data,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy(); // clean up on unmount
    };
  }, [data]);

  return (
    <div className='w-full h-full px-8 py-4 overflow-hidden box-border'>
      <canvas ref={chartRef} className='h-[100%] w-[100%]' />
    </div>
  );
};

MyChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MyChart;

