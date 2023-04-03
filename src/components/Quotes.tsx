import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const getQuotes = async () => {
	return await axios
		.get("https://type.fit/api/quotes")
		.then((response) => response.data);
};

function Quotes({ randomId }: { randomId: number }) {
	const quotesQuery = useQuery({
		queryKey: ["quotes"],
		queryFn: getQuotes,
		staleTime: Infinity,
	});

	const { data, isFetching, isLoading, isError, error } = quotesQuery;

	if (isLoading || isFetching) return <Loading />;
	if (isError && error !== null && error instanceof Error && error.message) {
		return <h1>An error has occurred: {error.message}</h1>;
	}

	return (
		<>
			<h2 className="w-full font-semibold">" {data[randomId].text} "</h2>
			<h3 className="w-full italic">
				{data[randomId].author !== null
					? `- ${data[randomId].author}`
					: "- Unknown"}
			</h3>
		</>
	);
}

export default Quotes;
