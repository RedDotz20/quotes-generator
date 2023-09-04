import { useEffect, useState } from 'react';
import QueryBtn from './components/Buttons';
import Quotes from './components/Quotes';
import './index.css';

export default function App() {
	const [randomId, setRandomId] = useState(0);

	useEffect(() => {
		document.body.style.backgroundColor = hexCode();
	}, [randomId]);

	return (
		<>
			<div className="transition-width duration-2000 transition-height duration-4000 transition ease-in-out transition-width duration-2000 bg-white min-h-[150px] min-w-[400px] max-w-[400px] p-6 rounded-lg text-black flex flex-col justify-center mb-4 items-center">
				<Quotes randomId={randomId} />
			</div>
			<QueryBtn setRandomId={setRandomId} />
		</>
	);
}

function hexCode() {
	const characters = '0123456789ABCDEF';

	let hexCode = '#';
	Array.from({ length: 6 }).forEach(() => {
		const randomIndex = Math.floor(Math.random() * characters.length);
		hexCode += characters[randomIndex];
	});

	return hexCode;
}
