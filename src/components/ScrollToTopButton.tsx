import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowUpIcon from './ArrowUpIcon'

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const viewportHeight = window.innerHeight
			setIsVisible(scrollPosition > viewportHeight)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (!isVisible) return null

	return (
		<ButtonWrapper onClick={scrollToTop}>
			<ArrowUpIcon height={20} />
		</ButtonWrapper>
	)
}

export default ScrollToTopButton

// ============================ STYLES ============================
const ButtonWrapper = styled('button')({
	position: 'fixed',
	bottom: 32,
	right: 32,
	backgroundColor: ' rgba(6, 113, 56, 0.3)',
	color: '#fff',
	border: 'none',
	borderRadius: 999,
	width: 40,
	height: 40,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
	cursor: 'pointer',
	transition: '0.5s',
	zIndex: 9999,
	'&:hover': {
		backgroundColor: '#e6e1bc',
	},
})
