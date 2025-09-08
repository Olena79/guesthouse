import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { auth } from './localAuth'
import DynamicModal from '../components/ModalOk'
import { useI18n } from '../translater/i18n'

type ProtectedRouteProps = {
	element: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
	const user = auth.getUser()
	const navigate = useNavigate()
	const [open, setOpen] = useState(!user)
	const { t } = useI18n()

	if (!user) {
		return (
			<>
				<DynamicModal
					open={open}
					onClose={() => setOpen(false)}
					title={t('warning')}
					description={t('warning_desk')}
					buttonText={t('back')}
					onButtonClick={() => {
						setOpen(false)
						navigate(-1)
					}}
					buttonText2={t('login')}
					onButtonClick2={() => navigate('/login')}
					buttonText3={t('register_action')}
					onButtonClick3={() => navigate('/register')}
				/>
			</>
		)
	}

	return element
}

export default ProtectedRoute
