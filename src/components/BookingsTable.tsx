import { Box, Typography } from '@mui/material'
import { useI18n } from '../translater/i18n'

type Booking = {
	id: number
	room?: string
	checkIn?: string
	checkOut?: string
}

type Props = {
	bookings: Booking[]
}

const BookingsTable: React.FC<Props> = ({ bookings }) => {
	const { t } = useI18n()

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				border: '1px solid rgba(0,0,0,0.12)',
				borderRadius: '8px',
				overflow: 'hidden',
			}}
		>
			{/* Заголовки */}
			<Box
				sx={{
					display: 'contents',
					backgroundColor: 'rgba(3,93,76,0.1)',
				}}
			>
				<Typography
					sx={{
						p: 1,
						fontWeight: 'bold',
						borderRight: '1px solid rgba(0,0,0,0.12)',
					}}
				>
					{t('room_type')}
				</Typography>
				<Typography
					sx={{
						p: 1,
						fontWeight: 'bold',
						borderRight: '1px solid rgba(0,0,0,0.12)',
					}}
				>
					{t('check_in_date')}
				</Typography>
				<Typography sx={{ p: 1, fontWeight: 'bold' }}>
					{t('check_out_date')}
				</Typography>
			</Box>

			{/* Рядки */}
			{bookings.map(b => (
				<Box key={b.id} sx={{ display: 'contents' }}>
					<Typography
						sx={{
							p: 1,
							borderTop: '1px solid rgba(0,0,0,0.08)',
							borderRight: '1px solid rgba(0,0,0,0.12)',
						}}
					>
						{b.room || '—'}
					</Typography>
					<Typography
						sx={{
							p: 1,
							borderTop: '1px solid rgba(0,0,0,0.08)',
							borderRight: '1px solid rgba(0,0,0,0.12)',
						}}
					>
						{b.checkIn || '—'}
					</Typography>
					<Typography
						sx={{
							p: 1,
							borderTop: '1px solid rgba(0,0,0,0.08)',
						}}
					>
						{b.checkOut || '—'}
					</Typography>
				</Box>
			))}
		</Box>
	)
}

export default BookingsTable
