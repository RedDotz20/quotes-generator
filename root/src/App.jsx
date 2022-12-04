import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import "./App.css";
import "./index.css";

async function fetchAxiosQuotes() {
	return await axios.get("https://type.fit/api/quotes").then((res) => res.data);
}

export default function App() {
	const { status, data, error, refetch } = useQuery({
		queryKey: ["quotes"],
		queryFn: fetchAxiosQuotes,
	});
	if (status === "loading")
		return (
			<div className="flex flex-col justify-center text-center">
				<div className="animate-spin bg-transparent h-4 sw-4 rounded-full border-t-2 border-blue-900"></div>
				<h2>Loading...</h2>
			</div>
		);
	if (status === "error") return `An error has occurred: ${error.message}`;

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
