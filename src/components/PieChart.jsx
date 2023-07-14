import React from 'react'
import { Pie } from 'react-chartjs-2'
import inData from '../../root.json'

const storeData = JSON.stringify(inData)
localStorage.setItem('data', storeData)

const inpData = JSON.parse(localStorage.getItem('data')).pieChart
console.log(inpData)

const data = {
  labels: inpData.labels,
  datasets: [
    {
      data: inpData.data,
      backgroundColor: inpData.backgroundColor,
      hoverBackgroundColor: inpData.hoverBackgroundColor,
      borderWidth: 0
    }
  ]
}

const options = {
  plugins: {
    legend: {
      position: 'right',
      // display: false,
      label: {
        font: {
          size: 20,
          weight: 'bold'
        }
      }
    },
    labels: {
      render: 'percentage', // Show percentage labels
      precision: 2,
      fontColor: 'black',
      position: 'outside', // Move label outside the chart
      textMargin: 10
    }
  }
}

const PieChart = () => {
  return (
    <div className='h-[100%] w-fit'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart
