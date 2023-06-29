import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js"
import { background  } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const Chart = ({arr=[], currency, days}) => {
    
    const prices = [1,2,34]
    const date = []

    for(let i=0; i< arr.length; i++){
        if(days === "24h"){date.push(new Date(arr[i][1]).toLocaleTimeString()) }  
        date.push(new Date(arr[i][1]).toLocaleDateString())
        prices.push(arr[i][1])
    }
    console.log(date)
    const data = {
        label:date,
        datasets:[{
            label: `Price in ${currency}`,
            data: prices, 
            borderColor:"rgba(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.5)"
        }]

    }




  return (
    <Line options={{responsive:true,}} data={data
    }/>
  )
}

export default Chart