'use client'

import { completeTodo } from '@/api'
import { ITodo } from '@/types'
import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

type Props = {
    todo: ITodo
}

const CheckButton = ({todo}: Props) => {
  return (
    <ListItemButton onClick={() => completeTodo(todo.id)} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText id={todo.id.toString()} primary={todo.title} secondary={todo.body} />
    </ListItemButton>
  )
}

export default CheckButton