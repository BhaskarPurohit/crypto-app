import React from 'react'
import {HStack,Button,Link} from "@chakra-ui/react"

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
        <Button>
            <Link></Link>
        </Button>

    </HStack>
  )
}

export default Header