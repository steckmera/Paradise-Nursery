import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { Container, Heading, VStack, Box, Text, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, increase, decrease, removeFromCart, getCartCount, getCartTotal, clear } = useCart()

  return (
    <Container maxW="900px" py={8}>
      <Heading mb={4}>Tu carrito</Heading>

      <Text mb={4}>Total de plantas: {getCartCount()}</Text>

      <VStack spacing={4} align="stretch">
        {items.length === 0 && <Box p={6} borderWidth="1px">Tu carrito está vacío.</Box>}

        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increase}
            onDecrease={decrease}
            onRemove={removeFromCart}
          />
        ))}

        {items.length > 0 && (
          <Box p={4} borderWidth="1px" borderRadius="md">
            <HStack justify="space-between">
              <Text fontWeight="bold">Total:</Text>
              <Text fontWeight="bold">${getCartTotal().toFixed(2)}</Text>
            </HStack>

            <HStack mt={4} spacing={4}>
              <Button as={Link} to="/products">Continuar comprando</Button>
              <Button colorScheme="green" onClick={() => { alert('Compra finalizada (simulada). Gracias!'); clear() }}>Finalizar compra</Button>
            </HStack>
          </Box>
        )}
      </VStack>
    </Container>
  )
}