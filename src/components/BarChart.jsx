import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as Chartjs} from "chart.js/auto"
const BarChart = ({vua}) => {
  return (
    <Bar data={vua} style={{width:"50vw" , height:"50Vh" ,display:"flex" , justifyContent:"center"}}/>
  )
}

export default BarChart 