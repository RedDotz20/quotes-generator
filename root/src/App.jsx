import React from "react";
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
	const { isLoading, isError, data, refetch, error } = useQuery(
		"Data",
		fetchQuotes,
		{
			// enabled: false,
			refetchOnWindowFocus: true,
			staleTime: 0,
			cacheTime: 0,
			refetchInterval: 0,
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
