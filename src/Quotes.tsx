import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { CircularProgress } from '@mui/material';

const fetchQuotesAPI = async () => {
	return await axios
		.get('https://type.fit/api/quotes')
		.then((response) => response.data)
		.catch((err) => console.error(err));
};

export default function Quotes({ randomId }: { randomId: number }) {
	const { data, isFetching, isLoading, isError, error } = useQuery({
		queryKey: ['quotes'],
		queryFn: fetchQuotesAPI,
	});

	if (isLoading || isFetching) return <CircularProgress />;

	if (isError && error instanceof Error && error.message) {
		return <h1>An error has occurred: {error.message}</h1>;
	}

	return (
		<div className="flex flex-col">
			<h2 className="font-semibold break-words">"{data[randomId].text}"</h2>
			<h3 className="italic">
				{data[randomId].author !== null
					? `- ${data[randomId].author}`
					: '- Unknown'}
			</h3>
		</div>
	);
}
