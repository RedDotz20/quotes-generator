import React, { useState } from "react";
import Quotes from "./components/Quotes";
import { QueryBtn } from "./components/Buttons";
import { randomIdContext } from "./contexts/randomIdContext";
import "./styles/index.css";

export default function App() {
	const [randomId, setRandomId] = useState(0);
	return (
		<randomIdContext.Provider value={{ randomId, setRandomId }}>
			<h1 className="font-semibold text-xl text-white mb-5">
				QUOTES GENERATOR
			</h1>
			<div className="min-h-[150px] min-w-[720px] max-w-[720px] p-6 bg-white rounded-lg text-black flex flex-col justify-center mb-4">
				<Quotes />
			</div>
			<QueryBtn />
		</randomIdContext.Provider>
	);
}
