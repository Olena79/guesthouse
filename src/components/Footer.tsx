import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer(){
  return (
    <Box component='footer' sx={{ py:4, mt:6, background:'#f6efe6', textAlign:'center' }}>
      <Typography variant='body2'>© Guesthouse — {new Date().getFullYear()}</Typography>
    </Box>
  )
}
