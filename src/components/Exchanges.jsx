import axios from 'axios'
import {Container, HStack,VStack,Image,Heading,Text} from "@chakra-ui/react"
import {server} from "../index"
import { useEffect, useState } from 'react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=>{
    const fetchExchanges = async()=>{

      
    try {
        const {data} = await axios.get(`${server}/exchanges`)

        setExchanges(data)
        // console.log(data);
        setLoading(false)
      }
      
     catch (error) {
      setError(true)
      setLoading(false)
    }
  }
  fetchExchanges()
  },[])

  if(error) return <ErrorComponent/>
  return (
    <Container maxw={'container.xl'}>
      {loading ? <Loader/> : <>
        <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
          {
            exchanges.map((i)=>(
              <CoinCard name = {i.name}
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


  



export default Exchanges