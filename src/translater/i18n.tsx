import React, { createContext, useContext, useState } from 'react'
import UK from './uk.json'
import EN from './en.json'

type Lang = 'uk' | 'en'
const defaultLang: Lang = 'uk'

const translations: Record<Lang, Record<string, string>> = {
	uk: UK,
	en: EN,
}

const I18nContext = createContext<any>(null)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [lang, setLang] = useState<Lang>(defaultLang)
	const t = (key: string) => translations[lang][key] ?? key
	return (
		<I18nContext.Provider value={{ lang, setLang, t }}>
			{children}
		</I18nContext.Provider>
	)
}

export const useI18n = () => useContext(I18nContext)
