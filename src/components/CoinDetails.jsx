import { Container, Box } from '@chakra-ui/react'
import axios from 'axios'
import { server } from '..'
import Loader from './Loader'
import React, { useEffect } from 'react'
import { useState } from 'react'


const CoinDetails = () => {
  const [coins, setCoins] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")

  
  useEffect(()=>{
    const fetchCoins = async ()=>{
      try{
        const {data} = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        )
        setCoins(data)
        setLoading(false)
      } catch(error){
        setError(true)
        setLoading(false)
      }
    }
    fetchCoins()
  },[currency, page])
  



  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader/> : (
          <>
          <Box width={"full"} borderWidth={1}>Hello nigga</Box>
          </>
        )
      }
    </Container>
  )
}

export default CoinDetails