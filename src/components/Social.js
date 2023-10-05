import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="20">
            <Icon as={FaFacebookF} boxSize="30" />
            <Icon as={FaGoogle} boxSize="30" />
            <Icon as={FaInstagram} boxSize="30" />
        </HStack>
    )
}

export default Social
