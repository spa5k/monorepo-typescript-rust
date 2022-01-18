import { useState } from 'react'

export function Button(): JSX.Element {
	const [count, setCount] = useState(0)

	return (
		<div className='App' style={{ border: '3px solid red' }}>
			<h1>UI APP's Button Component</h1>
			<button type='button' onClick={() => setCount((count) => count + 1)}>
				count is: {count}
			</button>
		</div>
	)
}
