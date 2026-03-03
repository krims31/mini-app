import { useEffect } from 'react'

function App() {
	useEffect(() => {
		if (window.Telegram?.WebApp) {
			const tg = window.Telegram.WebApp
			tg.ready()
			tg.expand()
		}
	}, [])

	return (
		<div>
			<h1>Telegram Mini App</h1>
		</div>
	)
}

export default App
