import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, CssBaseline, styled } from '@mui/material'
import ProtectedRoute from './services/ProtectedRoute'

const StyledContainer = styled('div')(() => ({
	maxWidth: 1200,
	minHeight: '85vh',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
}))

const StyledBox = styled('div')(() => ({
	margin: '0 auto',
	maxWidth: 1200,
}))

export default function App() {
	return (
		<StyledBox>
			<CssBaseline />
			<Header />
			<StyledContainer>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/rooms' element={<Rooms />} />
					<Route path='/rooms/:id' element={<RoomDetail />} />
					<Route
						path='/booking'
						element={<ProtectedRoute element={<Booking />} />}
					/>
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</StyledContainer>
			<Footer />
		</StyledBox>
	)
}
