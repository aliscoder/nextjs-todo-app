import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const CommonError = ({onReset} : {onReset: () => void}) => {
  return (
    <Container>
      <Typography>Error fetching data</Typography>
      <Button onClick={onReset}>
        Try again
      </Button>
    </Container>
  )
}

export default CommonError