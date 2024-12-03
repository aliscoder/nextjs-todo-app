'use client'

import { deleteTodo } from '@/api'
import { Delete } from '@mui/icons-material'
import React from 'react'

type Props = {
    id: number
}

const DeleteButton = ({id}: Props) => {
  return (
    <Delete color='error' onClick={() => deleteTodo(id)} />
  )
}

export default DeleteButton