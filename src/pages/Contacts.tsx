import React from 'react'
import {
	Typography,
	Box,
	TextField,
	Button,
	useMediaQuery,
} from '@mui/material'
import { useI18n } from '../translater/i18n'
import styled from '@emotion/styled'

export default function Contacts() {
	const { t } = useI18n()

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')
	return (
		<Box
			sx={{
				maxWidth: 700,
				padding: isMobile ? '0 8px' : isTablet ? '0 12px' : 0,
				color: '#015e4fff',
			}}
		>
			<Typography variant='h4'>{t('contacts_title')}</Typography>
			<Typography sx={{ mt: 2 }}>{t('')}</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					maxWidth: 500,
					borderBottom: '1px solid #037560ff',
				}}
			>
				<Typography sx={{ mt: 2 }}>{t('contacts_name_title')}</Typography>
				<Typography sx={{ mt: 2 }}>{t('contacts_name')}</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					maxWidth: 500,
					borderBottom: '1px solid #037560ff',
				}}
			>
				<Typography sx={{ mt: 2 }}>{t('contacts_address_title')}</Typography>
				<Typography sx={{ mt: 2 }}>{t('contacts_address')}</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					maxWidth: 500,
					borderBottom: '1px solid #037560ff',
				}}
			>
				<Typography sx={{ mt: 2 }}>{t('contacts_phone_title')}</Typography>
				<Typography sx={{ mt: 2 }}>{t('contacts_phone')}</Typography>
			</Box>

			<TextField
				fullWidth
				label={t('contacts_placeholder')}
				multiline
				rows={4}
				sx={{ mt: 2 }}
			/>
			<StyledButton sx={{ mt: 2 }} variant='contained'>
				{t('contacts_send')}
			</StyledButton>
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
