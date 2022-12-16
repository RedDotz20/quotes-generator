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

	return (
		<>
			<h2 className="font-semibold">" {data[randomId].text} "</h2>
			<h3 className="italic">
				{data[randomId].author === null
					? "- Unknown"
					: `- ${data[randomId].author}`}
			</h3>
		</>
	);
}
