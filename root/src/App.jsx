import React from "react";
import Quotes from "./components/Quotes";
import Button from "@mui/material/Button";
import { refetchQuotes } from "./components/Quotes";
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
			<Button
				onClick={refetchQuotes}
				className="w-full"
				variant="contained"
				color="success"
			>
				Generate New Random Quote
			</Button>
		</>
	);
}
