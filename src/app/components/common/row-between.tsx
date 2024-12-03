import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const RowBetween = ({children}: Props) => {
  return (
    <Box justifyContent='space-between' alignItems='center' display='flex'>
        {children}
    </Box>
  )
}

export default RowBetween