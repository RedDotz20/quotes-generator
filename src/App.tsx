import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Quotes from './Quotes';
import './index.css';

type Quote = {
	text: string;
	author: string | null;
};

export default function App() {
	const [randomId, setRandomId] = useState(0);
	const { data, isFetching } = useQuery({ queryKey: ['quotes'] });
	const quotesArray: (typeof data)[] = data as Quote[];

	useEffect(() => {
		document.body.style.backgroundColor = hexCode();
	}, [randomId]);

	const handleRandomId = () =>
		setRandomId(Math.floor(Math.random() * quotesArray.length));

	return (
		<main className="flex flex-col gap-2">
			<div className="bg-white py-2 rounded-lg border-black border-2 font-bold">
				<h1 className="tracking-wider">Random Quotes Generator</h1>
			</div>
			<div className="transition-width duration-2000 transition-height duration-4000 transition ease-in-out transition-width duration-2000 bg-white min-h-[150px] min-w-[400px] max-w-[400px] p-6 rounded-lg text-black border-black border-2 flex flex-col justify-center items-center">
				<Quotes randomId={randomId} />
			</div>
			<button
				className="inline-block px-6 py-4 bg-white font-black text-sm leading-tight uppercase hover:bg-[#C0C0C0] focus:outline-none focus:ring-0 transition duration-150 ease-in-out tracking-widest border-black border-2 rounded-md"
				onClick={() => handleRandomId()}
				disabled={isFetching ? true : false}
			>
				Generate New Random Quote
			</button>
		</main>
	);
}

const hexCode = () => {
	const characters = '0123456789ABCDEF';

	let hexCode = '#';

	Array.from({ length: 6 }).forEach(() => {
		const randomIndex = Math.floor(Math.random() * characters.length);
		hexCode += characters[randomIndex];
	});

	return hexCode;
};
