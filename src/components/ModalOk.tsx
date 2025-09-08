import React from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

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

const ModalBox = styled(Box)(() => ({
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: '#fff',
	borderRadius: '12px',
	padding: '24px',
	boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
	width: '100%',
	maxWidth: '400px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '16px',
	textAlign: 'center',
}))

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
}))

type DynamicModalProps = {
	open: boolean
	onClose: () => void
	title: string
	description: string
	buttonText?: string
	onButtonClick?: () => void
	buttonText2?: string
	onButtonClick2?: () => void
	buttonText3?: string
	onButtonClick3?: () => void
}

const DynamicModal: React.FC<DynamicModalProps> = ({
	open,
	onClose,
	title,
	description,
	buttonText,
	onButtonClick,
	buttonText2,
	onButtonClick2,
	buttonText3,
	onButtonClick3,
}) => {
	return (
		<Modal open={open} onClose={onClose}>
			<ModalBox>
				<Typography variant='h6' sx={{ color: '#035d4cff' }}>
					{title}
				</Typography>
				<Typography sx={{ color: '#035d4cff' }}>{description}</Typography>
				<StyledBox>
					{buttonText && (
						<StyledButton onClick={onButtonClick}>{buttonText}</StyledButton>
					)}
					{buttonText2 && (
						<StyledButton onClick={onButtonClick2}>{buttonText2}</StyledButton>
					)}
					{buttonText3 && (
						<StyledButton onClick={onButtonClick3}>{buttonText3}</StyledButton>
					)}
				</StyledBox>
			</ModalBox>
		</Modal>
	)
}

export default DynamicModal
