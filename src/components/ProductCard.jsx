import React from 'react'
import { Box, Image, Text, Button, Stack } from '@chakra-ui/react'

export default function ProductCard({ product, onAdd }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} bg="white">
      <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
      <Stack mt={3} spacing={1} align="center">
        <Text fontWeight="bold">{product.name}</Text>
        <Text>${product.price.toFixed(2)}</Text>
        <Button colorScheme="green" size="sm" onClick={() => onAdd(product)}>Agregar al carrito</Button>
      </Stack>
    </Box>
  )
}