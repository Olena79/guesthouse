import React from 'react'
import { Room } from '../data/rooms'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useI18n } from '../translater/i18n'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import styled from '@emotion/styled'

interface RoomProps {
	room: Room
}

const RoomDetailTable: React.FC<RoomProps> = ({ room }) => {
	const { t } = useI18n()

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	return (
		<StyledTableBox>
			<StyledTableItemBox>
				<Typography>{t('bed_type')}:</Typography>
				<Typography>{room.beds}</Typography>
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('area')}:</Typography>
				<Typography>{room.area}</Typography>
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('wifi')}:</Typography>
				{room.wifi ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('tv')}:</Typography>
				{room.tv ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('refrigerator')}:</Typography>
				{room.refrigerator ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('safe')}:</Typography>
				{room.safe ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>

			<StyledTableItemBox>
				<Typography>{t('coffee_maker')}:</Typography>
				{room.coffee_maker ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('teapot')}:</Typography>
				{room.teapot ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography>{t('kitchenette')}:</Typography>
				{room.kitchenette ? (
					<CheckCircleIcon sx={{ color: 'green' }} />
				) : (
					<CancelIcon sx={{ color: 'red' }} />
				)}
			</StyledTableItemBox>
			<StyledTableItemBox>
				<Typography sx={{ fontSize: 18, fontWeight: 600 }}>
					{t('price')}:
				</Typography>
				<Typography sx={{ fontSize: 18, fontWeight: 700 }}>
					{room.price}€
				</Typography>
			</StyledTableItemBox>
		</StyledTableBox>
	)
}

export default RoomDetailTable

const StyledTableBox = styled(Box)(() => ({
	margin: '18px 36px',
	padding: '8px 6px',
	boxShadow:
		'rgba(178, 239, 217, 0.25) 0px 30px 60px -12px inset, rgba(15, 84, 46, 0.3) 0px 18px 36px -18px inset',
	borderRadius: 4,
	maxWidth: 650,
	width: '100%',
}))

const StyledTableItemBox = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	borderBottom: '1px solid #037560ff',
	marginBottom: 8,
}))
