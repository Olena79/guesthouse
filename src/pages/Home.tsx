import { useEffect, useState } from 'react'
import { styled, Box, Typography, Button, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { useI18n } from '../translater/i18n' // твій хук i18n

const images = [
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251842/photo-1507525428034-b723cf961d3e_dqfsih.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757263941/beach-6292382_1280_igj7ws.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757264503/Atoll-Ari-Beach-4_jz5fiz.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757263329/photo-1496412705862-e0088f16f791_jwqxz7.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251549/deluxe_bteqqi.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251665/photo-1560448204-e02f11c3d0e2_ofgqq9.jpg',
]

const Hero = styled('div')<{ background: string }>(({ background }) => ({
	minHeight: '70vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundImage: `url(${background})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	transition: 'background-image 1s ease-in-out',
	color: '#fff',
}))

const StyledBox = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 16,
}))

export default function HeroCarousel() {
	const { t } = useI18n()
	const [index, setIndex] = useState(0)
	const [loaded, setLoaded] = useState(false)

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	// preload all images
	useEffect(() => {
		let loadedCount = 0
		images.forEach(src => {
			const img = new Image()
			img.src = src
			img.onload = () => {
				loadedCount++
				if (loadedCount === images.length) {
					setLoaded(true)
				}
			}
		})
	}, [])

	useEffect(() => {
		if (!loaded) return
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [loaded])

	if (!loaded) {
		return (
			<Box
				minHeight='70vh'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Hero background={images[0]} />
			</Box>
		)
	}

	return (
		<>
			<Hero background={images[index]}>
				<Box
					padding={2}
					textAlign='center'
					sx={{ backdropFilter: 'brightness(0.6)', borderRadius: 4 }}
				>
					<Typography
						variant={isMobile ? 'h6' : isTablet ? 'h6' : 'h5'}
						sx={{ fontWeight: 500 }}
					>
						{t('home_title')}
					</Typography>
					<Typography
						variant={isMobile ? 'h3' : isTablet ? 'h3' : 'h2'}
						sx={{ fontWeight: 700, color: '#9dfaea' }}
					>
						{t('home_name')}
					</Typography>
					<Typography sx={{ mt: 2 }}>{t('hero_sub')}</Typography>
					<Button
						component={Link}
						to='/booking'
						variant='contained'
						sx={{
							mt: 3,
							backgroundColor: '#0e7362',
							transition: '0.5s',
							'&:hover': { backgroundColor: '#0fb498ff' },
						}}
					>
						{t('book_btn')}
					</Button>
				</Box>
			</Hero>
			<StyledBox sx={{ padding: isMobile ? '0 6px' : isTablet ? '0 8px' : 0 }}>
				<Typography
					color={'#037560ff'}
					variant={isMobile ? 'h6' : isTablet ? 'h5' : 'h3'}
				>
					{t('home_desk1')}
				</Typography>
				<Typography color={'#037560ff'}>{t('home_desk2')}</Typography>
				<Typography
					color={'#037560ff'}
					variant={isMobile ? 'h6' : isTablet ? 'h5' : 'h4'}
				>
					{t('home_desk3')}
				</Typography>
			</StyledBox>
		</>
	)
}
