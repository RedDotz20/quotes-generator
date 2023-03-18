import { useState, useEffect } from "react";

import { hexCode, complimentaryColor } from "./utilities/HexCode";
import Quotes from "./components/Quotes";
import QueryBtn from "./components/Buttons";
import "./styles/index.css";

export default function App() {
	const [randomId, setRandomId] = useState(0);

	useEffect(() => {
		document.body.style.backgroundColor = hexCode();
	}, [randomId]);

	return (
		<>
			<div className="mainCard bg-white min-h-[150px] p-6 rounded-lg text-black flex flex-col justify-center mb-4">
				<Quotes randomId={randomId} />
			</div>
			<QueryBtn setRandomId={setRandomId} />
		</>
	);
}
