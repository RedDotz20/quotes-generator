import React from "react";
import Quotes from "./components/Quotes";
import { QueryBtn } from "./components/Buttons";

import "./styles/index.css";

export default function App() {
	return (
		<>
			<h1 className="font-semibold text-xl text-white mb-5">
				QUOTES GENERATOR
			</h1>
			<div className="min-h-[150px] min-w-[720px] max-w-[720px] p-6 bg-white rounded-lg text-black flex flex-col justify-center mb-4">
				<Quotes />
			</div>
			<QueryBtn />
		</>
	);
}
