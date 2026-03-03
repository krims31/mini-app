import WebApp from '@twa-dev/sdk'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		WebApp.ready()
		WebApp.expand()

		console.log(WebApp.initDataUnsafe)
	}, [])

	return (
		<div>
			<h1>Telegram Mini App</h1>
		</div>
	)
}

export default App
