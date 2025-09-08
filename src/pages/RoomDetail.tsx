import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { rooms } from '../data/rooms'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { useI18n } from '../translater/i18n'
import styled from '@emotion/styled'
import RoomDetailTable from './RoomDetailTable'
import ImageCarousel from '../components/ImageCarousel'

export default function RoomDetail() {
	const { id } = useParams()
	const { t } = useI18n()
	const navigate = useNavigate()

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	const room = rooms.find(r => r.id === id)
	if (!room) return <div>Not found</div>
	return (
		<Box
			sx={{
				padding: isMobile ? '0 4px' : isTablet ? '0 6px' : 0,
				color: '#03473bff',
			}}
		>
			<ImageCarousel images={room.img} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					margin: '2px 36px 16px 36px',
				}}
			>
				<Typography variant='h6' sx={{ mt: 2, fontWeight: 600 }}>
					{room.title}
				</Typography>
				<StyledButton
					variant='contained'
					onClick={() => navigate(`/booking?room=${room.id}`)}
				>
					{t('book')}
				</StyledButton>
			</Box>
			<Typography
				sx={{ fontWeight: 700, margin: '2px 36px' }}
				variant={isMobile ? 'h6' : 'h5'}
			>
				{room.subtitle}
			</Typography>
			<Typography sx={{ margin: '3px 36px' }}>
				{room.descriptionKeys.map((key, i) => (
					<p key={i}>{t(key)}</p>
				))}
			</Typography>

			<StyledTable>
				<RoomDetailTable room={room} />
			</StyledTable>

			<StyledButtonBox>
				<StyledButton
					sx={{ padding: '6px 44px' }}
					variant='contained'
					onClick={() => navigate(`/booking?room=${room.id}`)}
				>
					{t('book')}
				</StyledButton>
			</StyledButtonBox>
		</Box>
	)
}

const StyledButton = styled(Button)(() => ({
	backgroundColor: '#035d4cff',
	color: '#dcfaf5ff',
	width: 'fit-content',
	height: 'fit-content',
	transition: '0.5s',
	'&:hover': {
		backgroundColor: '#058c73ff',
	},
}))

const StyledButtonBox = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
}))

const StyledTable = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
}))
