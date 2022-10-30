import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
	const [quotes, setQuotes] = useState("");
	const [author, setAuthor] = useState("");

	async function QuotesApi() {
		return await fetch("https://type.fit/api/quotes")
			.then((response) => response.json())
			.then((data) => {
				const id = Math.floor(Math.random() * data.length);
				setAuthor(data[id].author === null ? "Unknown" : data[id].author);
				setQuotes(data[id].text);
			})
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		QuotesApi();
	}, []);

	return (
		<div className="App">
			<h1>RANDOM QUOTE</h1>
			<p>{quotes}</p>
			<p>{author}</p>
			<button onClick={QuotesApi}>Generate New Random Quote</button>
		</div>
	);
}
