import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { queryClient } from "../main";
import Loading from "./Loading";

export default function Quotes() {
	const fetchAxiosQuotes = async () => {
		return await axios
			.get("https://type.fit/api/quotes")
			.then((response) => response.data);
	};

	const { isFetching, isLoading, isError, data, error } = useQuery({
		queryKey: ["quotes"],
		queryFn: fetchAxiosQuotes,
	});

	if (isFetching || isLoading) return <Loading />;
	if (isError) return `An error has occurred: ${error.message}`;

	const randomId = Math.floor(Math.random() * data?.length);
	// console.log(data[randomId]);

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
