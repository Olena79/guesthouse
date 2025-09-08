import React, { useState, useEffect } from 'react'
import {
	Box,
	TextField,
	Button,
	MenuItem,
	Typography,
	useMediaQuery,
	styled,
} from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { rooms } from '../data/rooms'
import { auth } from '../services/localAuth'
import { useI18n } from '../translater/i18n'

export default function Booking() {
	const { t } = useI18n()
	const nav = useNavigate()
	const [params] = useSearchParams()
	const initialRoom = params.get('room') || rooms[0].id
	const [form, setForm] = useState({
		room: initialRoom,
		checkIn: '',
		checkOut: '',
		guests: 1,
		name: '',
		email: '',
		phone: '',
		comment: '',
	})
	const [message, setMessage] = useState('')

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	useEffect(() => {
		const u = auth.getUser()
		if (u) {
			setForm(f => ({ ...f, name: u.name || u.email, email: u.email }))
		}
	}, [])

	const handleSubmit = () => {
		const user = auth.getUser()
		if (!user) {
			setMessage('Please login or register to book')
			return
		}
		const id = 'BK_' + Date.now().toString(36)
		const bookings = JSON.parse(localStorage.getItem('gh_bookings') || '[]')
		bookings.push({ id, ...form, createdAt: new Date().toISOString() })
		localStorage.setItem('gh_bookings', JSON.stringify(bookings))
		setMessage(t('booking_success') + ' ' + id)
		setTimeout(() => {
			nav('/profile')
		}, 3000)
	}

	const isFormValid =
		form.room &&
		form.checkIn &&
		form.checkOut &&
		form.guests > 0 &&
		form.name.trim() &&
		form.email.trim() &&
		form.phone.trim()

	return (
		<StyledBox>
			<StyledMainBox>
				<Typography variant='h4'>{t('booking_page')}</Typography>
				<TextField
					fullWidth
					select
					label='Room'
					value={form.room}
					onChange={e => setForm({ ...form, room: e.target.value })}
					sx={{ mt: 2 }}
				>
					{rooms.map(r => (
						<MenuItem value={r.id} key={r.id}>
							{r.title}
						</MenuItem>
					))}
				</TextField>
				<TextField
					fullWidth
					type='date'
					label={t('check_in')}
					InputLabelProps={{ shrink: true }}
					value={form.checkIn}
					onChange={e => setForm({ ...form, checkIn: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					type='date'
					label={t('check_out')}
					InputLabelProps={{ shrink: true }}
					value={form.checkOut}
					onChange={e => setForm({ ...form, checkOut: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					type='number'
					label={t('guests')}
					value={form.guests}
					onChange={e => setForm({ ...form, guests: Number(e.target.value) })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Name'
					value={form.name}
					onChange={e => setForm({ ...form, name: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Email'
					value={form.email}
					onChange={e => setForm({ ...form, email: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Phone'
					value={form.phone}
					onChange={e => setForm({ ...form, phone: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Comment'
					multiline
					rows={3}
					value={form.comment}
					onChange={e => setForm({ ...form, comment: e.target.value })}
					sx={{ mt: 2 }}
				/>
				<StyledButton
					variant='contained'
					sx={{ mt: 2 }}
					onClick={handleSubmit}
					disabled={!isFormValid}
				>
					{t('submit')}
				</StyledButton>
				{message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
			</StyledMainBox>
		</StyledBox>
	)
}

const StyledBox = styled('div')({
	display: 'flex',
	justifyContent: 'center',
})

const StyledMainBox = styled('div')({
	width: 400,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 6,
})

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
	'&.Mui-disabled': {
		backgroundColor: 'rgba(3,93,76,0.3)',
		color: '#fff',
	},
}))
