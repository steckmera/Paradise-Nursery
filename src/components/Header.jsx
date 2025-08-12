import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Flex, Heading, Spacer, IconButton, Badge } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()
  const loc = useLocation()

  return (
    <Box as="header" bg="green.50" px={6} py={4} boxShadow="sm">
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="md">Paradise Nursery</Heading>

        <Spacer />

        <Flex gap={4} align="center">
          {loc.pathname !== '/' && (
            <Link to="/">Home</Link>
          )}
          {loc.pathname !== '/products' && (
            <Link to="/products">Productos</Link>
          )}

          <Link to="/cart">
            <IconButton
              aria-label="Ir al carrito"
              icon={<FaShoppingCart />}
              variant="ghost"
            />
            {count > 0 && (
              <Badge ml={-6} mt={-6} colorScheme="red" borderRadius="full">{count}</Badge>
            )}
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}