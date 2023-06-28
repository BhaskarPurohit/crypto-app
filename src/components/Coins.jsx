import axios from 'axios'
import {Container, HStack,VStack,Image,Heading,Text} from "@chakra-ui/react"
import {server} from "../index"
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Error from './Error'


const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")
  useEffect(()=>{
    const fetchCoins = async()=>{

      
    try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

        setCoins(data)
        // console.log(data);
        setLoading(false)
      }
      
     catch (error) {
      setError(true)
      setLoading(false)
    }
  }
  fetchCoins()
  },[currency , page])

  if(error) return <Error/>
  return (
    <Container maxw={'container.xl'}>
      {loading ? <Loader/> : <>
        <HStack wrap={'wrap'}>
          {
            coins.map((i)=>(
              <ExchangeCard name = {i.name}
              key={i.id}
              img = {i.image}
              rank=  {i.trust_score_rank}
              url={i.url}/>
            ))
          }
        </HStack>
      
      
      </>}
    </Container>
  )
}


 
  



export default Coins