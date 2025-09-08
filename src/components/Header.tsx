import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Select,
	MenuItem,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useI18n } from '../translater/i18n'
import { auth } from '../services/localAuth'
import DynamicModal from './ModalOk'

const Brand = styled(Typography)(() => ({
	fontWeight: 800,
}))

const StyledLink = styled(Link)(() => ({
	textDecoration: 'none',
	color: 'inherit',
	transition: '0.5s',
	'&:hover': {
		color: '#0fb498ff',
	},
}))

export default function Header() {
	const { t, lang, setLang } = useI18n()
	const navigate = useNavigate()
	const user = auth.getUser()
	const [open, setOpen] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	// breakpoints
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)')

	const handleLogout = () => {
		setOpenModal(true)
	}

	const confirmLogout = () => {
		auth.logout()
		window.location.href = '/'
	}

	const navLinks = (
		<>
			<StyledLink to='/rooms'>{t('rooms')}</StyledLink>
			<StyledLink to='/gallery'>{t('gallery')}</StyledLink>
			<StyledLink to='/about'>{t('about')}</StyledLink>
			<StyledLink to='/contacts'>{t('contacts')}</StyledLink>
		</>
	)

	return (
		<AppBar
			position='static'
			color='transparent'
			elevation={0}
			sx={{
				borderBottom: '1px solid rgba(0,0,0,0.06)',
				background: '#f6efe6',
				marginBottom: 4,
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					color: '#034d40ff',
				}}
			>
				<Box
					sx={{ display: 'flex', gap: isMobile ? 1 : 2, alignItems: 'center' }}
				>
					<StyledLink to='/'>
						<Brand variant={isTablet ? 'body2' : 'h6'}>{t('home_name')}</Brand>
					</StyledLink>

					{/* Desktop / Tablet nav */}
					{!isMobile && (
						<Box
							sx={{
								display: 'flex',
								gap: 2,
								typography: isTablet ? 'body2' : 'body1',
							}}
						>
							{navLinks}
						</Box>
					)}
				</Box>

				{/* Right side */}
				<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
					<Select
						value={lang}
						onChange={e => setLang(e.target.value)}
						size='small'
						variant='standard'
						disableUnderline
						sx={{
							color: '#037560ff',
							'& .MuiSelect-select': { paddingY: 0 },
						}}
					>
						<MenuItem value='uk'>UK</MenuItem>
						<MenuItem value='en'>EN</MenuItem>
					</Select>

					{user ? (
						<>
							<Button
								sx={{ color: '#0fb498ff' }}
								onClick={() => navigate('/profile')}
							>
								{t('profile')}
							</Button>
							<Button sx={{ color: '#0fb498ff' }} onClick={handleLogout}>
								{t('logout')}
							</Button>
						</>
					) : (
						<>
							<Button
								sx={{
									color: '#0fb498ff',
									fontSize: isMobile ? 10 : isTablet ? 12 : 14,
								}}
								onClick={() => navigate('/login')}
							>
								{t('login')}
							</Button>
							<Button
								sx={{
									color: '#0fb498ff',
									backgroundColor: 'transparent',
									fontSize: isMobile ? 10 : isTablet ? 12 : 14,
									transition: '0.5s',
									'&:hover': { backgroundColor: '#055e4fff' },
								}}
								// variant='contained'
								onClick={() => navigate('/register')}
							>
								{t('register')}
							</Button>
						</>
					)}

					{/* Mobile burger */}
					{isMobile && (
						<>
							<IconButton
								onClick={() => setOpen(true)}
								sx={{ color: '#034d40ff' }}
							>
								<MenuIcon />
							</IconButton>
							<Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
								<List sx={{ width: 200 }}>
									{['rooms', 'gallery', 'about', 'contacts'].map(key => (
										<ListItem
											button
											key={key}
											component={Link}
											to={`/${key}`}
											onClick={() => setOpen(false)}
										>
											<ListItemText primary={t(key)} />
										</ListItem>
									))}
								</List>
							</Drawer>
						</>
					)}
				</Box>
			</Toolbar>
			<DynamicModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				title={t('logout_q')}
				description={t('logout_q_desk')}
				buttonText={t('logout')}
				onButtonClick={confirmLogout}
				buttonText2={t('stay')}
				onButtonClick2={() => setOpenModal(false)}
			/>
		</AppBar>
	)
}
