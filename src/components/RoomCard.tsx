import React from 'react'
import {
	Card,
	CardMedia,
	Typography,
	CardActions,
	Button,
	styled,
	useMediaQuery,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Room } from '../data/rooms'
import { useI18n } from '../translater/i18n'

const CardContent = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 12,
}))

const StyledCardActions = styled(CardActions)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))

const Price = styled('div')(() => ({
	position: 'absolute',
	top: 80,
	right: 40,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transform: 'rotate(-10deg)',
}))

const StyledPriceText = styled(Typography)(() => ({
	fontSize: 36,
	color: '#f6671bff',
	fontWeight: 700,
	padding: 16,
	backdropFilter: 'brightness(0.4)',
	borderRadius: '50%',
}))

export default function RoomCard({ room }: { room: Room }) {
	const { t } = useI18n()
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	return (
		<Card
			sx={{
				margin: '24px 0',
				position: 'relative',
				padding: isMobile ? '0 4px' : isTablet ? '0 6px' : 0,
			}}
		>
			<CardContent>
				<Typography
					sx={{ color: '#076959ff' }}
					variant={isMobile ? 'h6' : isTablet ? 'h5' : 'h4'}
				>
					{room.title}
				</Typography>
				<Typography sx={{ color: '#076959ff' }} variant='body1'>
					{room.subtitle}
				</Typography>
			</CardContent>
			<CardMedia
				component='img'
				height='440'
				image={room.img[0]}
				alt={room.title}
			/>
			<Price>
				<StyledPriceText>{room.price}€</StyledPriceText>
			</Price>

			<StyledCardActions>
				<Button
					component={Link}
					to={`/rooms/${room.id}`}
					sx={{
						fontWeight: isMobile ? 600 : 700,
						fontSize: isMobile ? 20 : 28,
						color: '#0fb498ff',
						'&:hover': { color: '#1deccaff' },
					}}
				>
					{t('view')}
				</Button>
				<Button
					component={Link}
					to={`/booking?room=${room.id}`}
					sx={{
						fontWeight: isMobile ? 600 : 700,
						fontSize: isMobile ? 20 : 28,
						color: '#0fb498ff',
						'&:hover': { color: '#1deccaff' },
					}}
				>
					{t('book')}
				</Button>
			</StyledCardActions>
		</Card>
	)
}
