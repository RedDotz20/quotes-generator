import { useQuery } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import "./App.css";
import "./index.css";

async function fetchQuotes() {
	return await axios.get("https://type.fit/api/quotes").then((res) => res.data);
}

export default function App() {
	const {
		data: quotes,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery(["quotes"], fetchQuotes);

	const randomId = Math.floor(Math.random() * quotes?.length);

	if (isLoading)
		return (
			<div className="flex flex-col justify-center text-center">
				<div className="animate-spin bg-transparent h-4 sw-4 rounded-full border-t-2 border-blue-900"></div>
				<h2>Loading...</h2>
			</div>
		);

	if (isError) return `An error has occurred: ${error.message}`;

	return (
		<>
			<div className="bg-white rounded-lg text-black p-6">
				<h1>QUOTES GENERATOR:</h1>
				<div>
					<p>{quotes[randomId]?.text}</p>
					<p>- {quotes[randomId]?.author}</p>
				</div>
			</div>

			<Button onClick={refetch} variant="contained" color="success">
				Generate New Random Quote
			</Button>
		</>
	);
}
