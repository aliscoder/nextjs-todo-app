'use client'

import { Button } from '@mui/material'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({title} : {title : string}) => {
    const {pending} = useFormStatus()
  return (
    <Button
        disabled={pending}
        type="submit"
      >
        {!pending && title}
      </Button>
  )
}

export default SubmitButton