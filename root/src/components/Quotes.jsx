import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { queryClient } from "../App";

export default function Quotes() {
	const fetchAxiosQuotes = async () => {
		return await axios
			.get("https://type.fit/api/quotes")
			.then((res) => res.data);
	};

	const { isFetching, isLoading, isError, data, error, refetch } = useQuery({
		queryKey: ["quotes"],
		queryFn: fetchAxiosQuotes,
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		staleTime: Infinity,
	});

	if (isFetching || isLoading) return <h2>L O A D I N G...</h2>;
	if (isError) return `An error has occurred: ${error.message}`;

	const randomId = Math.floor(Math.random() * data?.length);
	console.log(data[randomId]);

	return (
		<>
			<p>
				"<strong>{data[randomId].text}</strong>"
			</p>
			<p>
				<i>
					{data[randomId].author === null
						? "- Unknown"
						: `- ${data[randomId].author}`}
				</i>
			</p>
		</>
	);
}

export const refetchQuotes = async () => {
	await queryClient.refetchQueries(["quotes"], { active: true });
};
