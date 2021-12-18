import { useState } from 'react'

export function Button(): JSX.Element {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<button type='button' onClick={() => setCount((count) => count + 1)}>
				count is: {count}
			</button>
		</div>
	)
}
