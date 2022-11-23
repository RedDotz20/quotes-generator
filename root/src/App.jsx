import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import "./App.css";
import "./index.css";

export default function App() {
	const { isLoading, data, error, refetch } = useQuery(
		"repoData",
		() => {
			return axios.get("https://type.fit/api/quotes");
		},
		{ refetchOnMount: false }
	);
	const id = Math.floor(Math.random() * data?.data.length);

	if (isLoading) return <h2>"Loading..."</h2>;
	if (error) return "An error has occurred: " + error.message;
	return (
		<>
			<h1>QUOTES GENERATOR:</h1>
			<div className="container">
				<p>{data?.data[id].text}</p>
				<p>- {data?.data[id].author}</p>
			</div>

			<Button onClick={refetch} variant="outlined" color="success">
				Generate New Random Quote
			</Button>
		</>
	);
}
