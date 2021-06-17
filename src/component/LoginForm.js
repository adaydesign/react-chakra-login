import React from 'react'
import { Flex, Text, Input, Button, Heading, Link, VStack, useColorModeValue as colorValue, Icon } from '@chakra-ui/react'
import { FaTv } from "react-icons/fa";

const LoginForm = () => {
    return (
        <Flex w="full" h="80vh" justify="center" align="center">
            <Flex direction="column" align="center" w="400px" borderRadius="lg" shadow="lg" borderWidth="medium" p={10}
                bgColor={colorValue("blue.50", "gray.600")}>
                <Heading size="lg">Welcome to My APP</Heading>
                <Text size="md" color="gray.400">enter your username and password</Text>
                <VStack spacing={4} my={10}>
                    <Input placeholder="username" type="text" />
                    <Input placeholder="password" type="password" />
                    <Button leftIcon={<Icon as={FaTv} />} colorScheme="blue">Submit</Button>
                </VStack>
                <Link>
                    <Text>forgot your password ?</Text>
                </Link>
            </Flex>
        </Flex>
    )
}

export default LoginForm
