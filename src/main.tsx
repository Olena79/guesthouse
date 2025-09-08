import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider } from './translater/i18n'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nProvider>
	</React.StrictMode>
)
