import React, { useState } from 'react'
import { Box, TextField, Button, Typography, styled } from '@mui/material'
import { auth } from '../services/localAuth'
import { useNavigate } from 'react-router-dom'
import DynamicModal from '../components/ModalOk'
import { useI18n } from '../translater/i18n'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [err, setErr] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const nav = useNavigate()
	const { t } = useI18n()

	const handle = () => {
		try {
			auth.register(email, password, name)
			setOpenModal(true)

			setTimeout(() => {
				nav('/profile')
			}, 3000)
		} catch (e: any) {
			setErr(e.message)
		}
	}

	return (
		<StyledBox>
			<StyledMainBox>
				<Typography variant='h5'>{t('register')}</Typography>
				<TextField
					fullWidth
					label='Name'
					value={name}
					onChange={e => setName(e.target.value)}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label='Password'
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					sx={{ mt: 2 }}
				/>
				<StyledButton variant='contained' sx={{ mt: 2 }} onClick={handle}>
					{t('register')}
				</StyledButton>
				{err && (
					<Typography color='error' sx={{ mt: 1 }}>
						{err}
					</Typography>
				)}
			</StyledMainBox>

			<DynamicModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				title={t('register_modal_title')}
				description={t('register_modal_desk')}
			/>
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
}))
