import { Container, Box, RadioGroup, HStack , Radio} from '@chakra-ui/react'
import axios from 'axios'
import { server } from '..'
import Loader from './Loader'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorComponent from './ErrorComponent'



const CoinDetails = () => {
  const [coins, setCoins] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")

  const params = useParams()

  
  useEffect(()=>{
    const fetchCoin = async ()=>{
      try{
        const {data} = await axios.get(
          `${server}/coins/${params.id}`
        )
        setCoins(data)
        setLoading(false)
      } catch(error){
        setError(true)
        setLoading(false)
      }
    }
    fetchCoin()
  },[params.id])

  if (error) return <ErrorComponent message={"Error while fetching Coins"}/>
  



  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader/> : (
          <>
          <Box width={"full"} borderWidth={1}>Hello nigga</Box>

          {}

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value= {"inr"}>INR</Radio>
              <Radio value= {"usd"}>USD</Radio>
              <Radio value= {"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          </>
        )
      }
    </Container>
  )
}

export default CoinDetails