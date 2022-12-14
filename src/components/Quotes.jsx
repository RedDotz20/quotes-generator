import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { queryClient } from "../main";
import Loading from "./Loading";
import { randomIdContext } from "../contexts/randomIdContext";

export default function Quotes() {
	const { randomId } = useContext(randomIdContext);
	const { isFetching, isLoading, isError, data, error } = useQuery(
		["quotes"],
		async () => {
			return await axios
				.get("https://type.fit/api/quotes")
				.then((res) => res.data);
		},
		{ staleTime: Infinity }
	);

	if (isLoading) return <Loading />;
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

export const refetchQuotes = async () => {
	await queryClient.refetchQueries(["quotes"], { active: true });
};
