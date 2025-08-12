import React from 'react'
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box
      minH="70vh"
      bgImage={`url('https://raw.githubusercontent.com/steckmera/Paradise-Nursery/main/src/assets/monstera.jpg')`}
      bgPos="center"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container bg="rgba(255,255,255,0.85)" p={8} borderRadius="md" maxW="container.md" textAlign="center">
        <Heading>Paradise Nursery</Heading>
        <Text mt={4} mb={6}>
          En Paradise Nursery encontrarás las mejores plantas de interior para llenar tu hogar de vida y color. Ofrecemos
          una selección cuidada de especies fáciles de mantener y perfectas para cualquier espacio.
        </Text>
        <Button as={Link} to="/products" colorScheme="green">Comenzar</Button>
      </Container>
    </Box>
  )
}