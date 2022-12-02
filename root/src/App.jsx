import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import "./App.css";
import "./index.css";

async function fetchQuotes() {
	return await axios
		.get("https://type.fit/api/quotes")
		.then((result) => result.data);
}

export default function App() {
	console.log("rendered");
	const { isLoading, isError, data, refetch, error } = useQuery(
		"Data",
		fetchQuotes,
		{
			refetchInterval: 6000,
		}
	);
	const randomId = Math.floor(Math.random() * data?.length);
	if (isLoading) return <div>"Loading..."</div>;
	if (isError) return `An error has occurred: ${error.message}`;
	return (
		<>
			<div className="bg-white rounded-lg text-black p-6">
				<h1>QUOTES GENERATOR:</h1>
				<div>
					<p>{data[randomId].text}</p>
					<p>- {data[randomId].author}</p>
				</div>
			</div>

			<Button onClick={refetch} variant="contained" color="success">
				Generate New Random Quote
			</Button>
		</>
	);
}

// export default function App() {
// 	const { isLoading, error, data, refetch } = useQuery("repoData", () =>
// 		fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
// 			(res) => res.json()
// 		)
// 	);

// 	if (isLoading) return "Loading...";

// 	if (error) return "An error has occurred: " + error.message;
// 	console.log("rerender");

// 	return (
// 		<>
// 			<div>
// 				<h1>{data.name}</h1>
// 				<p>{data.description}</p>
// 				<strong>👀 {data.subscribers_count}</strong>{" "}
// 				<strong>✨ {data.stargazers_count}</strong>{" "}
// 				<strong>🍴 {data.forks_count}</strong>
// 			</div>

// 			<Button onClick={refetch} variant="contained" color="success">
// 				Generate New Random Quote
// 			</Button>
// 		</>
// 	);
// }
