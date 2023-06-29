import { Container, Box, RadioGroup, HStack , Radio, VStack,Text, Image, Stat, StatLabel, StatNumber} from '@chakra-ui/react'
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
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
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
          <Box width={"full"} borderWidth={1}></Box>

          {}

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value= {"inr"}>INR</Radio>
              <Radio value= {"usd"}>USD</Radio>
              <Radio value= {"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={'4'} p={'16'} alignItems={"flex-start"}>
            <Text fontSize={'small'} alignSelf="center" opacity={0.7}>
              Last Updated on {Date(coins.market_data.last_updated).split("G")[0]}

            </Text>
            <Image src={coins.image.large} w={'16'} h={'16'} objectFit={'contain'}/>
            <Stat>
              <StatLabel>
                {coins.name}
              </StatLabel>
              <StatNumber>{currencySymbol}{coins.market_data.current_price[currency]}</StatNumber>
            </Stat>
          </VStack>
          </>
        )
      }
    </Container>
  )
}

export default CoinDetails