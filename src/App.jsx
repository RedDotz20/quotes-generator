import { useState, useEffect } from "react";
import { hexCode, complimentaryColor } from "./utilities/HexCode";
import Quotes from "./components/Quotes";
import QueryBtn from "./components/Buttons";
import "./styles/index.css";

export default function App() {
	const [randomId, setRandomId] = useState(0);

	useEffect(() => {
		document.body.style.backgroundColor = hexCode();
		const card = document.getElementById("mainCard");
		card.style.backgroundColor = complimentaryColor(hexCode());
	}, [randomId]);

	return (
		<div className="test">
			{/* <h1 className="font-semibold text-xl text-white mb-5">
				QUOTES GENERATOR
			</h1> */}
			<div
				id="mainCard"
				className="min-h-[150px] min-w-[720px] max-w-[720px] p-6 rounded-lg text-black flex flex-col justify-center mb-4"
			>
				<Quotes randomId={randomId} />
			</div>
			<QueryBtn setRandomId={setRandomId} />
		</div>
	);
}
