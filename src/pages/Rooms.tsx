import React from 'react'
import { Grid } from '@mui/material'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

export default function Rooms() {
	return (
		<Grid container spacing={2}>
			{rooms.map(r => (
				<Grid item xs={12} md={12} key={r.id}>
					<RoomCard room={r} />
				</Grid>
			))}
		</Grid>
	)
}
