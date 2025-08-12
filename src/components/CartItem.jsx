import React from 'react'
import { HStack, Image, VStack, Text, IconButton, Button } from '@chakra-ui/react'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <HStack spacing={4} p={3} borderWidth="1px" borderRadius="md">
      <Image src={item.image} boxSize="80px" objectFit="cover" />
      <VStack align="start" spacing={0} flex={1}>
        <Text fontWeight="bold">{item.name}</Text>
        <Text>Unit: ${item.price.toFixed(2)}</Text>
        <Text>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
      </VStack>

      <HStack>
        <IconButton aria-label="decrease" icon={<FaMinus />} size="sm" onClick={() => onDecrease(item.id)} />
        <Text>{item.quantity}</Text>
        <IconButton aria-label="increase" icon={<FaPlus />} size="sm" onClick={() => onIncrease(item.id)} />
        <IconButton aria-label="remove" icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => onRemove(item.id)} />
      </HStack>
    </HStack>
  )
}