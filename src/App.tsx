import { useEffect, useState } from 'react'
import './App.css'
function App() {
	const [count, setCount] = useState<number>(0)
	useEffect(() => {
		if (window.Telegram?.WebApp) {
			const tg = window.Telegram.WebApp
			tg.ready()
			tg.expand()
		}
	}, [])

	return (
		<div>
			<button
				className="increment"
				onClick={() => setCount(prev => prev + 1)}
			>
				Increment
			</button>
			<button
				className="decrement"
				onClick={() => setCount(prev => prev - 1)}
			>
				Decrement
			</button>
			<h1 className="count">Count: {count}</h1>
		</div>
	)
}

export default App
