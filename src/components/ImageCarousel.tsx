import React, { useEffect, useState, useRef } from 'react'
import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const CarouselContainer = styled(Box)(() => ({
	position: 'relative',
	width: '100%',
	height: '70vh',
	overflow: 'hidden',
}))

const Slide = styled('div')<{ background: string; active: boolean }>(
	({ background, active }) => ({
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		opacity: active ? 1 : 0,
		transition: 'opacity 0.8s ease-in-out',
	})
)

const NavButton = styled(IconButton)(() => ({
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	color: '#fff',
	background: 'rgba(0,0,0,0.3)',
	'&:hover': {
		background: 'rgba(0,0,0,0.5)',
	},
}))

type Props = {
	images: string[]
}

export default function ImageCarousel({ images }: Props) {
	const [index, setIndex] = useState(0)
	const touchStartX = useRef<number | null>(null)

	// авто-пролистування
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [images.length])

	// swipe початок
	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX
	}

	// swipe завершення
	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return
		const deltaX = e.changedTouches[0].clientX - touchStartX.current
		if (deltaX > 50) {
			prevSlide()
		} else if (deltaX < -50) {
			nextSlide()
		}
		touchStartX.current = null
	}

	const nextSlide = () => setIndex(prev => (prev + 1) % images.length)
	const prevSlide = () =>
		setIndex(prev => (prev - 1 + images.length) % images.length)

	return (
		<CarouselContainer
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{images.map((img, i) => (
				<Slide key={i} background={img} active={i === index} />
			))}

			{/* кнопки навігації */}
			<NavButton onClick={prevSlide} sx={{ left: 10 }}>
				<ArrowBackIosNewIcon />
			</NavButton>
			<NavButton onClick={nextSlide} sx={{ right: 10 }}>
				<ArrowForwardIosIcon />
			</NavButton>
		</CarouselContainer>
	)
}
