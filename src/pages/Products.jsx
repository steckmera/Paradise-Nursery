import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { SimpleGrid, Box, Heading, Select, Container } from '@chakra-ui/react'
import { useCart } from '../context/CartContext'

export default function Products() {
  const { addToCart } = useCart()

  // agrupar por categoría para mostrar secciones
  const categories = [...new Set(products.map(p => p.category))]

  return (
    <Container maxW="1200px" py={8}>
      <Heading mb={6}>Productos</Heading>

      {categories.map(cat => (
        <Box key={cat} mb={8}>
          <Heading size="md" mb={4}>{cat}</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {products.filter(p => p.category === cat).map(p => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Container>
  )
}