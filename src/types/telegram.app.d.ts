interface TelegramWebApp {
	ready(): void
	expand(): void
	initDataUnsafe: unknown
}

interface Window {
	Telegram?: {
		WebApp: TelegramWebApp
	}
}
