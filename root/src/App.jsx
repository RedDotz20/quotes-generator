import { useQuery } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import "./App.css";
import "./index.css";

export default function App() {
	async function fetchAxiosQuotes() {
		return await axios
			.get("https://type.fit/api/quotes")
			.then((res) => res.data);
	}
	const { isFetching, isLoading, isError, data, error, refetch } = useQuery({
		queryKey: ["quotes"],
		queryFn: fetchAxiosQuotes,
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		staleTime: 60 * 1000,
	});

	if (isFetching)
		return (
			<>
				<div class="flex justify-center items-center text-green-500">
					<div
						class="spinner-border animate-spin inline-block w-8 h-8 border-rounded-full text-green-500"
						role="status"
					></div>
				</div>
				<h2>LOADING</h2>
			</>
		);

	if (isLoading)
		return (
			<div class="flex justify-center items-center">
				<div
					class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
					role="status"
				></div>
			</div>
		);

	if (isError) return `An error has occurred: ${error.message}`;

	const randomId = Math.floor(Math.random() * data?.length);

	console.log(data[randomId]);
	return (
		<>
			<div className="bg-white rounded-lg text-black p-6">
				<h1>QUOTES GENERATOR:</h1>
				<div>
					<p>"{data[randomId].text}"</p>
					<p>
						<i>
							{data[randomId].author === null
								? "- Unknown"
								: `- ${data[randomId].author}`}
						</i>
					</p>
				</div>
			</div>

			<Button onClick={refetch} variant="contained" color="success">
				Generate New Random Quote
			</Button>
		</>
	);
}
