import React from 'react'
import {Link, HStack, Heading, VStack, Image, Text} from "@chakra-ui/react"


    const CoinCard = ({id, name, symbol, price, img, currencySymbol= "₹"})=>(
        <Link to={`/coin/${id}`} target={'blank'}>
            <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.5s'} margin={'4'} css={{
          "&:hover":{
            transform: "scale(1.1)"
             }
                }}>
        <Image src={img} w={'10'} h={'10'} objectFit = {'contain'} alt={'exchange'}/>
        <Heading size={'md'} noOfLines = {1}>{symbol}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price?  `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
      
      </Link>
      )
  
export default CoinCard