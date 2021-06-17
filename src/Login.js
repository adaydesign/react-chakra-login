import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from './component/Header'
import LoginForm from './component/LoginForm'

const Login = () => {
    return (
        <Flex direction="column">
            <Header />
            <LoginForm />
        </Flex>
    )
}

export default Login
