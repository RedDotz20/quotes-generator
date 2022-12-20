import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";

export default function Quotes({ randomId }) {
	const { data, isFetching, isLoading, isError, error } = useQuery(
		["quotes"],
		async () => {
			return await axios
				.get("https://type.fit/api/quotes")
				.then((response) => response.data);
		},
		{ staleTime: Infinity }
	);

	if (isLoading || isFetching) return <Loading />;
	if (isError) return `An error has occurred: ${error.message}`;

	const { text, author } = data[randomId];
	return (
		<>
			<h2 className="font-semibold">" {text} "</h2>
			<h3 className="italic">
				{author !== null ? `- ${author}` : "- Unknown"}
			</h3>
		</>
	);
}
