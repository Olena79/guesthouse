import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useI18n } from '../translater/i18n'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function About() {
	const { t } = useI18n()

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	return (
		<Box
			sx={{
				padding: isMobile ? '0 8px' : isTablet ? '0 12px' : 0,
				color: '#037560ff',
			}}
		>
			<ScrollToTopButton />

			<Typography variant='h4'>{t('about_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('about_title_desk')}</Typography>

			<img
				style={{ maxHeight: 200, width: '100%' }}
				src='https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251842/photo-1507525428034-b723cf961d3e_dqfsih.jpg'
			/>

			<Typography variant='h5'>{t('about_loc_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('about_loc_desk')}</Typography>

			<Box
				sx={{
					borderRadius: '16px',
					overflow: 'hidden',
					boxShadow: 3,
					height: '400px',
				}}
			>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.6510035582362!2d14.313857853412625!3d36.034550640446035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4b1723a09bb3%3A0x966b4e21ee7b6d1a!2sTal-Marga%20B%26B!5e0!3m2!1sru!2sua!4v1757333108936!5m2!1sru!2sua'
					width='100%'
					height='100%'
					style={{ border: 0 }}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</Box>

			<Typography variant='h5'>{t('about_philos_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('about_philos_desk')}</Typography>

			<Typography variant='h5'>{t('about_rooms_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('about_rooms_desk')}</Typography>
			<ul>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>
						{t('about_rooms_desk_S')}
					</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>
						{t('about_rooms_desk_D')}
					</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>
						{t('about_rooms_desk_L')}
					</Typography>
				</li>
			</ul>

			<Typography variant='h5'>{t('restoran_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('restoran_desk1')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('restoran_desk2')}</Typography>

			<Typography variant='h5'>{t('service_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('service_desk')}</Typography>
			<ul>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>{t('service_transfer')}</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>{t('service_wifi')}</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>{t('service_view')}</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>
						{t('service_excursion')}
					</Typography>
				</li>
				<li>
					<Typography sx={{ mt: 2, mb: 2 }}>{t('service_rent')}</Typography>
				</li>
			</ul>

			<Typography variant='h5'>{t('why_kristen_title')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('why_kristen_desk1')}</Typography>
			<Typography sx={{ mt: 2, mb: 2 }}>{t('why_kristen_desk2')}</Typography>
		</Box>
	)
}
