import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";

export default function Quotes({ randomId }: any) {
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

	if (isError && error !== null && error instanceof Error && error.message) {
		return <h1>An error has occurred: {error.message}</h1>;
	}

	const { text, author } = data[randomId];
	return (
		<>
			<h2 className="w-full font-semibold">" {text} "</h2>
			<h3 className="w-full italic">
				{author !== null ? `- ${author}` : "- Unknown"}
			</h3>
		</>
	);
}
