import React from 'react'
import { auth } from '../services/localAuth'
import { Typography, Box, Button, useMediaQuery, styled } from '@mui/material'
import { useI18n } from '../translater/i18n'
import BookingsTable from '../components/BookingsTable'
import DynamicModal from '../components/ModalOk'

export default function Profile() {
	const { t } = useI18n()
	const [open, setOpen] = React.useState(false)

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	const user = auth.getUser()
	const bookings = JSON.parse(
		localStorage.getItem('gh_bookings') || '[]'
	).filter((b: any) => b.email === user?.email)

	const handleLogout = () => {
		setOpen(true)
	}

	const confirmLogout = () => {
		auth.logout()
		window.location.href = '/'
	}

	return (
		<Box
			sx={{
				padding: isMobile ? '0 6px' : isTablet ? '0 12px' : 0,
				color: '#02483bff',
			}}
		>
			<Typography variant='h4'>{t('profile')}</Typography>
			<StyledNameBox>
				<Typography sx={{ mt: 2 }}>{user?.name}</Typography>
				<Typography sx={{ mt: 2 }}>{user?.email}</Typography>
			</StyledNameBox>
			<Typography variant='h5' sx={{ mt: 3 }}>
				{t('your_bookings')}:
			</Typography>
			{bookings.length === 0 && <Typography>No bookings</Typography>}
			<BookingsTable bookings={bookings} />

			<StyledButtonBox>
				<StyledButton sx={{ mt: 2 }} variant='contained' onClick={handleLogout}>
					{t('logout')}
				</StyledButton>
			</StyledButtonBox>

			<DynamicModal
				open={open}
				onClose={() => setOpen(false)}
				title={t('logout_q')}
				description={t('logout_q_desk')}
				buttonText={t('logout')}
				onButtonClick={confirmLogout}
				buttonText2={t('stay')}
				onButtonClick2={() => setOpen(false)}
			/>
		</Box>
	)
}

const StyledButtonBox = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
	marginTop: 52,
}))

const StyledButton = styled(Button)(() => ({
	backgroundColor: '#035d4cff',
	color: '#dcfaf5ff',
	width: 'fit-content',
	height: 'fit-content',
	padding: '6px 32px',
	transition: '0.5s',
	'&:hover': {
		backgroundColor: '#058c73ff',
	},
}))

const StyledNameBox = styled(Box)(() => ({
	display: 'flex',
	gap: 32,
	justifyContent: 'flex-end',
	borderBottom: '1px solid #035d4cff',
}))
