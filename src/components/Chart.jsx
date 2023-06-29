import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js"
import { background  } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const Chart = ({arr=[], currency, days}) => {
    
    const prices = [1,2,34]
    const date = ['14/8/46','12/55/12','32/2/33']
    const data = {

    }




  return (
    <Line options={{responsive:true,}} data={{
        labels: date,
        datasets:[{
            label:`Price in ${currency}`,
            data: prices, borderColor:"rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)"
        }]
    }
    }/>
  )
}

export default Chart