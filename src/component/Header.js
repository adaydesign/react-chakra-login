import React from 'react'
import { Flex, Center, Heading, Spacer, FormControl, FormLabel, Switch, useColorMode, Icon, useColorModeValue as colorValue } from '@chakra-ui/react'
import { FaAtlas } from "react-icons/fa";

const Logo = () => {
    return (
        <Center>
            <Heading size="xl" textTransform="uppercase" color={colorValue("blue.600", "white")}><Icon as={FaAtlas} />My App</Heading>
        </Center>
    )
}


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex shadow="lg" w="full" p={4}>
            <Logo />
            <Spacer />
            <FormControl w="240px" display="flex" alignItems="center">
                <FormLabel htmlFor="theme-mode" mb="0">
                    {colorMode === "light" ? 'switch to Dark Mode' : 'switch to Light Mode'}
                </FormLabel>
                <Switch id="theme-mode" onChange={toggleColorMode} />
            </FormControl>
        </Flex>
    )
}

export default Header
